function minPlanesNeeded(fuelArray) {
    const n = fuelArray.length;
    if (n === 0) return -1;

    let planesCount = 0, currentEnd = 0, farthest = 0;

    for (let i = 0; i < n; i++) {
        if (i > farthest) return -1;

        farthest = Math.max(farthest, i + fuelArray[i]);

        if (i === currentEnd) {
            planesCount++;
            currentEnd = farthest;
            if (currentEnd >= n - 1) return planesCount;
        }
    }

    return -1;
}

document.getElementById('testForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const input = document.getElementById('fuelArray').value;
    const fuelArray = input.split(',').map(Number);
    
    const result = minPlanesNeeded(fuelArray);
    
    document.getElementById('result').textContent = `Minimum planes needed: ${result}`;
});
