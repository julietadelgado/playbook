const profile = {
    first_name: "Julieta",
    last_name: "Delgado",
    uuid: "f4a416e3-6016-4623-8ec9-d5ee105a6e27",
    picture: "https://d1w2poirtb3as9.cloudfront.net/f3be498cb0bbf570aa3d.jpeg",
    rider_id: "8OlTlUG1TyeAQf1JiBZZdkKxuSSOUwu2IkO0Hf9d2HV52Pm25A0NvsbmbnZr85tLVi-s8CckpBK8Eq0Nke4X-no3AcSHfeVh6J5O6LiQt5LsBZDSi4qyVUdSLeYDnTtirw==",
    email: "julidmeza@gmail.com",
    mobile_verified: true,
    promo_code: "uberd340ue",
    getName: function(){
      return this.first_name + " " + this.last_name
    }
}


console.log('Uber Profile: '+ profile.getName())
console.log('Email: '+ profile.email)
console.log('Promo Code: '+ profile.promo_code)