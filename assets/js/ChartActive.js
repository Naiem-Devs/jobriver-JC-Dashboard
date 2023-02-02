// Chart one
var options = {
   series: [{
   name: 'series2',
   data: [11, 32, 45, 32, 34, 52, 41]
   }],
   chart: {
   height: 350,
   type: 'area'
   },
   dataLabels: {
   enabled: false
   },
   stroke: {
   curve: 'smooth'
   },
   xaxis: {
   type: 'datetime',
   categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
   },
   tooltip: {
   x: {
       format: 'dd/MM/yy HH:mm'
   },
   },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// Chart Two
var options = {
   series: [{
   name: 'Revenue',
   data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
   }],
   colors:['#01BC9A'],
   chart: {
   type: 'bar',
   height: 350
   },
   plotOptions: {
   bar: {
       horizontal: false,
       columnWidth: '55%',
       endingShape: 'rounded'
   },
   },
   dataLabels: {
   enabled: false
   },
   stroke: {
   show: true,
   width: 1,
   colors: ['transparent']
   },
   xaxis: {
   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
   },
   yaxis: {
   title: {
       text: '$ (thousands)'
   }
   },
   fill: {
   opacity: 1
   },
   tooltip: {
   y: {
       formatter: function (val) {
       return "$ " + val + " thousands"
       }
   }
   }
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();