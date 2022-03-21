const sync = require('browser-sync').create()
const path = require('path');

const sPath = 'server/'

sync.init({
    watch: true,
    proxy: 'http://127.0.0.1:5000/', // Flask or django server
    files: [path.resolve(__dirname, '..', sPath)],
    watchOptions: {
        ignored: '*.txt'
    }
})
