var ctx = document.getElementById("myChart");
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#320466';


var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [{
            label: 'Average Pain Level',
            data: [2, 5, 6, 3, 7, 4, 5],
            backgroundColor: ['#4A90E2', '#4A90E2', '#4A90E2', '#4A90E2', '#F093FB', '#4A90E2', '#4A90E2', '#4A90E2'],
            borderWidth: 1,
            borderColor: '#320466'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 10,
                    beginAtZero: true
                    
                }
            }]
        }
    }
});