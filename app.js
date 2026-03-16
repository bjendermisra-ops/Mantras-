// ==========================================
// SYSTEM LOGIC & MULTI-LANGUAGE CONTROLLER
// ==========================================

// 1. Global State (Defaulting to Hindi as it's widely used in ISKCON India, can be changed to 'en')
let currentLang = 'hi';

// 2. UI Strings for Auto-Language System
const uiStrings = {
    en: { search: "Search mantras (e.g. Hare Krishna)...", meaning: "Meaning", audio: "Chant Audio", all: "All Categories", subtext: "Complete Gaudiya Vaishnava Mantras" },
    hi: { search: "मंत्र खोजें (उदा. हरे कृष्ण)...", meaning: "अर्थ", audio: "ऑडियो सुनें", all: "सभी श्रेणियाँ", subtext: "सम्पूर्ण गौड़ीय वैष्णव मंत्र" },
    mr: { search: "मंत्र शोधा (उदा. हरे कृष्ण)...", meaning: "अर्थ", audio: "ऑडिओ ऐका", all: "सर्व श्रेणी", subtext: "संपूर्ण गौडीय वैष्णव मंत्र" }
};

// 3. DOM Elements
const mantraContainer = document.getElementById('mantraContainer');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const langSelector = document.getElementById('langSelector');

// 4. Initialization
document.addEventListener('DOMContentLoaded', () => {
    initCategories();
    updateUILanguage();
    renderMantras(mantraDB);
    initCanvasAnimation(); // Start the floating Om/Lotus animation
});

// Populate Category Dropdown from mantras.js
function initCategories() {
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
    });
}

// 5. Render System (Injects cards into HTML)
function renderMantras(data) {
    mantraContainer.innerHTML = '';
    
    if(data.length === 0) {
        mantraContainer.innerHTML = `<div class="text-center w-100 py-5"><h4 class="text-muted fw-bold">No mantras found. / कोई मंत्र नहीं मिला।</h4></div>`;
        return;
    }

    data.forEach(mantra => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        
        // Only show first line of Sanskrit on the card preview
        const shortSanskrit = mantra.sanskrit.split('\n')[0] + (mantra.sanskrit.includes('\n') ? '...' : '');

        col.innerHTML = `
            <div class="card mantra-card h-100 p-4 rounded-4 shadow-sm" onclick="openMantra('${mantra.id}')">
                <div class="card-body text-center d-flex flex-column justify-content-center">
                    <span class="badge bg-warning text-dark mb-3 mx-auto px-3 py-1 rounded-pill" style="font-size:0.75rem;">${mantra.category}</span>
                    <h5 class="card-title fw-bold text-saffron mb-3 fs-4">${mantra.title}</h5>
                    <p class="card-text sanskrit-text text-danger mb-0" style="font-size:1.2rem; opacity:0.9;">
                        ${shortSanskrit}
                    </p>
                </div>
            </div>
        `;
        mantraContainer.appendChild(col);
    });
}

// 6. Event Listeners (Search, Filter, Language Change)
searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);

langSelector.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateUILanguage();
    applyFilters(); // Re-render everything in the new language
});

function applyFilters() {
    const query = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    
    const filtered = mantraDB.filter(m => {
        const matchesSearch = m.title.toLowerCase().includes(query) || 
                              m.sanskrit.includes(query) || 
                              (m.translations[currentLang] && m.translations[currentLang].toLowerCase().includes(query));
        const matchesCategory = category === "ALL" || m.category === category;
        return matchesSearch && matchesCategory;
    });
    
    renderMantras(filtered);
}

function updateUILanguage() {
    searchInput.placeholder = uiStrings[currentLang].search;
    document.getElementById('meaningLabel').textContent = uiStrings[currentLang].meaning;
    document.getElementById('audioLabel').textContent = uiStrings[currentLang].audio;
    categoryFilter.options[0].text = uiStrings[currentLang].all;
    document.getElementById('headerSubtext').textContent = uiStrings[currentLang].subtext;
}

// 7. Modal System (Handles detailed view)
let currentMantraTextForCopy = "";

function openMantra(id) {
    const mantra = mantraDB.find(m => m.id === id);
    if(!mantra) return;

    document.getElementById('modalTitle').textContent = mantra.title;
    document.getElementById('modalCategory').textContent = mantra.category;
    
    // Replace \n with <br> for proper HTML rendering of Shlokas
    document.getElementById('modalSanskrit').innerHTML = mantra.sanskrit.replace(/\n/g, '<br>');
    document.getElementById('modalTranslation').innerHTML = mantra.translations[currentLang].replace(/\n/g, '<br>');
    document.getElementById('modalMeaning').textContent = mantra.meaning[currentLang];

    // Prepare clean text for Copy/WhatsApp Share
    currentMantraTextForCopy = `*${mantra.title}*\n\n${mantra.sanskrit}\n\n*Translation:*\n${mantra.translations[currentLang]}\n\n*Meaning:*\n${mantra.meaning[currentLang]}\n\n🙏 Hare Krishna!`;

    const modal = new bootstrap.Modal(document.getElementById('mantraModal'));
    modal.show();
}

// 8. Copy & Share Features
document.getElementById('copyBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(currentMantraTextForCopy).then(() => {
        alert("Mantra copied! हरि बोल!");
    });
});

document.getElementById('shareBtn').addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: document.getElementById('modalTitle').textContent,
            text: currentMantraTextForCopy
        }).catch(err => console.error("Error sharing:", err));
    } else {
        // Fallback for WhatsApp web/desktop if Web Share API is not supported
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentMantraTextForCopy)}`;
        window.open(whatsappUrl, '_blank');
    }
});

// Audio Play Button Visual Simulation
document.getElementById('playAudioBtn').addEventListener('click', function() {
    const icon = this.querySelector('i');
    if(icon.classList.contains('fa-play')) {
        icon.classList.replace('fa-play', 'fa-pause');
        this.classList.replace('btn-danger', 'btn-warning');
    } else {
        icon.classList.replace('fa-pause', 'fa-play');
        this.classList.replace('btn-warning', 'btn-danger');
    }
});

// 9. Devotional Canvas Background Animation
function initCanvasAnimation() {
    const canvas = document.getElementById('devotionalCanvas');
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles =[];
    const particleCount = window.innerWidth > 768 ? 40 : 20; // Less particles on mobile
    const symbols = ["ॐ", "🪷", "✨"];

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 25 + 10;
            this.speedY = Math.random() * 0.5 + 0.2;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.4 + 0.1;
            this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
            this.isLight = Math.random() > 0.6; // 40% are glowing orbs
        }
        
        update() {
            this.y -= this.speedY; // Float upwards
            this.x += this.speedX; // Drift sideways
            if (this.y < -50) {
                this.y = height + 50;
                this.x = Math.random() * width;
            }
        }
        
        draw() {
            ctx.globalAlpha = this.opacity;
            if (this.isLight) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size/2, 0, Math.PI * 2);
                ctx.fillStyle = "#ffd700"; // Golden orb
                ctx.fill();
            } else {
                ctx.font = `${this.size}px Arial`;
                ctx.fillStyle = "#ff9933"; // Saffron symbol
                ctx.fillText(this.symbol, this.x, this.y);
            }
            ctx.globalAlpha = 1;
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
}
