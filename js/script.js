const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', function () {
    nav.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('#nav a');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('active');
    });
  });
}

/* 비주얼 슬라이드 */
const visualTrack = document.getElementById('visualTrack');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
let slideInterval;

function goToSlide(index) {
  currentSlide = index;
  visualTrack.style.transform = 'translateX(-' + (currentSlide * 50) + '%)';

  dots.forEach(function (dot) {
    dot.classList.remove('active');
  });

  dots[currentSlide].classList.add('active');
}

function startSlideAuto() {
  slideInterval = setInterval(function () {
    currentSlide++;
    if (currentSlide > 1) {
      currentSlide = 0;
    }
    goToSlide(currentSlide);
  }, 4000);
}

dots.forEach(function (dot, index) {
  dot.addEventListener('click', function () {
    clearInterval(slideInterval);
    goToSlide(index);
    startSlideAuto();
  });
});

goToSlide(0);
startSlideAuto();

/* 오늘의 메시지 바꾸기 */
const messageBtn = document.getElementById('messageBtn');
const messageMain = document.getElementById('messageMain');
const messageSub = document.getElementById('messageSub');

const messages = [
  {
    main: '조금 느려도 괜찮아. 쉬어가면서 가도 결국 너의 하루야.',
    sub: '오늘은 서두르기보다, 내 리듬을 지키는 날.'
  },
  {
    main: '잘하고 있는지 모르겠는 날에도, 너는 생각보다 훨씬 잘 버티고 있어.',
    sub: '조용한 하루도 충분히 의미 있어.'
  },
  {
    main: '모든 걸 완벽하게 하지 않아도 괜찮아. 오늘 하나만 해도 대단한 거야.',
    sub: '작은 진전도 분명한 전진이야.'
  },
  {
    main: '기운이 없는 날엔 잠깐 멈춰도 돼. 다시 가는 힘은 쉬는 데서 생기니까.',
    sub: '쉬는 것도 하루를 잘 보내는 방법이야.'
  }
];

let currentMessageIndex = 0;

if (messageBtn && messageMain && messageSub) {
  messageBtn.addEventListener('click', function () {
    currentMessageIndex++;
    if (currentMessageIndex >= messages.length) {
      currentMessageIndex = 0;
    }

    messageMain.textContent = messages[currentMessageIndex].main;
    messageSub.textContent = messages[currentMessageIndex].sub;
  });
}

/* FAQ 아코디언 */
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(function (item) {
  const question = item.querySelector('.faq-question');
  const icon = item.querySelector('.faq-question b');

  question.addEventListener('click', function () {
    const isActive = item.classList.contains('active');

    faqItems.forEach(function (otherItem) {
      otherItem.classList.remove('active');
      const otherIcon = otherItem.querySelector('.faq-question b');
      if (otherIcon) {
        otherIcon.textContent = '+';
      }
    });

    if (!isActive) {
      item.classList.add('active');
      if (icon) {
        icon.textContent = '-';
      }
    }
  });
});
