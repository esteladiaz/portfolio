const getShapeSize = (min, max) => {
    const dimension = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${dimension}px`
}

export const getBackgroundColor = colors => {
    let keys = Object.keys(colors)
    let randomBackgroundColor = colors[keys[ keys.length * Math.random() << 0]]
    return randomBackgroundColor
}

export const size = {
    shapes: {
        shape1: getShapeSize(70, 200),
        shape2: getShapeSize(70, 200),
        shape3: getShapeSize(70, 200),
        shape4: getShapeSize(70, 200),
        shape5: getShapeSize(70, 200),
    },
    icon: '50px'
}

export default { size }