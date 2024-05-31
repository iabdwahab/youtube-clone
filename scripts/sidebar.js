const sidebarLinks = document.querySelectorAll('.sidebar-list__link');
const sidebarToggleBtn = document.querySelector('.header__sidebar-toggle-btn');
const sidebarElement = document.querySelector('.sidebar');

// Sidebar Active Link
sidebarLinks.forEach((sidebarLink) => {

  sidebarLink.addEventListener('click', () => {
    // Remove current active class link.
    document.querySelector('.sidebar-list__link--active').classList.remove('sidebar-list__link--active');

    // Add active class link to selected element.
    sidebarLink.classList.add('sidebar-list__link--active');
  });
});

// Sidebar Visibility
sidebarToggleBtn.addEventListener('click', () => {
  sidebarElement.classList.toggle('sidebar--hidden');
});