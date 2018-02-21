function solve(name,age,weight,height) {

    let bmi = weight/((height/100)*(height/100))
    let stat = ''

    if(bmi<18.5){
        stat = 'underweight'
    } else if( bmi < 25){
        stat = 'normal'
    }  else if( bmi < 30){
        stat = 'overweight'
    }  else {
        stat = 'obese'
    }

   let obj = {
        name:name,
        personalInfo:{
            age:age,
            weight:weight,
            height:height
        },
        BMI:Math.round(bmi),
        status:stat
    }

    if(stat == 'obese'){
        obj['recommendation'] = 'admission required'
    }
    return obj
}

//console.log(solve('Peter', 29, 75, 182))
console.log(solve('Honey Boo Boo', 9, 57, 137))