export default function convert(num: number): string {
    if (num < 1) {
        return ''
    }
    if (num >= 40) {
        return `XL ${convert(num - 40)}`
    }
    if (num >= 10) {
        return `X ${convert(num - 10)}`
    }
    if (num >= 9) {
        return `IX ${convert(num - 9)}`
    }
    if (num >= 5) {
        return `V${convert(num - 5)}`
    }
    if (num >= 4) {
        return `IV ${convert(num - 4)}`
    }
    if (num >= 1) {
        return `I${convert(num - 1)}`
    }
    return ''
}
