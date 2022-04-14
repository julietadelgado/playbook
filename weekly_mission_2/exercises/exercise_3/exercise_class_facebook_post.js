class Post {
    constructor(title, author, comments, likes){
        this.title = title
        this.author = author
        this.comments = comments
        this.likes = likes
    }
}

const post = new Post('Everything about Node.js', 'Julieta Delgado', 1200, 810)
console.log(post)
console.log(post.title + ' has '+ post.likes + ' likes')