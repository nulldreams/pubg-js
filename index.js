const pubg = require('./lib')
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxMTI1MDg1MC0yYjhmLTAxMzYtNWQwOS02NWE1M2MxZDY1YTMiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI0NzU0MjIxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmctYm90LWFwaSIsInNjb3BlIjoiY29tbXVuaXR5IiwibGltaXQiOjEwfQ.WJxfmZDgJoM6lO6QmJ5fHN6iT8qlY8JdYqb6kn2u_js'

async function test () {
  pubg.setToken(token)

  // let player = JSON.parse(await pubg.player.infoById('pc-na', 'account.67ad0292daf94a90960357bfd17764e8'))

  // console.log(`Nickname: ${player.data[0].attributes.name}`)
  // console.log(await pubg.telemetry.url('pc-na', 'b9281965-4a12-487b-a544-a3c3b58faba3'))
  // let resultado = await pubg.telemetry.url('pc-na', 'b9281965-4a12-487b-a544-a3c3b58faba3')
  // let players = await pubg.players.info('pc-na', 'igor-martins')
  let search = {
    node: 'included',
    query: { name: 'igor-martins' }
  }
  
  let resultado = await pubg.match.players.find('pc-na', 'b9281965-4a12-487b-a544-a3c3b58faba3', search)
  console.log(resultado)
}

test()
