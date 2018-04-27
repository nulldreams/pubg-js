# pubg-js
A PubgAPI SDK for javascript

#### `pubg.setToken(token)`
```javascript
console.log(await pubg.setToken(token))
// {"data":{"type":"status","id":"pubg-api","attributes":{"version":"v9.2.0","releasedAt":"2018-04-25T20:40:13Z"}}}
```
#### `pubg.player.info(nickname)`
```javascript
let player = JSON.parse(await pubg.player.info('pc-na', 'igor-martins'))
console.log(`Player ID: ${player.data[0].id}`)

// Player ID: account.67ad0292daf94a90960357bfd17764e8
```
#### `pubg.player.infoById(nickname)`
```javascript
let player = JSON.parse(await pubg.player.infoById('pc-na', 'account.67ad0292daf94a90960357bfd17764e8'))
console.log(`Nickname: ${player.data[0].attributes.name}`)

// Nickname: igor-martins
```
#### `pubg.match.winner.player(region, matchID)`
```javascript
let winner = await pubg.match.winner.player('pc-na', 'b9281965-4a12-487b-a544-a3c3b58faba3')
console.log(winner)
```
```json
{ data:
   [ { type: 'participant',
       id: '3fe34769-7023-4019-a5c7-b55ef26ec96c',
       attributes: [Object] },
     { type: 'participant',
       id: '010d0fbe-6e13-435a-94a9-59db6245af3f',
       attributes: [Object] },
     { type: 'participant',
       id: '9eb4435f-7c99-4dea-8845-89415b8cf1f5',
       attributes: [Object] } ],
  names: [ 'Uzuzy', 'The_Fake998', 'Phi_Senpai' ] }
```
#### `pubg.match.winner.team(region, matchID)`
```javascript
let winner = await pubg.match.winner.team('pc-na', 'b9281965-4a12-487b-a544-a3c3b58faba3')
console.log(winner)
```
```json
[ { type: 'roster',
    id: 'a990d773-a145-43a6-ad37-34aa8a8dd267',
    attributes: { stats: [Object], won: 'true', shardId: 'pc-na' },
    relationships: { team: [Object], participants: [Object] } } ]
```

#### in development...


