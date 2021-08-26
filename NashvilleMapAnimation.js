const busStops = [
  [-86.7258033, 36.081283],
  [-86.7280653, 36.0847947],
  [-86.7356831, 36.0930883],
  [-86.7381694, 36.0975161],
  [-86.740161, 36.1013119],
  [-86.7429466, 36.1062871],
  [-86.7446694, 36.1093323],
  [-86.7389392, 36.1091645],
];
mapboxgl.accessToken = 'pk.eyJ1IjoiZHNteXNlcjEiLCJhIjoiY2tzOTFpa3ZkMHl5NDMxbXQyZmswYXkyOSJ9.c_ZSrvbQHw-dZNB0On7ADw';


let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
     center: [-86.738207, 36.097195],
     zoom: 13,
});

let marker = new mapboxgl.Marker()
  .setLngLat([-86.7258033, 36.081283])
  .addTo(map);

let counter = 0;
function move() {
    setTimeout(() =>{
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);

}

if (typeof module !== 'undefined') {
  module.exports = { move };
}