export const tabSections = [
  // 1 — світла секція з підкресленими табами та великими іконками в контенті
  `<section id="tabs1" class="bg-light py-5 text-center">
    <div class="container">
      <h2 class="h6 text-primary text-uppercase mb-2">WhiteEx</h2>
      <h3 class="fw-bold h2 mb-4">Основні напрямки</h3>
      <p class="text-secondary mb-5">Ключові сфери, де WhiteEx допомагає бізнесу зростати.</p>

      <ul class="nav nav-tabs justify-content-center border-primary-subtle mb-4" id="tabs1List" role="tablist">
        ${["Аналітика", "Автоматизація", "Безпека"]
          .map(
            (t, i) => `
          <li class="nav-item" role="presentation">
            <button class="nav-link fw-medium ${
              !i ? "active" : ""
            }" id="tabs1-${i}-tab"
              data-bs-toggle="tab" data-bs-target="#tabs1-${i}" type="button" role="tab">${t}</button>
          </li>`
          )
          .join("")}
      </ul>

      <div class="tab-content text-center pt-3" id="tabs1Content">
        <div class="tab-pane fade show active" id="tabs1-0" role="tabpanel">
          <i class="bi bi-bar-chart-line text-primary display-4 mb-3"></i>
          <p class="text-secondary mx-auto" style="max-width:600px;">WhiteEx забезпечує чітку візуалізацію даних та допомагає приймати стратегічні рішення на основі точних метрик.</p>
        </div>
        <div class="tab-pane fade" id="tabs1-1" role="tabpanel">
          <i class="bi bi-gear-fill text-primary display-4 mb-3"></i>
          <p class="text-secondary mx-auto" style="max-width:600px;">Автоматизація робочих процесів зменшує навантаження та підвищує швидкість обробки операцій.</p>
        </div>
        <div class="tab-pane fade" id="tabs1-2" role="tabpanel">
          <i class="bi bi-shield-lock text-primary display-4 mb-3"></i>
          <p class="text-secondary mx-auto" style="max-width:600px;">WhiteEx використовує сучасні алгоритми шифрування для захисту кожного рівня даних.</p>
        </div>
      </div>
    </div>
  </section>`,

  // 2 — темна секція з вертикальними табами та контрастними іконками
  `<section id="tabs2" class="bg-dark text-white py-5">
    <div class="container">
      <div class="row gy-4 align-items-start">
        <div class="col-lg-4">
          <h2 class="fw-bold text-warning h2 mb-3">WhiteEx у дії</h2>
          <p class="text-light opacity-75 mb-4">Розкрийте, як система працює всередині — структуровано, безпечно, ефективно.</p>
          <ul class="nav flex-column nav-pills gap-2" id="tabs2List" role="tablist">
            ${["Структура", "Моніторинг", "Звіти"]
              .map(
                (t, i) => `
              <li class="nav-item" role="presentation">
                <button class="nav-link text-start ${
                  !i ? "active" : ""
                }" id="tabs2-${i}-tab"
                  data-bs-toggle="pill" data-bs-target="#tabs2-${i}" type="button" role="tab">
                  ${t}
                </button>
              </li>`
              )
              .join("")}
          </ul>
        </div>
        <div class="col-lg-8">
          <div class="tab-content p-4 bg-secondary rounded-3" id="tabs2Content">
            <div class="tab-pane fade show active" id="tabs2-0" role="tabpanel">
              <i class="bi bi-diagram-3 text-warning display-5 mb-3"></i>
              <p class="opacity-75">Всі модулі WhiteEx узгоджено взаємодіють, утворюючи єдину структурну логіку управління.</p>
            </div>
            <div class="tab-pane fade" id="tabs2-1" role="tabpanel">
              <i class="bi bi-eye text-warning display-5 mb-3"></i>
              <p class="opacity-75">Моніторинг даних у реальному часі дозволяє бачити зміни миттєво.</p>
            </div>
            <div class="tab-pane fade" id="tabs2-2" role="tabpanel">
              <i class="bi bi-file-earmark-bar-graph text-warning display-5 mb-3"></i>
              <p class="opacity-75">Автоматичні звіти формуються та зберігаються у зручному форматі PDF або Excel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`,

  // 3 — градієнтна секція з табами-іконками зверху
  `<section id="tabs3" class="py-5 text-white" style="background:linear-gradient(120deg,#1c1f24,#3a6ea5,#3fb3c3);">
    <div class="container text-center">
      <h2 class="h6 text-light text-uppercase mb-2">WhiteEx</h2>
      <h3 class="fw-bold h2 mb-4">Процес роботи</h3>

      <ul class="nav justify-content-center gap-3 mb-4" id="tabs3List" role="tablist">
        ${[
          ["<i class='bi bi-lightbulb fs-4 me-2'></i>Ідея", "tabs3-0"],
          ["<i class='bi bi-cpu fs-4 me-2'></i>Реалізація", "tabs3-1"],
          [
            "<i class='bi bi-graph-up-arrow fs-4 me-2'></i>Результат",
            "tabs3-2",
          ],
        ]
          .map(
            ([t, id], i) => `
          <li class="nav-item" role="presentation">
            <button class="nav-link ${
              !i
                ? "active bg-white text-dark"
                : "bg-transparent text-white border"
            } rounded-pill px-4 py-2"
              id="${id}-tab" data-bs-toggle="tab" data-bs-target="#${id}" type="button" role="tab">
              ${t}
            </button>
          </li>`
          )
          .join("")}
      </ul>

      <div class="tab-content text-start bg-white text-dark p-4 rounded-4 shadow-sm" id="tabs3Content">
        <div class="tab-pane fade show active" id="tabs3-0" role="tabpanel">
          <i class="bi bi-brain fs-1 text-primary mb-3 d-block"></i>
          <p>Ми досліджуємо бізнес-процеси, щоб сформувати концепцію цифрового вдосконалення.</p>
        </div>
        <div class="tab-pane fade" id="tabs3-1" role="tabpanel">
          <i class="bi bi-gear-wide-connected fs-1 text-primary mb-3 d-block"></i>
          <p>Етап розробки передбачає створення та тестування модулів системи WhiteEx.</p>
        </div>
        <div class="tab-pane fade" id="tabs3-2" role="tabpanel">
          <i class="bi bi-trophy fs-1 text-primary mb-3 d-block"></i>
          <p>Результат — стабільна, масштабована система, що працює безперервно.</p>
        </div>
      </div>
    </div>
  </section>`,

  // 4 — біла секція з кольоровими табами та двоколонним контентом і іконками
  `<section id="tabs4" class="bg-white py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="h6 text-primary text-uppercase mb-2">WhiteEx</h2>
        <h3 class="fw-bold h2 mb-3">Можливості платформи</h3>
        <p class="text-muted">Виберіть напрям, щоб дізнатись про його переваги.</p>
      </div>

      <ul class="nav nav-pills justify-content-center gap-3 mb-4" id="tabs4List" role="tablist">
        ${["Аналітика", "Управління", "Розрахунки"]
          .map(
            (t, i) => `
          <li class="nav-item" role="presentation">
            <button class="nav-link ${
              !i ? "active" : ""
            } px-4 py-2" id="tabs4-${i}-tab"
              data-bs-toggle="pill" data-bs-target="#tabs4-${i}" type="button" role="tab">${t}</button>
          </li>`
          )
          .join("")}
      </ul>

      <div class="tab-content mt-4" id="tabs4Content">
        <div class="tab-pane fade show active" id="tabs4-0" role="tabpanel">
          <div class="row align-items-center text-center text-md-start">
            <div class="col-md-6 mb-4 mb-md-0">
              <i class="bi bi-graph-up-arrow text-primary display-5 mb-3"></i>
              <p class="text-secondary">Інструменти WhiteEx аналізують продуктивність і створюють прогнози на основі ваших даних.</p>
            </div>
            <div class="col-md-6">
              <i class="bi bi-bar-chart-fill text-primary display-5 mb-3"></i>
              <p class="text-secondary">Аналітика допомагає швидко визначати сильні та слабкі сторони процесів.</p>
            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="tabs4-1" role="tabpanel">
          <div class="row align-items-center text-center text-md-start flex-row-reverse">
            <div class="col-md-6 mb-4 mb-md-0">
              <i class="bi bi-people-fill text-primary display-5 mb-3"></i>
              <p class="text-secondary">Система управління розподіляє ролі, контролює права доступу та відстежує зміни.</p>
            </div>
            <div class="col-md-6">
              <i class="bi bi-check2-square text-primary display-5 mb-3"></i>
              <p class="text-secondary">Усі дії користувачів фіксуються у логах для прозорої звітності.</p>
            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="tabs4-2" role="tabpanel">
          <div class="row align-items-center text-center text-md-start">
            <div class="col-md-6 mb-4 mb-md-0">
              <i class="bi bi-calculator text-primary display-5 mb-3"></i>
              <p class="text-secondary">Розрахунки виконуються автоматично з урахуванням актуальних даних і курсів.</p>
            </div>
            <div class="col-md-6">
              <i class="bi bi-wallet2 text-primary display-5 mb-3"></i>
              <p class="text-secondary">WhiteEx допомагає планувати бюджети та контролювати фінансові потоки.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`,
];
