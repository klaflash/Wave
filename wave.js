const locations = [{name:"test", latitude:26.775044, longitude:-80.032890}]
const threshold = 0.05;

for (let location of locations) {
    const node = document.createElement(`${location.name}`)
    document.getElementById("location").appendChild(node)
}

const successCallback = (position) => {
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const dist = distance(degToRad(lat), degToRad(lng), degToRad(locations[0].latitude), degToRad(locations[0].longitude))
    console.log(dist)
    if (dist < threshold) {
        //full access
    } else {
        //restricted access
    }
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
  };
  
  const mediaQuery = window.matchMedia('(max-width: 480px)')

//   if (mediaQuery.matches) {
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
//   }
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);

  const degToRad = (deg) => {
    return deg * Math.PI / 180
  }

  const distance = (lat1, lon1, lat2, lon2) => {
    return 6371 * Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1))
  }
  