for (let location of locations) {
    document.getElementById(`${location.name}`).addEventListener('click', () => {
      window.location.href = './location.html'
      if (!inRange[location.name]) {
        window.getElementById('rating').style.display = 'none'
      }
      window.getElementById('range-message').textContent = 'To rate this location get within range and refresh'
      window.getElementById('place').textContent = `${location.name}`
    })
  }