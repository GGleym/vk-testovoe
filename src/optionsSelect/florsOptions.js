
export const floorsOptions = () => {
    let newOptions = []
    for (let i = 3; i < 28; i++) {
        newOptions[i] = {value: i, label: i}
    }
    return newOptions
}