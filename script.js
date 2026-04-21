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


// --- TIMELINE VERİLERİ (Orijinal Şiirsel Seri) ---
const timelineData = [
    { title: "İlk Bakış, İlk Hisler", date: "1. Ay", text: "Her şeyin başladığı, hayatımın en güzel dönemine adım attığımı henüz bilmediğim o ilk anlar...", img: "month_1.jpeg" },
    { title: "Sana Alışmak", date: "2. Ay", text: "Sesini duymadan, seninle konuşmadan duramadığım günlerin masumiyetle başlangıcı.", img: "month_2.jpeg" },
    { title: "İçimi Isıtan Sen", date: "3. Ay", text: "Küçük tesadüflerin kocaman bir sevgiye dönüşmeye başladığı, birbirimize iyice alıştığımız o demler.", img: "month_3.jpeg" },
    { title: "Gülüşünde Kaybolmak", date: "4. Ay", text: "Bana her gülümsediğinde içimde çiçeklerin açtığını, kalbimin seninle attığını fark ettiğim zamanlar.", img: "month_4.jpeg" },
    { title: "Gerçek Mutluluk", date: "5. Ay", text: "Derdinle dertlendiğim, sevincinle çocuk gibi mutlu olduğum, 'senin' ve 'benim' yerini 'biz' in aldığı aylar.", img: "month_5.jpeg" },
    { title: "Sessiz Doğrularımız", date: "6. Ay", text: "Hiç konuşmadan, sadece gözlerine bakarak aynı şeyi hissettiğimiz, birbirimizi en iyi anladığımız o sıcacık anlar.", img: "month_6.jpeg" },
    { title: "Her Şeyim Oldun", date: "7. Ay", text: "Hayatı seninle paylaşmanın ne kadar eşsiz bir hediye olduğunu kalbime usulca kazıdığım günler.", img: "month_7.jpeg" },
    { title: "Gölgem ve Güneşim", date: "8. Ay", text: "Bazen gölgemde sığındığım serinliğim, bazen de sabahımı aydınlatan en güzel güneşim oldun.", img: "month_8.jpeg" },
    { title: "Ellerin Elimde", date: "9. Ay", text: "Ellerini tuttuğumda dünyadaki bütün fırtınalardan korunduğumu sandığım, o güven dolu eşsiz hatıralar.", img: "month_9.jpeg" },
    { title: "Sonsuz Gelen Huzur", date: "10. Ay", text: "Artık sensiz bir gelecek hayal bile edemeyecek kadar kanıma, canıma, ruhuma işlemiş bir parçam olmuştun.", img: "month_10.jpeg" },
    { title: "Omzundaki Evim", date: "11. Ay", text: "Göğsüne yaslandığımda, dünyadaki hiçbir derdin bizi yıkamayacağına inandığım en güçlü zamanlarımız.", img: "month_11.jpeg" },
    { title: "Bir Bütün Yılımız", date: "12. Ay", text: "Zamanın seninle ne kadar muazzam geçtiğinin ispatı. Omuz omuza, kalp kalbe devirdiğimiz koca bir yıl.", img: "month_12.jpeg" },
    { title: "Kök Salan Bir Aşk", date: "13. Ay", text: "İlk günkü o saf heyecanın, kökleri derine inen sağlam bir çınara, sarsılmaz bir aşka dönüştüğü anlar.", img: "month_13.jpeg" },
    { title: "İlk Bulutlar", date: "14. Ay", text: "Bazen iletişimimiz koptu. Birbirimizi yanlış anladık. Ama ikimiz de içten içe en çok sarılmak istiyorduk aslında.", img: "month_14.jpeg" },
    { title: "Kırgınlıklar ve Biz", date: "15. Ay", text: "Tartışmalar, yorgunluklar... Belki istemeden birbirimizi çok üzdüğümüz ama sevgimizin asla, hiçbir saniye bitmediği günler.", img: "month_15.jpeg" },
    { title: "Seni Kaybetme Korkusu", date: "16. Ay", text: "Zor zamanlardı... Kaybolduğumuz sandığım, her sessizliğinde kalbimin ezildiği o karanlık ve uzak anlar.", img: "month_16.jpeg" },
    { title: "Uçurumun Kenarında", date: "17. Ay", text: "Uzaklaştığımızı sandığımız ama aslında içten içe en çok birbirimize ihtiyacımız olan zorlu ve acı dolu demler...", img: "month_17.jpeg" },
    { title: "Pişmanlık ve Özlem", date: "18. Ay", text: "Hatalarım, hatalarımız... Ama geriye bakınca tek gördüğüm şey, senin yokluğunun kalbim için ne kadar tehlikeli, ne kadar dayanılmaz olduğu gerçeği.", img: "month_18.jpeg" },
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



