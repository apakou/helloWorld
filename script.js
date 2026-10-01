const languages = [];

function createAlphabetFilter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const filterContainer = document.querySelector('.alphabet-filter');

    alphabet.forEach(letter => {
        const button = document.createElement('button');
        button.className = 'letter-btn';
        button.textContent = letter;
        button.addEventListener('click', () => filterByLetter(letter));
        filterContainer.appendChild(button);
    });
}

function filterByLetter(letter) {
    const buttons = document.querySelectorAll('.letter-btn');
    buttons.forEach(button => {
        button.classList.toggle('active', button.textContent === letter);
    });

    const cards = document.querySelectorAll('.language-card');
    cards.forEach(card => {
        const name = card.querySelector('.language-name').textContent;
        card.style.display = name.toUpperCase().startsWith(letter) ? 'block' : 'none';
    });
}

function createLanguageCards() {
    const languagesGrid = document.getElementById('languagesGrid');
    languagesGrid.innerHTML = '';

    if (languages.length === 0) {
        languagesGrid.innerHTML = '<p class="empty-state">No language examples yet. Be the first to contribute one.</p>';
        return;
    }

    languages.sort((first, second) => first.name.localeCompare(second.name)).forEach(language => {
        const card = document.createElement('div');
        card.className = 'language-card';
        card.innerHTML = `
            <div class="language-name">${language.name}</div>
            <div class="language-description">${language.description}</div>
            <a href="${language.link}" class="language-link" target="_blank" rel="noopener noreferrer">Official Documentation</a>
        `;

        card.addEventListener('click', () => {
            window.open(language.link, '_blank', 'noopener,noreferrer');
        });

        languagesGrid.appendChild(card);
    });
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.disabled = languages.length === 0;
    searchInput.addEventListener('input', event => {
        const searchTerm = event.target.value.toLowerCase();
        const cards = document.querySelectorAll('.language-card');

        cards.forEach(card => {
            const name = card.querySelector('.language-name').textContent.toLowerCase();
            card.style.display = name.includes(searchTerm) ? 'block' : 'none';
        });
    });
}

function setupBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        backToTopButton.classList.toggle('visible', window.scrollY > 300);
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createAlphabetFilter();
    document.querySelector('.alphabet-filter').hidden = languages.length === 0;
    createLanguageCards();
    setupSearch();
    setupBackToTop();
});
