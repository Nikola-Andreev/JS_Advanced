class Player {

    constructor(nickName){
        this.nickName = nickName
        this.scores = []
    }

    addScore(score){
        if(!isNaN(score) && score !== null){
            this.scores.push(+score);
        }

        return this;
    }

    get scoreCount(){
        return this.scores.length
    }

    get highestScore(){
        this.sort()
        return this.scores.slice(0,1)[0]
    }

    get topFiveScore(){
        this.sort()
        if (this.scores.length <= 5){
            return this.scores
        } else {
            return this.scores.slice(0,5)
        }
    }

    toString() {
        this.sort()
        return `${this.nickName.toString()}: [${this.scores.join(',')}]`
    }

    sort (){
        if(this.scores.length > 1){
            this.scores = this.scores.sort((a,b) => {return a < b})
        }
    }
}


let p = new Player('Trotro');
p.addScore('Pesho');
console.log(p.toString())//('Trotro: []','You should add only valid numbers!'));
console.log(p.highestScore)//.to.equal(undefined, 'Invalid high score!');
console.log(p.topFiveScore.length)//.to.equal(0, 'Invalid top five score!');
console.log(p.scoreCount)//.to.equal(0, 'Invalid score count!');

p.addScore('123');
console.log(p.toString())//.to.equal('Trotro: [123]','You should add only valid numbers!');
console.log(p.highestScore)//.to.equal(123, 'Invalid high score!');
console.log(p.topFiveScore[0])//.to.equal(123, 'Invalid top five score!');
console.log(p.scoreCount)//.to.equal(1, 'Invalid score count!');
