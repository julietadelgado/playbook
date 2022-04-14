const user = {
    id: 12313546568,
    about: 'Hola Soy Julieta y me gusta jugar voleibol y ver películas de terror',
    age_range: '21+',
    birthday: '09/29/1993',
    email: 'julidmeza@gmail.com',
    favorite_athletes: ['Usain Bolt'],
    favorite_teams: ['Mexico', 'Jamaica'],
    first_name: 'Julieta',
    last_name: 'Delgado',
    gender: 'Female',
    hometown: 'México',
    inspirational_people: ['Sarthak'],
    languages: ['Spanish', 'English'],
    location: 'México',
    profile_pic: 'https://facebook.com/myImage',
    relationship_status: null,
    short_name: 'Juls',
    sports: ['Volleyball', 'Tennis', 'Basquetball'],
    website: 'http://julietadelgado.com/',
    getName: function(){
        return this.first_name + " " + this.last_name
    }
}

console.log('User Profile: '+ user.getName())
console.log('Email: '+ user.email)
console.log('Birthday: '+ user.birthday)
console.log('Gender: '+ user.gender)
console.log('Sports: '+ user.sports)