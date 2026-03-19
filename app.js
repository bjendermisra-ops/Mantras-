let currentLang = 'hi';

// UI Strings for Localization
const uiStrings = {
    en: { search: "Search mantras...", meaning: "Meaning", audio: "Chant Audio", all: "All Categories", subtext: "Complete Gaudiya Vaishnava Mantras", empty: "No mantras found." },
    hi: { search: "मंत्र खोजें (उदा. हरे कृष्ण)...", meaning: "अर्थ", audio: "ऑडियो सुनें", all: "सभी श्रेणियाँ", subtext: "सम्पूर्ण गौड़ीय वैष्णव मंत्र", empty: "कोई मंत्र नहीं मिला।" },
    mr: { search: "मंत्र शोधा...", meaning: "अर्थ", audio: "ऑडिओ ऐका", all: "सर्व श्रेणी", subtext: "संपूर्ण गौडीय वैष्णव मंत्र", empty: "कोणतेही मंत्र आढळले नाहीत." }
};

// CATEGORY TRANSLATIONS DICTIONARY
const catTranslations = {
    "FOUNDATION MANTRAS": { en: "Foundation Mantras", hi: "मूल मंत्र", mr: "पायाभूत मंत्र" },
    "MORNING PURIFICATION MANTRAS": { en: "Morning Purification", hi: "प्रातः शुद्धि मंत्र", mr: "सकाळचे शुद्धीकरण मंत्र" },
    "TILAK MANTRAS": { en: "Tilak Mantras", hi: "तिलक मंत्र", mr: "टिळक मंत्र" },
    "GURU PARAMPARA MANTRAS": { en: "Guru Parampara", hi: "गुरु परम्परा मंत्र", mr: "गुरु परंपरा मंत्र" },
    "DEITY PRANAMA MANTRAS": { en: "Deity Pranama", hi: "भगवान प्रणाम मंत्र", mr: "देवता प्रणाम मंत्र" },
    "JAPA & KIRTAN MANTRAS": { en: "Japa & Kirtan", hi: "जप एवं कीर्तन मंत्र", mr: "जप आणि कीर्तन मंत्र" },
    "TULASI MAHARANI MANTRAS": { en: "Tulasi Maharani", hi: "तुलसी महारानी मंत्र", mr: "तुळशी महाराणी मंत्र" },
    "BHOGA & PRASADAM MANTRAS": { en: "Bhoga & Prasadam", hi: "भोग एवं प्रसाद मंत्र", mr: "नैवेद्य आणि प्रसाद मंत्र" },
    "TEMPLE ENTRY MANTRAS": { en: "Temple Entry", hi: "मन्दिर प्रवेश मंत्र", mr: "मंदिर प्रवेश मंत्र" },
    "DAILY ARATI & STOTRAS": { en: "Daily Arati & Stotras", hi: "दैनिक आरती एवं स्तोत्र", mr: "दैनंदिन आरती आणि स्तोत्रे" },
    "SCRIPTURE RECITATION MANTRAS": { en: "Scripture Recitation", hi: "शास्त्र पाठ मंत्र", mr: "शास्त्र पठण मंत्र" },
    "ARCANA & PUJA MANTRAS": { en: "Arcana & Puja", hi: "अर्चन एवं पूजा मंत्र", mr: "अर्चन आणि पूजा मंत्र" },
    "ABHISHEK MANTRAS": { en: "Abhishek Mantras", hi: "अभिषेक मंत्र", mr: "अभिषेक मंत्र" },
    "YAJNA MANTRAS": { en: "Yajna Mantras", hi: "यज्ञ मंत्र", mr: "यज्ञ मंत्र" },
    "HOLY PLACE PRANAMA": { en: "Holy Place Pranama", hi: "धाम प्रणाम मंत्र", mr: "धाम प्रणाम मंत्र" },
    "FESTIVAL MANTRAS": { en: "Festival Mantras", hi: "त्यौहार मंत्र", mr: "उत्सव मंत्र" },
    "KSHAMA PRARTHANA": { en: "Kshama Prarthana", hi: "क्षमा प्रार्थना", mr: "क्षमा प्रार्थना" }
};

// DOM Elements
const mantraContainer = document.getElementById('mantraContainer');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const langSelector = document.getElementById('langSelector');
let mantraModalInstance;

// Font Scaling Logic
let currentFontScale = 1.0;
function changeFontSize(step) {
    currentFontScale += step;
    if (currentFontScale < 0.7) currentFontScale = 0.7; // Minimum limit
    if (currentFontScale > 1.8) currentFontScale = 1.8; // Maximum limit
    document.documentElement.style.setProperty('--text-scale', currentFontScale);
}
function resetFontSize() {
    currentFontScale = 1.0;
    document.documentElement.style.setProperty('--text-scale', currentFontScale);
}

document.addEventListener('DOMContentLoaded', () => {
    mantraModalInstance = new bootstrap.Modal(document.getElementById('mantraModal'));
    initCategories();
    updateUILanguage();
    renderMantras(mantras);
    initCanvasAnimation(); 
    setupBackButtonFix();
});

// Category Population with Translation
function initCategories() {
    const currentSelection = categoryFilter.value;
    categoryFilter.innerHTML = `<option value="ALL">${uiStrings[currentLang].all}</option>`;
    
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = catTranslations[cat] ? catTranslations[cat][currentLang] : cat;
        categoryFilter.appendChild(option);
    });
    
    // Restore selection if it still exists
    if(currentSelection) {
        categoryFilter.value = currentSelection;
    }
}

// Render Mantras
function renderMantras(data) {
    mantraContainer.innerHTML = '';
    
    if(data.length === 0) {
        mantraContainer.innerHTML = `<div class="text-center w-100 py-5"><h4 class="text-muted fw-bold"><i class="fa-solid fa-circle-exclamation text-warning mb-2 fs-1"></i><br>${uiStrings[currentLang].empty}</h4></div>`;
        return;
    }

    data.forEach(mantra => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        const shortSanskrit = mantra.sanskrit.split('\n')[0] + '...';
        
        // Translated Category name for the Badge
        const translatedCat = catTranslations[mantra.category] ? catTranslations[mantra.category][currentLang] : mantra.category;

        col.innerHTML = `
            <div class="card mantra-card h-100 p-4 rounded-4" onclick="openMantra('${mantra.id}')">
                <div class="card-body text-center d-flex flex-column justify-content-center">
                    <span class="badge bg-warning text-dark mb-3 mx-auto px-3 py-2 rounded-pill fw-bold border border-white shadow-sm" style="font-size:0.75rem;">${translatedCat}</span>
                    <h5 class="card-title fw-bold text-saffron mb-3">${mantra.title}</h5>
                    <p class="card-text sanskrit-text mb-0">
                        ${shortSanskrit}
                    </p>
                </div>
            </div>
        `;
        mantraContainer.appendChild(col);
    });
}

// Listeners
searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);

langSelector.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateUILanguage();
    applyFilters(); 
});

// Filter Logic
function applyFilters() {
    const query = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    
    const filtered = mantras.filter(m => {
        const matchesSearch = m.title.toLowerCase().includes(query) || 
                              m.sanskrit.includes(query) || 
                              (m.translations[currentLang] && m.translations[currentLang].toLowerCase().includes(query));
        const matchesCategory = category === "ALL" || m.category === category;
        return matchesSearch && matchesCategory;
    });
    
    renderMantras(filtered);
}

// Update UI text strings
function updateUILanguage() {
    searchInput.placeholder = uiStrings[currentLang].search;
    document.getElementById('meaningLabel').textContent = uiStrings[currentLang].meaning;
    document.getElementById('audioLabel').textContent = uiStrings[currentLang].audio;
    document.getElementById('headerSubtext').textContent = uiStrings[currentLang].subtext;
    initCategories(); // Rebuild dropdown for language
}

// Modal Data population
let currentMantraTextForCopy = "";

function openMantra(id) {
    const mantra = mantras.find(m => m.id === id);
    if(!mantra) return;

    const translatedCat = catTranslations[mantra.category] ? catTranslations[mantra.category][currentLang] : mantra.category;

    document.getElementById('modalTitle').innerHTML = `<i class="fa-solid fa-leaf me-2"></i> ${mantra.title}`;
    document.getElementById('modalCategory').textContent = translatedCat;
    document.getElementById('modalSanskrit').innerHTML = mantra.sanskrit.replace(/\n/g, '<br>');
    document.getElementById('modalTranslation').innerHTML = mantra.translations[currentLang].replace(/\n/g, '<br>');
    document.getElementById('modalMeaning').textContent = mantra.meaning[currentLang];

    currentMantraTextForCopy = `*${mantra.title}*\n\n${mantra.sanskrit}\n\n*Translation:*\n${mantra.translations[currentLang]}\n\n*Meaning:*\n${mantra.meaning[currentLang]}\n\n🙏 Hare Krishna!`;

    mantraModalInstance.show();
}

// FIX: Hardware Back Button Closes Modal instead of exiting App
function setupBackButtonFix() {
    const modalEl = document.getElementById('mantraModal');
    let isModalOpen = false;

    modalEl.addEventListener('show.bs.modal', () => {
        isModalOpen = true;
        history.pushState({ modalOpened: true }, "", "#mantra");
    });

    modalEl.addEventListener('hidden.bs.modal', () => {
        isModalOpen = false;
        // If closed via UI (X button) while hash is still #mantra, remove hash safely
        if (window.location.hash === "#mantra") {
            history.back(); 
        }
    });

    window.addEventListener('popstate', () => {
        // If hardware back button is pressed, hide the modal instead of going back a page
        if (isModalOpen) {
            mantraModalInstance.hide();
        }
    });
}

// Copy & Share functions
document.getElementById('copyBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(currentMantraTextForCopy).then(() => { 
        alert("Mantra copied! हरि बोल!"); 
    });
});

document.getElementById('shareBtn').addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({ title: document.getElementById('modalTitle').innerText, text: currentMantraTextForCopy });
    } else {
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentMantraTextForCopy)}`;
        window.open(whatsappUrl, '_blank');
    }
});

// Devotional Canvas Background Animation
function initCanvasAnimation() {
    const canvas = document.getElementById('devotionalCanvas');
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const symbols =["🪷", "✨", "🌺", "🙏"];

    for (let i = 0; i < 25; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 20 + 10,
            speedY: Math.random() * 0.4 + 0.1,
            speedX: (Math.random() - 0.5) * 0.4,
            opacity: Math.random() * 0.3 + 0.1,
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            isLight: Math.random() > 0.6
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.y -= p.speedY; p.x += p.speedX;
            if (p.y < -50) { p.y = height + 50; p.x = Math.random() * width; }
            
            ctx.globalAlpha = p.opacity;
            if (p.isLight) {
                ctx.beginPath(); ctx.arc(p.x, p.y, p.size/2, 0, Math.PI * 2);
                ctx.fillStyle = "#FF8C00"; ctx.fill();
            } else {
                ctx.font = `${p.size}px Arial`; 
                ctx.fillText(p.symbol, p.x, p.y);
            }
        });
        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
    }
    animate();
}
