export async function MergeSort(delay) {
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