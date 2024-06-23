document.getElementById('new-quote').addEventListener('click', () => {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').textContent = `${data.content} - ${data.author}`;
        })
        .catch(error => {
            console.error('Error fetching the quote:', error);
            document.getElementById('quote').textContent = 'Failed to fetch quote. Please try again.';
        });
});
