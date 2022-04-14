class Topic {
  constructor(name, url, promoted_content, query, tweet_volume){
    this.name = name
    this.url = url
    this.promoted_content = promoted_content
    this.query = query
    this.tweet_volume = tweet_volume
  }

  getTrend(){
    console.log(topic.name + ' with a tweet volume of: ' + topic.tweet_volume)
  }
}

const topic = new Topic ("#AskCuppyAnything", "http://twitter.com/search?q=%23AskCuppyAnything", null, "%23AskCuppyAnything", 14504)
console.log('Trend topic:')
topic.getTrend();