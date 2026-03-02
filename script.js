// ==========================================
// 1. قاعدة البيانات (Data Source)
// ==========================================
const menuData = {
    // ---- بيانات الفروع والتواصل (الجديدة) ----
    branchesInfo: {
        phone: "0796468272",
        whatsapp: "https://api.whatsapp.com/send/?phone=962796468272&text=مرحباً%20بريشتا%20بيتزا،%20أريد%20الطلب...",
        locations: [
            {
                id: 1,
                name: "فرع طبربور",
                address: "طبربور أبو عليا - شارع النهضة",
                mapLink: "https://maps.app.goo.gl/r3wq3jcV6dvmokA16"
            },
            {
                id: 2,
                name: "فرع المدينة المنورة",
                address: "شارع المدينة المنورة بجانب حلويات نفيسة",
                mapLink: "https://maps.app.goo.gl/r3wq3jcV6dvmokA16"
            },
            {
                id: 3,
                name: "فرع المقابلين",
                address: "المقابلين ، شارع الاذاعة مقابل مول الشعب",
                mapLink: "https://maps.app.goo.gl/r3wq3jcV6dvmokA16"
            }
        ]
    },
    // ------------------------------------------
    offers: [
        {
            id: 1,
            title: "عـرض الصحبــة",
            desc: "2 بيتزا حجم وسط + ناجتس + هالبينو بوبرز + ماتريكس",
            price: "13.00 JD",
            img: './media/aa.jpg'
        },
        {
            id: 2,
            title: "عـرض السعـادة",
            desc: "1 بيتزا لارج + 2 بطاطس + كولا لتر + صوص إكسترا",
            price: "260 EGP",
            img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600&h=400&fit=crop"
        },
        {
            id: 3,
            title: "بـوكـس التوفيـر",
            desc: "3 بيتزا وسط مكس لحوم + أجنحة دجاج حارة",
            price: "480 EGP",
            img: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=600&h=400&fit=crop"
        },
        {
            id: 4,
            title: "عـرض الأبطـال",
            desc: "2 بيتزا سوبر سوبريم + بطاطس ودجز + 2 بيبسي",
            price: "15.00 JD",
            img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop"
        }
    ],
    pizzas: [
        {
            id: 1,
            title: "بيبروني إكسترا",
            desc: "بيبروني مضاعف، جبنة موتزاريلا ذائبة، صوص الطماطم السري.",
            price: "٧٠ ريال",
            img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&h=400&fit=crop"
        },
        {
            id: 2,
            title: "النوتوريوس",
            desc: "ببروني، سجق إيطالي، بيكون، موتزاريلا، صلصة حمراء",
            price: "٦٥ ريال",
            img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600&h=400&fit=crop"
        },
        {
            id: 3,
            title: "عشاق اللحوم",
            desc: "ببروني، سجق إيطالي، بيكون، موتزاريلا، صلصة حمراء",
            price: "٦٥ ريال",
            img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop"
        },
        {
            id: 4,
            title: "الكمأة الفاخرة",
            desc: "فطر بري، زيت الكمأة، جبنة فونتينا، بارميزان، صلصة بيضاء",
            price: "٧٥ ريال",
            img: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=600&h=400&fit=crop"
        }
    ],
    sides: [
        {
            id: 1,
            title: "أجنحة الدجاج الحارة",
            desc: "فلفل كالابريا، عسل حار، صلصة خاصة",
            price: "٥٥ ريال",
            img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop"
        },
        {
            id: 2,
            title: "خبز الثوم بالجبن",
            desc: "خبز طازج، زبدة الثوم، موتزاريلا ذائبة",
            price: "٣٠ ريال",
            img: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=400&h=300&fit=crop"
        }
    ],
    drinks: [
        {
            id: 1,
            title: "مشروبات غازية",
            desc: "كوكاكولا، سبرايت، فانتا",
            price: "١٠ ريال",
            img: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop"
        },
        {
            id: 2,
            title: "عصائر طازجة",
            desc: "برتقال، تفاح، مانجو، فراولة",
            price: "٢٠ ريال",
            img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop"
        }
    ]
};

// ==========================================
// 2. دوال الطباعة (Render)
// ==========================================
function renderMenu() {
    // رسم العروض
    const offersTrack = document.getElementById('offersTrack');
    if (offersTrack) {
        offersTrack.innerHTML = menuData.offers.map(offer => `
            <div class="offer-card">
                <div class="offer-image">
                    <img src="${offer.img}" alt="${offer.title}">
                    <div class="offer-price">${offer.price}</div>
                </div>
                <div class="offer-details">
                    <h3>${offer.title}</h3>
                    <p>${offer.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // رسم البيتزا
    const pizzaGrid = document.getElementById('pizzaGrid');
    if (pizzaGrid) {
        pizzaGrid.innerHTML = menuData.pizzas.map(pizza => `
            <div class="menu-card">
                <div class="card-image">
                    <img src="${pizza.img}" alt="${pizza.title}">
                    <div class="card-badge">${pizza.price}</div>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${pizza.title}</h3>
                    <p class="card-description">${pizza.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // رسم الإضافات
    const sidesContainer = document.getElementById('sidesContainer');
    if (sidesContainer) {
        sidesContainer.innerHTML = menuData.sides.map(side => `
            <div class="horizontal-menu-item">
                <div class="item-image"><img src="${side.img}" alt="${side.title}"></div>
                <div class="item-info">
                    <h3>${side.title}</h3>
                    <p>${side.desc}</p>
                    <span class="item-price">${side.price}</span>
                </div>
            </div>
        `).join('');
    }

    // رسم المشروبات
    const drinksContainer = document.getElementById('drinksContainer');
    if (drinksContainer) {
        drinksContainer.innerHTML = menuData.drinks.map(drink => `
            <div class="horizontal-menu-item">
                <div class="item-image"><img src="${drink.img}" alt="${drink.title}"></div>
                <div class="item-info">
                    <h3>${drink.title}</h3>
                    <p>${drink.desc}</p>
                    <span class="item-price">${drink.price}</span>
                </div>
            </div>
        `).join('');
    }

    // --- رسم الفروع في الـ Modal ---
    const branchesContainer = document.getElementById('branchesContainer');
    if (branchesContainer) {
        const globalPhone = menuData.branchesInfo.phone;
        const globalWa = menuData.branchesInfo.whatsapp;
        
        branchesContainer.innerHTML = menuData.branchesInfo.locations.map(branch => `
            <div class="branch-card">
                <div class="branch-info">
                    <h3>📍 ${branch.name}</h3>
                    <p>${branch.address}</p>
                </div>
                <div class="branch-actions">
                    <a href="${branch.mapLink}" target="_blank" class="action-btn map-btn">🗺️ الاتجاهات</a>
                    <a href="${globalWa}" target="_blank" class="action-btn wa-btn">💬 واتساب</a>
                    <a href="tel:${globalPhone}" class="action-btn call-btn">📞 اتصال</a>
                </div>
            </div>
        `).join('');
    }

    initOffersCarousel();
}

// ==========================================
// 3. التفاعلات والانيميشن
// ==========================================
function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

// --- دوال التحكم في النافذة المنبثقة (Modal) ---
function openBranchesModal(e) {
    if (e) e.preventDefault(); // لمنع انتقال الصفحة للأعلى
    document.getElementById('branchesModal').classList.add('active');
    document.body.style.overflow = 'hidden'; // إيقاف تمرير الصفحة الخلفية
}

function closeBranchesModal() {
    document.getElementById('branchesModal').classList.remove('active');
    document.body.style.overflow = 'auto'; // إعادة تشغيل التمرير
}

// إغلاق النافذة عند الضغط خارجها
window.onclick = function(event) {
    const modal = document.getElementById('branchesModal');
    if (event.target == modal) {
        closeBranchesModal();
    }
}
// ----------------------------------------------

function initOffersCarousel() {
    const track = document.getElementById('offersTrack');
    if (!track || track.children.length === 0) return;

    let cards = Array.from(track.children);
    let currentIndex = 0;
    const intervalTime = 3000;

    function getVisibleCardsCount() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    function moveCarousel() {
        const visibleCards = getVisibleCardsCount();
        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
        const moveAmount = cardWidth + gap;

        currentIndex++;

        if (currentIndex > cards.length - visibleCards) {
            currentIndex = 0;
            track.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            track.style.transform = `translateX(0)`;
        } else {
            track.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            track.style.transform = `translateX(${currentIndex * moveAmount}px)`;
        }
    }

    let sliderInterval = setInterval(moveCarousel, intervalTime);

    track.addEventListener('mouseenter', () => clearInterval(sliderInterval));
    track.addEventListener('mouseleave', () => {
        sliderInterval = setInterval(moveCarousel, intervalTime);
    });

    window.addEventListener('resize', () => {
        currentIndex = 0;
        track.style.transition = 'none';
        track.style.transform = `translateX(0)`;
    });
}

// Sticky Header effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.pageYOffset > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        header.style.padding = '10px 0';
    } else {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
        header.style.padding = '20px 0';
    }
});

// Run rendering
document.addEventListener('DOMContentLoaded', renderMenu);