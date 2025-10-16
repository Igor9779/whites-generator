export const faqSections = [
  // 1 — світла секція з центрованим заголовком
  `<section id="faq1" class="bg-light py-5 text-center">
    <div class="container">
      <h2 class="h6 text-primary text-uppercase mb-2">WhiteEx</h2>
      <h3 class="fw-bold h2 mb-4">Поширені запитання</h3>
      <p class="text-secondary mb-5">Відповіді на запитання, які ми отримуємо найчастіше.</p>
      <div class="accordion text-start" id="faqAccordion1">
        ${[
          [
            "Як розпочати роботу з WhiteEx?",
            "Достатньо зареєструватися та підключити свій обліковий профіль — система автоматично налаштує основні параметри.",
          ],
          [
            "Чи потрібне навчання для користування?",
            "Інтерфейс розроблений інтуїтивно, тому навчання не обов’язкове, але ми надаємо короткі інструкції.",
          ],
          [
            "Чи безпечні мої дані?",
            "Так, усі дані зберігаються з використанням шифрування та резервного копіювання.",
          ],
        ]
          .map(
            ([q, a], i) => `
          <div class="accordion-item mb-3 border-0 shadow-sm">
            <h2 class="accordion-header" id="faq1-h${i}">
              <button class="accordion-button ${
                i ? "collapsed" : ""
              }" type="button" data-bs-toggle="collapse" data-bs-target="#faq1-c${i}">
                ${q}
              </button>
            </h2>
            <div id="faq1-c${i}" class="accordion-collapse collapse ${
              !i ? "show" : ""
            }" data-bs-parent="#faqAccordion1">
              <div class="accordion-body text-secondary">${a}</div>
            </div>
          </div>`
          )
          .join("")}
      </div>
    </div>
  </section>`,

  // 2 — темна секція з лівим заголовком
  `<section id="faq2" class="bg-dark text-white py-5">
    <div class="container">
      <div class="row gy-4 align-items-start">
        <div class="col-lg-4">
          <h2 class="fw-bold text-warning h2 mb-3">FAQ – WhiteEx</h2>
          <p class="text-light opacity-75">Основні запитання, що допомагають швидко зорієнтуватися у системі.</p>
        </div>
        <div class="col-lg-8">
          <div class="accordion" id="faqAccordion2">
            ${[
              [
                "Як отримати підтримку?",
                "Ви можете звернутися через чат або форму зворотного зв’язку, доступну у вашому акаунті.",
              ],
              [
                "Чи можна інтегрувати WhiteEx з іншими системами?",
                "Так, ми підтримуємо API та основні бізнес-платформи для інтеграції.",
              ],
              [
                "Які переваги облікового запису?",
                "Повний доступ до аналітики, автоматизації процесів та збереження історії дій.",
              ],
            ]
              .map(
                ([q, a], i) => `
              <div class="accordion-item bg-secondary border-0 rounded-3 mb-3">
                <h2 class="accordion-header" id="faq2-h${i}">
                  <button class="accordion-button bg-secondary text-white ${
                    i ? "collapsed" : ""
                  }" type="button" data-bs-toggle="collapse" data-bs-target="#faq2-c${i}">
                    ${q}
                  </button>
                </h2>
                <div id="faq2-c${i}" class="accordion-collapse collapse ${
                  !i ? "show" : ""
                }" data-bs-parent="#faqAccordion2">
                  <div class="accordion-body text-light opacity-75">${a}</div>
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  </section>`,

  // 3 — градієнтна секція з білими картками
  `<section id="faq3" class="py-5 text-white" style="background:linear-gradient(120deg,#1c1f24,#3a6ea5,#3fb3c3);">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="h6 text-light text-uppercase mb-2">WhiteEx</h2>
        <h3 class="fw-bold h2 mb-3">Запитання та відповіді</h3>
        <p class="opacity-75">Ми пояснюємо, як працює система та які її можливості.</p>
      </div>
      <div class="accordion" id="faqAccordion3">
        ${[
          [
            "Як WhiteEx забезпечує точність?",
            "Система перевіряє дані на кожному етапі, використовуючи внутрішні алгоритми контролю.",
          ],
          [
            "Чи можна налаштовувати функції?",
            "Так, більшість модулів можна адаптувати під потреби вашої компанії.",
          ],
          [
            "Скільки часу займає впровадження?",
            "Зазвичай базова інтеграція займає 1–3 робочі дні.",
          ],
        ]
          .map(
            ([q, a], i) => `
          <div class="accordion-item bg-white text-dark border-0 rounded-3 mb-3 shadow-sm">
            <h2 class="accordion-header" id="faq3-h${i}">
              <button class="accordion-button ${
                i ? "collapsed" : ""
              }" type="button" data-bs-toggle="collapse" data-bs-target="#faq3-c${i}">
                ${q}
              </button>
            </h2>
            <div id="faq3-c${i}" class="accordion-collapse collapse ${
              !i ? "show" : ""
            }" data-bs-parent="#faqAccordion3">
              <div class="accordion-body text-secondary">${a}</div>
            </div>
          </div>`
          )
          .join("")}
      </div>
    </div>
  </section>`,

  // 4 — біла секція з двома колонками FAQ
  `<section id="faq4" class="bg-white py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="h6 text-primary text-uppercase mb-2">WhiteEx</h2>
        <h3 class="fw-bold h2 mb-3">Відповіді на часті запитання</h3>
        <p class="text-muted">Якщо не знайшли відповідь — зв’яжіться з нами.</p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="accordion" id="faqAccordion4a">
            ${[
              [
                "Чи можна змінити тариф?",
                "Так, тариф можна змінити у налаштуваннях акаунта.",
              ],
              [
                "Як оновлюється система?",
                "Оновлення відбуваються автоматично без втручання користувача.",
              ],
            ]
              .map(
                ([q, a], i) => `
              <div class="accordion-item border-0 shadow-sm mb-3">
                <h2 class="accordion-header" id="faq4a-h${i}">
                  <button class="accordion-button ${
                    i ? "collapsed" : ""
                  }" type="button" data-bs-toggle="collapse" data-bs-target="#faq4a-c${i}">
                    ${q}
                  </button>
                </h2>
                <div id="faq4a-c${i}" class="accordion-collapse collapse ${
                  !i ? "show" : ""
                }" data-bs-parent="#faqAccordion4a">
                  <div class="accordion-body text-secondary">${a}</div>
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>
        <div class="col-md-6">
          <div class="accordion" id="faqAccordion4b">
            ${[
              [
                "Чи є демо-доступ?",
                "Так, ви можете протестувати систему безкоштовно протягом 7 днів.",
              ],
              [
                "Яка підтримка доступна?",
                "Ми відповідаємо 24/7 через чат і електронну пошту.",
              ],
            ]
              .map(
                ([q, a], i) => `
              <div class="accordion-item border-0 shadow-sm mb-3">
                <h2 class="accordion-header" id="faq4b-h${i}">
                  <button class="accordion-button ${
                    i ? "collapsed" : ""
                  }" type="button" data-bs-toggle="collapse" data-bs-target="#faq4b-c${i}">
                    ${q}
                  </button>
                </h2>
                <div id="faq4b-c${i}" class="accordion-collapse collapse ${
                  !i ? "show" : ""
                }" data-bs-parent="#faqAccordion4b">
                  <div class="accordion-body text-secondary">${a}</div>
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  </section>`,

  // 5 — темна секція з градієнтним фоном і лівим акцентом
  `<section id="faq5" class="py-5 text-white" style="background:linear-gradient(135deg,#141E30,#243B55);">
    <div class="container">
      <div class="row align-items-start gy-4">
        <div class="col-lg-4">
          <h2 class="fw-bold text-info h2 mb-3">Часті питання</h2>
          <p class="text-light opacity-75">WhiteEx відповідає на найпоширеніші запитання про функції та безпеку системи.</p>
        </div>
        <div class="col-lg-8">
          <div class="accordion" id="faqAccordion5">
            ${[
              [
                "Як часто оновлюються дані?",
                "Система синхронізується щохвилини, забезпечуючи актуальність показників.",
              ],
              [
                "Чи можу я експортувати звіти?",
                "Так, усі дані можна експортувати у форматах PDF або Excel.",
              ],
              [
                "Чи є мобільна версія?",
                "Так, вебверсія адаптована для будь-якого пристрою.",
              ],
            ]
              .map(
                ([q, a], i) => `
              <div class="accordion-item bg-transparent border border-light rounded-3 mb-3">
                <h2 class="accordion-header" id="faq5-h${i}">
                  <button class="accordion-button bg-transparent text-white ${
                    i ? "collapsed" : ""
                  }" type="button" data-bs-toggle="collapse" data-bs-target="#faq5-c${i}">
                    ${q}
                  </button>
                </h2>
                <div id="faq5-c${i}" class="accordion-collapse collapse ${
                  !i ? "show" : ""
                }" data-bs-parent="#faqAccordion5">
                  <div class="accordion-body text-light opacity-75">${a}</div>
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  </section>`,
];
