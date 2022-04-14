class User {
    constructor(id, about, age_range, birthday, email, favorite_athletes, favorite_teams, first_name, last_name, gender, hometown, inspirational_people, languages, location, profile_pic, relationship_status, short_name, sports, website){
        this.id = id
        this.about = about
        this.age_range = age_range
        this.birthday = birthday
        this.email = email
        this.favorite_athletes = favorite_athletes
        this.favorite_teams = favorite_teams
        this.first_name = first_name
        this.last_name = last_name
        this.gender = gender
        this.hometown = hometown
        this.inspirational_people = inspirational_people
        this.languages = languages
        this.location = location
        this.profile_pic = profile_pic
        this.relationship_status = relationship_status
        this.short_name = short_name
        this.sports = sports
        this.website = website
    }

    get getName(){
        return this.first_name + " " + this.last_name
    }

    get getShortName(){
        return this.short_name
    }

    set setShortName(short_name){
        this.short_name = short_name
    }
}

class Biography extends User {
    constructor(id, about, age_range, birthday, email, favorite_athletes, favorite_teams, first_name, last_name, gender, hometown, inspirational_people, languages, location, profile_pic, relationship_status, short_name, sports, website, biography_image, friends){
        super(id, about, age_range, birthday, email, favorite_athletes, favorite_teams, first_name, last_name, gender, hometown, inspirational_people, languages, location, profile_pic, relationship_status, short_name, sports, website)
        this.id_user_reference = id
        this.biography_image = biography_image
        this.friends = friends
    }
    
    getFriends(){
        return this.friends
    }
}


const user_b = new Biography (12313546568, 'Hola Soy Julieta y me gusta jugar voleibol y ver películas de terror', '21+', '09/29/1993', 'julidmeza@gmail.com', ['Usain Bolt'], ['Mexico', 'Jamaica'], 'Julieta', 'Delgado', 'Female', 'México', ['Sarthak'], ['Spanish', 'English'], 'México', 'https://facebook.com/myImage', null, 'Juls', ['Volleyball', 'Tennis', 'Basquetball'], 'http://julietadelgado.com/', 'https://facebook.com/images/15462', 20)

console.log('Biography')
console.log('User Profile: '+ user_b.getName)
console.log('User Short Name: '+ user_b.getShortName)
user_b.setShortName = 'Juli'
console.log('New User Short Name: '+ user_b.getShortName)
console.log('Email: '+ user_b.email)
console.log('Birthday: '+ user_b.birthday)
console.log('Gender: '+ user_b.gender)
console.log('Sports: '+ user_b.sports)

console.log('The user: ' + user_b.getName + ' has ' + user_b.getFriends() + ' friends.')