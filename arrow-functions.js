const dragonEvent = [
  {type: 'attack', value: 12, target: 'player-dorkman'},
  {type: 'yawn', value: 40},
  {type: 'eat', target: 'horse'},
  {type: 'attack', value: 23, target: 'player-fluffykins'},
  {type: 'attack', value: 12, target: 'player-dorkman'}
]

const totalDamageOnDorkman = dragonEvent
  .filter(item => item.target === 'player-dorkman')
  .filter(item => item.type === 'attack')
  .reduce((damage, obj) => damage + obj.value, 0)

console.log(totalDamageOnDorkman)
