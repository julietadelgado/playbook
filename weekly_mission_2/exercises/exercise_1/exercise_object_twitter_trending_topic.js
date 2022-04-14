const trending_topics = {
    trends: [
      {
        name: "#GiftAGamer",
        url: "http://twitter.com/search?q=%23GiftAGamer",
        promoted_content: null,
        query: "%23GiftAGamer",
        tweet_volume: 12204
      },
      {
        name: "#AskCuppyAnything",
        url: "http://twitter.com/search?q=%23AskCuppyAnything",
        promoted_content: null,
        query: "%23AskCuppyAnything",
        tweet_volume: 14504
      },
      {
        name: "#givethanks",
        url: "http://twitter.com/search?q=%23givethanks",
        promoted_content: null,
        query: "%23givethanks",
        tweet_volume: 13000
      },
      {
        name: "Carrefour",
        url: "http://twitter.com/search?q=Carrefour",
        promoted_content: null,
        query: "Carrefour",
        tweet_volume: 438616
      },
      {
        name: "#StreamLifeGoesOn",
        url: "http://twitter.com/search?q=%23StreamLifeGoesOn",
        promoted_content: null,
        query: "%23StreamLifeGoesOn",
        tweet_volume: 179026
      },
      {
        name: "STREAM BE PARTY",
        url: "http://twitter.com/search?q=%22STREAM+BE+PARTY%22",
        promoted_content: null,
        query: "%22STREAM+BE+PARTY%22",
        tweet_volume: 71404
      },
      {
        name: "#TransDayOfRemembrance",
        url: "http://twitter.com/search?q=%23TransDayOfRemembrance",
        promoted_content: null,
        query: "%23TransDayOfRemembrance",
        tweet_volume: 45852
      },
      {
        name: "Mourão",
        url: "http://twitter.com/search?q=Mour%C3%A3o",
        promoted_content: null,
        query: "Mour%C3%A3o",
        tweet_volume: 12614
      },
      {
        name: "Taysom Hill",
        url: "http://twitter.com/search?q=%22Taysom+Hill%22",
        promoted_content: null,
        query: "%22Taysom+Hill%22",
        tweet_volume: 20311
      },
      {
        name: "Geraldo",
        url: "http://twitter.com/search?q=Geraldo",
        promoted_content: null,
        query: "Geraldo",
        tweet_volume: 30166
      }
    ],
    locations: [
      {
        name: "Worldwide",
        "woeid": 1
      }
    ],
    getTrends: function(){
        this.trends.forEach(trend => console.log(trend.name + ' with a tweet volume of: ' + trend.tweet_volume))
    }
}

console.log('The trending topics of this season are:')
trending_topics.getTrends();