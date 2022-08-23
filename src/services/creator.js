module.exports.createApp = async ({ readFile, render, files, exec, outputFile, cliSpinner, getInputFromTerminal, dir, pathExists, packageJson, axios }) => {
  const gettingCommands = async () => {
    const input = await getInputFromTerminal()
    return input
  }
  const existsProject = async ({ name }, path) => {
    const checkIfPathExistsBeforeCreate = await pathExists(`${path}/${name}`)
    if (checkIfPathExistsBeforeCreate) {
      throw new Error(`${name} already exists!`)
    }
  }
  /* istanbul ignore next */
  const removeHyphenFromProjectName = name => {
    const removeHypen = name.split('-')
    const removeFirstIndex = removeHypen.shift()
    const transformedString = removeHypen.map(string => `${string[0].toUpperCase()}${string.slice(1)}`)
    return `${removeFirstIndex}${transformedString.join("").trim()}`
  }
  const returnsFilesBasedOnTerminalInput = commands => {
    const { type, name, resource } = commands
    const fileToRender = files(removeHyphenFromProjectName(name)).filter(file => {
      if (resource.includes('mongo') && resource.includes('n/d')) {
        throw new Error('You cannot mark n/d along with some database');
      }
      if (file.type && file.type.includes(type) || file.resource && file.resource.includes(resource[0]) || !file.type && !file.resource || file.resource && resource.length === 2) {
        return file
      }
    })
    return fileToRender
  }
  const createPathAndFiles = async (commands, path) => {
    const { name, type, resource } = commands
    const commandsToRenderEJS = {
      name: removeHyphenFromProjectName(name),
      completeName: name,
      type,
      resource
    }
    const filesToRender = returnsFilesBasedOnTerminalInput(commands)
    filesToRender.forEach(async file => {
      const readTemplate = await readFile(`${dir}/${file.template}`)
      const renderFileToString = readTemplate.toString()
      const renderTemplate = render(renderFileToString, commandsToRenderEJS)
      await outputFile(`${path}/${name}/${file.path}`, renderTemplate)
    })
  }

  /* istanbul ignore next */
  const installDependenciesAndInitGit = async ({ name }) => {
    cliSpinner.runSpinner()
    setTimeout(() => {
      exec(`cd ${name} && git init && npm i`, (err, stdout, stderr) => {
        if (err) {
          console.log(stderr)
          cliSpinner.stopSpinner()
          return;
        }
        if (stdout) {
          console.log(stdout)
        }
        cliSpinner.stopSpinner()
      })
    }, 1000)
  }
  return {
    gettingCommands,
    createPathAndFiles,
    existsProject,
    installDependenciesAndInitGit,
  }
}

