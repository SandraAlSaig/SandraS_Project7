let bellSvg = document.getElementById('bellsvg');
let trafficNav = document.querySelectorAll('.traffic-nav-link');
let alertBanner = document.getElementById('alert');
const trafficCanvas = document.querySelector('#traffic-chart');
const doughnutCanvas = document.querySelector('#doughnut-chart');


alertBanner.innerHTML =
`
  <div class="alert-banner">
  <p><strong>Alert:</strong> You have <strong>3</strong> overdue tastks to complete</p>
  </div>
  <div>
  <p class="alert-banner-close">x</p>
  </div>
`
  alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
      alert.style.display = "none"

    }
  });
