const path = require('path')
const CLI = require('cli-engine').default
const root = path.join(__dirname, '..')
const cli = new CLI({
  argv: process.argv.slice(1),
  config: {
    root,
    pjson: require(path.join(root, 'package.json')),
    updateDisabled: 'add update disable message here'
  }
})
cli.run()
