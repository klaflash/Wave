const locations = [{name:"test", latitude:26.775044, longitude:-80.032890}, {name:"Hub", latitude:40.422203, longitude:-86.906227}]
const threshold = 0.05;

for (let location of locations) {
    const node = document.createElement(`${location.name}`)
    node.textContent = `${location.name}`
    node.setAttribute('id', `${location.name}`)
    node.setAttribute('class', 'location')
    document.getElementById('locations').appendChild(node)
}

const successCallback = (position) => {
    console.log(position);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    for (let location of locations) {
      const dist = distance(degToRad(lat), degToRad(lng), degToRad(location.latitude), degToRad(location.longitude))
      console.log(dist)
      if (dist < threshold) {
          //full access
          const node = document.createElement('Review')
          node.textContent = `Review ${location.name}`
          node.setAttribute('class', 'review')
          document.getElementById(`${location.name}`).appendChild(node)
      } else {
          //restricted access
      }
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
  