let Article = require('./article')

class TableArticle extends Article{
    constructor(title,content){
        super(title,content)
        this.headings = null
        this.data = null
    }

    loadData(headings, data){
        this.headings = headings
        this.data = data
    }

    getElementString(){
        let str =`<div class="article">
    <div class="article-title">${this.title}</div>
    <p>${this.content}</p>
    <div class="table">
        <table class="data">
          <tr>`
        let properties = []
        for (let i = 0; i < this.headings.length; i++) {
            let prop = this.headings[i].replace(/\s/g,'').toLowerCase()
            properties.push(prop)
            str+=`<th>${this.headings[i]}</th>`
        }
        str+=`</tr>`
        for (let i = 0; i < this.data.length; i++) {
            str+=`<tr>`
            for (let a = 0; a < properties.length; a++) {
                str+=`<td>${this.data[i][properties[a]]}</td>`
            }
            str+='</tr>'
        }
str+=`</table>
    </div>
</div>`

        return str
    }
}


module.exports = TableArticle