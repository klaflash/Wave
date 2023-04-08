const currentLocation = localStorage.getItem('currentLocation');
const inRange = localStorage.getItem('inRange');

console.log(currentLocation);
console.log(inRange)

if (!inRange[currentLocation.name]) {
document.getElementById('rating').style.display = 'none'
document.getElementById('range-message').textContent = 'To rate this location get within range and refresh'
}
document.getElementById('place').textContent = `${currentLocation.name}`