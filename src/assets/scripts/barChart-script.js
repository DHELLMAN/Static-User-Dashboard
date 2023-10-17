import ApexCharts from "apexcharts";

export const script = window.addEventListener("load", () => {
    const options = {
        series: [
            {
            name: "Earning",
            color: "#1A56DB",
            data: [
                { x: "Jan", y: 231 },
                { x: "Feb", y: 122 },
                { x: "Mar", y: 63 },
                { x: "Apr", y: 421 },
                { x: "May", y: 122 },
                { x: "Jun", y: 323 },
                { x: "Jul", y: 111 },
                { x: "Aug", y: 122 },
                { x: "Sep", y: 63 },
                { x: "Oct", y: 421 },
                { x: "Nov", y: 122 },
                { x: "Dec", y: 323 },
            ],
            }
        ],
        chart: {
            type: "bar",
            height: "300px",
            fontFamily: "Inter, poppins",
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "70%",
                borderRadiusApplication: "around",
                borderRadius: 8,
            },
        },
        tooltip: {
            shared: true,
            intersect: false,
            style: {
            fontFamily: "Inter, poppins",
            },
        },
        states: {
            hover: {
            filter: {
                type: "darken",
                value: 1,
            },
            },
        },
        stroke: {
            show: true,
            width: 0,
            colors: ["transparent"],
        },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
            right: 2,
            top: -34,
        },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
            floating: false,
            labels: {
            show: true,
            style: {
                fontFamily: "Inter, sans-serif",
                cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            }
            },
            axisBorder: {
            show: false,
            },
            axisTicks: {
            show: false,
            },
        },
        yaxis: {
            show: false,
        },
        fill: {
            opacity: 1,
        },
        }
        
        if(document.getElementById("column-chart") && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(document.getElementById("column-chart"), options);
        chart.render();
    }
});