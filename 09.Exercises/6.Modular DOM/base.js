class BaseElement{
    constructor() {
        if (new.target == BaseElement) {
            throw new Error
        }
        this.element = null
    }

    appendTo(selector){
        let elem = this.createElement()
        $(selector).append(elem)
    }
    createElement(){
       let elem = this.getElementString()
       return $(elem)
    }
    getElementString(){
        return this.element.toString()
    }
}

module.exports = BaseElement