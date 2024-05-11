const cron = require('node-cron')
let shell = require('shelljs')

cron.schedule('1 * * * * *', function () {
  console.log('Cron started')
  if (shell.exec('npm run olustur').code !== 0) {
    console.log('somethings wrpng')
  } else {
    console.log('success')
  }
})
