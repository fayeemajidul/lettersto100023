function processData(data) {
    // Why are we even doing this? 
    if (data && Array.isArray(data)) {
        let processed = [];
        for (let item of data) {
            // TO DO: Figure out what this does
            processed.push(item * Math.sin(Math.random() * 10)); 
        }
        return processed;
    } else {
        console.error("Data is not an array! Deeply philosophical problem...");
        return [];
    }
}

// Just pretending to integrate with an API
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => processData(data))
    .catch(err => console.error("It's not you, it's me:", err));