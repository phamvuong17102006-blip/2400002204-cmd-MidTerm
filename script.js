/* Dữ liệu hình SVG cho 8 cặp thẻ */
const CARD_ITEMS = [
    {
        name: 'eiffel',
        svg: `<svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="#e6f4ff"/>
            <path d="M35 82 C37 72, 43 65, 45 55 L55 55 C57 65, 63 72, 65 82" fill="none" stroke="#3c5266" stroke-width="5" stroke-linecap="round"/>
            <path d="M42 55 L45 35 L55 35 L58 55 Z" fill="#4d647a"/>
            <path d="M47 35 L48 15 L52 15 L53 35 Z" fill="#3c5266"/>
            <line x1="50" y1="15" x2="50" y2="10" stroke="#3c5266" stroke-width="2"/>
            <rect x="42" y="53" width="16" height="3" rx="1.5" fill="#f6ad55"/>
            <rect x="45" y="33" width="10" height="2" rx="1" fill="#f6ad55"/>
            <path d="M39 82 C44 75, 56 75, 61 82" fill="none" stroke="#3c5266" stroke-width="3"/>
        </svg>`
    },
    {
        name: 'fuji',
        svg: `<svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="#ffeaf0"/>
            <circle cx="50" cy="42" r="20" fill="#e53e3e"/>
            <path d="M15 80 C32 75, 42 50, 50 30 C58 50, 68 75, 85 80 Z" fill="#4a52a3"/>
            <path d="M40 55 C44 52, 46 54, 50 48 C54 54, 56 52, 60 55 C57 45, 54 38, 50 30 C46 38, 43 45, 40 55 Z" fill="#ffffff"/>
        </svg>`
    },
    {
        name: 'statue',
        svg: `<svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="#e6fffa"/>
            <rect x="35" y="74" width="30" height="8" fill="#a0aec0" rx="1"/>
            <rect x="40" y="68" width="20" height="6" fill="#718096" rx="1"/>
            <path d="M43 68 L57 68 L54 44 L46 44 Z" fill="#4fd1c5"/>
            <circle cx="50" cy="38" r="5.5" fill="#4fd1c5"/>
            <path d="M44 38 L36 34 L45 39 L41 31 L47 40 L48 28 L50 40 L52 28 L53 40 L59 31 L55 39 L64 34 L56 38" fill="none" stroke="#4fd1c5" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M55 44 L61 27" stroke="#4fd1c5" stroke-width="4.5" stroke-linecap="round"/>
            <path d="M60 27 L64 27 L62 23 Z" fill="#718096"/>
            <path d="M62 23 Q65 17, 62 15 Q59 17, 62 23" fill="#ecc94b"/>
        </svg>`
    },
    {
        name: 'bigben',
        svg: `<svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="#fffaf0"/>
            <rect x="42" y="38" width="16" height="44" fill="#dd6b20"/>
            <rect x="44" y="38" width="12" height="44" fill="#ed8936"/>
            <rect x="40" y="24" width="20" height="14" fill="#dd6b20" rx="1"/>
            <circle cx="50" cy="31" r="5" fill="#f7fafc" stroke="#4a5568" stroke-width="1.5"/>
            <line x1="50" y1="31" x2="50" y2="28.5" stroke="#2d3748" stroke-width="1.2"/>
            <line x1="50" y1="31" x2="52.5" y2="31" stroke="#2d3748" stroke-width="1.2"/>
            <path d="M40 24 L50 8 L60 24 Z" fill="#2c5282"/>
            <line x1="50" y1="8" x2="50" y2="3" stroke="#2c5282" stroke-width="2"/>
        </svg>`
    },
    {
        name: 'bali',
        svg: `<svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="#fffaf0"/>
            <circle cx="50" cy="50" r="42" fill="url(#bali-sunset)"/>
            <defs>
                <linearGradient id="bali-sunset" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#ff7e5f"/>
                    <stop offset="100%" stop-color="#feb47b"/>
                </linearGradient>
            </defs>
            <path d="M38 80 L38 35 L34 35 L34 42 L30 42 L30 50 L26 50 L26 80 Z" fill="#2d3748"/>
            <rect x="32" y="55" width="4" height="25" fill="#1a202c"/>
            <path d="M38 35 L30 35 L34 30 Z" fill="#1a202c"/>
            <path d="M62 80 L62 35 L66 35 L66 42 L70 42 L70 50 L74 50 L74 80 Z" fill="#2d3748"/>
            <rect x="64" y="55" width="4" height="25" fill="#1a202c"/>
            <path d="M62 35 L70 35 L66 30 Z" fill="#1a202c"/>
            <rect x="22" y="80" width="56" height="4" fill="#4a5568"/>
        </svg>`
    },
    {
        name: 'pho',
        svg: `<svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="#f0fff4"/>
            <path d="M42 22 Q45 15, 42 10" fill="none" stroke="#cbd5e0" stroke-width="2" stroke-linecap="round"/>
            <path d="M50 24 Q53 17, 50 12" fill="none" stroke="#cbd5e0" stroke-width="2" stroke-linecap="round"/>
            <path d="M58 22 Q61 15, 58 10" fill="none" stroke="#cbd5e0" stroke-width="2" stroke-linecap="round"/>
            <path d="M20 50 C20 72, 80 72, 80 50 Z" fill="#3182ce"/>
            <path d="M20 50 L80 50" stroke="#2b6cb0" stroke-width="4" stroke-linecap="round"/>
            <rect x="40" y="70" width="20" height="4" rx="2" fill="#2b6cb0"/>
            <ellipse cx="50" cy="50" rx="28" ry="6" fill="#ecc94b"/>
            <line x1="72" y1="20" x2="30" y2="60" stroke="#7b341e" stroke-width="3" stroke-linecap="round"/>
            <line x1="78" y1="22" x2="35" y2="62" stroke="#7b341e" stroke-width="3" stroke-linecap="round"/>
            <circle cx="45" cy="50" r="2" fill="#48bb78"/>
            <circle cx="55" cy="48" r="3" fill="#e53e3e"/>
        </svg>`
    },
    {
        name: 'sushi',
        svg: `<svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="#f7fafc"/>
            <rect x="20" y="60" width="60" height="10" rx="3" fill="#2d3748"/>
            <rect x="28" y="46" width="20" height="14" rx="5" fill="#f7fafc" stroke="#e2e8f0" stroke-width="1"/>
            <rect x="26" y="38" width="24" height="10" rx="3" fill="#f56565"/>
            <line x1="30" y1="38" x2="36" y2="48" stroke="#fff" stroke-width="1.5"/>
            <line x1="38" y1="38" x2="44" y2="48" stroke="#fff" stroke-width="1.5"/>
            <rect x="52" y="46" width="20" height="14" rx="5" fill="#f7fafc" stroke="#e2e8f0" stroke-width="1"/>
            <rect x="50" y="38" width="24" height="10" rx="3" fill="#9b2c2c"/>
            <rect x="59" y="38" width="6" height="22" fill="#1a202c"/>
        </svg>`
    },
    {
        name: 'croissant',
        svg: `<svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="#fffdf0"/>
            <path d="M20 55 Q50 25 80 55 Q50 48 20 55" fill="#d69e2e"/>
            <ellipse cx="50" cy="46" rx="14" ry="12" fill="#ed8936"/>
            <ellipse cx="38" cy="48" rx="10" ry="9" fill="#dd6b20"/>
            <ellipse cx="62" cy="48" rx="10" ry="9" fill="#dd6b20"/>
            <ellipse cx="26" cy="52" rx="7" ry="6" fill="#b7791f"/>
            <ellipse cx="74" cy="52" rx="7" ry="6" fill="#b7791f"/>
        </svg>`
    }
];

/* Cấu hình biến trạng thái game */
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;

/* Lấy các element */
let gameBoard = null;
let restartBtn = null;
let congratsModal = null;
let playAgainBtn = null;

/* Khởi tạo khi load xong trang */
document.addEventListener('DOMContentLoaded', () => {
    gameBoard = document.getElementById('game-board');
    restartBtn = document.getElementById('restart-btn');
    congratsModal = document.getElementById('congrats-modal');
    playAgainBtn = document.getElementById('play-again-btn');

    /* Sự kiện nút chơi lại của game */
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            setupGame();
        });
    }

    if (playAgainBtn) {
        playAgainBtn.addEventListener('click', () => {
            closeModal();
            setupGame();
        });
    }

    /* Bật tắt menu điều hướng di động (từ nav.js) */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        /* Bật tắt menu khi bấm nút hamburger */
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        /* Đóng menu khi bấm ra ngoài */
        document.addEventListener('click', (event) => {
            const isClickInside = navToggle.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInside && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        /* Đóng menu khi chọn một link */
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    /* Kích hoạt định tuyến trang ban đầu dựa trên hash hiện tại */
    handleRouting();
});

/* Hàm tạo bàn chơi mới */
function setupGame() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    matchedPairs = 0;

    /* Nhân đôi mảng để tạo 8 cặp thẻ */
    const gameItems = [...CARD_ITEMS, ...CARD_ITEMS];

    /* Trộn bài */
    shuffleArray(gameItems);

    /* Render thẻ bài ra giao diện */
    if (gameBoard) {
        gameBoard.innerHTML = '';
        gameItems.forEach((item, index) => {
            const cardEl = document.createElement('div');
            cardEl.classList.add('memory-card');
            cardEl.dataset.name = item.name;

            cardEl.innerHTML = `
                <div class="card-face card-front-face">
                    <span class="pattern-globe">🌍</span>
                    <span class="pattern-text">Explore</span>
                </div>
                <div class="card-face card-back-face">
                    ${item.svg}
                </div>
            `;

            cardEl.addEventListener('click', handleCardClick);
            gameBoard.appendChild(cardEl);
        });
    }
}

/* Thuật toán trộn mảng ngẫu nhiên */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/* Xử lý khi click vào thẻ */
function handleCardClick() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

/* Kiểm tra 2 thẻ có giống nhau không */
function checkForMatch() {
    const isMatch = firstCard.dataset.name === secondCard.dataset.name;

    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}

/* Khóa cặp thẻ trùng */
function disableCards() {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');

    matchedPairs++;

    resetBoardState();

    /* Hiện thông báo khi thắng */
    if (matchedPairs === CARD_ITEMS.length) {
        setTimeout(() => {
            openModal();
        }, 500);
    }
}

/* Úp lại thẻ nếu không trùng */
function unflipCards() {
    setTimeout(() => {
        if (firstCard) firstCard.classList.remove('flipped');
        if (secondCard) secondCard.classList.remove('flipped');
        resetBoardState();
    }, 1000);
}

/* Reset lại lượt chọn */
function resetBoardState() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

/* Bật tắt popup chiến thắng */
function openModal() {
    if (congratsModal) {
        congratsModal.classList.add('show');
    }
}

function closeModal() {
    if (congratsModal) {
        congratsModal.classList.remove('show');
    }
}

/* --- HỆ THỐNG ĐIỀU HƯỚNG SPA --- */
function navigateTo(pageId) {
    // 1. Ẩn tất cả các trang
    const pageHome = document.getElementById('page-home');
    const pageTravel = document.getElementById('page-travel');
    const pageGame = document.getElementById('page-game');

    if (pageHome) pageHome.style.display = 'none';
    if (pageTravel) pageTravel.style.display = 'none';
    if (pageGame) pageGame.style.display = 'none';

    // 2. Hiển thị trang được chọn
    const activeSection = document.getElementById(`page-${pageId}`);
    if (activeSection) {
        activeSection.style.display = ''; // Khôi phục hiển thị ban đầu từ CSS
    }

    // 3. Cập nhật tiêu đề trang tương ứng
    if (pageId === 'home') {
        document.title = 'CV Cá Nhân';
    } else if (pageId === 'travel') {
        document.title = 'Điểm Đến Du Lịch - Top Travel Destinations';
    } else if (pageId === 'game') {
        document.title = 'Trò Chơi Trí Nhớ - Memory Quest Game';
        setupGame(); // Tạo bàn cờ mới mỗi khi vào trang game
    }

    // 4. Đóng modal nếu chuyển sang trang khác
    closeModal();

    // 5. Cập nhật menu điều hướng đang hoạt động
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            const basename = href.split('/').pop();
            if ((pageId === 'home' && basename === 'index.html') ||
                (pageId === 'travel' && basename === 'travel.html') ||
                (pageId === 'game' && basename === 'memory-game.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });

    // 6. Cuộn trang về đầu
    window.scrollTo(0, 0);
}

/* Xử lý routing dựa trên URL hash */
function handleRouting() {
    const hash = window.location.hash.substring(1);
    if (hash === 'travel') {
        navigateTo('travel');
    } else if (hash === 'game') {
        navigateTo('game');
    } else {
        navigateTo('home');
    }
}

/* Lắng nghe click toàn trang để chặn liên kết file truyền thống và đổi hash */
document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) {
        const href = link.getAttribute('href');
        if (href) {
            const basename = href.split('/').pop();
            if (basename === 'index.html') {
                e.preventDefault();
                window.location.hash = 'home';
            } else if (basename === 'travel.html') {
                e.preventDefault();
                window.location.hash = 'travel';
            } else if (basename === 'memory-game.html') {
                e.preventDefault();
                window.location.hash = 'game';
            }
        }
    }
});

/* Lắng nghe sự thay đổi hash trên trình duyệt */
window.addEventListener('hashchange', handleRouting);
