const pubg = require('./lib')
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxMTI1MDg1MC0yYjhmLTAxMzYtNWQwOS02NWE1M2MxZDY1YTMiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI0NzU0MjIxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmctYm90LWFwaSIsInNjb3BlIjoiY29tbXVuaXR5IiwibGltaXQiOjEwfQ.WJxfmZDgJoM6lO6QmJ5fHN6iT8qlY8JdYqb6kn2u_js'

async function test () {
  await pubg.setToken(token)

  // let player = JSON.parse(await pubg.player.info('pc-na', 'igor-martins'))

  // console.log(`Player ID: ${player.data[0].id}`)
  // console.log(await pubg.telemetry.url('pc-na', 'b9281965-4a12-487b-a544-a3c3b58faba3'))
  // let resultado = await pubg.telemetry.url('pc-na', 'b9281965-4a12-487b-a544-a3c3b58faba3')
  // let players = await pubg.players.info('pc-na', 'igor-martins')
  // let search = {
  //   node: 'included',
  //   query: { 'name': 'igor-martins' }
  // }
  // let search = {
  //   node: 'included',
  //   query: [ 'attributes.stats.killPointsDelta', 10.2518635 ]
  // }
  // let search = {
  //   node: 'included',
  //   query: function (v) {
  //     if (v.type === 'participant') { return v.attributes.stats.winPlace < 2 }
  //   }
  // }
  let result = await pubg.match.players.mostKills('pc-na', 'b9281965-4a12-487b-a544-a3c3b58faba3')
  console.log(result)
  // let players = []
  // let winner = await pubg.match.winner.team('pc-na', 'b9281965-4a12-487b-a544-a3c3b58faba3')
  // console.log(winner)
  // resultado.forEach(element => {
  //   players.push()
  // })
  // console.log(resultado)
}

test()
