const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
  };
  
  if (window.matchMedia("(max-width: 480px)").matches) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
  }
  