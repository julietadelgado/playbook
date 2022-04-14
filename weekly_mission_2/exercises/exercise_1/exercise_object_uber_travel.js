const trip = {
    status: "completed",
    distance: 1.4780860317,
    product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d",
    start_time: 1475545183,
    start_city: {
      latitude: 37.7749,
      display_name: "San Francisco",
      longitude: -122.4194
    },
    end_time: 1475545808,
    request_id: "fb0a7c1f-2cf7-4310-bd27-8ba7737362fe",
    request_time: 1475545095,
    getGeneralInfo: function(){
        console.log('Info about Trip')
        console.log('Status: ' + this.status)
        console.log('Distance: ' + this.distance + ' km')
        console.log('Start time: ' + new Date(this.start_time * 1000))
        console.log('End time: ' + new Date(this.end_time * 1000))
        console.log('Request time: ' + new Date(this.request_time * 1000))
    }
}

trip.getGeneralInfo()