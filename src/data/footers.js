export const footers = [
  // 1 — класичний темний
  `<footer class="bg-black pt-5 text-white">
      <div class="container">
        <div class="text-center mb-4">
          <a href="index.html" class="fw-bold h3 lh-1 link-warning text-decoration-none text-uppercase">
            WhiteEx
          </a>
        </div>
        <div class="row">
          <div class="col-md py-3">
            <h2 class="fw-bold h5 mb-4 text-warning">Контакти</h2>
            <p class="mb-2">Bahnhofstrasse 20, Zürich, Schweiz</p>
            <p class="mb-2">+410441234567</p>
            <p class="mb-1">info@whiteex.com</p>
            <p class="mb-0">UID: CHE-412.899.235</p>
          </div>
          <div class="col-md py-3">
            <h2 class="fw-bold h5 mb-4 text-warning">Навігація</h2>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="index.html#about" class="link-light">Про нас</a></li>
              <li class="mb-2"><a href="index.html#price" class="link-light">Послуги</a></li>
              <li class="mb-2"><a href="index.html#contact" class="link-light">Контакти</a></li>
            </ul>
          </div>
          <div class="col-md py-3">
            <h2 class="fw-bold h5 mb-4 text-warning">Інформація</h2>
            <ul class="list-unstyled">
              <li class="mb-2"><a href="bmodel.html" class="link-light">Бізнес Модель</a></li>
              <li class="mb-2"><a href="privacy.html" class="link-light">Конфіденційність</a></li>
              <li><a href="terms.html" class="link-light">Умови використання</a></li>
            </ul>
          </div>
        </div>
        <div class="d-inline-flex flex-wrap justify-content-center mb-2">
          ${socialIcons("white")}
        </div>
        <div class="border-top border-secondary mt-4 pt-3 text-center">
          <p class="mb-0 small text-secondary">&copy; 2025 <a href="index.html" class="link-light text-decoration-none">WhiteEx</a>. Усі права захищено.</p>
        </div>
      </div>
    </footer>`,

  // 2 — світлий мінімалістичний
  `<footer class="bg-light text-dark pt-5">
      <div class="container">
        <div class="row text-center text-md-start">
          <div class="col-md-4 mb-4">
            <h3 class="fw-bold text-primary mb-3">
              <a href="index.html" class="text-primary text-decoration-none">WhiteEx</a>
            </h3>
            <p class="mb-1">Bahnhofstrasse 20, Zürich, Schweiz</p>
            <p class="mb-1">+410441234567</p>
            <p class="mb-1">info@whiteex.com</p>
            <p class="small text-muted mb-0">UID: CHE-412.899.235</p>
          </div>
          <div class="col-md-4 mb-4">
            <h5 class="fw-bold mb-3">Посилання</h5>
            <ul class="list-unstyled">
              <li><a href="about.html" class="link-dark">Про нас</a></li>
              <li><a href="price.html" class="link-dark">Послуги</a></li>
              <li><a href="contact.html" class="link-dark">Контакти</a></li>
            </ul>
          </div>
          <div class="col-md-4 mb-4">
            <h5 class="fw-bold mb-3">Інформація</h5>
            <ul class="list-unstyled">
              <li><a href="bmodel.html" class="link-dark">Бізнес Модель</a></li>
              <li><a href="privacy.html" class="link-dark">Конфіденційність</a></li>
              <li><a href="terms.html" class="link-dark">Умови використання</a></li>
            </ul>
          </div>
        </div>
        <div class="d-inline-flex flex-wrap justify-content-center mb-2">
          ${socialIcons("black")}
        </div>
        <div class="border-top mt-4 pt-3 text-center small text-muted">
          © 2025 <a href="index.html" class="link-dark text-decoration-none">WhiteEx</a> — структура цифрового порядку.
        </div>
      </div>
    </footer>`,

  // 3 — центральний блок
  `<footer class="bg-dark text-white py-5">
      <div class="container text-center">
        <h3 class="fw-bold text-warning mb-3">
          <a href="index.html" class="link-warning text-decoration-none">WhiteEx</a>
        </h3>
        <div class="d-flex justify-content-center gap-4 mb-4 flex-wrap">
          <a href="about.html" class="link-light text-decoration-none">Про нас</a>
          <a href="price.html" class="link-light text-decoration-none">Послуги</a>
          <a href="contact.html" class="link-light text-decoration-none">Контакти</a>
          <a href="bmodel.html" class="link-light text-decoration-none">Бізнес Модель</a>
          <a href="privacy.html" class="link-light text-decoration-none">Конфіденційність</a>
          <a href="terms.html" class="link-light text-decoration-none">Умови використання</a>
        </div>
        <div class="d-inline-flex flex-wrap justify-content-center mb-3">
          ${socialIcons("white")}
        </div>
        <p class="small mb-1">Bahnhofstrasse 20, Zürich, Schweiz | +410441234567 | info@whiteex.com</p>
        <p class="small text-secondary mb-4">UID: CHE-412.899.235</p>
        <hr class="border-secondary" />
        <p class="small text-secondary mb-0">© 2025 <a href="index.html" class="link-light text-decoration-none">WhiteEx</a> | all rights reserved.</p>
      </div>
    </footer>`,

  // 4 — з кольоровим низом
  `<footer class="bg-black text-white pt-5">
      <div class="container">
        <div class="row text-center text-md-start">
          <div class="col-md-4 mb-4">
            <a href="index.html" class="text-warning fw-bold fs-2 text-decoration-none">WhiteEx</a>
            <p class="small text-secondary mb-0">UID: CHE-412.899.235</p>
          </div>
          <div class="col-md-4 mb-4">
            <h6 class="text-uppercase fw-bold text-warning mb-3">Посилання</h6>
            <ul class="list-unstyled small">
              <li><a href="privacy.html" class="link-light">Конфіденційність</a></li>
              <li><a href="terms.html" class="link-light">Умови використання</a></li>
              <li><a href="bmodel.html" class="link-light">Бізнес Модель</a></li>
            </ul>
          </div>
          <div class="col-md-4 mb-4">
            <h6 class="text-uppercase fw-bold text-warning mb-3">Контакт</h6>
            <p class="small mb-1">Bahnhofstrasse 20, Zürich, Schweiz</p>
            <p class="small mb-1">+410441234567</p>
            <p class="small mb-1">info@whiteex.com</p>
          </div>
        </div>
        <div class="d-inline-flex flex-wrap justify-content-center mb-3">
          ${socialIcons("white")}
        </div>
      </div>
      <div class="bg-warning text-dark text-center py-2 mt-4">
        <small>© 2025 <a href="index.html" class="text-dark text-decoration-none">WhiteEx</a> | Впорядковуємо структуру бізнесу</small>
      </div>
    </footer>`,

  // 5 — сучасний лаконічний
  `<footer class="bg-primary text-white pt-5 pb-3">
      <div class="container">
        <div class="row align-items-center text-center text-md-start mb-3">
          <div class="col-md-6 mb-3 mb-md-0">
            <h4 class="fw-bold"><a href="index.html" class="text-white text-decoration-none">WhiteEx</a></h4>
            <p class="small mb-0">Bahnhofstrasse 20, Zürich, Schweiz</p>
            <p class="small mb-0">+410441234567 | info@whiteex.com</p>
            <p class="small mb-0">UID: CHE-412.899.235</p>
          </div>
          <div class="col-md-6 d-flex justify-content-md-end justify-content-center gap-3 flex-wrap">
            <a href="about.html" class="text-white text-decoration-none small">Про нас</a>
            <a href="price.html" class="text-white text-decoration-none small">Послуги</a>
            <a href="contact.html" class="text-white text-decoration-none small">Контакти</a>
            <a href="bmodel.html" class="text-white text-decoration-none small">Бізнес Модель</a>
            <a href="privacy.html" class="text-white text-decoration-none small">Конфіденційність</a>
            <a href="terms.html" class="text-white text-decoration-none small">Умови використання</a>
          </div>
        </div>
        <div class="d-inline-flex flex-wrap justify-content-center mb-2">
          ${socialIcons("white")}
        </div>
        <hr class="border-light opacity-25" />
        <div class="text-center small mb-2">
          © 2025 <a href="index.html" class="text-white text-decoration-none">WhiteEx</a> | Всі права захищено.
        </div>
      </div>
    </footer>`,
];

// ---------------------------------------------
// Допоміжна функція для іконок
function socialIcons(color = "white") {
  const fill = color === "white" ? "currentColor" : "#000";
  const text = color === "white" ? "text-white" : "text-dark";
  return `
  <a href="https://www.facebook.com/" class="p-1 ${text}" aria-label="facebook link">
    <svg viewBox="0 0 24 24" fill="${fill}" width="20" height="20"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>
  </a>
  <a href="https://x.com/" class="p-1 ${text}" aria-label="twitter link">
    <svg viewBox="0 0 24 24" fill="${fill}" width="20" height="20"><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
  </a>
  <a href="https://www.instagram.com/" class="p-1 ${text}" aria-label="instagram link">
    <svg viewBox="0 0 24 24" fill="${fill}" width="20" height="20"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>
  </a>
  <a href="https://www.linkedin.com/login" class="p-1 ${text}" aria-label="linkedin link">
    <svg viewBox="0 0 24 24" fill="${fill}" width="20" height="20"><path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"/></svg>
  </a>`;
}
