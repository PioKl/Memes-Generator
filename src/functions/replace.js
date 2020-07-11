export const whiteSpacesReplace = (string) => {
    return string.replace(/\s|\?/g, ''); //usuwa również znak zapytania - tak wygladaloby bez skrocenia return string.replace(/\s//g, '').replace(/\?/g, '')
}