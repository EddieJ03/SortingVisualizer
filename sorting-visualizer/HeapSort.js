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

export default HeapSort