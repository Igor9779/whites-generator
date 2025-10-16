export const contact = [
  `<section class="bg-light pb-5 pt-5" id="contact">
    <div class="container pb-4 pt-4">
        <div class="row">
            <div class="col-lg-6 col-xl-5 py-3">
                <h2 class="fw-bold h4 mb-4 text-uppercase">Schreiben Sie uns</h2>
                <form id="contactForm">
                    <div class="mb-3">
                        <input type="text" class="border border-secondary form-control p-3"
                               placeholder="Name eingeben..." required>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="border border-secondary form-control p-3"
                               placeholder="E-Mail eingeben..." required>
                    </div>
                    <div class="mb-3">
                        <textarea class="border-secondary form-control p-3" rows="6"
                                  placeholder="Ihre Nachricht eingeben..." required></textarea>
                    </div>
                    <div class="form-check mb-3">
                        <input class="border-secondary form-check-input" type="checkbox" id="privacyCheck" required>
                        <label class="form-check-label small text-secondary" for="privacyCheck">
                            Ich stimme der <a href="privacy.html" target="_blank" class="text-muted">Datenschutzerklärung</a>
                            zu und willige in die Verarbeitung meiner persönlichen Daten ein.
                        </label>
                    </div>
                    <button type="submit" class="btn d-block w-100 btn-primary rounded-0 text-uppercase">Absenden
                    </button>
                </form>
            </div>
            <div class="col-lg-6 ms-auto py-3">
                <h2 class="fw-bold h4 mb-4 text-uppercase">Kontakt aufnehmen</h2>
                <h3 class="fw-normal h5 mb-2">Adresse</h3>
                <div class="mb-3 text-secondary">
                    <p>Genossenschaftsstrasse 18, 8050 Zürich, Schweiz<br></p>
                </div>
                <h3 class="fw-normal h5 mb-2">E-Mail</h3>
                <div class="mb-3 ">
                    <p>info@rechnnow.com<br></p>
                </div>
                <h3 class="fw-normal h5 mb-2">Telefon</h3>
                <ul class="list-unstyled mb-3">
                    <li>
                        <p>+41435449950<br></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-4">
                <div class="modal-header">
                    <h5 class="modal-title" id="successModalLabel">Vielen Dank!</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Schließen"></button>
                </div>
                <div class="modal-body">
                    Ihre Nachricht wurde erfolgreich übermittelt. Unser Team meldet sich in Kürze bei Ihnen.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
    <script>
        document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault();
            var myModal = new bootstrap.Modal(document.getElementById('successModal'));
            myModal.show();
            this.reset();
        });
    </script>
</section>
`,
  // 1 — класичний центрований
  `<section id="contact1" class="bg-light py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="card border-0 shadow-sm">
            <div class="card-body p-4 p-md-5">
              <h2 class="fw-bold h4 mb-4 text-uppercase text-center text-dark">Зв’язатися з WhiteEx</h2>
              <form id="contactForm1">
                <div class="mb-3">
                  <input type="text" class="form-control rounded-1" placeholder="Ваше ім’я..." required>
                </div>
                <div class="mb-3">
                  <input type="email" class="form-control rounded-1" placeholder="Ваша електронна пошта..." required>
                </div>
                <div class="mb-3">
                  <select class="form-select rounded-1" required>
                    <option value="">Оберіть тему...</option>
                    <option value="support">Підтримка</option>
                    <option value="integration">Інтеграція систем</option>
                    <option value="consulting">Консультація</option>
                  </select>
                </div>
                <div class="mb-3">
                  <textarea class="form-control rounded-1" rows="6" placeholder="Ваше повідомлення..." required></textarea>
                </div>
                <div class="form-check mb-4">
                  <input class="form-check-input" type="checkbox" id="privacyCheck1" required>
                  <label class="form-check-label small" for="privacyCheck1">
                    Я погоджуюсь із <a href="privacy.html" target="_blank" class="text-primary">Політикою конфіденційності</a>.
                  </label>
                </div>
                <button type="submit" class="btn btn-primary d-block w-100 rounded-pill text-uppercase">Надіслати</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="thankYouModal1" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4">
          <div class="modal-body text-center py-5 px-4">
            <i class="bi bi-envelope-check text-primary display-5 mb-3"></i>
            <h5 class="fw-bold text-dark mb-3">Повідомлення надіслано</h5>
            <p class="text-secondary mb-4">Дякуємо! Команда WhiteEx зв’яжеться з вами найближчим часом.</p>
            <button type="button" class="btn btn-primary rounded-pill px-4" data-bs-dismiss="modal">Закрити</button>
          </div>
        </div>
      </div>
    </div>
    <script>
      document.getElementById("contactForm1").addEventListener("submit", e=>{
        e.preventDefault();
        new bootstrap.Modal(document.getElementById("thankYouModal1")).show();
        e.target.reset();
      });
    </script>
  </section>`,

  // 2 — темна вузька колонка (checkbox + radio)
  `<section id="contact2" class="bg-dark py-5 text-white">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
          <h2 class="fw-bold text-warning text-center mb-4 text-uppercase">Зворотній зв’язок</h2>
          <form id="contactForm2">
            <div class="mb-3"><input type="text" class="form-control rounded-1" placeholder="Ім’я" required></div>
            <div class="mb-3"><input type="email" class="form-control rounded-1" placeholder="E-mail" required></div>
            <div class="mb-3"><textarea class="form-control rounded-1" rows="4" placeholder="Ваше повідомлення..." required></textarea></div>
            <div class="mb-3 text-start">
              <label class="small mb-2">Зв’язатися з вами через:</label><br>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="contactWay" id="radioEmail" checked>
                <label class="form-check-label small" for="radioEmail">Email</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="contactWay" id="radioPhone">
                <label class="form-check-label small" for="radioPhone">Телефон</label>
              </div>
            </div>
            <div class="form-check mb-4">
              <input class="form-check-input" type="checkbox" id="privacyCheck2" required>
              <label class="form-check-label small" for="privacyCheck2">
                Я погоджуюсь із <a href="privacy.html" target="_blank" class="text-warning">Політикою конфіденційності</a>.
              </label>
            </div>
            <button type="submit" class="btn btn-warning w-100 rounded-pill text-uppercase fw-bold">Надіслати</button>
          </form>
        </div>
      </div>
    </div>
    <div class="modal fade" id="thankYouModal2" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content text-center border-0 rounded-4">
          <div class="modal-body py-5">
            <i class="bi bi-check-circle text-success display-5 mb-3"></i>
            <h5 class="fw-bold">Дякуємо!</h5>
            <p class="text-muted">Ваше повідомлення отримано. Ми зв’яжемось із вами невдовзі.</p>
            <button type="button" class="btn btn-warning rounded-pill px-4" data-bs-dismiss="modal">ОК</button>
          </div>
        </div>
      </div>
    </div>
    <script>
      document.getElementById("contactForm2").addEventListener("submit", e=>{
        e.preventDefault();
        new bootstrap.Modal(document.getElementById("thankYouModal2")).show();
        e.target.reset();
      });
    </script>
  </section>`,

  // 3 — градієнтна (checkbox)
  `<section id="contact3" class="text-white py-5" style="background:linear-gradient(90deg,#1c1f24,#3a6ea5,#3fb3c3);">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <h2 class="fw-bold text-center mb-4 text-uppercase">Написати в WhiteEx</h2>
          <form id="contactForm3" class="p-4 bg-white bg-opacity-10 rounded-3">
            <div class="row">
              <div class="col-md-6 mb-3"><input type="text" class="form-control" placeholder="Ваше ім’я" required></div>
              <div class="col-md-6 mb-3"><input type="email" class="form-control" placeholder="Email" required></div>
            </div>
            <textarea class="form-control mb-3" rows="5" placeholder="Текст повідомлення..." required></textarea>
            <div class="form-check mb-4 text-start">
              <input class="form-check-input" type="checkbox" id="privacyCheck3" required>
              <label class="form-check-label small" for="privacyCheck3">
                Я погоджуюсь із <a href="privacy.html" class="text-light text-decoration-underline">Політикою конфіденційності</a>.
              </label>
            </div>
            <button type="submit" class="btn btn-light w-100 rounded-pill">Надіслати</button>
          </form>
        </div>
      </div>
    </div>
    <div class="modal fade" id="thankYouModal3" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content text-center border-0 rounded-4">
          <div class="modal-body py-5">
            <i class="bi bi-send-check text-info display-5 mb-3"></i>
            <h5 class="fw-bold">Повідомлення надіслано</h5>
            <p class="text-muted">Ми цінуємо вашу зацікавленість у WhiteEx.</p>
            <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Закрити</button>
          </div>
        </div>
      </div>
    </div>
    <script>
      document.getElementById("contactForm3").addEventListener("submit", e=>{
        e.preventDefault();
        new bootstrap.Modal(document.getElementById("thankYouModal3")).show();
        e.target.reset();
      });
    </script>
  </section>`,

  // 4 — дві колонки: текст + форма (checkbox + select)
  `<section id="contact4" class="bg-white py-5">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-5">
          <h2 class="fw-bold h4 mb-3 text-uppercase text-dark">Контакти WhiteEx</h2>
          <p class="text-secondary mb-2">E-mail: <a href="mailto:info@whiteex.com" class="text-decoration-none text-primary">info@whiteex.com</a></p>
          <p class="text-secondary mb-4">Телефон: <a href="tel:+410123456789" class="text-decoration-none text-primary">+41 012 345 6789</a></p>
          <p class="text-secondary">WhiteEx працює у режимі гнучкої підтримки клієнтів. Звертайтесь із будь-якими запитами щодо інтеграції або технічної допомоги.</p>
        </div>
        <div class="col-lg-7">
          <form id="contactForm4">
            <div class="mb-3"><input type="text" class="form-control" placeholder="Ваше ім’я" required></div>
            <div class="mb-3"><input type="email" class="form-control" placeholder="Ваш email" required></div>
            <div class="mb-3">
              <select class="form-select" required>
                <option value="">Тип звернення...</option>
                <option>Консультація</option>
                <option>Співпраця</option>
                <option>Технічна підтримка</option>
              </select>
            </div>
            <div class="mb-3"><textarea class="form-control" rows="5" placeholder="Ваше повідомлення..." required></textarea></div>
            <div class="form-check mb-4">
              <input class="form-check-input" type="checkbox" id="privacyCheck4" required>
              <label class="form-check-label small" for="privacyCheck4">
                Погоджуюсь із <a href="privacy.html" target="_blank" class="text-primary">Політикою конфіденційності</a>.
              </label>
            </div>
            <button type="submit" class="btn btn-primary w-100 rounded-pill">Відправити</button>
          </form>
        </div>
      </div>
    </div>
    <div class="modal fade" id="thankYouModal4" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 text-center">
          <div class="modal-body py-5">
            <i class="bi bi-envelope-check text-primary display-5"></i>
            <h5 class="fw-bold mt-3">Дякуємо за звернення</h5>
            <p class="text-muted">Наші фахівці отримали ваше повідомлення.</p>
            <button type="button" class="btn btn-primary rounded-pill px-4" data-bs-dismiss="modal">ОК</button>
          </div>
        </div>
      </div>
    </div>
    <script>
      document.getElementById("contactForm4").addEventListener("submit", e=>{
        e.preventDefault();
        new bootstrap.Modal(document.getElementById("thankYouModal4")).show();
        e.target.reset();
      });
    </script>
  </section>`,

  // 5 — вузька форма з checkbox
  `<section id="contact5" class="bg-light py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h2 class="fw-bold text-dark mb-4 text-uppercase">Залиште повідомлення</h2>
          <form id="contactForm5">
            <div class="mb-3"><input type="text" class="form-control" placeholder="Ім’я" required></div>
            <div class="mb-3"><input type="email" class="form-control" placeholder="E-mail" required></div>
            <div class="mb-3"><textarea class="form-control" rows="4" placeholder="Ваш запит..." required></textarea></div>
            <div class="form-check mb-4">
              <input class="form-check-input" type="checkbox" id="privacyCheck5" required>
              <label class="form-check-label small" for="privacyCheck5">
                Я погоджуюсь із <a href="privacy.html" class="text-warning">Політикою конфіденційності</a>.
              </label>
            </div>
            <button type="submit" class="btn btn-warning w-100 rounded-pill">Надіслати</button>
          </form>
        </div>
        <div class="col-md-7 d-flex align-items-center">
          <p class="text-secondary ps-md-5">
            Ми працюємо з клієнтами по всій Швейцарії, допомагаючи структурувати фінансові, організаційні та інформаційні потоки.  
            Команда WhiteEx відповідає протягом 24 годин після звернення.  
          </p>
        </div>
      </div>
    </div>
    <div class="modal fade" id="thankYouModal5" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content text-center border-0">
          <div class="modal-body py-5">
            <i class="bi bi-send-check text-warning display-5"></i>
            <h5 class="fw-bold mt-3">Ваш запит отримано</h5>
            <button type="button" class="btn btn-warning rounded-pill px-4" data-bs-dismiss="modal">Закрити</button>
          </div>
        </div>
      </div>
    </div>
    <script>
      document.getElementById("contactForm5").addEventListener("submit", e=>{
        e.preventDefault();
        new bootstrap.Modal(document.getElementById("thankYouModal5")).show();
        e.target.reset();
      });
    </script>
  </section>`,

  // 6 — темна секція, розширена форма
  `<section id="contact6" class="bg-dark text-white py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h2 class="fw-bold h4 mb-4 text-center text-uppercase">Напишіть у WhiteEx</h2>
        <form id="contactForm6">
          <div class="row mb-3">
            <div class="col-md-6">
              <input type="text" class="form-control rounded-1" placeholder="Ім’я" required>
            </div>
            <div class="col-md-6">
              <input type="email" class="form-control rounded-1" placeholder="Email" required>
            </div>
          </div>
          <div class="mb-3">
            <textarea class="form-control rounded-1" rows="6" placeholder="Ваше повідомлення..." required></textarea>
          </div>

          <div class="mb-3 text-start">
            <label class="small mb-2">Як зручно зв’язатися:</label><br>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="replyMethod" id="r6email" checked>
              <label class="form-check-label small" for="r6email">Email</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="replyMethod" id="r6phone">
              <label class="form-check-label small" for="r6phone">Телефон</label>
            </div>
          </div>

          <div class="form-check mb-4">
            <input class="form-check-input" type="checkbox" id="privacyCheck6" required>
            <label class="form-check-label small" for="privacyCheck6">
              Я погоджуюсь із <a href="privacy.html" class="text-warning">Політикою конфіденційності</a>.
            </label>
          </div>

          <div class="d-flex justify-content-between align-items-center mb-4 small">
            <div><i class="bi bi-telephone text-warning me-2"></i> +41 012 345 6789</div>
            <div><i class="bi bi-envelope text-warning me-2"></i> info@whiteex.com</div>
          </div>

          <button type="submit" class="btn btn-warning w-100 rounded-pill fw-bold text-uppercase">Надіслати</button>
        </form>
      </div>
    </div>
  </div>

  <div class="modal fade" id="thankYouModal6" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content text-center border-0">
        <div class="modal-body py-5">
          <i class="bi bi-envelope-heart text-warning display-5"></i>
          <h5 class="fw-bold mt-3">Повідомлення успішно надіслано</h5>
          <p class="text-muted">Ми відповімо найближчим часом.</p>
          <button type="button" class="btn btn-warning rounded-pill px-4" data-bs-dismiss="modal">ОК</button>
        </div>
      </div>
    </div>
  </div>

  <script>
    document.getElementById("contactForm6").addEventListener("submit", e => {
      e.preventDefault();
      new bootstrap.Modal(document.getElementById("thankYouModal6")).show();
      e.target.reset();
    });
  </script>
</section>
`,
  `<section class="bg-light pb-5 pt-5 text-center">
                <div class="container pb-4 pt-4 text-dark">
                    <div class="row">
                        <div class="col-lg-8 ms-auto me-auto py-3">
                            <h2 class="fw-bold text-uppercase">Senden Sie uns eine Nachricht</h2>
                            <p class="mb-5 text-secondary">Stellen Sie uns jede Frage oder sagen Sie einfach Hallo...</p>
                            <form id="contactForm">
                                <div class="mb-3">
                                    <input type="text" class="border border-black form-control" placeholder="Name eingeben..." required>
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="border border-black form-control" placeholder="E-Mail eingeben..." required>
                                </div>
                                <div class="mb-3">
                                    <textarea class="border-black form-control" rows="6" placeholder="Ihre Nachricht eingeben..." required></textarea>
                                </div>
                                <!-- Checkbox Zustimmung -->
                                <div class="form-check text-start mb-4">
                                    <input class="border-black form-check-input" type="checkbox" value="" id="privacyCheck" required>
                                    <label class="form-check-label" for="privacyCheck">
                                        Ich stimme der <a href="privacy.html" target="_blank">Datenschutzerklärung</a> zu.
                                    </label>
                                </div>
                                <button type="submit" class="btn d-block w-100 btn-primary rounded-0 text-uppercase">Absenden
</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="thankYouModal" tabindex="-1" aria-labelledby="thankYouModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content text-center p-4">
                        <div class="modal-header border-0">
                            <h5 class="modal-title w-100" id="thankYouModalLabel">Vielen Dank!</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Schließen"></button>
                        </div>
                        <div class="modal-body">
                            <p>Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.</p>
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn btn-primary w-100" data-bs-dismiss="modal">Schließen</button>
                        </div>
                    </div>
                </div>
            </div>
            <script>
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            var modal = new bootstrap.Modal(document.getElementById('thankYouModal'));
            modal.show();
            this.reset();
        });
    </script>
            </section>
            `,
];
