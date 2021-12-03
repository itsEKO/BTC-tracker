//gets dates of the last 7 days for the chart

window.onload = function(){
    const marketCheck = document.getElementById('marketCheck');
}

const dates = [...Array(7)].map((_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - i)
    return d
})

var sMonth = dates[6].getMonth() + 1;
var sDay = dates[6].getDate();
var sYear = dates[6].getFullYear();
var sStr = sYear+'-'+sMonth+"-"+sDay;

var eMonth = dates[0].getMonth() + 1;
var eDay = dates[0].getDate();
var eYear = dates[0].getFullYear();
var eStr = eYear+'-'+eMonth+"-"+eDay;

var startDate = sStr.replace(/\s+/g, '');
var endDate = eStr.replace(/\s+/g, '');

var url = "https://api.coindesk.com/v1/bpi/historical/close.json?start=" + startDate + "&" + endDate;
console.log(url)

//on ready gets coindesk api json
async function getData(){
    const response = await fetch(url)
    const data = await response.json();
    var bpiData = Object.values(data.bpi);
    var bpiDates = Object.keys(data.bpi)
    
    createChart(bpiData, bpiDates)
}

function createChart(btcPrices, btcDates){
//chart element
const ctx = document.getElementById('portfolioChart').getContext('2d');

//amount of coins the user has might remove
var coinAmount = 24.7;

//prices from the last 7 days
var prices = btcPrices;

//amount of change from the last 7 days
var change = btcDates[0] - btcDates[29];

if (isUp(change)){
    marketCheck.innerHTML = "Market is up " + change;
}else{
    marketCheck.innerHTML = "Market is down " + change;
}

//chart element
const portfolioChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: btcDates,
        datasets: [{
            label: 'BTC Price',
            data: prices,
            backgroundColor: [
                'rgba(111, 186, 102, 1)'
            ],
            borderColor: [
                'rgba(111, 186, 102, 1)'
            ],
            borderWidth: 4
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

//checks if change is up or down from the last 7 days
function isUp(totalchange){
    if (totalchange > 0){
        return true;
    }
    else{
        return false;
    }
}

getData();


