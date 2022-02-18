#!/usr/bin/env node
const createAppFactory = require('../my-cli/src/index')
  ; (async () => {
  try {
    const createApp = await createAppFactory
    const gettingCommands = await createApp.gettingCommands()
    await createApp.existsProject(gettingCommands, process.cwd())
    await createApp.createPathAndFiles(gettingCommands, process.cwd())
    await createApp.installDependenciesAndInitGit(gettingCommands)
  } catch (error) {
    console.log(`${error}`.red)
  }
})()
