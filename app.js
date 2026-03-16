let currentLang = 'hi';

const uiStrings = {
    en: { search: "Search mantras...", meaning: "Meaning", audio: "Chant Audio", all: "All Categories", subtext: "Complete Gaudiya Vaishnava Mantras" },
    hi: { search: "मंत्र खोजें (उदा. हरे कृष्ण)...", meaning: "अर्थ", audio: "ऑडियो सुनें", all: "सभी श्रेणियाँ", subtext: "सम्पूर्ण गौड़ीय वैष्णव मंत्र" },
    mr: { search: "मंत्र शोधा...", meaning: "अर्थ", audio: "ऑडिओ ऐका", all: "सर्व श्रेणी", subtext: "संपूर्ण गौडीय वैष्णव मंत्र" }
};

const mantraContainer = document.getElementById('mantraContainer');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const langSelector = document.getElementById('langSelector');

document.addEventListener('DOMContentLoaded', () => {
    initCategories();
    updateUILanguage();
    renderMantras(mantraDB);
    initCanvasAnimation(); 
});

function initCategories() {
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
    });
}

function renderMantras(data) {
    mantraContainer.innerHTML = '';
    
    if(data.length === 0) {
        mantraContainer.innerHTML = `<div class="text-center w-100 py-5"><h4 class="text-muted fw-bold">कोई मंत्र नहीं मिला।</h4></div>`;
        return;
    }

    data.forEach(mantra => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        const shortSanskrit = mantra.sanskrit.split('\n')[0] + '...';

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

searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);

langSelector.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateUILanguage();
    applyFilters(); 
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

let currentMantraTextForCopy = "";

function openMantra(id) {
    const mantra = mantraDB.find(m => m.id === id);
    if(!mantra) return;

    document.getElementById('modalTitle').textContent = mantra.title;
    document.getElementById('modalCategory').textContent = mantra.category;
    document.getElementById('modalSanskrit').innerHTML = mantra.sanskrit.replace(/\n/g, '<br>');
    document.getElementById('modalTranslation').innerHTML = mantra.translations[currentLang].replace(/\n/g, '<br>');
    document.getElementById('modalMeaning').textContent = mantra.meaning[currentLang];

    currentMantraTextForCopy = `*${mantra.title}*\n\n${mantra.sanskrit}\n\n*Translation:*\n${mantra.translations[currentLang]}\n\n*Meaning:*\n${mantra.meaning[currentLang]}\n\n🙏 Hare Krishna!`;

    const modal = new bootstrap.Modal(document.getElementById('mantraModal'));
    modal.show();
}

document.getElementById('copyBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(currentMantraTextForCopy).then(() => { alert("Mantra copied! हरि बोल!"); });
});

document.getElementById('shareBtn').addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({ title: document.getElementById('modalTitle').textContent, text: currentMantraTextForCopy });
    } else {
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentMantraTextForCopy)}`;
        window.open(whatsappUrl, '_blank');
    }
});

// DEVOTIONAL CANVAS ANIMATION
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
    const symbols =["ॐ", "🪷", "✨"];

    for (let i = 0; i < 30; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 25 + 10,
            speedY: Math.random() * 0.5 + 0.2,
            speedX: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.4 + 0.1,
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
                ctx.fillStyle = "#ffd700"; ctx.fill();
            } else {
                ctx.font = `${p.size}px Arial`; ctx.fillStyle = "#ff9933";
                ctx.fillText(p.symbol, p.x, p.y);
            }
        });
        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
    }
    animate();
}
