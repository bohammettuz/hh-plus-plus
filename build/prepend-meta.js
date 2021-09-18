const fs = require('fs')
const path = require('path')
const pkgJson = require('../package.json')

const metaTemplate = fs.readFileSync(path.resolve(__dirname, './hh-plus-plus.meta.template.js'))
const meta = metaTemplate.toString()
    .replace('{{version}}', pkgJson.version)
    .replace('{{description}}', pkgJson.description)
const dist = fs.readFileSync(path.resolve(__dirname, '../dist/hh-plus-plus.user.js'))
const outputFull = `${meta}\n${dist}\n`

fs.writeFileSync(path.resolve(__dirname, '../dist/hh-plus-plus.meta.js'), meta)
fs.writeFileSync(path.resolve(__dirname, '../dist/hh-plus-plus.user.js'), outputFull)
