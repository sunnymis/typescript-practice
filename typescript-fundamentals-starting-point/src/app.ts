import { ValidSymbol, GenerateConfig, generateRandomId, Component, enumerable } from './utils';

function identity<T>(arg: T): T {
	return arg;
}

// class Component {
// 	constructor() {
// 		this.log();
// 	}

// 	log() {
// 		console.log('Component Created');
// 	}
// }

// Instance Properties
// class App {
// 	id: string
// 	constructor() {
// 		this.id = 'app'
// 	}
// }




// Static Properties
//class App extends Component {
@Component({
	id: 'app'
})
class App {
	// static id = 'app';
	@enumerable(true)
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

for (let key in App.prototype) {
	console.log(key);
}

main(App);
