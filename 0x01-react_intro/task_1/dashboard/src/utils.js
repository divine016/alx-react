export function getFullYear() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    return year;
}

export function getFooterCopy(isIndex) {
    if (isIndex) {
        return 'Holberton School'
    }
    return 'Holberton School main dashboard'
}

console.log(getFullYear());