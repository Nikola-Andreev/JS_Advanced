function solve() {

    class Post {
        constructor(title, content) {
            this.title = title
            this.content = content
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)
            this.likes = likes
            this.dislikes = dislikes
            this.comments = []
        }

        addComment(comment) {
            this.comments.push(comment)
        }

        toString() {
            let str = super.toString()
            str = str + `\nRating: ${this.likes - this.dislikes}`
            if (this.comments.length > 0) {
                str += `\nComments:`
                for (let i = 0; i < this.comments.length; i++) {
                    str += `\n * ${this.comments[i]}`
                }
            }
            return str
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content)
            this.views = views
        }

        view() {
           this.views++
           return this
        }

        toString() {
            let str = super.toString() + '\n'
            return str += `Views: ${this.views}`
        }
    }

    return{Post,SocialMediaPost,BlogPost}
}

let a = solve()
let post = new a.Post("Post", "Content");
console.log(post.toString())


console.log()

let scm = new a.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());
console.log()
let b = new a.BlogPost("test", "TestContent", 25);
b.view()
console.log(b.toString());
