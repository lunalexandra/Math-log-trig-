
export default class MathClass {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.distance = 1;
    this.stoneStatus = false;
  }

  set stoned(value) {
    this.stoneStatus = value;
  }

  get stoned() {
    return this.stoneStatus;
  }

  set attack(value) {
    this.attackedValue = value;
  }

  get attack() {
    const attack = this.attackedValue - (this.distance - 1) * 10;
    if(attack <= 0){
      return 0
    }
    if(this.stoneStatus) {
      return attack - Math.log2(this.distance) * 5;
    }
    return attack;
  }
}




// export default class Math /*extends Character*/ {
//  constructor(distance, stone){
//   this.distance = distance;
//   this.stone = stone;
//  }

//  set attack(value){
//     this.attack = value;
//   }


//    get attack(){
//     if(this.attack - (this.distance - 1) * 10 <= 0){
//       return 0
//     }
//     return this.attack - (this.distance - 1) * 10;
//   }
  
// }

