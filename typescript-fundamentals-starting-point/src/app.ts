const symbol: string = '#';
var length: number  = 7;

function generateRandomId() {
    return symbol + Math.random().toString(36).substr(2, length)
}

function main() {
    var appComponent = document.getElementById('app')
    setInterval(function() {
        appComponent.innerHTML = generateRandomId()
    }, 1000)
} 