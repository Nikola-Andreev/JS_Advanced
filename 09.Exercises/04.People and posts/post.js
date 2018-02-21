
class Post{
    constructor(title,body,author){
        this.title=title
        this.body=body
        this.author = author
    }

    addToSelector(selector){
       let div = $(`<div class="post ${this.author}">`)
       let h3 = $(`<h3 class="title">`).text(this.title)
       let p = $(`<p class="body">`).text(this.body)
       let p2 = $(`<p class="author">`).text(this.author)

        $(div).append(h3).append(p).append(p2)
        $(selector).append(div)
    }
}

module.exports = Post
