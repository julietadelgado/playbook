class TwitterUSer {
	constructor(id, id_str, name, screen_name, location, description, url, entities, followers_count, friends_count, listed_count, created_at, favourites_count, verified, statuses_count, profile_image_url_https){		
		this.id =  id
		this.id_str =  id_str
		this.name =  name
		this.screen_name =  screen_name
		this.location = location
		this.profile_location =  null
		this.description =  description
		this.url =  url
		this.entities = entities
		this.protected =  false
		this.followers_count =  followers_count
		this.friends_count =  friends_count
		this.listed_count =  listed_count
		this.created_at =  created_at
		this.favourites_count =  favourites_count
		this.utc_offset =  null
		this.time_zone =  null
		this.geo_enabled =  null
		this.verified =  verified
		this.statuses_count =  statuses_count
		this.lang =  null
		this.contributors_enabled =  null
		this.is_translator =  null
		this.is_translation_enabled =  null
		this.profile_background_color =  null
		this.profile_background_image_url =  null
		this.profile_background_image_url_https =  null
		this.profile_background_tile =  null
		this.profile_image_url =  null
		this.profile_image_url_https =  
		this.profile_banner_url =  null
		this.profile_link_color =  null
		this.profile_sidebar_border_color =  null
		this.profile_sidebar_fill_color =  null
		this.profile_text_color =  null
		this.profile_use_background_image =  null
		this.has_extended_profile =  null
		this.default_profile =  false
		this.default_profile_image =  false
		this.following =  null
		this.follow_request_sent =  null
		this.notifications =  null
		this.translator_type =  null
	}

    get getName(){
        return this.name
    }

    get getDescription(){
        return this.description
    }

	get getProfileBackgroundColor(){
        return this.profile_background_color
    }

	set setProfileBackgroundColor(color){
		this. profile_background_color = color
	}
}

const entities = {
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
		}
const twitter_user = new TwitterUSer (6253282, "6253282", "Twitter API", "TwitterAPI", "San Francisco, CA", "The Real Twitter API. Tweets about API changes, service issues and our Developer Platform. Don't get an answer? It's on my website.", "https:\/\/t.co\/8IkCzCDr19", entities, 6133636, 12, 12936, "Wed May 23 06:01:13 +0000 2007", 31, true, 3656, "https:\/\/pbs.twimg.com\/profile_images\/942858479592554497\/BbazLO9L_normal.jpg")

console.log('Twitter name: ' + twitter_user.getName)
console.log('Twitter description: ' + twitter_user.getDescription)
twitter_user.setProfileBackgroundColor = '#ffffff'
console.log('Twitter Profile Background color: ' + twitter_user.getProfileBackgroundColor)