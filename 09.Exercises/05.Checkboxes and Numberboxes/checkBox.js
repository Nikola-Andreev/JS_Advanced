class Checkbox{
    constructor(label,selector){
        this._label = label
        this._selector = selector
        this._value
        if ($(selector).is(":checked"))
        {
            this._value = true
        } else {
            this._value = false
        }
        let _that = this
        $(selector).on('change',function () {
            if(_that._value == false){
                _that.value = true
            } else {
                _that.value = false
            }
        })
    }

    get label(){
        return this._label
    }

    get elements(){
        return $(this._selector)
    }

    get value(){
        return this._value
    }

    set value(val){
        if(typeof val == 'boolean') {
            this._value = val
            if(val){
                $(this._selector).prop('checked', true)
            } else {
                $(this._selector).prop('checked', false)
            }
        } else {
            throw Error
        }
    }
}

module.exports = Checkbox