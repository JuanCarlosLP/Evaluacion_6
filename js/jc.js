const jc = {};

// Calls a function once for each element in an array, in order.
jc.forEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

// Creates an array filled with all array elements that pass a test (provided as a function).
jc.filter = (array, callback) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// Creates a new array with the results of calling a function for every array element.
jc.map = (array, callback) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

// Returns the value of the first element in an array that pass a test (provided as a function)
jc.find = (array, callback) => {
    let finded = 0;
    let result = '';
    for (let i = 0; finded === 0; i++) {
        if (i < array.length) {
            if (callback(array[i])) {
                result = array[i];
                finded = 1;
            }
        } else {
            console.log('Not found')
            finded = 1;
        }
    }
    return result;
}

// Returns the index of the first element in an array that pass a test (provided as a function).
jc.findIndex = (array, callback) => {
    let finded = 0;
    let result = '';
    for (let i = 0; finded === 0; i++) {
        if (i < array.length) {
            if (callback(array[i])) {
                result = i;
                finded = 1;
            }
        } else {
            console.log('Not found')
            finded = 1;
        }
    }
    return result;
}

// Returns true if the value is present in the list
jc.contains = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return callback(array[i])
        }
    }
}

// Extracts a list of property values
jc.pluck = (array, callback) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

// Returns a copy of the array with all instances of the values removed
jc.without = (array, callback) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

export default jc;