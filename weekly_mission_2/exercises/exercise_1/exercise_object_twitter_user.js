const twitter_user = {
	"id": 6253282,
	"id_str": "6253282",
	"name": "Twitter API",
	"screen_name": "TwitterAPI",
	"location": "San Francisco, CA",
	"profile_location": null,
	"description": "The Real Twitter API. Tweets about API changes, service issues and our Developer Platform. Don't get an answer? It's on my website.",
	"url": "https:\/\/t.co\/8IkCzCDr19",
	"entities": {
		"url": {
			"urls": [{
				"url": "https:\/\/t.co\/8IkCzCDr19",
				"expanded_url": "https:\/\/developer.twitter.com",
				"display_url": "developer.twitter.com",
				"indices": [
					0,
					23
				]
			}]
		},
		"description": {
			"urls": []
		}
	},
	"protected": false,
	"followers_count": 6133636,
	"friends_count": 12,
	"listed_count": 12936,
	"created_at": "Wed May 23 06:01:13 +0000 2007",
	"favourites_count": 31,
	"utc_offset": null,
	"time_zone": null,
	"geo_enabled": null,
	"verified": true,
	"statuses_count": 3656,
	"lang": null,
	"contributors_enabled": null,
	"is_translator": null,
	"is_translation_enabled": null,
	"profile_background_color": null,
	"profile_background_image_url": null,
	"profile_background_image_url_https": null,
	"profile_background_tile": null,
	"profile_image_url": null,
	"profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/942858479592554497\/BbazLO9L_normal.jpg",
	"profile_banner_url": null,
	"profile_link_color": null,
	"profile_sidebar_border_color": null,
	"profile_sidebar_fill_color": null,
	"profile_text_color": null,
	"profile_use_background_image": null,
	"has_extended_profile": null,
	"default_profile": false,
	"default_profile_image": false,
	"following": null,
	"follow_request_sent": null,
	"notifications": null,
	"translator_type": null,
    getName: function(){
        return this.name
    },
    getDescription: function(){
        return this.description
    }    
}

console.log('Twitter name: ' + twitter_user.getName())
console.log('Twitter description: ' + twitter_user.getDescription())