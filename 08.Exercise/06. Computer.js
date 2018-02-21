function createComputerHierarchy() {

    class Manufacturable{
        constructor(manufacturer){
            if(new.target === Manufacturable){
                throw new Error('Cannot instantiate an abstract class.');
            }
            this.manufacturer = manufacturer;
        }
    }

    class Monitor extends Manufacturable{
        constructor(manufacturer,width,height){
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Keyboard extends Manufacturable{
        constructor(manufacturer,responseTime){
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Battery extends Manufacturable{
        constructor(manufacturer, expectedLife){
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends Manufacturable{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if(new.target === Computer){
                throw new Error("Cannot instantiate abstract class.");
            }
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer,processorSpeed,ram,hardDisk,weight,color,battery){
            super(manufacturer,processorSpeed,ram,hardDisk);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }


        get battery() {
            return this._battery;
        }

        set battery(value) {
            if(!(value instanceof Battery)){
                throw new TypeError("Passed argument was not a Battery.");
            }
            this._battery = value;
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer,processorSpeed,ram,hardDisk,keyboard,monitor){
            super(manufacturer,processorSpeed,ram,hardDisk);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard(){
            return this._keyboard;
        }

        set keyboard(value){
            if(!(value instanceof Keyboard)){
                throw new TypeError("Passed argument was not a Keyboard");
            }
            this._keyboard = value;
        }

        get monitor(){
            return this._monitor;
        }

        set monitor(value){
            if(!(value instanceof Monitor)){
                throw new TypeError("Passed argument was not a Monitor.");
            }

            this._monitor = value;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let a = new Computer('abc',434344,11,2323)
console.log(a.constructor.name)

