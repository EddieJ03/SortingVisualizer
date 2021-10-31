let NUM_BARS = 20;
let DELAY = 200;

// finish code for slider here
var slider = document.getElementById("myRange")

// Update the current slider value (each time you drag the slider handle)
slider.addEventListener("input", changeIt) 

function changeIt() {
	NUM_BARS = this.value;
	DELAY = Math.floor((200 / NUM_BARS)) * 20
	generate()
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


// asynchronous function to perform "Heap Sort"

async function HeapSort(delay = DELAY) {

	document.getElementById('info-h2').textContent = "Heapsort"
	document.querySelector(".info-paragraph").textContent = "My implementation of Heapsort involves first building a max heap then repeatedly taking the element at the front, swapping it with the element at the last available index, and sinking the newly swapped element at the front. Building the max heap takes O(n) time complexity and the time complexity of swapping and sinking is O(nlogn). Thus, the overall time complexity is O(nlogn + n) or O(nlogn)."

	let bars = document.querySelectorAll(".bar")
	
	// Build Min Heap
	for (var i = Math.floor((bars.length) / 2); i >= 0; i--) {

		let val = i;

		while (val < bars.length) {

			bars[val].style.backgroundColor = "darkblue"

			// To pause the execution of code 
			await new Promise((resolve) =>
				setTimeout(() => {
				resolve();
				}, delay)
			);

			if (bars[(2 * val) + 1] == null && bars[(2 * val) + 2] == null) {
				bars[val].style.backgroundColor = "rgb(255, 167, 129)";
				break;
			}

			else if (bars[(2 * val) + 1] != null && bars[(2 * val) + 2] == null) {
				bars[(2 * val) + 1].style.backgroundColor = "rgb(220, 20, 60)"

				var val1 = parseInt(bars[val].style.height.split("px")[0]);
				var val3 = parseInt(bars[2 * val + 1].style.height.split("px")[0]);
		
				// To pause the execution of code 
				await new Promise((resolve) =>
					setTimeout(() => {
					resolve();
					}, delay)
				);
	
				if (val1 < val3) { 
					var temp1 = bars[2 * val + 1].style.height;
					bars[2 * val + 1].style.height = bars[val].style.height;
					bars[val].style.height = temp1;
					bars[val].style.backgroundColor = "rgb(255, 167, 129)";
					bars[2 * val + 1].style.backgroundColor = "rgb(255, 167, 129)";
					val = val * 2 + 1;
				} else {
					bars[val].style.backgroundColor = "rgb(255, 167, 129)";
					bars[2 * val + 1].style.backgroundColor = "rgb(255, 167, 129)";
					break;
				}
		
			} 
			
			else {
				bars[(2 * val) + 1].style.backgroundColor = "rgb(220, 20, 60)"
				bars[(2 * val) + 2].style.backgroundColor = "rgb(220, 20, 60)"
		
				// To pause the execution of code 
				await new Promise((resolve) =>
					setTimeout(() => {
					resolve();
					}, delay)
				);
		
				var val1 = parseInt(bars[val].style.height.split("px")[0]);
				var val2 = parseInt(bars[2 * val + 1].style.height.split("px")[0]);
				var val3 = parseInt(bars[2 * val + 2].style.height.split("px")[0]);
		
				if (val1 < val2 || val1 < val3) {
					if (val2 > val3) {
						var temp1 = bars[2 * val + 1].style.height;
						bars[2 * val + 1].style.height = bars[val].style.height;
						bars[val].style.height = temp1;

						await new Promise((resolve) =>
							setTimeout(() => {
							resolve();
							}, delay)
						);

						bars[val].style.backgroundColor = "rgb(255, 167, 129)";
						bars[2 * val + 1].style.backgroundColor = "rgb(255, 167, 129)";
						bars[2 * val + 2].style.backgroundColor = "rgb(255, 167, 129)";

						val = val * 2 + 1;
					} else {
						var temp1 = bars[2 * val + 2].style.height;
						bars[2 * val + 2].style.height = bars[val].style.height;
						bars[val].style.height = temp1;

						await new Promise((resolve) =>
							setTimeout(() => {
							resolve();
							}, delay)
						);

						bars[val].style.backgroundColor = "rgb(255, 167, 129)";
						bars[2 * val + 1].style.backgroundColor = "rgb(255, 167, 129)";
						bars[2 * val + 2].style.backgroundColor = "rgb(255, 167, 129)";

						val = val * 2 + 2;
					}
				} else {
					bars[val].style.backgroundColor = "rgb(255, 167, 129)";
					bars[2 * val + 1].style.backgroundColor = "rgb(255, 167, 129)";
					bars[2 * val + 2].style.backgroundColor = "rgb(255, 167, 129)";
					break;
				}
			}

			// To pause the execution of code 
			await new Promise((resolve) =>
				setTimeout(() => {
				resolve();
				}, delay)
			);
		}

	}

	// Sort the Min Heap

	for (let i = bars.length - 1; i >= 0; i--) {
		bars[i].style.backgroundColor = "darkblue"
		bars[0].style.backgroundColor = "darkblue"

		await new Promise((resolve) =>
			setTimeout(() => {
			resolve();
			}, delay)
		);

		var temp1 = bars[i].style.height;
		bars[i].style.height = bars[0].style.height;
		bars[0].style.height = temp1;

		bars[0].style.backgroundColor = "rgb(255, 167, 129)";
		bars[i].style.backgroundColor = "rgb(255, 167, 129)";

		let val = 0;

		while (2 * val + 1 < i || 2 * val + 2 < i) {

			bars[val].style.backgroundColor = "darkblue"

			if (bars[(2 * val) + 1] == null && bars[(2 * val) + 2] == null) {
				bars[val].style.backgroundColor = "rgb(255, 167, 129)";
				break;
			}

			else if (bars[(2 * val) + 1] != null && bars[(2 * val) + 2] == null && 2 * val + 1 < i) {
				bars[(2 * val) + 1].style.backgroundColor = "rgb(220, 20, 60)"

				var val1 = parseInt(bars[val].style.height.split("px")[0]);
				var val3 = parseInt(bars[2 * val + 1].style.height.split("px")[0]);
		
				// To pause the execution of code 
				await new Promise((resolve) =>
					setTimeout(() => {
					resolve();
					}, delay)
				);
	
				if (val1 < val3) { 
					var temp1 = bars[2 * val + 1].style.height;
					bars[2 * val + 1].style.height = bars[val].style.height;
					bars[val].style.height = temp1;
					bars[val].style.backgroundColor = "rgb(255, 167, 129)";
					bars[2 * val + 1].style.backgroundColor = "rgb(255, 167, 129)";
					val = val * 2 + 1;
				} else {
					bars[val].style.backgroundColor = "rgb(255, 167, 129)";
					bars[2 * val + 1].style.backgroundColor = "rgb(255, 167, 129)";
					break;
				}
		
			} 
			
			else {
				if (2 * val + 2 < i) {
					bars[(2 * val) + 1].style.backgroundColor = "rgb(220, 20, 60)"
					bars[(2 * val) + 2].style.backgroundColor = "rgb(220, 20, 60)"
			
					// To pause the execution of code 
					await new Promise((resolve) =>
						setTimeout(() => {
						resolve();
						}, delay)
					);
			
					var val1 = parseInt(bars[val].style.height.split("px")[0]);
					var val2 = parseInt(bars[2 * val + 1].style.height.split("px")[0]);
					var val3 = parseInt(bars[2 * val + 2].style.height.split("px")[0]);
			
					if (val1 < val2 || val1 < val3) {
						if (val2 > val3) {
							var temp1 = bars[2 * val + 1].style.height;
							bars[2 * val + 1].style.height = bars[val].style.height;
							bars[val].style.height = temp1;
	
							await new Promise((resolve) =>
								setTimeout(() => {
								resolve();
								}, delay)
							);
	
							bars[val].style.backgroundColor = "rgb(255, 167, 129)";
							bars[2 * val + 1].style.backgroundColor = "rgb(255, 167, 129)";
							bars[2 * val + 2].style.backgroundColor = "rgb(255, 167, 129)";
	
							val = val * 2 + 1;
						} else {
							var temp1 = bars[2 * val + 2].style.height;
							bars[2 * val + 2].style.height = bars[val].style.height;
							bars[val].style.height = temp1;
	
							await new Promise((resolve) =>
								setTimeout(() => {
								resolve();
								}, delay)
							);
	
							bars[val].style.backgroundColor = "rgb(255, 167, 129)";
							bars[2 * val + 1].style.backgroundColor = "rgb(255, 167, 129)";
							bars[2 * val + 2].style.backgroundColor = "rgb(255, 167, 129)";
	
							val = val * 2 + 2;
						}
					} else {
						bars[val].style.backgroundColor = "rgb(255, 167, 129)";
						bars[2 * val + 1].style.backgroundColor = "rgb(255, 167, 129)";
						bars[2 * val + 2].style.backgroundColor = "rgb(255, 167, 129)";
						break;
					}
				} else if (2 * val + 1 < i) {
					bars[(2 * val) + 1].style.backgroundColor = "rgb(220, 20, 60)"
			
					// To pause the execution of code 
					await new Promise((resolve) =>
						setTimeout(() => {
						resolve();
						}, delay)
					);
			
					var val1 = parseInt(bars[val].style.height.split("px")[0]);
					var val2 = parseInt(bars[2 * val + 1].style.height.split("px")[0]);
			
					if (val1 < val2) {
							var temp1 = bars[2 * val + 1].style.height;
							bars[2 * val + 1].style.height = bars[val].style.height;
							bars[val].style.height = temp1;
	
							await new Promise((resolve) =>
								setTimeout(() => {
								resolve();
								}, delay)
							);
	
							bars[val].style.backgroundColor = "rgb(255, 167, 129)";
							bars[2 * val + 1].style.backgroundColor = "rgb(255, 167, 129)";
							bars[2 * val + 2].style.backgroundColor = "rgb(255, 167, 129)";
	
							val = val * 2 + 1;
						
					} else {
						bars[val].style.backgroundColor = "rgb(255, 167, 129)";
						bars[2 * val + 1].style.backgroundColor = "rgb(255, 167, 129)";
						break;
					}
				}
				
				
				
				else {
					bars[val].style.backgroundColor = "rgb(255, 167, 129)";
					break;
				}
				
			}
			
		}
		await new Promise((resolve) =>
			setTimeout(() => {
			resolve();
			}, delay)
		);
	}

	revertBack()

}


// asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = DELAY) {

document.getElementById('info-h2').textContent = "Selection Sort"

document.querySelector(".info-paragraph").textContent = "Selection Sort repeatedly looks for the smallest item less than the one it is currently one, swaps the smallest item with the item at its current index, and then moves on to the next index. This algorithm has O(n^2) time complexity in its best and worst case."

let bars = document.querySelectorAll(".bar");

// Assign 0 to min_idx
var min_idx = 0;

for (var i = 0; i < bars.length; i += 1) {

	// Assign i to min_idx
	min_idx = i;

	// Provide darkblue color to the ith bar
	bars[i].style.backgroundColor = "darkblue";

	for (var j = i + 1; j < bars.length; j += 1) {

	// Provide red color to the jth bar
	bars[j].style.backgroundColor = "red";
		
	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, delay)
	);

	// To store the integer value of jth bar to var1
	var val1 = parseInt(bars[j].style.height.split("px")[0]);

	// To store the integer value of (min_idx)th bar to var2
	var val2 = parseInt(bars[min_idx].style.height.split("px")[0]);
		
	// Compare val1 & val2
	if (val1 < val2) {
		if (min_idx !== i) {

		// Provide skyblue color to the (min-idx)th bar
		bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";
		}
		min_idx = j;
	} else {

		// Provide skyblue color to the jth bar
		bars[j].style.backgroundColor = " rgb(24, 190, 255)";
	}
	}

	// To swap ith and (min_idx)th bar
	var temp1 = bars[min_idx].style.height;
	bars[min_idx].style.height = bars[i].style.height;
	bars[i].style.height = temp1;
	
	// To pause the execution of code for 300 milliseconds
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);

	// Provide skyblue color to the (min-idx)th bar
	bars[min_idx].style.backgroundColor = "rgb(24, 190, 255)";

	bars[i].style.backgroundColor = "rgb(255, 167, 129)";
}

	revertBack()
}

// asynchronous function to perform "Insertion Sort"
async function InsertionSort(delay = DELAY) {
	document.querySelector(".info-paragraph").textContent = "Insertion sort involves repeatedly shifting the element that it is currently on to the left until it hits an element that is less than it. This algorithm runs in O(n^2) in the worst case, which is when the array is in reverse order, and O(n) in the best case, which is when the array is already sorted."

	document.getElementById('info-h2').textContent = "Insertion Sort"

	let bars = document.querySelectorAll(".bar");

	for (var i = 1; i < bars.length; i++) {

		let val = i;
	
		// Provide red color to the ith bar
		bars[i].style.backgroundColor = "red";
		
		for (var j = i - 1; j >= 0; j--) {
		
			// Provide red color to the jth bar
			bars[j].style.backgroundColor = "red";

			bars[val].style.backgroundColor = "red";
				
			// To pause the execution of code for 300 milliseconds
			await new Promise((resolve) =>
				setTimeout(() => {
				resolve();
				}, delay)
			);
		
			// To store the integer value of jth bar to var1
			var val1 = parseInt(bars[j].style.height.split("px")[0]);
		
			// To store the integer value of ith bar to var2
			var val2 = parseInt(bars[val].style.height.split("px")[0]);
				
			// Compare val1 & val2
			if (val1 < val2) {
				// Provide pink color to the jth bar
				bars[j].style.backgroundColor = "rgb(255, 167, 129)";

				// Provide pink color to the ith bar
				bars[val].style.backgroundColor = "rgb(255, 167, 129)";

				break;
			} else {
				// To swap ith and jth bar
				var temp1 = bars[j].style.height;
				bars[j].style.height = bars[val].style.height;
				bars[val].style.height = temp1;

				// To pause the execution of code for 300 milliseconds
				await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
				);
			
				// Provide pink color to the jth bar
				bars[j].style.backgroundColor = "rgb(255, 167, 129)";
			
				// Provide pink color to the ith bar
				bars[val].style.backgroundColor = "rgb(255, 167, 129)";

				val--;
			}
		}
	}


	revertBack()
	
}

// ShellSort
// Utilizing 3x + 1 ShellSort implementation
async function ShellSort(delay = DELAY) {
	document.getElementById('info-h2').textContent = "Shell Sort"

	document.querySelector(".info-paragraph").textContent = "Shellsort is a sorting algorithm that is similar to insertion sort except that it starts by sorting elements farthest apart from each other as determined by the gap and repeatedly reducing the gap until the gap is 1. My implementation is based of off the 3x + 1 implementation of Shellsort with a worst case time complexity of O(n^(3/2)). It finds the greatest possible value less than the length of the array divided by 3, uses this as the gap for a pass through, and then divides the gap by 3 and repeats."


	let bars = document.querySelectorAll(".bar");

	let len = bars.length;

	let h = 1;

	while(h < Math.floor(len / 3)) {
		h = 3 * h + 1
	}

	while(h >= 1) {
		for (let i = h; i < len; i++) {
			for (let j = i; j >= h; j-= h) {
				bars[j].style.backgroundColor = "red";

				bars[j - h].style.backgroundColor = "red";

				await new Promise((resolve) =>
					setTimeout(() => {
					resolve();
					}, delay)
				);

				if (parseInt(bars[j].style.height.split("px")[0]) < parseInt(bars[j - h].style.height.split("px")[0])) {
					var temp1 = bars[j].style.height;
					bars[j].style.height = bars[j - h].style.height;
					bars[j - h].style.height = temp1;

					await new Promise((resolve) =>
						setTimeout(() => {
						resolve();
						}, delay)
					);

					// Provide pink color to the jth bar
					bars[j].style.backgroundColor = "rgb(255, 167, 129)";

					// Provide pink color to the (j - h)th bar
					bars[j - h].style.backgroundColor = "rgb(255, 167, 129)";
				} else {
					// Provide pink color to the jth bar
					bars[j].style.backgroundColor = "rgb(255, 167, 129)";

					// Provide pink color to the (j - h)th bar
					bars[j - h].style.backgroundColor = "rgb(255, 167, 129)";
					break;
				}
			}
		}
		h = Math.floor(h / 3);
	}

	revertBack()
}

async function QuickSort(delay = DELAY) {
	document.getElementById('info-h2').textContent = "Quicksort"

	document.querySelector(".info-paragraph").textContent = "Quicksort is a divide-and-conquer sorting algorithm that selects a pivot element from the array, moves all elements less than it before it and all elements greater than it to the end and puts the pivot element in place. It then recurses on both sides of the pivot. My implementation just selects the first item as the pivot. Additionally, it uses the three-way partition idea. The worse case of Quicksort is O(n^2), which is when the array is already sorted, but the average case is O(nlogn)."

	let bars = document.querySelectorAll(".bar");

	await sort(bars, 0, bars.length - 1, delay)

	revertBack();
}

async function sort(bars, start, end, delay) {
	if (end <= start) return;

	let lt = start, gt = end;
	
	// Must Keep Height Constant!
    let firstBarHeight = parseInt(bars[start].style.height.split("px")[0]);

    let counter = start + 1;

    while (counter <= gt) {

		bars[lt].style.backgroundColor = "green";

		await new Promise((resolve) =>
			setTimeout(() => {
			resolve();
			}, delay)
		);

        if  (parseInt(bars[counter].style.height.split("px")[0]) < firstBarHeight) {

			bars[counter].style.backgroundColor = "red";

			await new Promise((resolve) =>
				setTimeout(() => {
				resolve();
				}, delay)
			);

			var temp1 = bars[counter].style.height;
			bars[counter].style.height = bars[lt].style.height;
			bars[lt].style.height = temp1;

			bars[counter].style.backgroundColor = "rgb(255, 167, 129)"
			bars[lt].style.backgroundColor = "rgb(255, 167, 129)"

			lt++;
			counter++;
		}

        else if (parseInt(bars[counter].style.height.split("px")[0]) > firstBarHeight) {
			bars[gt].style.backgroundColor = "red";
			bars[counter].style.backgroundColor = "red"

			await new Promise((resolve) =>
				setTimeout(() => {
				resolve();
				}, delay)
			);

			var temp1 = bars[gt].style.height;
			bars[gt].style.height = bars[counter].style.height;
			bars[counter].style.height = temp1;

			bars[gt].style.backgroundColor = "rgb(255, 167, 129)";
			bars[counter].style.backgroundColor = "rgb(255, 167, 129)";

			gt--;
		}

        else {
			counter++;
		}
    }

	bars[lt].style.backgroundColor = "darkblue"

	await new Promise((resolve) =>
		setTimeout(() => {
		resolve();
		}, delay)
	);

	bars[lt].style.backgroundColor = "rgb(255, 167, 129)"

    await sort(bars, start, lt - 1, delay);
    await sort(bars, gt + 1, end, delay);
}

async function MergeSort(delay = DELAY) {
	document.getElementById('info-h2').textContent = "Merge Sort"

	document.querySelector(".info-paragraph").textContent = "Mergesort is a divide-and-conquer sorting algorithm that recursively breaks up the array into halves. When a break has two elements, it arranges the elements in order and returns back up the recusion tree to reorder consecutive halves and result in the whole array being sorted. It has a time complexity of O(nlogn) in the worst case which makes it optimal for sorting based on comparisons."

	let bars = document.querySelectorAll(".bar");

	await mergeSort(bars, 0, bars.length - 1, delay)

	revertBack();
}

async function mergeSort(bars, start, end, delay) {
    if (end > start) {
		let mid = start + Math.floor((end - start) / 2);

		await mergeSort(bars, start, mid, delay);

		await new Promise((resolve) =>
			setTimeout(() => {
			resolve();
			}, delay)
		);

		await mergeSort(bars, mid + 1, end, delay);

		await new Promise((resolve) =>
			setTimeout(() => {
			resolve();
			}, delay)
		);

		await merge(bars, start, mid, end, delay);

	}
}

async function merge(bars, start, mid, end, delay) {
		let aux = [];

		for (let i = 0; i < bars.length; i++) {
			if (i >= start && i <= end) {
				bars[i].style.backgroundColor = "red";
			}
			let val = parseInt(bars[i].style.height.split("px")[0])
			aux = [...aux, val]
		}

		console.log(start, mid, end, aux)

		let i = start, j = mid + 1;

		for (let k = start; k <= end; k++) {

			await new Promise((resolve) =>
				setTimeout(() => {
				resolve();
				}, delay)
			);

			if (i > mid) {
				bars[k].style.backgroundColor = "rgb(255, 167, 129)";
				bars[k].style.height = `${aux[j]}px`
				j += 1
			}
			else if (j > end) {
				bars[k].style.backgroundColor = "rgb(255, 167, 129)";
				bars[k].style.height = `${aux[i]}px`
				i += 1;
			}
			else if (aux[j] < aux[i]) {
				bars[k].style.backgroundColor = "rgb(255, 167, 129)";
				bars[k].style.height = `${aux[j]}px`
				j += 1;
			}
			else {
				bars[k].style.backgroundColor = "rgb(255, 167, 129)";
				bars[k].style.height = `${aux[i]}px`
				i += 1;
			}
		}
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
function disable()
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
}

function revertBack() {
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


