const textpro = require('./lib')

var url = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
var text = ['textpro', 'npm']

textpro.get(url, text).then(async (data) => {
  try {
    console.log(data)
  } catch (err) {
    console.log(err)
  }
});