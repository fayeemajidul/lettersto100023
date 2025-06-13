function findTheOptimisticNumber(arr) {
    let optimisticNum = arr.find(num => num === Math.max(...arr));
    return optimisticNum ? optimisticNum : "Just like my hopes, it's still out there...";
}

const numbers = [3, 5, 2, 8, 1];
console.log(`The most optimistic number is: ${findTheOptimisticNumber(numbers)}`);