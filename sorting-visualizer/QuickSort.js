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

export default QuickSort