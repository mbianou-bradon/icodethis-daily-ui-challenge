const ctx = document.getElementById('chart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: [40, 56, 114, 121, 140, 150, 166, 286, 300, 318, 332, 362, 377, 433, 456, 476, 488, 498, 522, 528, 538, 553, 575, 589, 626, 669, 704, 751, 782, 827, 859, 862, 879, 886, 898, 910, 940, 964, 996],
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