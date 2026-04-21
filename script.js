// --- YILDIZ ARKA PLAN EFEKTİ ---
const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');

let stars = [];
const numStars = 200;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * canvas.width;
        this.o = '0.' + Math.floor(Math.random() * 99) + 1;
        this.size = Math.random() * 1.5;
        this.speed = Math.random() * 0.5 + 0.1;
    }
    update() {
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = canvas.height;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.o})`;
        ctx.fill();
    }
}

for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        star.update();
        star.draw();
    }
    requestAnimationFrame(animateStars);
}
animateStars();


// --- MÜZİK KONTROLÜ ---
const playBtn = document.getElementById('playBtn');
const bgMusic = document.getElementById('bgMusic');

// Şarkı sesini daha yumuşak yap
bgMusic.volume = 0.4;

playBtn.addEventListener('click', () => {
    bgMusic.play().then(() => {
        playBtn.innerHTML = '<span class="icon">♪</span> Ruhumuzun Şarkısı Çalıyor...';
        playBtn.classList.add('playing');
    }).catch(error => {
        console.log("Ses çalınamadı, kullanıcı etkileşimi gerekebilir veya ses dosyası yok:", error);
        alert("Lütfen müzik çalması için 'assets' klasörüne 'music.mp3' adlı veya Billie Eilish '6.18.18' şarkısını ekleyin.");
    });
});


// --- TIMELINE VERİLERİ (Aesthetic & Cool Vibe) ---
const timelineData = [
    { title: "İlk Adımlar", date: "1. Ay", text: "Her şeyin başladığı zamanlar. Beraber vakit geçirmenin ne kadar eğlenceli ve farklı olduğunu ilk fark ettiğim anlar.", img: "month_1.jpeg" },

    { title: "Alışma Evresi", date: "2. Ay", text: "Birbirimizin hayatına yavaş yavaş dahil olduğumuz, bolca sohbet edip bolca güldüğümüz o güzel, sakin günler.", img: "month_2.jpeg" },

    { title: "Küçük Detaylar", date: "3. Ay", text: "Ortak zevkleri ve küçük tesadüfleri keşfettiğimiz, o sıcacık ve rahat hissetmeye başladığımız anlar.", img: "month_3.jpeg" },

    { title: "Gülümseme Sebebi", date: "4. Ay", text: "Birlikte geçirilen normal, sıradan bir günün bile ne kadar keyifli olabileceğini anladığım zamanlar.", img: "month_4.jpeg" },

    { title: "En İyi Arkadaşım", date: "5. Ay", text: "Sadece romantik bir bağ değil; aynı zamanda birlikte en çok eğlendiğim, en yakın dostum olduğun aylar.", img: "month_5.jpeg" },

    { title: "Sözsüz İletişim", date: "6. Ay", text: "Artık bir bakıştan bile ne hissettiğimizi anlayabildiğimiz, kendimizi tamamen filtresiz ifade edebildiğimiz evre.", img: "month_6.jpeg" },

    { title: "Güven Alanı", date: "7. Ay", text: "Hayat koşturmasında yanına geldiğimde derin bir nefes alabildiğim, o gerçek 'ev' hissini hissettiren zamanlar.", img: "month_7.jpeg" },

    { title: "Aynı Frekans", date: "8. Ay", text: "İlişkimizin ritmini tam olarak bulduğu, iyisiyle kötüsüyle her anı dürüstçe paylaştığımız o rahat dönem.", img: "month_8.jpeg" },

    { title: "Yoldaşlık", date: "9. Ay", text: "Bir şeyleri tek başına yapmaktansa, seninle paylaşmanın her zaman çok daha güzel olduğunu sıkça anladığım aylar.", img: "month_9.jpeg" },

    { title: "Güzel Alışkanlık", date: "10. Ay", text: "Hayatımdaki en iyi alışkanlık haline geldiğin; günüm nasıl geçerse geçsin sonunda mutlaka sana anlattığım günler.", img: "month_10.jpeg" },

    { title: "Daima Destek", date: "11. Ay", text: "Farklı düşünsek de, yorulsak da her zaman arkamda duracağını bilmenin verdiği o tatlı güven ve huzur.", img: "month_11.jpeg" },

    { title: "Koca Bir Yıl", date: "12. Ay", text: "Güzel bir hikayenin geride bıraktığı tam bir yıl. Geriye dönüp baktığımda 'iyi ki' dediğim, dolu dolu 365 gün.", img: "month_12.jpeg" },

    { title: "Beraber Büyümek", date: "13. Ay", text: "Sadece ilişkimizi değil, kafamızı, hayata bakışımızı ve hedeflerimizi de beraber büyüttüğümüz olgun bir dönem.", img: "month_13.jpeg" },

    { title: "Gerçeklerle Yüzleşmek", date: "14. Ay", text: "Her şeyin hep peri masalı olmadığını, bazen birbirimizi yorduğumuzu ama sonunda yine masada birlikte oturduğumuz zamanlar.", img: "month_14.jpeg" },

    { title: "İnişler ve Çıkışlar", date: "15. Ay", text: "Anlaşmazlıklarla geçen yorucu günlere rağmen, bağımızın ne kadar sağlam olduğunu gördüğümüz doğal testler.", img: "month_15.jpeg" },

    { title: "Zorlu Eşik", date: "16. Ay", text: "İnatlaşmaların ve tartışmaların giderek sıklaştığı, tahammüllerin azalıp birbirimizi istemeden yormaya başladığımız o zor zamanlar.", img: "month_16.jpeg" },

    { title: "Sessiz Duvarlar", date: "17. Ay", text: "Birbirimize ulaşmak istesek de aramıza mesafeler girdiğini hissettiğimiz, konuşmamak için sustuğumuz ama aslında sadece anlaşılmayı beklediğimiz o kopuk dönem.", img: "month_17.jpeg" },

    { title: "Kendimize Dönüş", date: "18. Ay", text: "Bütün o yorucu kargaşanın ardından sakinleşip gerçeklerle yüzleştiğimiz... Ne kadar kavga etsek de asıl korkumuzun birbirimizi kaybetmek olduğunu anladığımız o eşik.", img: "month_18.jpeg" },

    { title: "Sonsuzluğa Doğru", date: "Bugün ve Daima", text: "Aştığımız bütün fırtınalara rağmen, ellerini hiçbir zaman bırakmak istemediğimi biliyorum. Bu 19 ay sadece güzel bir başlangıçtı... Sonsuza dek bu yolda yan yana yürümek dileğiyle. İyi ki sensin.", img: "month_19.jpeg" }
];

const container = document.getElementById('timelineContainer');

function renderTimeline() {
    timelineData.forEach((item, index) => {
        const isReverse = index % 2 !== 0 ? 'reverse' : '';
        const html = `
            <div class="timeline-item hidden">
                <div class="timeline-dot"></div>
                <div class="timeline-content ${isReverse}">
                    <div class="image-wrapper">
                        <img src="assets/images/${item.img}" alt="${item.title}">
                    </div>
                    <div class="text-wrapper">
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p>${item.text}</p>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}

// Generate the timeline First
renderTimeline();

// --- KAYDIRMA (SCROLL) ANİMASYONLARI ---
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // Elemanın %20'si göründüğünde tetikle
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Sadece bir kere tetikle
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});


// --- LİSE FOTOĞRAFLARI (ARKAPLANA SAÇMA) ---
const lisePhotos = ['lise_1.jpeg', 'lise_2.jpeg', 'lise_3.jpeg', 'lise_4.jpeg', 'lise_5.jpeg', 'lise_6.jpeg', 'lise_7.jpeg', 'lise_8.jpeg'];
const scatteredContainer = document.getElementById('scatteredPhotos');

// Önceden belirlenmiş üst üste binmeyen 8 güvenli pozisyon
const predefinedPositions = [
    { left: 5, top: 15, rot: -15 },   // Sol üst
    { left: 75, top: 10, rot: 20 },   // Sağ üst
    { left: 8, top: 45, rot: 10 },    // Sol orta
    { left: 78, top: 40, rot: -15 },  // Sağ orta
    { left: 15, top: 75, rot: -20 },  // Sol alt
    { left: 70, top: 70, rot: 15 },   // Sağ alt
    { left: 25, top: 5, rot: -10 },   // Sol tavan
    { left: 60, top: 80, rot: -5 }    // Sağ zemin
];

if (scatteredContainer) {
    lisePhotos.forEach((imgSrc, i) => {
        if (i >= predefinedPositions.length) return; // Maksimum 8 pozisyon var

        const photoEl = document.createElement('div');
        photoEl.className = 'scattered-photo';

        const pos = predefinedPositions[i];

        photoEl.style.left = `${pos.left}%`;
        photoEl.style.top = `${pos.top}%`;

        photoEl.style.animation = `fadeFloat 3s ease-out forwards ${i * 0.3}s`;
        photoEl.style.transform = `rotate(${pos.rot}deg)`;

        photoEl.innerHTML = `<div style="transform: rotate(${pos.rot}deg); width: 100%; height: 100%;"><img src="assets/lise/${imgSrc}" alt="Lise Anıları"></div>`;

        photoEl.style.transform = 'none';

        scatteredContainer.appendChild(photoEl);
    });
}
