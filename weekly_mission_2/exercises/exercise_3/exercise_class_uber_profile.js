class UberProfile {
  constructor(first_name, last_name, uuid, picture, rider_id, email, mobile_verified, promo_code){
    this.first_name = first_name
    this.last_name = last_name
    this.uuid = uuid
    this.picture = picture
    this.rider_id = rider_id
    this.email = email
    this.mobile_verified = mobile_verified
    this.promo_code = promo_code
  }

  get getName(){
    return this.first_name + " " + this.last_name
  }

  get getEmail(){
    return this.email
  }

  get getPromocode(){
    return this.promo_code
  }
}

const profile = new UberProfile("Julieta", "Delgado", "f4a416e3-6016-4623-8ec9-d5ee105a6e27", "https://d1w2poirtb3as9.cloudfront.net/f3be498cb0bbf570aa3d.jpeg", "8OlTlUG1TyeAQf1JiBZZdkKxuSSOUwu2IkO0Hf9d2HV52Pm25A0NvsbmbnZr85tLVi-s8CckpBK8Eq0Nke4X-no3AcSHfeVh6J5O6LiQt5LsBZDSi4qyVUdSLeYDnTtirw==", "julidmeza@gmail.com", true, "uberd340ue")
console.log('Uber Profile: '+ profile.getName)
console.log('Email: '+ profile.getEmail)
console.log('Promo Code: '+ profile.getPromocode)