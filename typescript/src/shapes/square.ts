function square(sideLen: number): Shape {
    const l = sideLen;
    return {
        computeArea: function (): number {
            return l * l
        }
    }
}

export { square }