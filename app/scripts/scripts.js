const words = document.querySelector('body');

words.innerHTML = `Can you work please?`;
words.style.color = 'white';
arr = [34, 39, 66, 20, 83, 16, 29, 77, 58, 5];

const parent = document.querySelector('body');
const paragraph = document.createElement('p');
    
paragraph.id = 'paragraph';
paragraph.innerText = 'hi';

parent.appendChild(paragraph);



// Gotta create the algorithms in this document, noice


createBars(arr);

document.addEventListener('DOMContentLoaded', insertionSort(arr));

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
        count += 100;
    }
    
    sCount = 400;
    for (let i = 0; i < arr.length; i++) {
        const bar = document.getElementById(i);

        setTimeout(() => {
            bar.style.backgroundColor = 'white';
        }, sCount);
        sCount += 100;
    }
}
















