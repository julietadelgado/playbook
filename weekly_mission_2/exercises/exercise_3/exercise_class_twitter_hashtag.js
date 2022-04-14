class Hashtag {
    constructor(title, user_mentions){
        this.title = title
        this.user_mentions = user_mentions
    }

    get getTitle(){
        return this.title
    }

    get getUserMentions(){
        return this.user_mentions
    }

    set setTitle(title){
        this.title = title
    }

    set setUserMentions(user_mentions){
        this.user_mentions = user_mentions
    }
}

const hashtag = new Hashtag()
hashtag.setTitle = "NodeJs"
hashtag.setUserMentions = 40500

console.log('The hashtag #' + hashtag.getTitle + " has " + hashtag.getUserMentions + " mentions")