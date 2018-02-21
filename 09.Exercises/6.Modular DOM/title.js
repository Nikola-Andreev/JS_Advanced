let BaseElement = require('./base')

class TitleBar extends BaseElement{
    constructor(title){
        super()
        this.title = title
        this.links = []
    }

    addLink(href,name){
        let link = `        <a class="menu-link" href="${href}">${name}</a>`
        this.links.push(link)
    }
    getElementString(){

        let str = `<header class="header">
  <div><span class="title">${this.title}</span></div>
    <div>
      <nav class="menu">`
        for (let i = 0; i < this.links.length; i++) {
            if(i == this.links.length-1){
                str+='\n'+this.links[i]
            } else {
                str+='\n'+this.links[i]+'|'
            }
        }
        str+=`\n      </nav>
   </div>
</header>
`
        return str
    }
}

module.exports = TitleBar