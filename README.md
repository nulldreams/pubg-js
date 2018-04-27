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
{
  "data": [
    {
      "type": "participant",
      "id": "3fe34769-7023-4019-a5c7-b55ef26ec96c",
      "attributes": ["Object"]
    },
    {
      "type": "participant",
      "id": "010d0fbe-6e13-435a-94a9-59db6245af3f",
      "attributes": ["Object"]
    },
    {
      "type": "participant",
      "id": "9eb4435f-7c99-4dea-8845-89415b8cf1f5",
      "attributes": ["Object"]
    }
  ],
  "names": ["Uzuzy", "The_Fake998", "Phi_Senpai"]
}
```
#### `pubg.match.winner.team(region, matchID)`
```javascript
let winner = await pubg.match.winner.team('pc-na', 'b9281965-4a12-487b-a544-a3c3b58faba3')
console.log(winner)
```
```json
[
  {
    "type": "roster",
    "id": "a990d773-a145-43a6-ad37-34aa8a8dd267",
    "attributes": { "stats": ["Object"], "won": "true", "shardId": "pc-na" },
    "relationships": { "team": ["Object"], "participants": ["Object"] }
  }
]
```
#### `pubg.match.winner.players.find(region, matchID, queryObject)`
```javascript
let search = {
    node: 'included',
    query: function (v) {
      if (v.type === 'participant') { return v.attributes.stats.winPlace < 2 }
    }
}
let result = await pubg.match.players.find('pc-na', 'b9281965-4a12-487b-a544-a3c3b58faba3', search)
console.log(result)
```
```json
[
  {
    "type": "participant",
    "id": "3fe34769-7023-4019-a5c7-b55ef26ec96c",
    "attributes": { "stats": ["Object"], "actor": "", "shardId": "pc-na" }
  },
  {
    "type": "participant",
    "id": "010d0fbe-6e13-435a-94a9-59db6245af3f",
    "attributes": { "stats": ["Object"], "actor": "", "shardId": "pc-na" }
  },
  {
    "type": "participant",
    "id": "9eb4435f-7c99-4dea-8845-89415b8cf1f5",
    "attributes": { "shardId": "pc-na", "stats": ["Object"], "actor": "" }
  }
]
```
```javascript
let search = {
    node: 'included',
    query: [ 'attributes.stats.killPointsDelta', 10.2518635 ]
}
let result = await pubg.match.players.find('pc-na', 'b9281965-4a12-487b-a544-a3c3b58faba3', search)
console.log(result)
```
```json
[
  {
    "type": "participant",
    "id": "5a4f8d7f-aac4-4edc-bd4c-411452a95368",
    "attributes": { "stats": ["Object"], "actor": "", "shardId": "pc-na" }
  }
]
```
#### `pubg.match.players.mostKills(region, matchID)`
```javascript
let result = await pubg.match.players.mostKills('pc-na', 'b9281965-4a12-487b-a544-a3c3b58faba3')
console.log(result)
```
```json
{
  "type": "participant",
  "id": "abc02c17-12f2-4539-b1c8-1b93eb395b74",
  "attributes": {
    "actor": "",
    "shardId": "pc-na",
    "stats": {
      "DBNOs": 11,
      "assists": 1,
      "boosts": 6,
      "damageDealt": 1302.44922,
      "deathType": "byplayer",
      "headshotKills": 3,
      "heals": 4,
      "killPlace": 1,
      "killPoints": 1385,
      "killPointsDelta": 73.64062,
      "killStreaks": 0,
      "kills": 12,
      "lastKillPoints": 0,
      "lastWinPoints": 0,
      "longestKill": 130,
      "mostDamage": 0,
      "name": "Reign92",
      "playerId": "account.808f7b385979435ca3ba545737fbf741",
      "revives": 2,
      "rideDistance": 1663.605,
      "roadKills": 0,
      "teamKills": 0,
      "timeSurvived": 1770,
      "vehicleDestroys": 0,
      "walkDistance": 3352.25146,
      "weaponsAcquired": 0,
      "winPlace": 3,
      "winPoints": 1248,
      "winPointsDelta": 29.028574
    }
  }
}
```

#### in development...


