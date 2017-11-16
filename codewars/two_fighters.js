function Fighter (name, health, damagePerAttack) {
  this.name = name
  this.health = health
  this.damagePerAttack = damagePerAttack
  this.toString = function () { return this.name }
}

var declareWinner = (fighter1, fighter2, firstAttacker) => {
  var fact1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
  var fact2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
  if (fact1 < fact2) {
    return fighter2.name
  } else if (fact2 < fact1) {
    return fighter1.name
  } else {
    return firstAttacker
  }
}
var fighter1 = new Fighter()
fighter1.name = 'Lew'
fighter1.health = 10
fighter1.damagePerAttack = 2

var fighter2 = new Fighter('Harry', 5, 4)
var firstAttacker = 'Lew'
console.log(declareWinner(fighter1, fighter2, firstAttacker))
