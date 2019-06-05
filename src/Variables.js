function getIconSize (min, max) {
    const dimension = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${dimension}px`
}

export const size = {
    icons: {
        testFunction: getIconSize(40, 90),
        email: getIconSize(70, 120),
        github: getIconSize(70, 120),
        instagram: getIconSize(70, 120),
        linkedin: getIconSize(40, 90),
        twitter: getIconSize(70, 120),
    }
}

export const color = {
    red: '#ff000'
}

export default { size }