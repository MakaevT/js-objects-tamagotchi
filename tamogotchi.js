const tamogochi = {
    name: 'egg',
    meal: 5,
    energy: 4,
    mood: 4,
    getStatus:function(){
        let meal = 'Я не голоден: '
        let energy = 'Я не хочу спать: '
        let mood = 'Мне весело'
//__________________Условие_смерти______________________________________________________
        if(this.meal == 0 || this.energy == 0 || this.mood == 0){
            return console.log(`Имя ${this.name} умер`);
        }
//________________Условие_голода_________________________________________________________
        if (this.meal >= 0 && this.meal <= 3 ) {
            console.log(`${this.name}: (${this.meal}) я голоден: `)
          } else {
            console.log(`${this.name}: (${this.meal}) я не голоден `)
          } 
//__________________Условие_усталости_____________________________________________________
          if (this.energy >= 0 && this.energy <= 3 ) {
            console.log(`${this.name}: (${this.energy}) я хочу спать: `)
          } else {
            console.log(`${this.name}: (${this.energy}) я не хочу спать `)
          } 
//_________________________Условие_нстроения_______________________________________________
          if (this.mood >= 0 && this.mood <= 3 ) {
            console.log(`${this.name}: (${this.mood}) мне скучно: `)
          } else {
            console.log(`${this.name}: (${this.mood}) мне не скучно `)
          } 
    },
//__________________________________________________________________________________________    
    
  setName: function(name) {
    this.name = name;

  },


  eat: function() {
    this.meal += 1;
    this.mood -= 1;
  },

  sleep: function() {
    this.energy += 1;
    this.meal -= 1;
  },

  play: function() {
    this.mood += 1;
    this.energy -= 1;
  },


}

tamogochi.setName('Tamik')
tamogochi.eat()
tamogochi.sleep()
tamogochi.play()
tamogochi.getStatus()
    