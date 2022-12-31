const ctx = document.getElementById('chart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: [36, 56, 114, 121, 165, 207, 223, 286, 326, 328, 330, 332, 407, 433, 476, 490, 508, 520, 522, 524, 536, 563, 615, 629, 716, 739, 764, 781, 782, 783, 789, 842, 849, 866, 878, 901, 920, 924, 996],
        datasets: [{
            label: 'Fri, Apr10, 7:51 PM',
            data: [0, 225, 95, 160, 73, 80, 30, 170, 40, 95, 40, 195, 135, 160, 55, 200, 10, 80, 10, 0, 60, 135, 75, 200, 20, 205, 0, 80, 10, 150, 80, 120, 50, 60, 0, 120, 0, 20, 0],
            borderWidth: 3,
            borderColor: "#6666ff"
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 225,
                ticks: {
                    count: 4,
                    callback: function (value) {
                        return `${value}%`
                    }
                }
            },
            x: {
                type: 'linear',
                beginAtZero: 0,
                min: 0,
                max: 996,
                ticks: {
                    count: 7,
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title: function () {
                        return `Fri, Apr10, 7:51 PM`
                    },
                    label: function (context) {
                        let label = context.dataset.data[context.dataIndex] || ""
                        return `${label}%`;
                    }
                },
                displayColors: false,
                caretSize: 0,
                backgroundColor: '#100F4B'
            },
            legend: {
                display: false
            }
        }
    }
});