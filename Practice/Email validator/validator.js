function validate() {

    let val = document.getElementById('email').value
    let regex =/\w+@\w+\.\w+/
    if (regex.test(val)){
        document.getElementById('emailValue').innerHTML = val
        document.getElementById('emailValue').style.color = 'green'
    } else{
        document.getElementById('emailValue').innerHTML = val
        document.getElementById('emailValue').style.color = 'red'
    }
}