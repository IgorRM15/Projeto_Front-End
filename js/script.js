document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  let autoSlideInterval;
  let userInteracting = false;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
  }
// passar slide se não ouver interação 
  function nextSlide() {
    if (!userInteracting) {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  }
//voltar
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function startAutoSlide() {
    stopAutoSlide(); // evita criar vários intervals
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  function pauseAndResumeAuto() {
    userInteracting = true;
    stopAutoSlide();

    // depois de 8s sem interação, volta pro modo automático
    setTimeout(() => {
      userInteracting = false;
      startAutoSlide();
    }, 8000);
  }

  // --- listeners das setas ---
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      pauseAndResumeAuto();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
      pauseAndResumeAuto();
    });
  }

  // --- listeners das bolinhas ---
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
      pauseAndResumeAuto();
    });
  });

  // iniciar estado inicial
  showSlide(currentSlide);
  startAutoSlide();
});