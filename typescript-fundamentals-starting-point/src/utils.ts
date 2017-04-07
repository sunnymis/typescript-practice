
export type ValidSymbol = '#' | '$'

export interface GenerateConfig {
    symbol: ValidSymbol,
    length: number
}


export function generateRandomId(symbol: ValidSymbol, length: number): string
export function generateRandomId(options: GenerateConfig): string
export function generateRandomId(optionsOrSymbol: ValidSymbol | GenerateConfig): string {
    if (typeof optionsOrSymbol === 'string') {
        return optionsOrSymbol + Math.random().toString(36).substr(2, length)
    }
    return optionsOrSymbol.symbol +
        Math.random().toString(36).substr(2, optionsOrSymbol.length)
}


export function Component(options: { id: string }) {
    console.log(options);
    return (target) => {
        target.id = options.id
    }
}

export function enumerable(isEnumerable: boolean) {
    return (target, propertyKey, propertyDescriptor: PropertyDescriptor) => {
        propertyDescriptor.enumerable = isEnumerable
    }
}
