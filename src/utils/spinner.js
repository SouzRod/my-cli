const cliSpinner = require('cli-spinner')
const Spinner = cliSpinner.Spinner

module.exports = class CliSpinner {
  constructor(spinner) {
    this.spinner = spinner
    this.counter = 0
  }
  runSpinner() {
    this.spinner = new Spinner('Installing dependencies...Please wait'.green)
    this.spinner.setSpinnerString('|"/-"\\')
    this.spinner.start()
    this.counter++
  }
  stopSpinner() {
    this.spinner.stop(true)
    this.counter = 0
  }
}
