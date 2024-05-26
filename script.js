function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("location").innerHTML =
      "location is not suppoerted by browser";
  }

  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById(
      "location"
    ).innerHTML = `Latitude:${latitude} <br> Longitude:${longitude}`;
  }
  function showError(error) {
    let message = "";
    switch (error.code) {
      case error.PERMISSION_DENIED:
        message = "user denied for the location access";
        break;
      case error.POSITION_UNAVAILABLE:
        message = "location is not available for this instance";
        break;
    }
    document.getElementById("location").innerHTML = message;
  }
}
