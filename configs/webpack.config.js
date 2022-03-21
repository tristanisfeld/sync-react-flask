const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
    let env
    if (envVars.prod) {
        env = 'prod'
    } else if (envVars.dev) {
        env = 'dev'
    }
    const envConfig = require(`./webpack.${env}.js`)

    commonConfig.forEach(conf => {

        for (let item in envConfig) {
            conf[item] = envConfig[item]
        }
    })

    return commonConfig
}
