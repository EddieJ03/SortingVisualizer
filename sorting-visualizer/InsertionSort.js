// asynchronous function to perform "Insertion Sort"
export async function InsertionSort(delay = DELAY) {
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
			if (val1 <= val2) {
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