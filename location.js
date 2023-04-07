if (!inRange[location.name]) {
window.getElementById('rating').style.display = 'none'
}
window.getElementById('range-message').textContent = 'To rate this location get within range and refresh'
window.getElementById('place').textContent = `${location.name}`