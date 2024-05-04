
document.addEventListener('mousemove', function (e) {
    var follower = document.getElementById('pinkCircle');
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    // 동그라미를 마우스 위치로 이동합니다.
    follower.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});







window.addEventListener('load', function() {
  const fadeInElements = document.querySelectorAll('.fade-in');
  fadeInElements.forEach(function(element) {
    element.style.opacity = '1'; // 로딩 후 요소를 표시
  });
});





window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});





document.addEventListener('DOMContentLoaded', function () {
    var photosSwiper = new Swiper('.archive-container', {
        // 옵션 설정
        loop: true, // 무한 루프
        autoplay: {
            delay: 3000, // 자동 재생 간격 (3초)
        },
		speed: 900, // 스와이프 속도 (기본값: 300)
    effect: 'fade', // 슬라이드 효과 (기본값: 'slide')
    easing: 'ease', // 이징 (기본값: 'ease')
        
    });
});



document.addEventListener('scroll', function() {
  const scrollPosition = window.scrollX; // 스크롤 위치

  const items = document.querySelectorAll('.album');
  items.forEach(function(item) {
    // 아이템을 오른쪽에서 왼쪽으로 이동시키는 효과
    const distanceToViewport = item.getBoundingClientRect().left;
    const moveAmount = Math.max(0, Math.min(100, scrollPosition - distanceToViewport));
    item.style.transform = `translateX(${-moveAmount}px)`;
  });
});