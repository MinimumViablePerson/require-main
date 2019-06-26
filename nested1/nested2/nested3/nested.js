const greet = require.main.require('./stuff')

const greetAndSalute = () => {
  greet()
  console.log('and bye!')
}

module.exports = greetAndSalute
