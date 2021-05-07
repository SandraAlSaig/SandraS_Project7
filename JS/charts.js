
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

                  var dailyCanvas = new Chart(ctx, {
                      type: 'line',
                      data: {
                          datasets: [{
                              data: [0, 0],
                          }, {
                              data: [0, 1]
                          }, {
                              data: [1, 0],
                              showLine: true // overrides the `line` dataset default
                          }, {
                              type: 'scatter', // 'line' dataset default does not affect this dataset since it's a 'scatter'
                              data: [1, 1]
                          }]
                      }
                  });




                ///// Doughnut Chart/////
