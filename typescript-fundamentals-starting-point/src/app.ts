type ValidSymbol = '#' | '$'

function generateRandomId(symbol: ValidSymbol, length: number): string {
    return symbol + Math.random().toString(36).substr(2, length)
}

function main() {
    var appComponent = document.getElementById('app')
    setInterval(function() {
        appComponent.innerHTML = generateRandomId('#', 7);
    }, 1000)
} 

function something(): never {
	throw new Error('error');
}
