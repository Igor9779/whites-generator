export const whyChooseSections = [
  `<section class="bg-light pb-5 pt-5">
    <p class="fs-2 text-center text-secondary-emphasis">Warum uns wählen</p>
    <div class="container">
        <p class="fs-4 text-center text-secondary-emphasis">Unsere Expertise verbindet Strategie mit greifbaren Resultaten. Wir setzen auf Vertrauen, Erfahrung und messbare Erfolge, um Ihr Unternehmen nachhaltig voranzubringen.</p>
        <div class="align-items-center justify-content-center row">
            <div class="col-lg-3 col-sm-6 pb-3 pt-3">
                <div class="align-items-center d-flex text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="3rem" height="3rem" class="me-3">
                        <path d="M15.224 15.508l-2.213 4.65a.6.6 0 0 1-.977.155l-3.542-3.739a.6.6 0 0 0-.357-.182l-5.107-.668a.6.6 0 0 1-.449-.881l2.462-4.524a.6.6 0 0 0 .062-.396L4.16 4.86a.6.6 0 0 1 .7-.7l5.063.943a.6.6 0 0 0 .396-.062l4.524-2.462a.6.6 0 0 1 .881.45l.668 5.106a.6.6 0 0 0 .182.357l3.739 3.542a.6.6 0 0 1-.155.977l-4.65 2.213a.6.6 0 0 0-.284.284zm.797 1.927l1.414-1.414 4.243 4.242-1.415 1.415-4.242-4.243z"></path>
                    </svg>
                    <div>
                        <h2 class="fw-bold mb-0">130+</h2>
                        <p class="mb-0">Projekte</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 pb-3 pt-3">
                <div class="align-items-center d-flex text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="3rem" height="3rem" class="me-3">
                        <path d="M7.941 18c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1 1 12.49.002c-.55.685-1.888 1.726-2.185 2.998H7.94zM16 20v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1h8zm-3-9.995V6l-4.5 6.005H11v4l4.5-6H13z"></path>
                    </svg>
                    <div>
                        <h2 class="fw-bold mb-0">345+</h2>
                        <p class="mb-0">Kunden</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 pb-3 pt-3">
                <div class="align-items-center d-flex text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="3rem" height="3rem" class="me-3">
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-10V7h-2v7h6v-2h-4z"></path>
                    </svg>
                    <div>
                        <h2 class="fw-bold mb-0">21+</h2>
                        <p class="mb-0">Jahre Erfahrung</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`,
  // 1 — світла секція, класичний центрований варіант
  `<section id="why1" class="bg-light py-5 text-center">
    <div class="container">
      <h2 class="h6 text-primary text-uppercase mb-2">WhiteEx</h2>
      <h3 class="fw-bold h2 mb-3">Чому обирають нас</h3>
      <p class="text-secondary mb-5">Ми створюємо системи, які поєднують технологічність, логіку та зручність управління.</p>
      <div class="row g-4 justify-content-center">
        ${[
          [
            "Точність",
            "Ми забезпечуємо найвищу точність даних у фінансових і організаційних процесах.",
          ],
          [
            "Прозорість",
            "Кожен етап роботи чітко задокументований і зрозумілий клієнтам.",
          ],
          [
            "Гнучкість",
            "Наші рішення адаптуються під специфіку вашої компанії.",
          ],
          ["Підтримка", "Ми завжди поруч, щоб допомогти у будь-який момент."],
        ]
          .map(
            ([t, d]) => `
        <div class="col-md-3">
          <div class="card border-0 shadow-sm h-100 rounded-3">
            <div class="card-body p-4">
              <h5 class="fw-bold text-primary mb-3">${t}</h5>
              <p class="small text-secondary mb-0">${d}</p>
            </div>
          </div>
        </div>`
          )
          .join("")}
      </div>
    </div>
  </section>`,

  // 2 — темна секція
  `<section id="why2" class="bg-dark text-white py-5">
    <div class="container">
      <div class="row align-items-center gy-4">
        <div class="col-lg-4">
          <h2 class="fw-bold text-warning h2 mb-3">Чому обирають WhiteEx</h2>
          <p class="text-light opacity-75">Ми поєднуємо системний підхід з аналітичними інструментами та постійною підтримкою клієнтів.</p>
        </div>
        <div class="col-lg-8">
          <div class="row g-4">
            ${[
              [
                "Стабільність",
                "Працюємо на основі перевірених технологій, що гарантують надійність.",
              ],
              [
                "Аналітика",
                "Надаємо повну картину даних для прийняття рішень.",
              ],
              ["Безпека", "Ваші дані захищені сучасними стандартами безпеки."],
              ["Методичність", "Усі процеси структуровані й документовані."],
            ]
              .map(
                ([t, d]) => `
            <div class="col-md-6">
              <div class="card bg-secondary text-white border-0 h-100 rounded-3 shadow-sm">
                <div class="card-body p-4">
                  <h5 class="fw-bold mb-3">${t}</h5>
                  <p class="small mb-0">${d}</p>
                </div>
              </div>
            </div>`
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  </section>`,

  // 3 — градієнтна секція
  `<section id="why3" class="text-white py-5" style="background:linear-gradient(120deg,#1c1f24,#3a6ea5,#3fb3c3);">
    <div class="container text-center">
      <h2 class="h6 text-light text-uppercase mb-2">Причини</h2>
      <h3 class="fw-bold h2 mb-4">Чому бізнес довіряє WhiteEx</h3>
      <p class="opacity-75 mb-5">Ми поєднуємо простоту користування з потужною структурою, забезпечуючи впевненість у кожній операції.</p>
      <div class="row g-4 justify-content-center">
        ${[
          [
            "Оптимізація",
            "Ми допомагаємо скорочувати час і ресурси завдяки автоматизації.",
          ],
          [
            "Інновації",
            "Використовуємо сучасні технології для ефективного управління.",
          ],
          [
            "Надійність",
            "Наші рішення стабільно працюють навіть при високих навантаженнях.",
          ],
          [
            "Ефективність",
            "Кожен елемент системи розроблений для досягнення максимального результату.",
          ],
        ]
          .map(
            ([t, d]) => `
        <div class="col-md-3">
          <div class="card bg-white text-dark border-0 h-100 shadow rounded-3">
            <div class="card-body p-4">
              <h5 class="fw-bold mb-3">${t}</h5>
              <p class="small text-secondary mb-0">${d}</p>
            </div>
          </div>
        </div>`
          )
          .join("")}
      </div>
    </div>
  </section>`,

  // 4 — біла секція з великими картками
  `<section id="why4" class="bg-white py-5 text-center">
    <div class="container">
      <h2 class="h6 text-primary text-uppercase mb-2">WhiteEx</h2>
      <h3 class="fw-bold h2 mb-4">Чому обирають нас</h3>
      <p class="text-muted mb-5">Ми створюємо рішення, що поєднують технологічну точність із людським підходом.</p>
      <div class="row g-4">
        ${[
          [
            "Автоматизація",
            "Процеси працюють без збоїв і потребують мінімального втручання.",
          ],
          ["Структура", "Усе впорядковано — від даних до комунікацій."],
          ["Простота", "Інтерфейс зрозумілий навіть для нових користувачів."],
          [
            "Відповідальність",
            "Ми виконуємо зобов’язання перед кожним клієнтом.",
          ],
        ]
          .map(
            ([t, d]) => `
        <div class="col-sm-6 col-lg-3">
          <div class="card border shadow-sm rounded-3 h-100">
            <div class="card-body p-4">
              <h5 class="fw-bold text-primary mb-3">${t}</h5>
              <p class="small text-secondary mb-0">${d}</p>
            </div>
          </div>
        </div>`
          )
          .join("")}
      </div>
    </div>
  </section>`,

  // 5 — темна секція з лівим заголовком
  `<section id="why5" class="bg-dark text-white py-5">
    <div class="container">
      <div class="row align-items-start gy-4">
        <div class="col-lg-4">
          <h2 class="fw-bold text-warning h2 mb-3">Чому обирають WhiteEx</h2>
          <p class="text-light opacity-75">Ми поєднуємо цифрову точність із людською зрозумілістю. Система створена для реального бізнесу, не для теорії.</p>
        </div>
        <div class="col-lg-8">
          <div class="row g-4">
            ${[
              [
                "Синхронізація",
                "Усі дані оновлюються в реальному часі, без розривів.",
              ],
              [
                "Підтримка",
                "Команда WhiteEx завжди на зв’язку для швидких рішень.",
              ],
              [
                "Системність",
                "Кожен модуль інтегрується в загальну логіку платформи.",
              ],
              ["Контроль", "Зрозуміла звітність і моніторинг усіх операцій."],
            ]
              .map(
                ([t, d]) => `
            <div class="col-md-6">
              <div class="card bg-secondary text-white border-0 rounded-3 shadow-sm h-100">
                <div class="card-body p-4">
                  <h5 class="fw-bold mb-3">${t}</h5>
                  <p class="small mb-0">${d}</p>
                </div>
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
