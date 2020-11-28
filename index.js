function updateMap() {
    console.log("Updating the map with real time data ")
    fetch("/data.json")
        .then(Response => Response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude
                longitude = element.longitude

                cases = element.infected;
                if (cases>255) {
                    color = "rgb(255,0,0)"
                }
                else{
                    color = `rgb(${cases},0,0)`
                }


                // marks on the map 
                new mapboxgl.Marker({
                    draggable: false,
                    color: color

                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);


            });
        })
}
let interval = 20000; 
setInterval(updateMap, interval);

