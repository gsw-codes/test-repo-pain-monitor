

let myChart = document.getElementById('myChart').getContext('2d');

    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#320466';




let barChart = new Chart(myChart, {
    type: 'bar', // bar, pie, line, radar 
    data: {
        labels:['Baseline','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets:[{
            label:'Average Pain Level', 
            data: [0, 2, 4, 5, 4, 9, 4, 5],
            //backgroundColor: 'purple'
            backgroundColor: ['#4A90E2', '#4A90E2', '#4A90E2', '#4A90E2', '#F093FB', '#4A90E2', '#4A90E2', '#4A90E2'],
            borderWidth:1,
            borderColor: '#320466'


        }]
    },
    options: {}
});




