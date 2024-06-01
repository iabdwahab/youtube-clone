window.addEventListener('load', () => {

  // Hide Sidebar when loading if user's device is small
  if (window.innerWidth <= 970) {
    document.querySelector('.sidebar').classList.add('sidebar--hidden')
  }

});