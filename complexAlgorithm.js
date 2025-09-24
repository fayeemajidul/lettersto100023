function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++]);
    }
    
    // Counsel for the remaining elements that were left unmerged: 
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// WARNING: Excessive use of mergeSort may lead to recursive existential crises.