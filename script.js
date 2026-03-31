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
            incorrect: "❌ Incorrect. Please try again.",
			feedback_title: "Leave Feedback",
            feedback_name: "Your Name",
            feedback_email: "Your Email",
            feedback_type: "Feedback Type",
            feedback_type_1: "General Suggestion",
            feedback_type_2: "Found a Bug",
            feedback_type_3: "Question",
            feedback_message: "Your Message",
            feedback_submit: "Send Feedback"
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
                lectureAudio: "audio/s1-lecture-en.mp3",
                questions: [
                    {
                        q: "You receive a call from someone saying they are a police officer investigating a theft on your bank account. They ask for the SMS code you just received. What should you do?",
                        options: [
                            "Give them the code, because they are the police.",
                            "Ask for their badge number, then give the code.",
                            "Hang up immediately and call your bank yourself."
                        ],
                        answer: 2,
                        questionAudio: "audio/s1-q1-en.mp3"
                    }
                ]
            },
            {
                title: "Method 2: Phishing Links on Marketplaces (OLX / Kolesa)",
                lecture: "Scammers pretend to be buyers on sites like OLX or Kolesa.kz. They agree to buy your item without seeing it and claim they will pay via a 'safe delivery' service. They send you a link via WhatsApp to 'receive your money.' The link looks exactly like an official site, but it is a fake page (phishing). When you enter your card details and SMS code to 'receive the money,' the scammers actually drain your card.",
                lectureAudio: "audio/s2-lecture-en.mp3",
                questions: [
                    {
                        q: "A buyer on OLX sends you a link via WhatsApp to 'get your money.' What should you do?",
                        options: ["Click it to get paid quickly.", "Never click the link or enter card details.", "Forward the link to friends to check it."],
                        answer: 1,
                        questionAudio: "audio/s2-q1-en.mp3"
                    },
                    {
                        q: "True or False: Kaspi and Kazpost require you to enter your CVV code to *receive* a transfer.",
                        options: ["True, it is required for security.", "False, they never require a CVV to receive money."],
                        answer: 1,
                        questionAudio: "audio/s2-q2-en.mp3"
                    }
                ]
            },
			{
                title: "Method 3: Fake Part-Time Jobs (Wildberries / YouTube Tasks)",
                lecture: "You get a message on WhatsApp or Telegram offering a high-paying, easy part-time job. All you have to do is 'like' products on Wildberries or watch YouTube videos. To prove it is real, they actually pay you 1,000 to 5,000 tenge for your first few likes. Once you trust them, they invite you to a 'VIP task group' where you must transfer your own money to 'buy out' items for a much larger return. Once you send a large amount, they block you and steal your funds.",
                lectureAudio: "audio/s3-lecture-en.mp3",
                questions: [
                    {
                        q: "What is the main goal of the scammers when they actually pay you a small amount of money at the beginning?",
                        options: [
                            "To build your trust so you will send them larger amounts later.",
                            "Out of generosity.",
                            "They made a mistake with the transfer."
                        ],
                        answer: 0,
                        questionAudio: "audio/s3-q1-en.mp3"
                    },
                    {
                        q: "You are asked to transfer 50,000 tenge to a manager's Kaspi card to 'unlock VIP tasks.' What should you do?",
                        options: [
                            "Send it, because they paid you before.",
                            "Stop communicating immediately and block the number.",
                            "Ask for a discount on the VIP fee."
                        ],
                        answer: 1,
                        questionAudio: "audio/s3-q2-en.mp3"
                    },
                    {
                        q: "Are official companies like Wildberries, Ozon, or YouTube hiring people via WhatsApp to just 'like' products?",
                        options: [
                            "Yes, it is a new marketing strategy.",
                            "No, this is a well-known scam.",
                            "Only if you have a lot of followers."
                        ],
                        answer: 1,
                        questionAudio: "audio/s3-q3-en.mp3"
                    },
                    {
                        q: "What should you do with the small amount of money they initially sent you?",
                        options: [
                            "Keep it, block the scammers, and stop all contact.",
                            "Send it back to the exact number.",
                            "Invest it in their VIP group."
                        ],
                        answer: 0,
                        questionAudio: "audio/s3-q4-en.mp3"
                    }
                ]
            },
			{
                title: "Method 4: The 'Accidental Transfer' Trap",
                lecture: "You suddenly receive 50,000 tenge to your Kaspi Gold. Minutes later, a stranger calls you in a panic, crying that they sent it by mistake. They beg you to return it, but ask you to send it to a *different* phone number. This is a trap! The initial money was stolen from another victim. If you send it to the new number, you are helping scammers launder money, making you an unwitting accomplice (a 'drop' or money mule).",
                lectureAudio: "audio/s4-lecture-en.mp3",
                questions: [
                    {
                        q: "A stranger asks you to return accidentally transferred money to a *different* number. What is this?",
                        options: [
                            "A money laundering scam where you become the 'drop'.",
                            "A normal banking error.",
                            "A tech support scam."
                        ],
                        answer: 0,
                        questionAudio: "audio/s4-q1-en.mp3"
                    },
                    {
                        q: "What is the safest way to handle a truly accidental transfer?",
                        options: [
                            "Send it to the new number they ask for.",
                            "Tell them to contact their bank to officially reverse the transaction. Do not touch the money.",
                            "Spend it immediately."
                        ],
                        answer: 1,
                        questionAudio: "audio/s4-q2-en.mp3"
                    },
                    {
                        q: "If you send the money to the scammer's requested number, who will the police investigate first?",
                        options: [
                            "The scammer.",
                            "You, because the stolen money passed through your personal account.",
                            "The bank."
                        ],
                        answer: 1,
                        questionAudio: "audio/s4-q3-en.mp3"
                    },
                    {
                        q: "Can banks reverse a mistaken transfer if the sender reports it properly?",
                        options: [
                            "Yes, through official bank procedures.",
                            "No, it is impossible.",
                            "Only if the police do it."
                        ],
                        answer: 0,
                        questionAudio: "audio/s4-q4-en.mp3"
                    }
                ]
            },
			{
                title: "Method 5: Fake 'eGov' Compensation Links",
                lecture: "You receive an SMS or WhatsApp message stating that the government (eGov) or a national fund is giving out financial compensation to all citizens (e.g., 50,000 tenge for inflation). The message includes a link to a website that looks exactly like eGov.kz. It asks for your IIN, phone number, and bank card details to 'receive the payout.' This is a fake site designed to steal your identity and drain your bank account.",
                lectureAudio: "audio/s5-lecture-en.mp3",
                questions: [
                    {
                        q: "Will the real eGov portal ever send you a random WhatsApp link asking for your bank card details?",
                        options: [
                            "Yes, for fast payouts.",
                            "No, eGov never operates this way.",
                            "Only during national holidays."
                        ],
                        answer: 1,
                        questionAudio: "audio/s5-q1-en.mp3"
                    },
                    {
                        q: "You see a link that says 'egov-payout-kz.com'. Is this the official government site?",
                        options: [
                            "No, the official site is strictly egov.kz.",
                            "Yes, it is a special sub-site.",
                            "Maybe, you should click it to check."
                        ],
                        answer: 0,
                        questionAudio: "audio/s5-q2-en.mp3"
                    },
                    {
                        q: "What should you do if you think you might actually be eligible for government aid?",
                        options: [
                            "Click the link in the SMS to be safe.",
                            "Open the official eGov mobile app yourself or call 1414.",
                            "Ask your neighbors if they got it."
                        ],
                        answer: 1,
                        questionAudio: "audio/s5-q3-en.mp3"
                    },
                    {
                        q: "What happens if you enter your IIN and card details into a fake eGov site?",
                        options: [
                            "You get the money a few days later.",
                            "Scammers can take out loans in your name or steal your funds.",
                            "The bank will automatically block the fake site."
                        ],
                        answer: 1,
                        questionAudio: "audio/s5-q4-en.mp3"
                    }
                ]
            }
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
            incorrect: "❌ Неправильно. Попробуйте еще раз.",
			feedback_title: "Оставить отзыв",
            feedback_name: "Ваше имя",
            feedback_email: "Ваш Email",
            feedback_type: "Тип отзыва",
            feedback_type_1: "Предложение",
            feedback_type_2: "Нашел ошибку",
            feedback_type_3: "Вопрос",
            feedback_message: "Ваше сообщение",
            feedback_submit: "Отправить"
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
                lectureAudio: "audio/s1-lecture-ru.mp3",
                questions: [
                    {
                        q: "Вам звонит 'полицейский' и просит SMS-код, чтобы заблокировать кражу. Что делать?",
                        options: [
                            "Назвать код, так как это полиция.",
                            "Спросить номер значка, затем назвать код.",
                            "Немедленно повесить трубку и позвонить в свой банк."
                        ],
                        answer: 2,
                        questionAudio: "audio/s1-q1-ru.mp3"
                    }
                ]
            },
			{
                title: "Метод 2: Фишинговые ссылки на маркетплейсах (OLX / Kolesa)",
                lecture: "Мошенники притворяются покупателями на сайтах вроде OLX или Kolesa.kz. Они соглашаются купить ваш товар без осмотра и заявляют, что заплатят через сервис «безопасной доставки». Они отправляют вам ссылку в WhatsApp, чтобы «получить ваши деньги». Ссылка выглядит в точности как официальный сайт, но это поддельная страница (фишинг). Когда вы вводите данные своей карты и SMS-код, чтобы «получить деньги», мошенники на самом деле опустошают вашу карту.",
                lectureAudio: "audio/s2-lecture-ru.mp3",
                questions: [
                    {
                        q: "Покупатель на OLX отправляет вам ссылку в WhatsApp, чтобы «получить ваши деньги». Что вам следует сделать?",
                        options: ["Перейти по ней, чтобы быстро получить оплату.", "Никогда не переходить по ссылке и не вводить данные карты.", "Переслать ссылку друзьям, чтобы они ее проверили."],
                        answer: 1,
                        questionAudio: "audio/s2-q1-ru.mp3"
                    },
                    {
                        q: "Правда или ложь: Kaspi и Казпочта требуют ввести CVV-код, чтобы *получить* перевод.",
                        options: ["Правда, это необходимо для безопасности.", "Ложь, они никогда не требуют CVV для получения денег."],
                        answer: 1,
                        questionAudio: "audio/s2-q2-ru.mp3"
                    }
                ]
            },
            {
                title: "Метод 3: Фальшивая подработка (Wildberries / Задания в YouTube)",
                lecture: "Вы получаете сообщение в WhatsApp или Telegram с предложением высокооплачиваемой и легкой подработки. Все, что вам нужно делать, это «лайкать» товары на Wildberries или смотреть видео на YouTube. Чтобы доказать, что это реально, они действительно платят вам от 1000 до 5000 тенге за первые несколько лайков. Как только вы начинаете им доверять, вас приглашают в «VIP-группу заданий», где вы должны перевести свои собственные деньги для «выкупа» товаров ради гораздо большей прибыли. Как только вы отправляете крупную сумму, они блокируют вас и крадут ваши средства.",
                lectureAudio: "audio/s3-lecture-ru.mp3",
                questions: [
                    {
                        q: "Какова главная цель мошенников, когда они в начале действительно платят вам небольшую сумму денег?",
                        options: [
                            "Завоевать ваше доверие, чтобы позже вы отправили им большие суммы.",
                            "Из щедрости.",
                            "Они ошиблись с переводом."
                        ],
                        answer: 0,
                        questionAudio: "audio/s3-q1-ru.mp3"
                    },
                    {
                        q: "Вас просят перевести 50 000 тенге на карту Kaspi менеджера, чтобы «разблокировать VIP-задания». Что вам следует сделать?",
                        options: [
                            "Отправить, потому что они платили вам раньше.",
                            "Немедленно прекратить общение и заблокировать номер.",
                            "Попросить скидку на VIP-взнос."
                        ],
                        answer: 1,
                        questionAudio: "audio/s3-q2-ru.mp3"
                    },
                    {
                        q: "Нанимают ли официальные компании, такие как Wildberries, Ozon или YouTube, людей через WhatsApp просто для того, чтобы «лайкать» товары?",
                        options: [
                            "Да, это новая маркетинговая стратегия.",
                            "Нет, это известное мошенничество.",
                            "Только если у вас много подписчиков."
                        ],
                        answer: 1,
                        questionAudio: "audio/s3-q3-ru.mp3"
                    },
                    {
                        q: "Что вам следует сделать с небольшой суммой денег, которую они изначально вам отправили?",
                        options: [
                            "Оставить себе, заблокировать мошенников и прекратить все контакты.",
                            "Отправить обратно на тот же номер.",
                            "Вложить в их VIP-группу."
                        ],
                        answer: 0,
                        questionAudio: "audio/s3-q4-ru.mp3"
                    }
                ]
            },
            {
                title: "Метод 4: Ловушка «Случайный перевод»",
                lecture: "Вам неожиданно поступает 50 000 тенге на Kaspi Gold. Через несколько минут вам в панике звонит незнакомец и, плача, говорит, что отправил их по ошибке. Он умоляет вас вернуть деньги, но просит отправить их на *другой* номер телефона. Это ловушка! Изначальные деньги были украдены у другой жертвы. Если вы отправите их на новый номер, вы поможете мошенникам отмыть деньги, став невольным соучастником (дропом).",
                lectureAudio: "audio/s4-lecture-ru.mp3",
                questions: [
                    {
                        q: "Незнакомец просит вас вернуть случайно переведенные деньги на *другой* номер. Что это такое?",
                        options: [
                            "Схема отмывания денег, где вы становитесь «дропом».",
                            "Обычная банковская ошибка.",
                            "Мошенничество со службой поддержки."
                        ],
                        answer: 0,
                        questionAudio: "audio/s4-q1-ru.mp3"
                    },
                    {
                        q: "Какой самый безопасный способ справиться с действительно случайным переводом?",
                        options: [
                            "Отправить их на новый номер, о котором они просят.",
                            "Сказать им, чтобы они связались со своим банком для официальной отмены транзакции. Не трогать деньги.",
                            "Немедленно потратить их."
                        ],
                        answer: 1,
                        questionAudio: "audio/s4-q2-ru.mp3"
                    },
                    {
                        q: "Если вы отправите деньги на запрошенный мошенником номер, кого полиция будет расследовать в первую очередь?",
                        options: [
                            "Мошенника.",
                            "Вас, потому что украденные деньги прошли через ваш личный счет.",
                            "Банк."
                        ],
                        answer: 1,
                        questionAudio: "audio/s4-q3-ru.mp3"
                    },
                    {
                        q: "Могут ли банки отменить ошибочный перевод, если отправитель сообщит об этом должным образом?",
                        options: [
                            "Да, через официальные банковские процедуры.",
                            "Нет, это невозможно.",
                            "Только если это сделает полиция."
                        ],
                        answer: 0,
                        questionAudio: "audio/s4-q4-ru.mp3"
                    }
                ]
            },
            {
                title: "Метод 5: Поддельные ссылки на компенсации от «eGov»",
                lecture: "Вы получаете SMS или сообщение в WhatsApp о том, что правительство (eGov) или национальный фонд выплачивает финансовую компенсацию всем гражданам (например, 50 000 тенге за инфляцию). Сообщение содержит ссылку на веб-сайт, который выглядит точно так же, как eGov.kz. Он запрашивает ваш ИИН, номер телефона и данные банковской карты для «получения выплаты». Это поддельный сайт, созданный для кражи вашей личности и опустошения вашего банковского счета.",
                lectureAudio: "audio/s5-lecture-ru.mp3",
                questions: [
                    {
                        q: "Будет ли настоящий портал eGov когда-либо присылать вам случайную ссылку в WhatsApp с просьбой указать данные вашей банковской карты?",
                        options: [
                            "Да, для быстрых выплат.",
                            "Нет, eGov никогда так не работает.",
                            "Только во время национальных праздников."
                        ],
                        answer: 1,
                        questionAudio: "audio/s5-q1-ru.mp3"
                    },
                    {
                        q: "Вы видите ссылку с надписью «egov-payout-kz.com». Это официальный правительственный сайт?",
                        options: [
                            "Нет, официальный сайт — строго egov.kz.",
                            "Да, это специальный подсайт.",
                            "Возможно, вам стоит нажать на нее, чтобы проверить."
                        ],
                        answer: 0,
                        questionAudio: "audio/s5-q2-ru.mp3"
                    },
                    {
                        q: "Что вам следует сделать, если вы думаете, что действительно можете иметь право на государственную помощь?",
                        options: [
                            "Перейти по ссылке в SMS для безопасности.",
                            "Самостоятельно открыть официальное мобильное приложение eGov или позвонить по номеру 1414.",
                            "Спросить у соседей, получали ли они ее."
                        ],
                        answer: 1,
                        questionAudio: "audio/s5-q3-ru.mp3"
                    },
                    {
                        q: "Что произойдет, если вы введете свой ИИН и данные карты на поддельном сайте eGov?",
                        options: [
                            "Вы получите деньги через несколько дней.",
                            "Мошенники смогут оформить кредиты на ваше имя или украсть ваши средства.",
                            "Банк автоматически заблокирует поддельный сайт."
                        ],
                        answer: 1,
                        questionAudio: "audio/s5-q4-ru.mp3"
                    }
                ]
            }
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
            incorrect: "❌ Қате. Қайтадан байқап көріңіз.",
			feedback_title: "Пікір қалдыру",
            feedback_name: "Атыңыз",
            feedback_email: "Электрондық поштаңыз",
            feedback_type: "Пікір түрі",
            feedback_type_1: "Ұсыныс",
            feedback_type_2: "Қате таптым",
            feedback_type_3: "Сұрақ",
            feedback_message: "Хабарламаңыз",
            feedback_submit: "Жіберу"
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
                lectureAudio: "audio/s1-lecture-kk.mp3",
                questions: [
                    {
                        q: "Сізге банк шотыңыздағы ұрлықты тергеп жатқан полицеймін деп қоңырау шалып, SMS кодты сұрайды. Не істеу керек?",
                        options: [
                            "Кодты айту керек, өйткені ол полиция.",
                            "Жетон нөмірін сұрап, содан кейін кодты айту.",
                            "Тұтқаны дереу қойып, банкке өзіңіз қоңырау шалу."
                        ],
                        answer: 2,
                        questionAudio: "audio/s1-q1-kk.mp3"
                    }
                ]
            },
			{
                title: "2-әдіс: Маркетплейстердегі фишингтік сілтемелер (OLX / Kolesa)",
                lecture: "Алаяқтар OLX немесе Kolesa.kz сияқты сайттарда өздерін сатып алушы ретінде көрсетеді. Олар сіздің тауарыңызды көрмей-ақ сатып алуға келіседі және 'қауіпсіз жеткізу' қызметі арқылы төлейтінін айтады. Олар сізге 'ақшаңызды алу' үшін WhatsApp арқылы сілтеме жібереді. Сілтеме дәл ресми сайтқа ұқсайды, бірақ ол жалған парақша (фишинг). 'Ақшаны алу' үшін картаңыздың деректерін және SMS кодты енгізген кезде, алаяқтар шын мәнінде картаңыздағы ақшаны шешіп алады.",
                lectureAudio: "audio/s2-lecture-kk.mp3",
                questions: [
                    {
                        q: "OLX-тегі сатып алушы 'ақшаңызды алу' үшін WhatsApp арқылы сілтеме жібереді. Не істеу керек?",
                        options: ["Ақшаны тез алу үшін оны басу керек.", "Сілтемені ешқашан баспаңыз немесе карта деректерін енгізбеңіз.", "Тексеру үшін сілтемені достарыңызға жіберіңіз."],
                        answer: 1,
                        questionAudio: "audio/s2-q1-kk.mp3"
                    },
                    {
                        q: "Шын немесе жалған: Kaspi және Қазпошта аударымды *алу* үшін CVV кодты енгізуді талап етеді.",
                        options: ["Шын, бұл қауіпсіздік үшін қажет.", "Жалған, олар ақша алу үшін ешқашан CVV талап етпейді."],
                        answer: 1,
                        questionAudio: "audio/s2-q2-kk.mp3"
                    }
                ]
            },
            {
                title: "3-әдіс: Жалған қосымша жұмыс (Wildberries / YouTube тапсырмалары)",
                lecture: "Сізге WhatsApp немесе Telegram арқылы жоғары ақы төленетін, оңай қосымша жұмыс ұсынатын хабарлама келеді. Бар болғаны Wildberries-тегі тауарларға 'лайк' басу немесе YouTube бейнелерін көру керек. Мұның шын екенін дәлелдеу үшін олар алғашқы бірнеше лайк үшін сізге шынымен 1000-нан 5000 теңгеге дейін төлейді. Оларға сенгеннен кейін, сізді 'VIP тапсырмалар тобына' шақырады, онда үлкенірек пайда көру үшін тауарларды 'сатып алу' мақсатында өз ақшаңызды аударуыңыз керек. Үлкен соманы жібергеннен кейін, олар сізді бұғаттап, қаражатыңызды ұрлайды.",
                lectureAudio: "audio/s3-lecture-kk.mp3",
                questions: [
                    {
                        q: "Алаяқтар басында сізге аздаған ақша төлеген кездегі олардың негізгі мақсаты не?",
                        options: [
                            "Кейінірек үлкен сомаларды жіберуіңіз үшін сіздің сеніміңізге кіру.",
                            "Жомарттықтан.",
                            "Олар аударым жасағанда қателесті."
                        ],
                        answer: 0,
                        questionAudio: "audio/s3-q1-kk.mp3"
                    },
                    {
                        q: "'VIP тапсырмаларды ашу' үшін менеджердің Kaspi картасына 50 000 теңге аудару сұралды. Не істеу керек?",
                        options: [
                            "Жіберу керек, өйткені олар бұрын төледі.",
                            "Дереу сөйлесуді тоқтатып, нөмірді бұғаттау.",
                            "VIP жарнасына жеңілдік сұрау."
                        ],
                        answer: 1,
                        questionAudio: "audio/s3-q2-kk.mp3"
                    },
                    {
                        q: "Wildberries, Ozon немесе YouTube сияқты ресми компаниялар WhatsApp арқылы адамдарды тек тауарларға 'лайк' басу үшін жұмысқа ала ма?",
                        options: [
                            "Иә, бұл жаңа маркетингтік стратегия.",
                            "Жоқ, бұл белгілі алаяқтық.",
                            "Тек егер сіздің оқырмандарыңыз көп болса ғана."
                        ],
                        answer: 1,
                        questionAudio: "audio/s3-q3-kk.mp3"
                    },
                    {
                        q: "Олар бастапқыда жіберген аз ғана ақшамен не істеу керек?",
                        options: [
                            "Оны өзіңізге қалдырыңыз, алаяқтарды бұғаттап, барлық байланысты тоқтатыңыз.",
                            "Оны дәл сол нөмірге кері жіберіңіз.",
                            "Оны олардың VIP тобына инвестициялаңыз."
                        ],
                        answer: 0,
                        questionAudio: "audio/s3-q4-kk.mp3"
                    }
                ]
            },
            {
                title: "4-әдіс: 'Кездейсоқ аударым' тұзағы",
                lecture: "Сіздің Kaspi Gold картаңызға кенеттен 50 000 теңге түседі. Бірнеше минуттан кейін бейтаныс адам үрейленіп қоңырау шалып, жылап, оны қателесіп жібергенін айтады. Ол сізден ақшаны қайтаруды өтінеді, бірақ оны *басқа* телефон нөміріне жіберуді сұрайды. Бұл тұзақ! Бастапқы ақша басқа құрбаннан ұрланған. Егер сіз оны жаңа нөмірге жіберсеңіз, сіз алаяқтарға ақшаны жылыстатуға көмектесесіз, осылайша сіз байқаусызда қылмысқа қатысушыға (дропқа) айналасыз.",
                lectureAudio: "audio/s4-lecture-kk.mp3",
                questions: [
                    {
                        q: "Бейтаныс адам кездейсоқ аударылған ақшаны *басқа* нөмірге қайтаруды сұрайды. Бұл не?",
                        options: [
                            "Бұл ақшаны жылыстату алаяқтығы, мұнда сіз 'дроп' боласыз.",
                            "Қалыпты банктік қателік.",
                            "Қолдау қызметінің алаяқтығы."
                        ],
                        answer: 0,
                        questionAudio: "audio/s4-q1-kk.mp3"
                    },
                    {
                        q: "Шынымен кездейсоқ болған аударыммен не істеген ең қауіпсіз?",
                        options: [
                            "Оны олар сұраған жаңа нөмірге жіберіңіз.",
                            "Оларға транзакцияны ресми түрде кері қайтару үшін банктеріне хабарласуды айтыңыз. Ақшаға тиіспеңіз.",
                            "Оны бірден жұмсаңыз."
                        ],
                        answer: 1,
                        questionAudio: "audio/s4-q2-kk.mp3"
                    },
                    {
                        q: "Егер сіз ақшаны алаяқ сұраған нөмірге жіберсеңіз, полиция бірінші кімді тексереді?",
                        options: [
                            "Алаяқты.",
                            "Сізді, өйткені ұрланған ақша сіздің жеке шотыңыз арқылы өтті.",
                            "Банкті."
                        ],
                        answer: 1,
                        questionAudio: "audio/s4-q3-kk.mp3"
                    },
                    {
                        q: "Банктер жіберуші дұрыс хабарлаған жағдайда қате аударымды кері қайтара ала ма?",
                        options: [
                            "Иә, ресми банктік процедуралар арқылы.",
                            "Жоқ, бұл мүмкін емес.",
                            "Тек полиция жасаса ғана."
                        ],
                        answer: 0,
                        questionAudio: "audio/s4-q4-kk.mp3"
                    }
                ]
            },
            {
                title: "5-әдіс: Жалған 'eGov' өтемақы сілтемелері",
                lecture: "Сізге үкімет (eGov) немесе ұлттық қор барлық азаматтарға қаржылық өтемақы (мысалы, инфляция үшін 50 000 теңге) беріп жатыр деген SMS немесе WhatsApp хабарламасы келеді. Хабарламада дәл eGov.kz сияқты көрінетін веб-сайттың сілтемесі бар. Ол 'төлемді алу' үшін сіздің ЖСН, телефон нөміріңізді және банк картаңыздың деректерін сұрайды. Бұл сіздің жеке деректеріңізді ұрлауға және банк шотыңыздағы ақшаны шешіп алуға арналған жалған сайт.",
                lectureAudio: "audio/s5-lecture-kk.mp3",
                questions: [
                    {
                        q: "Нағыз eGov порталы сізден банк картаңыздың деректерін сұрап, кездейсоқ WhatsApp сілтемесін жібере ме?",
                        options: [
                            "Иә, жылдам төлемдер үшін.",
                            "Жоқ, eGov ешқашан бұлай жұмыс істемейді.",
                            "Тек ұлттық мерекелер кезінде."
                        ],
                        answer: 1,
                        questionAudio: "audio/s5-q1-kk.mp3"
                    },
                    {
                        q: "Сіз 'egov-payout-kz.com' деген сілтемені көресіз. Бұл ресми үкіметтік сайт па?",
                        options: [
                            "Жоқ, ресми сайт қатаң түрде egov.kz.",
                            "Иә, бұл арнайы ішкі сайт.",
                            "Мүмкін, тексеру үшін оны басып көру керек."
                        ],
                        answer: 0,
                        questionAudio: "audio/s5-q2-kk.mp3"
                    },
                    {
                        q: "Егер сіз шынымен мемлекеттік көмек алуға құқығым бар деп ойласаңыз, не істеу керек?",
                        options: [
                            "Қауіпсіз болу үшін SMS-тегі сілтемені басыңыз.",
                            "Ресми eGov мобильді қосымшасын өзіңіз ашыңыз немесе 1414 нөміріне қоңырау шалыңыз.",
                            "Көршілеріңізден олар алды ма, соны сұраңыз."
                        ],
                        answer: 1,
                        questionAudio: "audio/s5-q3-kk.mp3"
                    },
                    {
                        q: "Егер жалған eGov сайтына ЖСН мен карта деректерін енгізсеңіз не болады?",
                        options: [
                            "Сіз ақшаны бірнеше күннен кейін аласыз.",
                            "Алаяқтар сіздің атыңызға несие ала алады немесе қаражатыңызды ұрлай алады.",
                            "Банк автоматты түрде жалған сайтты бұғаттайды."
                        ],
                        answer: 1,
                        questionAudio: "audio/s5-q4-kk.mp3"
                    }
                ]
            }
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
            
            <audio controls style="width: 100%; margin-bottom: 20px; outline: none;">
                <source src="${scenario.lectureAudio}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        `;

        scenario.questions.forEach((question, qIndex) => {
            html += `
            <div class="quiz-box">
                <div class="question-title">Q${qIndex + 1}: ${question.q}</div>
                
                <audio controls style="width: 100%; margin-bottom: 15px; height: 35px; outline: none;">
                    <source src="${question.questionAudio}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>

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
	const myEmail = "your.email@gmail.com"; 

    let feedbackHtml = `
        <div class="card feedback-card" style="margin-top: 40px; background-color: var(--card-bg); border: 2px solid var(--primary-color);">
            <h2 style="text-align: center;">${data.ui.feedback_title}</h2>
            
            <form action="https://formsubmit.co/${myEmail}" method="POST" style="display: flex; flex-direction: column; gap: 15px;">
                <input type="hidden" name="_captcha" value="false">
                <input type="hidden" name="_subject" value="New Mask Off Feedback!">

                <input type="text" name="name" placeholder="${data.ui.feedback_name}" required style="padding: 10px; border-radius: 5px; border: 1px solid #ccc;">
                
                <input type="email" name="email" placeholder="${data.ui.feedback_email}" required style="padding: 10px; border-radius: 5px; border: 1px solid #ccc;">
                
                <select name="type" style="padding: 10px; border-radius: 5px; border: 1px solid #ccc;">
                    <option value="Suggestion">${data.ui.feedback_type_1}</option>
                    <option value="Bug">${data.ui.feedback_type_2}</option>
                    <option value="Question">${data.ui.feedback_type_3}</option>
                </select>

                <textarea name="message" rows="4" placeholder="${data.ui.feedback_message}" required style="padding: 10px; border-radius: 5px; border: 1px solid #ccc; resize: vertical;"></textarea>
                
                <button type="submit" class="quiz-btn" style="background-color: var(--primary-color); color: white; border: none; padding: 12px; border-radius: 5px; font-weight: bold; cursor: pointer;">
                    ${data.ui.feedback_submit}
                </button>
            </form>
        </div>
    `;
    scenariosContainer.innerHTML += feedbackHtml;
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
