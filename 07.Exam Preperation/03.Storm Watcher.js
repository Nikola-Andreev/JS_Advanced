let a = (function () {
    let id = 0
    return class Record {
        constructor(temp, humm, press, speed) {
            this.id = id++
            this.temperature = temp
            this.humidity = humm
            this.pressure = press
            this.windSpeed = speed
        }

        toString(){
            let weather = 'Not stormy'
            if(this.temperature < 20 && (this.pressure <700 || this.pressure >900) && this.windSpeed > 25){
                weather = 'Stormy'
            }
            return 'Reading ID: '+this.id+' Temperature: '+this.temperature+'*C'+' Relative Humidity: '+this.humidity+'%'+
                ' Pressure: '+this.pressure+'hpa'+' Wind Speed: '+this.windSpeed+'m/s'+' Weather: '+weather

        }
    }
})()

let record1 = new a(32, 66, 760, 12);
console.log(record1.toString());

let record2 = new a(10, 40, 680, 30);
console.log(record2.toString());

