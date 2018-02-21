
let HTMLGen = {
    createParagraph: ((id,val) => {
        let div = document.getElementById(id)
        let paragraph = document.createElement("p")
        let value = document.createTextNode(val)
        paragraph.appendChild(value)
        div.appendChild(paragraph)
    }),
    createLink: ((id,name,url) => {
        let div = document.getElementById(id).innerHTML = `<a href="${url}">${name}</a>`
    }),
    createDiv: ((id,clas) => {
        let div = document.getElementById(id).innerHTML = `<div class="${clas}"></div>`
    })
}