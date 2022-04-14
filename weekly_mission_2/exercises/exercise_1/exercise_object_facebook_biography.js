const biography = {
    id_user_reference: 12313546568,
    biography_image: 'https://facebook.com/images/15462',
    friends: 20,
    getFriends: function(){
        return this.friends
    }
}

console.log('The user id: ' + biography.id_user_reference + ' has ' + biography.getFriends() + ' friends.')