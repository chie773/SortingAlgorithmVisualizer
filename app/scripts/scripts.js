const words = document.querySelector('body');

words.innerHTML = `Can you work please?`;
words.style.color = 'white';
arr = [112, 27, 162, 72, 147, 12, 187, 97, 32, 177,
 202, 67, 127, 47, 182, 82, 157, 22, 137, 52,
 192, 107, 172, 62, 207, 92, 117, 37, 167, 152,
 142, 77, 57, 197, 122, 42, 87, 132, 17, 102];

const parent = document.querySelector('body');
const paragraph = document.createElement('p');
    
paragraph.id = 'paragraph';
paragraph.innerText = 'hi';

parent.appendChild(paragraph);



// Gotta create the algorithms in this document, noice


createBars(arr);

document.addEventListener('DOMContentLoaded', mergeSort(arr));

// const test = document.getElementById(4);
// const test2 = document.getElementById(2)

// test.style.height = test2.style.height;

// Create Bars
function createBars(arr){
    const bars = document.createElement('div')
    bars.style.justifyContent = 'center';
    bars.style.display = 'flex';
    bars.style.position = 'relative';
    bars.st
    
    
    for (let i = 0; i < arr.length; i++){
        let bar = document.createElement('div');
        bar.id = i.toString();
        
        bar.style.width = '20px';
        bar.style.height = `${arr[i]}px`;
        bar.style.backgroundColor = `white`;
        bar.style.posiion = `absolute`;
        bar.style.bottom = '0px';
        bar.style.marginTop = 'auto';

        
        
        bars.appendChild(bar);
    }
    parent.appendChild(bars);
}

// Edit algorithm to highlight current swapped bar position

// Create swap function that swaps the bar elements in place 
// --- Use setTimeout to delay it slighty and AWAIT the timeout so the algorithm doesn't continue until its displayed

// Figure out the rest later

function insertionSort(arr) {
    // const parent = document.querySelector('body');
    // const paragraph = document.createElement('p');
    // paragraph.id = 'paragraph';
    // paragraph.innerText = 'hi';
    
    count = 100;
    for (let i = 1; i < arr.length; i++) {
        let copy = arr;
        setTimeout(setCurrBar, count, i);
        count += 100;

        let key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            setTimeout(swapElements, count, j+1, j);
            count += 100;
            arr[j + 1] = arr[j];
            j--;
        }

        
        arr[j + 1] = key;
        let idx = j + 1;
        const bar = document.getElementById(idx);
        setTimeout(() => {
            bar.style.height = `${key.toString()}px`;
        }, count);
        count += 100;

        setTimeout(resetCurrBar, count, j+1);
        count += 100;       
    }

    setTimeout(finishAnimation, count, arr);
}


function selectionSort(arr) { 
    count = 100;
    for (let i = 0; i < arr.length - 1 ; i++) {
        for (let j = i; j < arr.length; j++) {
            setTimeout(setCurrBar, count, j);
            count += 20;
            if (arr[j] < arr[i]) {
                
                setTimeout(swapElements, count, i, j);
                count += 20;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp; 
                setTimeout(resetCurrBar, count, j);
                count += 20;
            } else {
                setTimeout(resetCurrBar, count, j);
                count += 20;
            }
        }
        setTimeout(resetCurrBar, count, i);
        count += 20;
    }
    setTimeout(finishAnimation, count, arr);
}


// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;

//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));

//   mergedArr = merge(left, right)
//   console.log(mergedArr);

//   return mergedArr;
// }

// function merge(left, right) {
//   let result = [];
//   let i = 0, j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] <= right[j]) {
//       result.push(left[i++]);
//     } else {
//       result.push(right[j++]);
//     }
//   }
//   for (let idx = 0; idx < result.length; idx++) {
//         const bar = document.getElementById(idx);

//         const height = result[idx];
//         // setTimeout(() => {
//             // }, idx * 50);
//         setTimeout(() => {
//             bar.style.height = `${height}px`;
//         }, counter);
//         counter += 50;
//     }

//   return result.concat(left.slice(i)).concat(right.slice(j));
// }


//Iterative Merge Sort
// JavaScript program to perform
// iterative merge sort.

// Helper function to merge two sorted portions of the array

function merge(arr, left, mid, right, counter) {
    let arr1 = arr.slice(left, mid + 1);
    let arr2 = arr.slice(mid + 1, right + 1);
    
    let i = 0, j = 0, k = left;
    
    while (i < arr1.length && j < arr2.length) {
        arr[k++] = arr1[i] <= arr2[j] ? arr1[i++] : arr2[j++];
    }
    
    while (i < arr1.length) arr[k++] = arr1[i++];
    while (j < arr2.length) arr[k++] = arr2[j++];

    setTimeout(() => {
        for (let idx = 0; idx < arr.length; idx++) {
        const bar = document.getElementById(idx);

        const height = arr[idx];
        // setTimeout(() => {
            // }, idx * 50);
        bar.style.height = `${height}px`;
        }
    }, counter);
    counter += 100;

    return counter;
}

// Main sorting function
function mergeSort(arr) {
    let n = arr.length;
    let counter = 0;

    for (let currSize = 1; currSize <= n - 1; currSize *= 2) {
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * currSize) {
            let mid = Math.min(leftStart + currSize - 1, n - 1);
            let rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);
            merge(arr, leftStart, mid, rightEnd, counter);
            setTimeout(displaySnapshot, counter, [...arr]);
            counter += 100;
        }
    }

    setTimeout(finishAnimation, counter, arr);
}



function displaySnapshot (arr) {
    for (let idx = 0; idx < arr.length; idx++) {
    const bar = document.getElementById(idx);
    
    const height = arr[idx];
    // setTimeout(() => {
        // }, idx * 50);
        bar.style.height = `${height}px`;
    }
    console.log(arr);
}
















// Lets see if i can do in place swapping

function swapElements(a, b){
    // Query the ID of J and j+1
    const firstBar = document.getElementById(a);
    const secondBar = document.getElementById(b);

    // Swap the heights of the div elements
    const temp = firstBar.style.height;
    switchBars(firstBar, secondBar);
    firstBar.style.height = secondBar.style.height;
    secondBar.style.height = temp;
}

function switchBars(first, second) {
    const temp = first.style.backgroundColor;

    first.style.backgroundColor = second.style.backgroundColor;
    second.style.backgroundColor = temp;
}


function setCurrBar(idx) {
    const current = document.getElementById(idx);

    current.style.backgroundColor = 'red';
}

function resetCurrBar(idx) {
    const current = document.getElementById(idx);

    current.style.backgroundColor = 'white';
}

function finishAnimation(arr) {
    count = 0 
    for (let i = 0; i < arr.length; i++) {
        const bar = document.getElementById(i);

        setTimeout(() => {
            bar.style.backgroundColor = 'green';
        }, count);
        count += 50;
    }
    
    sCount = 350;
    for (let i = 0; i < arr.length; i++) {
        const bar = document.getElementById(i);

        setTimeout(() => {
            bar.style.backgroundColor = 'white';
        }, sCount);
        sCount += 50;
    }
}
















