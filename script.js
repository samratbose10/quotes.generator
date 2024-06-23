document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('newQuoteBtn').addEventListener('click', () => {
        getNewQuote();
        getRandomDinoImage();
    });

    function getNewQuote() {
        const quotes = [
            "The only limit to our realization of tomorrow is our doubts of today.",
            "Life is 10% what happens to us and 90% how we react to it.",
            "The purpose of our lives is to be happy.",
            "Get busy living or get busy dying.",
            "You have within you right now, everything you need to deal with whatever the world can throw at you."
        ];

        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('quoteText').innerText = randomQuote;
    }

    async function getRandomDinoImage() {
        try {
            const response = await fetch('https://api.github.com/repos/hackclub/dinosaurs/contents');
            const data = await response.json();
            const images = data
                .filter(item => item.name.endsWith('.png'))
                .map(item => item.download_url);

            if (images.length > 0) {
                const randomDinoImage = images[Math.floor(Math.random() * images.length)];
                document.getElementById('dinoImage').src = randomDinoImage;
            }
        } catch (error) {
            console.error('Error fetching dinosaur images:', error);
        }
    }

    
    getRandomDinoImage();


    const starsContainer = document.getElementById('starsContainer');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        starsContainer.appendChild(star);
    }
});
