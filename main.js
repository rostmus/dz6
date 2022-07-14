
export function sortObj(obj, mass) {
    let arr1 = []
    let arr2 = []
    for (let key in obj) {
        if (mass.includes(key)) {
            arr1.push({ key: key, value: obj[key] })
        }
    }
    for (let key in obj) {
        if (!mass.includes(key)) {
            arr2.push({ key: key, value: obj[key] })
        }
    }
    arr2.sort((a, b) => {
        if (a.key < b.key) {
            return -1
        }
        if (a.key > b.key) {
            return 1
        }
    })
    return arr1.concat(arr2)
}

export function specialFind(obj, num) {
    const { special } = obj
    let findEl = special.find((el) => {
        return el.id === num
    })
    const { id, name, icon, description } = findEl
    const newObj = {
        id,
        name,
        description,
        icon
    }
    if (newObj.description === undefined) {
        newObj.description = 'Описание недоступно.'
    }

    return newObj
}