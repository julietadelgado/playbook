class Trip {
  constructor(status, distance, product_id, start_time, start_city, end_time, request_id, request_time){
    this.status = status
    this.distance = distance
    this.product_id = product_id
    this.start_time = start_time
    this.start_city = start_city
    this.end_time = end_time
    this.request_id = request_id
    this.request_time = request_time
  }

  getGeneralInfo(){
      return 'Info about Trip'+'\nStatus: ' + this.status + '\nDistance: ' + this.distance + ' km' + '\nStart time: ' + new Date(this.start_time * 1000) + '\nEnd time: ' + new Date(this.end_time * 1000) + '\nRequest time: ' + new Date(this.request_time * 1000)
  }
}

const trip = new Trip("completed", 1.4780860317, "a1111c8c-c720-46c3-8534-2fcdd730040d", 1475545183, { latitude: 37.7749, display_name: "San Francisco", longitude: -122.4194 }, 1475545808, "fb0a7c1f-2cf7-4310-bd27-8ba7737362fe", 1475545095)
console.log(trip.getGeneralInfo())