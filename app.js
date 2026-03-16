// app.js

// 1. Initialize State & Language Sync System
const defaultLang = 'hi';
let currentLang = localStorage.getItem('appLanguage') || defaultLang;
document.getElementById('appLanguage').value = currentLang;

// Elements
const mantraContainer = document.getElementById('mantraContainer');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const appLanguageSelect = document.getElementById('appLanguage');

// Audio State
let currentAudio = new Audio();
let isLooping = false;
let activeMantraId = null;

// 2. Render Mantra Cards
function renderMantras(mantras) {
    mantraContainer.innerHTML = '';
    
    if(mantras.length === 0) {
        mantraContainer.innerHTML = `<div class="col-12 text-center text-muted my-5"><h5>No mantras found.</h5></div>`;
        return;
    }

    mantras.forEach(mantra => {
        // Show meaning directly on card based on selected global language
        const translatedMeaning = mantra.translation[currentLang] || mantra.translation['en'];

        const col = document.createElement('div');
        col.className = 'col-lg-4 col-md-6 mb-4';
        col.innerHTML = `
            <div class="card mantra-card h-100 shadow-sm border-gold p-3" onclick="openMantraModal('${mantra.id}')">
                <div class="card-body text-center d-flex flex-column justify-content-center">
                    <span class="badge bg-saffron mb-2 align-self-center">${mantra.category}</span>
                    <h5 class="card-title fw-bold text-maroon">${mantra.title}</h5>
                    <p class="card-text text-muted small mt-2 text-truncate" style="max-width:100%;">${translatedMeaning}</p>
                </div>
            </div>
        `;
        mantraContainer.appendChild(col);
    });
}

// 3. Search & Filter Logic
function filterData() {
    const searchText = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filtered = mantraDatabase.filter(m => {
        const matchTitle = m.title.toLowerCase().includes(searchText);
        const matchCategory = category === 'All' || m.category === category;
        return matchTitle && matchCategory;
    });

    renderMantras(filtered);
}

searchInput.addEventListener('input', filterData);
categoryFilter.addEventListener('change', filterData);

// 4. Auto Language Switch Logic
appLanguageSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('appLanguage', currentLang); // Save global state
    filterData(); // Re-render grid to update language previews
    
    // If modal is open, update its content on the fly
    if(activeMantraId) {
        updateModalLanguage(activeMantraId);
    }
});

// 5. Open Modal & Bind Data
const mantraModal = new bootstrap.Modal(document.getElementById('mantraModal'));

function openMantraModal(id) {
    const mantra = mantraDatabase.find(m => m.id === id);
    if(!mantra) return;
    activeMantraId = id;

    // Set Data
    document.getElementById('modalTitle').innerText = mantra.title;
    document.getElementById('modalSanskrit').innerText = mantra.sanskrit;
    updateModalLanguage(id);

    // Set Audio
    stopAudio(); // Stop previous
    currentAudio.src = mantra.audioUrl;
    
    // Reset Audio UI
    document.getElementById('playIcon').className = 'fas fa-play';
    document.getElementById('audioProgress').style.width = '0%';
    
    mantraModal.show();
}

function updateModalLanguage(id) {
    const mantra = mantraDatabase.find(m => m.id === id);
    document.getElementById('modalTranslation').innerText = mantra.translation[currentLang];
    document.getElementById('modalMeaning').innerText = mantra.meaning[currentLang];
}

// 6. Audio Player Logic
function toggleAudio() {
    const playIcon = document.getElementById('playIcon');
    if (currentAudio.paused) {
        currentAudio.play().catch(e => console.log("Audio play error, probably missing file.", e));
        playIcon.className = 'fas fa-pause';
    } else {
        currentAudio.pause();
        playIcon.className = 'fas fa-play';
    }
}

function toggleLoop() {
    isLooping = !isLooping;
    currentAudio.loop = isLooping;
    const loopBtn = document.getElementById('loopBtn');
    if(isLooping) loopBtn.classList.add('active');
    else loopBtn.classList.remove('active');
}

function stopAudio() {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    activeMantraId = null;
}

// Update Progress Bar
currentAudio.addEventListener('timeupdate', () => {
    if(currentAudio.duration) {
        const progressPercent = (currentAudio.currentTime / currentAudio.duration) * 100;
        document.getElementById('audioProgress').style.width = `${progressPercent}%`;
    }
});

// Reset icon when audio ends
currentAudio.addEventListener('ended', () => {
    if(!isLooping) document.getElementById('playIcon').className = 'fas fa-play';
});

// 7. Utility: Copy & Share
function copyMantra() {
    const mantra = mantraDatabase.find(m => m.id === activeMantraId);
    const textToCopy = `${mantra.title}\n\n${mantra.sanskrit}\n\nTranslation:\n${mantra.translation[currentLang]}`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Mantra copied to clipboard! Hari Bol!');
    });
}

function shareMantra() {
    const mantra = mantraDatabase.find(m => m.id === activeMantraId);
    if (navigator.share) {
        navigator.share({
            title: mantra.title,
            text: `Chant and be happy!\n${mantra.sanskrit}`,
            url: window.location.href
        }).catch(console.error);
    } else {
        alert('Web Share API is not supported in your browser.');
    }
}

// Init App
renderMantras(mantraDatabase);
