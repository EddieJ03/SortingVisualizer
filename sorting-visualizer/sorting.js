// In a module context, variables don't automatically get declared globally. You'll have to attach them to window yourself. This is to prevent the scope ambiguity issues that you'd run into when using normal script tags.

import { MergeSort } from './MergeSort.js'
import { SelectionSort } from './SelectionSort.js'
import { InsertionSort } from './InsertionSort.js'
import QuickSort from './QuickSort.js'
import HeapSort from './HeapSort.js'
import ShellSort from './ShellSort.js'

let NUM_BARS = 20;
let DELAY = 200;


var slider = document.getElementById("range")

slider.addEventListener("input", changeIt) 

function changeIt() {
	NUM_BARS = this.value;
	generate()
}

var slider2 = document.getElementById("speed")

slider2.addEventListener("input", changeSpeed) 

function changeSpeed() {
	DELAY = 525 - this.value
}

const container = document.querySelector(".data-container");

// function to generate bars
function generatebars(num = NUM_BARS) {
	for (let i = 0; i < num; i += 1) {
		const value = Math.floor(Math.random() * 400) + 1;
		
		const bar = document.createElement("div");

		bar.classList.add("bar");

		bar.style.height = `${value}px`;
		
		const barLabel = document.createElement("label");

		barLabel.classList.add("bar_id");
		
		bar.appendChild(barLabel);

		container.appendChild(bar);
	}
}

// Call "generatebars" function
generatebars();

window.mergesort = async function mergesort() {
	await MergeSort(DELAY)
}

window.heapsort = async function heapsort() {
	await HeapSort(DELAY)
}

window.quicksort = async function quicksort() {
	await QuickSort(DELAY)
}

// asynchronous function to perform "Selection Sort"
window.selectionsort = async function selectionsort() {
	await SelectionSort(DELAY)
}

window.insertionsort = async function insertionsort() {
	await InsertionSort(DELAY)
}

window.shellsort = async function shellsort() {
	await ShellSort(DELAY)
}

// function to generate new random array
function generate(num = NUM_BARS)
{
    let myObj = document.getElementsByClassName("bar")

    while (myObj.length > 0) {
        myObj.item(0).remove()
    }

    //for loop to generate 20 bars
	for (let i = 0; i < num; i += 1) {
		const value = Math.floor(Math.random() * 400) + 1;
		
		const bar = document.createElement("div");

		bar.classList.add("bar");

		bar.style.height = `${value}px`;
		
		const barLabel = document.createElement("label");

		barLabel.classList.add("bar_id");
		
		bar.appendChild(barLabel);

		container.appendChild(bar);
	}
}

// function to disable the button
window.disable = function disable()
{
// To disable the button "Generate New Array"
	document.getElementById("Button1").disabled = true;
	document.getElementById("Button1").style.backgroundColor = "#905bcc";
	document.getElementById("Button1").style.cursor = "default"

	// To disable the button "Selection Sort"
	document.getElementById("Button2").disabled = true;
	document.getElementById("Button2").style.backgroundColor = "#905bcc";
	document.getElementById("Button2").style.cursor = "default"

	document.getElementById("Button3").disabled = true;
	document.getElementById("Button3").style.backgroundColor = "#905bcc";
	document.getElementById("Button3").style.cursor = "default"

	document.getElementById("Button4").disabled = true;
	document.getElementById("Button4").style.backgroundColor = "#905bcc";
	document.getElementById("Button4").style.cursor = "default"

	document.getElementById("Button5").disabled = true;
	document.getElementById("Button5").style.backgroundColor = "#905bcc";
	document.getElementById("Button5").style.cursor = "default"

	document.getElementById("Button6").disabled = true;
	document.getElementById("Button6").style.backgroundColor = "#905bcc";
	document.getElementById("Button6").style.cursor = "default"

	document.getElementById("Button7").disabled = true;
	document.getElementById("Button7").style.backgroundColor = "#905bcc";
	document.getElementById("Button7").style.cursor = "default"

	slider.disabled = true;
	slider2.disabled = true;
}

window.revertBack = function revertBack() {
	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#210070";
	document.getElementById("Button1").style.cursor = "pointer";

	document.getElementById("Button2").disabled = false;
	document.getElementById("Button2").style.backgroundColor = "#210070";
	document.getElementById("Button2").style.cursor = "pointer";
		
	document.getElementById("Button3").disabled = false;
	document.getElementById("Button3").style.backgroundColor = "#210070";
	document.getElementById("Button3").style.cursor = "pointer";

	document.getElementById("Button4").disabled = false;
	document.getElementById("Button4").style.backgroundColor = "#210070";
	document.getElementById("Button4").style.cursor = "pointer";

	document.getElementById("Button5").disabled = false;
	document.getElementById("Button5").style.backgroundColor = "#210070";
	document.getElementById("Button5").style.cursor = "pointer"

	document.getElementById("Button6").disabled = false;
	document.getElementById("Button6").style.backgroundColor = "#210070";
	document.getElementById("Button6").style.cursor = "pointer"

	document.getElementById("Button7").disabled = false;
	document.getElementById("Button7").style.backgroundColor = "#210070";
	document.getElementById("Button7").style.cursor = "pointer"

	slider.disabled = false;
	slider2.disabled = false
}

document.getElementById("Button1").addEventListener("mouseenter", () => {
	document.getElementById("Button1").style.backgroundColor = "#905bcc";
})

document.getElementById("Button1").addEventListener("mouseleave", () => {
	document.getElementById("Button1").style.backgroundColor = "#210070";
})

document.getElementById("Button2").addEventListener("mouseenter", () => {
	document.getElementById("Button2").style.backgroundColor = "#905bcc";
})

document.getElementById("Button2").addEventListener("mouseleave", () => {
	document.getElementById("Button2").style.backgroundColor = "#210070";
})

document.getElementById("Button3").addEventListener("mouseenter", () => {
	document.getElementById("Button3").style.backgroundColor = "#905bcc";
})

document.getElementById("Button3").addEventListener("mouseleave", () => {
	document.getElementById("Button3").style.backgroundColor = "#210070";
})

document.getElementById("Button4").addEventListener("mouseenter", () => {
	document.getElementById("Button4").style.backgroundColor = "#905bcc";
})

document.getElementById("Button4").addEventListener("mouseleave", () => {
	document.getElementById("Button4").style.backgroundColor = "#210070";
})

document.getElementById("Button5").addEventListener("mouseenter", () => {
	document.getElementById("Button5").style.backgroundColor = "#905bcc";
})

document.getElementById("Button5").addEventListener("mouseleave", () => {
	document.getElementById("Button5").style.backgroundColor = "#210070";
})

document.getElementById("Button6").addEventListener("mouseenter", () => {
	document.getElementById("Button6").style.backgroundColor = "#905bcc";
})

document.getElementById("Button6").addEventListener("mouseleave", () => {
	document.getElementById("Button6").style.backgroundColor = "#210070";
})


document.getElementById("Button7").addEventListener("mouseenter", () => {
	document.getElementById("Button7").style.backgroundColor = "#905bcc";
})

document.getElementById("Button7").addEventListener("mouseleave", () => {
	document.getElementById("Button7").style.backgroundColor = "#210070";
})


