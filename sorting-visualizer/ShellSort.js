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

export default ShellSort