const order = [];

export const mergeSort = (array, low, high) => {
    if (low === high){
        order.push([low, array[low]])
        return [array, [array[low]], order];
    }
    const midIndex = Math.floor((high-low)/2 + low);
    const firstHalf = (mergeSort(array, low, midIndex))[1];
    const secondHalf = (mergeSort(array, midIndex+1, high))[1];

    const sortedArray = [];
    let i = 0;
    let j = 0;
    while (i < firstHalf.length && j < secondHalf.length){
        if (firstHalf[i] < secondHalf[j]){
            sortedArray.push(firstHalf[i]);
            order.push([i+low+j, firstHalf[i]]);
            i++;
        }
        else{
            sortedArray.push(secondHalf[j]);
            order.push([j+i+low, secondHalf[j]])
            j++;
        }
    }
    if (i === firstHalf.length){
        while (j < secondHalf.length){
            sortedArray.push(secondHalf[j]);
            order.push([j+i+low, secondHalf[j]]);
            j++;
        }
    }
    else{
        while (i < firstHalf.length){
            sortedArray.push(firstHalf[i]);
            order.push([i+low+j, firstHalf[i]]);
            i++;
        }
    }
    if (sortedArray.length === array.length){
        const copy = order.slice();
        copy.push(["Now you may generate a new array!", 0, 0])
        order.length = 0;
        return [array, sortedArray, copy];
    }
    return [array, sortedArray, order];
};

const order_quick = [];

export const quickSort = (array, low, high) => {
    if (low < high){
        const pi = partition(array, low, high);
        quickSort(array, low, pi - 1)
        quickSort(array, pi + 1, high)
    }

    if (low === 0 && high === array.length-1){
        const copy = order_quick.slice()
        copy.push(["Now you may generate a new array!", 0, 0])
        order_quick.length = 0
        return copy
    }
    return order_quick

}

function partition(array, low, high){
    const pivot = array[high];
    order_quick.push([high])
    let i = (low - 1);
    for (let j = low; j <= high-1; j++){
        if (array[j]<pivot){
            i++;
            const temp = array[i];
            order_quick.push([i, array[j]])
            array[i] = array[j];
            order_quick.push([j, temp])
            array[j] = temp;
        }
    }

    const temp = array[i+1];
    order_quick.push([i+1, array[high]])
    array[i+1] = array[high];
    order_quick.push([high, temp])
    array[high] = temp;

    return (i + 1)
}

const bubble_order = []
export const bubbleSort = (array_original) => {
    const array = array_original.slice()
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j]
                bubble_order.push([j, array[j+1]])
                bubble_order.push([j+1, temp])
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
            else{
                bubble_order.push([j, array[j]])
            }
        }
    }

    const copy = bubble_order.slice()
    copy.push(["Now you may generate a new array!", 0, 0])
    bubble_order.length = 0
    return copy
}

const insertion_order = []
export const insertionSort = (array_original) => {
    const array = array_original.slice()
    for (let i = 1; i < array.length; i++){
        const temp = array[i];
        insertion_order.push([i])
        for (let j = 0; j < i; j++){
            if (array[j] <= temp){
                insertion_order.push([j, array[j]])
            }
            else{
                for (let m = i-1; m >= j; m--){
                    const hold = array[m+1]
                    insertion_order.push([m, hold])
                    insertion_order.push([m+1, array[m]])
                    array[m+1] = array[m]
                    array[m] = hold
                }
                break
            }
        }
    }
    const copy = insertion_order.slice()
    copy.push(["Now you may generate a new array!", 0, 0])
    insertion_order.length = 0
    return copy
}

const heap_order = []
export const heapSort = (array_original) => {
    const array = array_original.slice();
    const n = array_original.length;

    for (let i = Math.floor(n/2 - 1); i >=0; i--){
        heapify(array, n, i);
    }

    for (let i = n-1; i > 0; i--){
        const temp = array[0];
        heap_order.push([0, array[i]])
        heap_order.push([i, temp])
        array[0] = array[i];
        array[i] = temp;

        heapify(array, i, 0);
    }

    const copy = heap_order.slice();
    heap_order.length = 0;
    copy.push(["Now you may generate a new array!", 0, 0])
    return copy
}

function heapify(array, n, i){
    let largest = i;
    const l = 2*i + 1;
    const r= 2*i + 2;

    if (l < n && array[l] > array[largest]){
        largest = l
    }
    if (r < n && array[r] > array[largest]){
        largest = r
    }
    if (largest !== i){
        const swap = array[i];
        heap_order.push([i, array[largest]])
        heap_order.push([largest, swap])
        array[i] = array[largest];
        array[largest] = swap;

        heapify(array, n, largest)
    }
}
