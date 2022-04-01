let bellSvg = document.getElementById('bellsvg');
let trafficNav = document.querySelectorAll('.traffic-nav-link');
let alertBanner = document.getElementById('alert');
const trafficCanvas = document.querySelector('#traffic-chart');
const doughnutCanvas = document.querySelector('#doughnut-chart');

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('sendBtn');


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
      alertBanner.style.display = "none";
    }
  });

send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
    alert("Please fill out both fields before attempting to send.")
  } else if (user.value === "") {
    alert("Please fill out user field before sending.")
  } else if (message.value === "") {
    alert("Please fill out message field before sending.")
  } else {
    alert(`Message was successfully sent to: ${user.value}`);
  }
});
