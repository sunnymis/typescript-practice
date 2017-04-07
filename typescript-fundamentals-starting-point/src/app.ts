import { ValidSymbol, GenerateConfig, generateRandomId } from './utils';

function identity<T>(arg: T): T {
	return arg;
}

// Instance Properties
// class App {
// 	id: string
// 	constructor() {
// 		this.id = 'app'
// 	}
// }

// Static Properties
class App {
	static id = 'app';

	onInit(el: HTMLElement | null) {
		setInterval(function () {
			if (el) {
				el.innerHTML = generateRandomId({
					symbol: '$',
					length: 7
				});
			}
		}, 1000)
	}
}

function main(ComponentClass) {
	const comp = new ComponentClass();
	const element = document.getElementById(ComponentClass.id)
	comp.onInit(element);


}

function something(): never {
	throw new Error('error');
}



main(App);
