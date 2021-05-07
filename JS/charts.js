
                ///// Line Chart //////
const labels = [
  '16-22',
  '23-29',
  '30-5',
  '6-12',
  '13-19',
  '20-26',
  '27-3',
  '4-10',
  '11-17',
  '18-24',
  '25-31'
];
const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: '#7e728a',
    borderColor: '#7e728a',
    data: [0, 20, 8, 36, 45, 23, 45, 52, 19, 42, 60],
  }]
};

const config = {
  type: 'line',
  data,
  options: {}
};

let trafficChart = new Chart(
    document.getElementById('traffic-chart'),
    config
  );

                  ///// Bar Chart/////



                ///// Doughnut Chart/////
