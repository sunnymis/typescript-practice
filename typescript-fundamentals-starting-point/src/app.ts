import { ValidSymbol, GenerateConfig, generateRandomId } from './utils';

function identity<T>(arg: T): T {
	return arg;
}


function main() {
	var appComponent = document.getElementById('app')
	setInterval(function () {
		if (appComponent) {
			appComponent.innerHTML = generateRandomId({
				symbol: '$',
				length: 7
			});
		}
	}, 1000)
}

function something(): never {
	throw new Error('error');
}


main();
