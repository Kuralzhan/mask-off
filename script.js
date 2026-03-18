// --- DATA DICTIONARY ---
const siteData = {
    en: {
        ui: {
            vision: "Creating a fraud-aware Kazakhstan where people stay safe from scams.",
            title: "Welcome to Mask Off",
            intro: "Fraudsters are getting smarter, but we can outsmart them. Watch the videos below and complete the modules to protect yourself.",
            video_title: "Learn How Scams Work",
            check_answer: "Check Answer",
            correct: "✅ Correct!",
            incorrect: "❌ Incorrect. Please try again."
        },
        videos: [
            { title: "English Explained", id: "kKwyHevGVJ0" },
            { title: "Russian News Report", id: "zGZ_16fyEjE" },
            { title: "Kazakh Explanation", id: "YEZQLt3U4o0" }
        ],
        scenarios: [
            {
                title: "Method 1: The 'Bank Security' Call",
                lecture: "Scammers will call you pretending to be from your bank (like Kaspi or Halyk) or the police. They will say your money is in danger and ask you to transfer it to a 'safe account' or give them your SMS code. <br><br><b>Red Flag:</b> Real banks will NEVER ask for your SMS verification code, PIN, or CVV over the phone. <br><br><b>Solution:</b> Hang up immediately. Do not say anything. Open your official banking app to check your balance, or call the official bank number on the back of your card.",
                questions: [
                    {
                        q: "You receive a call from someone saying they are a police officer investigating a theft on your bank account. They ask for the SMS code you just received. What should you do?",
                        options: [
                            "Give them the code, because they are the police.",
                            "Ask for their badge number, then give the code.",
                            "Hang up immediately and call your bank yourself."
                        ],
                        answer: 2
                    }
                ]
            },
            {
                title: "Method 2: Phishing Links on Marketplaces (OLX / Kolesa)",
                lecture: "Scammers pretend to be buyers on sites like OLX or Kolesa.kz. They agree to buy your item without seeing it and claim they will pay via a 'safe delivery' service. They send you a link via WhatsApp to 'receive your money.' The link looks exactly like an official site, but it is a fake page (phishing). When you enter your card details and SMS code to 'receive the money,' the scammers actually drain your card.",
                questions: [
                    {
                        q: "A buyer on OLX sends you a link via WhatsApp to 'get your money.' What should you do?",
                        options: ["Click it to get paid quickly.", "Never click the link or enter card details.", "Forward the link to friends to check it."],
                        answer: 1
                    },
                    {
                        q: "True or False: Kaspi and Kazpost require you to enter your CVV code to *receive* a transfer.",
                        options: ["True, it is required for security.", "False, they never require a CVV to receive money."],
                        answer: 1
                    }
                ]
            },
			{
                title: "Method 5: Fake Part-Time Jobs (Wildberries / YouTube Tasks)",
                lecture: "You get a message on WhatsApp or Telegram offering a high-paying, easy part-time job. All you have to do is 'like' products on Wildberries or watch YouTube videos. To prove it is real, they actually pay you 1,000 to 5,000 tenge for your first few likes. Once you trust them, they invite you to a 'VIP task group' where you must transfer your own money to 'buy out' items for a much larger return. Once you send a large amount, they block you and steal your funds.",
                questions: [
                    {
                        q: "What is the main goal of the scammers when they actually pay you a small amount of money at the beginning?",
                        options: [
                            "To build your trust so you will send them larger amounts later.",
                            "Out of generosity.",
                            "They made a mistake with the transfer."
                        ],
                        answer: 0
                    },
                    {
                        q: "You are asked to transfer 50,000 tenge to a manager's Kaspi card to 'unlock VIP tasks.' What should you do?",
                        options: [
                            "Send it, because they paid you before.",
                            "Stop communicating immediately and block the number.",
                            "Ask for a discount on the VIP fee."
                        ],
                        answer: 1
                    },
                    {
                        q: "Are official companies like Wildberries, Ozon, or YouTube hiring people via WhatsApp to just 'like' products?",
                        options: [
                            "Yes, it is a new marketing strategy.",
                            "No, this is a well-known scam.",
                            "Only if you have a lot of followers."
                        ],
                        answer: 1
                    },
                    {
                        q: "What should you do with the small amount of money they initially sent you?",
                        options: [
                            "Keep it, block the scammers, and stop all contact.",
                            "Send it back to the exact number.",
                            "Invest it in their VIP group."
                        ],
                        answer: 0
                    }
                ]
            },
			{
                title: "Method 6: The 'Accidental Transfer' Trap",
                lecture: "You suddenly receive 50,000 tenge to your Kaspi Gold. Minutes later, a stranger calls you in a panic, crying that they sent it by mistake. They beg you to return it, but ask you to send it to a *different* phone number. This is a trap! The initial money was stolen from another victim. If you send it to the new number, you are helping scammers launder money, making you an unwitting accomplice (a 'drop' or money mule).",
                questions: [
                    {
                        q: "A stranger asks you to return accidentally transferred money to a *different* number. What is this?",
                        options: [
                            "A money laundering scam where you become the 'drop'.",
                            "A normal banking error.",
                            "A tech support scam."
                        ],
                        answer: 0
                    },
                    {
                        q: "What is the safest way to handle a truly accidental transfer?",
                        options: [
                            "Send it to the new number they ask for.",
                            "Tell them to contact their bank to officially reverse the transaction. Do not touch the money.",
                            "Spend it immediately."
                        ],
                        answer: 1
                    },
                    {
                        q: "If you send the money to the scammer's requested number, who will the police investigate first?",
                        options: [
                            "The scammer.",
                            "You, because the stolen money passed through your personal account.",
                            "The bank."
                        ],
                        answer: 1
                    },
                    {
                        q: "Can banks reverse a mistaken transfer if the sender reports it properly?",
                        options: [
                            "Yes, through official bank procedures.",
                            "No, it is impossible.",
                            "Only if the police do it."
                        ],
                        answer: 0
                    }
                ]
            },
			{
                title: "Method 7: Fake 'eGov' Compensation Links",
                lecture: "You receive an SMS or WhatsApp message stating that the government (eGov) or a national fund is giving out financial compensation to all citizens (e.g., 50,000 tenge for inflation). The message includes a link to a website that looks exactly like eGov.kz. It asks for your IIN, phone number, and bank card details to 'receive the payout.' This is a fake site designed to steal your identity and drain your bank account.",
                questions: [
                    {
                        q: "Will the real eGov portal ever send you a random WhatsApp link asking for your bank card details?",
                        options: [
                            "Yes, for fast payouts.",
                            "No, eGov never operates this way.",
                            "Only during national holidays."
                        ],
                        answer: 1
                    },
                    {
                        q: "You see a link that says 'egov-payout-kz.com'. Is this the official government site?",
                        options: [
                            "No, the official site is strictly egov.kz.",
                            "Yes, it is a special sub-site.",
                            "Maybe, you should click it to check."
                        ],
                        answer: 0
                    },
                    {
                        q: "What should you do if you think you might actually be eligible for government aid?",
                        options: [
                            "Click the link in the SMS to be safe.",
                            "Open the official eGov mobile app yourself or call 1414.",
                            "Ask your neighbors if they got it."
                        ],
                        answer: 1
                    },
                    {
                        q: "What happens if you enter your IIN and card details into a fake eGov site?",
                        options: [
                            "You get the money a few days later.",
                            "Scammers can take out loans in your name or steal your funds.",
                            "The bank will automatically block the fake site."
                        ],
                        answer: 1
                    }
                ]
            }
            // You can add more English scenarios here following the same structure
        ]
    },
    ru: {
        ui: {
            vision: "Создание Казахстана, осведомленного о мошенничестве, где люди защищены от афер.",
            title: "Добро пожаловать в Mask Off",
            intro: "Мошенники становятся умнее, но мы можем их перехитрить. Посмотрите видео и пройдите модули, чтобы защитить себя.",
            video_title: "Узнайте, как работают мошенники",
            check_answer: "Проверить ответ",
            correct: "✅ Правильно!",
            incorrect: "❌ Неправильно. Попробуйте еще раз."
        },
        videos: [
            { title: "Объяснение на английском", id: "kKwyHevGVJ0" },
            { title: "Репортаж на русском", id: "zGZ_16fyEjE" },
            { title: "Объяснение на казахском", id: "YEZQLt3U4o0" }
        ],
        scenarios: [
            {
                title: "Метод 1: Звонок из 'Службы безопасности'",
                lecture: "Мошенники звонят, представляясь сотрудниками банка (например, Kaspi). Они говорят, что ваши деньги в опасности, и просят перевести их на 'безопасный счет' или продиктовать SMS-код. <br><br><b>Решение:</b> Немедленно положите трубку. Настоящие банки никогда не просят SMS-коды.",
                questions: [
                    {
                        q: "Вам звонит 'полицейский' и просит SMS-код, чтобы заблокировать кражу. Что делать?",
                        options: [
                            "Назвать код, так как это полиция.",
                            "Спросить номер значка, затем назвать код.",
                            "Немедленно повесить трубку и позвонить в свой банк."
                        ],
                        answer: 2
                    }
                ]
            },
			{
                title: "Метод 2: Фишинговые ссылки на маркетплейсах (OLX / Kolesa)",
                lecture: "Мошенники притворяются покупателями на сайтах вроде OLX или Kolesa.kz. Они соглашаются купить ваш товар без осмотра и заявляют, что заплатят через сервис «безопасной доставки». Они отправляют вам ссылку в WhatsApp, чтобы «получить ваши деньги». Ссылка выглядит в точности как официальный сайт, но это поддельная страница (фишинг). Когда вы вводите данные своей карты и SMS-код, чтобы «получить деньги», мошенники на самом деле опустошают вашу карту.",
                questions: [
                    {
                        q: "Покупатель на OLX отправляет вам ссылку в WhatsApp, чтобы «получить ваши деньги». Что вам следует сделать?",
                        options: ["Перейти по ней, чтобы быстро получить оплату.", "Никогда не переходить по ссылке и не вводить данные карты.", "Переслать ссылку друзьям, чтобы они ее проверили."],
                        answer: 1
                    },
                    {
                        q: "Правда или ложь: Kaspi и Казпочта требуют ввести CVV-код, чтобы *получить* перевод.",
                        options: ["Правда, это необходимо для безопасности.", "Ложь, они никогда не требуют CVV для получения денег."],
                        answer: 1
                    }
                ]
            },
            {
                title: "Метод 5: Фальшивая подработка (Wildberries / Задания в YouTube)",
                lecture: "Вы получаете сообщение в WhatsApp или Telegram с предложением высокооплачиваемой и легкой подработки. Все, что вам нужно делать, это «лайкать» товары на Wildberries или смотреть видео на YouTube. Чтобы доказать, что это реально, они действительно платят вам от 1000 до 5000 тенге за первые несколько лайков. Как только вы начинаете им доверять, вас приглашают в «VIP-группу заданий», где вы должны перевести свои собственные деньги для «выкупа» товаров ради гораздо большей прибыли. Как только вы отправляете крупную сумму, они блокируют вас и крадут ваши средства.",
                questions: [
                    {
                        q: "Какова главная цель мошенников, когда они в начале действительно платят вам небольшую сумму денег?",
                        options: [
                            "Завоевать ваше доверие, чтобы позже вы отправили им большие суммы.",
                            "Из щедрости.",
                            "Они ошиблись с переводом."
                        ],
                        answer: 0
                    },
                    {
                        q: "Вас просят перевести 50 000 тенге на карту Kaspi менеджера, чтобы «разблокировать VIP-задания». Что вам следует сделать?",
                        options: [
                            "Отправить, потому что они платили вам раньше.",
                            "Немедленно прекратить общение и заблокировать номер.",
                            "Попросить скидку на VIP-взнос."
                        ],
                        answer: 1
                    },
                    {
                        q: "Нанимают ли официальные компании, такие как Wildberries, Ozon или YouTube, людей через WhatsApp просто для того, чтобы «лайкать» товары?",
                        options: [
                            "Да, это новая маркетинговая стратегия.",
                            "Нет, это известное мошенничество.",
                            "Только если у вас много подписчиков."
                        ],
                        answer: 1
                    },
                    {
                        q: "Что вам следует сделать с небольшой суммой денег, которую они изначально вам отправили?",
                        options: [
                            "Оставить себе, заблокировать мошенников и прекратить все контакты.",
                            "Отправить обратно на тот же номер.",
                            "Вложить в их VIP-группу."
                        ],
                        answer: 0
                    }
                ]
            },
            {
                title: "Метод 6: Ловушка «Случайный перевод»",
                lecture: "Вам неожиданно поступает 50 000 тенге на Kaspi Gold. Через несколько минут вам в панике звонит незнакомец и, плача, говорит, что отправил их по ошибке. Он умоляет вас вернуть деньги, но просит отправить их на *другой* номер телефона. Это ловушка! Изначальные деньги были украдены у другой жертвы. Если вы отправите их на новый номер, вы поможете мошенникам отмыть деньги, став невольным соучастником (дропом).",
                questions: [
                    {
                        q: "Незнакомец просит вас вернуть случайно переведенные деньги на *другой* номер. Что это такое?",
                        options: [
                            "Схема отмывания денег, где вы становитесь «дропом».",
                            "Обычная банковская ошибка.",
                            "Мошенничество со службой поддержки."
                        ],
                        answer: 0
                    },
                    {
                        q: "Какой самый безопасный способ справиться с действительно случайным переводом?",
                        options: [
                            "Отправить их на новый номер, о котором они просят.",
                            "Сказать им, чтобы они связались со своим банком для официальной отмены транзакции. Не трогать деньги.",
                            "Немедленно потратить их."
                        ],
                        answer: 1
                    },
                    {
                        q: "Если вы отправите деньги на запрошенный мошенником номер, кого полиция будет расследовать в первую очередь?",
                        options: [
                            "Мошенника.",
                            "Вас, потому что украденные деньги прошли через ваш личный счет.",
                            "Банк."
                        ],
                        answer: 1
                    },
                    {
                        q: "Могут ли банки отменить ошибочный перевод, если отправитель сообщит об этом должным образом?",
                        options: [
                            "Да, через официальные банковские процедуры.",
                            "Нет, это невозможно.",
                            "Только если это сделает полиция."
                        ],
                        answer: 0
                    }
                ]
            },
            {
                title: "Метод 7: Поддельные ссылки на компенсации от «eGov»",
                lecture: "Вы получаете SMS или сообщение в WhatsApp о том, что правительство (eGov) или национальный фонд выплачивает финансовую компенсацию всем гражданам (например, 50 000 тенге за инфляцию). Сообщение содержит ссылку на веб-сайт, который выглядит точно так же, как eGov.kz. Он запрашивает ваш ИИН, номер телефона и данные банковской карты для «получения выплаты». Это поддельный сайт, созданный для кражи вашей личности и опустошения вашего банковского счета.",
                questions: [
                    {
                        q: "Будет ли настоящий портал eGov когда-либо присылать вам случайную ссылку в WhatsApp с просьбой указать данные вашей банковской карты?",
                        options: [
                            "Да, для быстрых выплат.",
                            "Нет, eGov никогда так не работает.",
                            "Только во время национальных праздников."
                        ],
                        answer: 1
                    },
                    {
                        q: "Вы видите ссылку с надписью «egov-payout-kz.com». Это официальный правительственный сайт?",
                        options: [
                            "Нет, официальный сайт — строго egov.kz.",
                            "Да, это специальный подсайт.",
                            "Возможно, вам стоит нажать на нее, чтобы проверить."
                        ],
                        answer: 0
                    },
                    {
                        q: "Что вам следует сделать, если вы думаете, что действительно можете иметь право на государственную помощь?",
                        options: [
                            "Перейти по ссылке в SMS для безопасности.",
                            "Самостоятельно открыть официальное мобильное приложение eGov или позвонить по номеру 1414.",
                            "Спросить у соседей, получали ли они ее."
                        ],
                        answer: 1
                    },
                    {
                        q: "Что произойдет, если вы введете свой ИИН и данные карты на поддельном сайте eGov?",
                        options: [
                            "Вы получите деньги через несколько дней.",
                            "Мошенники смогут оформить кредиты на ваше имя или украсть ваши средства.",
                            "Банк автоматически заблокирует поддельный сайт."
                        ],
                        answer: 1
                    }
                ]
            }
            // ADD RUSSIAN TRANSLATIONS FOR SCENARIOS 2, 3, AND 4 HERE
        ]
    },
    kk: {
        ui: {
            vision: "Алаяқтықтан хабардар, әрі халқы қауіпсіз Қазақстанды құру.",
            title: "Mask Off жобасына қош келдіңіз",
            intro: "Алаяқтар айлакер болып барады, бірақ біз оларды жеңе аламыз. Өзіңізді қорғау үшін бейнелерді көріп, модульдерді оқыңыз.",
            video_title: "Алаяқтар қалай жұмыс істейтінін біліңіз",
            check_answer: "Жауапты тексеру",
            correct: "✅ Дұрыс!",
            incorrect: "❌ Қате. Қайтадан байқап көріңіз."
        },
        videos: [
            { title: "Ағылшын тілінде түсіндіру", id: "kKwyHevGVJ0" },
            { title: "Орыс тіліндегі жаңалықтар", id: "zGZ_16fyEjE" },
            { title: "Қазақ тілінде түсіндіру", id: "YEZQLt3U4o0" }
        ],
        scenarios: [
            {
                title: "1-әдіс: 'Банк қауіпсіздік қызметінен' қоңырау",
                lecture: "Алаяқтар банк (Kaspi сияқты) қызметкері ретінде қоңырау шалады. Олар ақшаңызға қауіп төніп тұрғанын айтып, SMS кодты сұрайды. <br><br><b>Шешімі:</b> Тұтқаны дереу қойыңыз. Нағыз банктер ешқашан SMS код сұрамайды.",
                questions: [
                    {
                        q: "Сізге банк шотыңыздағы ұрлықты тергеп жатқан полицеймін деп қоңырау шалып, SMS кодты сұрайды. Не істеу керек?",
                        options: [
                            "Кодты айту керек, өйткені ол полиция.",
                            "Жетон нөмірін сұрап, содан кейін кодты айту.",
                            "Тұтқаны дереу қойып, банкке өзіңіз қоңырау шалу."
                        ],
                        answer: 2
                    }
                ]
            }
            // ADD KAZAKH TRANSLATIONS FOR SCENARIOS 2, 3, AND 4 HERE
        ]
    }
};

// --- APP ENGINE ---
function renderApp() {
    const lang = document.getElementById("langSwitch").value;
    const data = siteData[lang];

    // 1. Update Static UI Text
    document.getElementById("ui-vision").textContent = data.ui.vision;
    document.getElementById("ui-title").textContent = data.ui.title;
    document.getElementById("ui-intro").textContent = data.ui.intro;
    document.getElementById("ui-video-title").textContent = data.ui.video_title;

    // 2. Render Videos
    const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = ""; 
    data.videos.forEach(vid => {
        videoContainer.innerHTML += `
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/${vid.id}" allowfullscreen></iframe>
                <div class="video-title">${vid.title}</div>
            </div>
        `;
    });

    // 3. Render Scenarios and Quizzes
    const scenariosContainer = document.getElementById("scenarios-container");
    scenariosContainer.innerHTML = ""; 

    data.scenarios.forEach((scenario, sIndex) => {
        let html = `
        <div class="card">
            <h2>${scenario.title}</h2>
            <p class="lecture-text">${scenario.lecture}</p>
        `;

        scenario.questions.forEach((question, qIndex) => {
            html += `
            <div class="quiz-box">
                <div class="question-title">Q${qIndex + 1}: ${question.q}</div>
                <ul class="options-list">
            `;
            
            question.options.forEach((opt, oIndex) => {
                const inputId = `s${sIndex}-q${qIndex}-o${oIndex}`;
                const name = `s${sIndex}-q${qIndex}`;
                html += `
                    <li>
                        <label for="${inputId}">
                            <input type="radio" id="${inputId}" name="${name}" value="${oIndex}">
                            ${opt}
                        </label>
                    </li>
                `;
            });

            html += `
                </ul>
                <button class="quiz-btn" onclick="checkAnswer(${sIndex}, ${qIndex}, ${question.answer}, '${lang}')">${data.ui.check_answer}</button>
                <div id="feedback-s${sIndex}-q${qIndex}" class="feedback"></div>
            </div>
            `;
        });

        html += `</div>`; 
        scenariosContainer.innerHTML += html;
    });
}

// --- QUIZ LOGIC ---
function checkAnswer(sIndex, qIndex, correctAnswerIndex, lang) {
    const data = siteData[lang];
    const name = `s${sIndex}-q${qIndex}`;
    const feedbackEl = document.getElementById(`feedback-${name}`);
    const selectedRadio = document.querySelector(`input[name="${name}"]:checked`);

    if (!selectedRadio) {
        feedbackEl.textContent = "Please select an answer.";
        feedbackEl.style.color = "var(--text-color)";
        return;
    }

    if (parseInt(selectedRadio.value) === correctAnswerIndex) {
        feedbackEl.textContent = data.ui.correct;
        feedbackEl.style.color = "var(--success-color)";
    } else {
        feedbackEl.textContent = data.ui.incorrect;
        feedbackEl.style.color = "var(--alert-color)";
    }
}

// Initialize the app on first load
window.onload = renderApp;
