const path = require('path')
const fs = require('fs')

exports.addLeanixParametersToProject = function createLxrFile(data) {
  const packageJsonFile = path.join(
    data.inPlace ? '' : data.destDirName,
    'package.json'
  )

  // Read and write lxr.json
  let packageJson = JSON.parse(fs.readFileSync(packageJsonFile))

  packageJson.leanixReport = {
    id: data.reportId,
    title: data.reportTitle,
    defaultConfig: {}
  }

  fs.writeFileSync(packageJsonFile, JSON.stringify(packageJson, null, 2) + '\n')

  // Write lxr.json
  const lxrJsonFile = path.join(
    data.inPlace ? '' : data.destDirName,
    'lxr.json'
  )

  const lxrJson = ['host', 'apitoken'].reduce((accu, key) => {
    accu[key] = data[key]
    return accu
  }, {})

  fs.writeFileSync(lxrJsonFile, JSON.stringify(lxrJson, null, 2) + '\n')
}