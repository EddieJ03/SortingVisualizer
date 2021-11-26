export async function SelectionSort(delay = DELAY) {

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