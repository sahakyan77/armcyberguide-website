document.addEventListener('DOMContentLoaded', () => {
    const articlesContainer = document.querySelector('.articles-container');
    const faqContainer = document.querySelector('.faq-container');

    const articles = [
        {
            title: 'Ինչպես պաշտպանվել ֆիշինգից',
            content: 'Ֆիշինգը (phishing) կիբերհարձակման ամենատարածված տեսակներից մեկն է։ Հաքերները փորձում են խաբեությամբ ստանալ ձեր անձնական տվյալները (գաղտնաբառեր, բանկային քարտերի համարներ և այլն)՝ օգտագործելով կեղծ կայքեր կամ էլ. փոստի հաղորդագրություններ։'
        },
        {
            title: 'Անվտանգ գաղտնաբառի գաղտնիքները',
            content: 'Ձեր գաղտնաբառը ձեր թվային տան դուռն է։ Հզոր գաղտնաբառ ունենալը կարող է պաշտպանել ձեզ հակերներից և տվյալների գողությունից։'
        },
        {
            title: 'Հանրային Wi-Fi. Վտանգները',
            content: 'Հանրային Wi-Fi ցանցերը հաճախ պաշտպանված չեն, ինչը թույլ է տալիս հաքերներին գաղտնալսել ձեր տվյալները։ Խորհուրդ է տրվում օգտագործել VPN։'
        }
    ];

    const faqs = [
        {
            question: 'Ինչու՞ է կարևոր հակավիրուսային ծրագիրը։',
            answer: 'Հակավիրուսային ծրագիրը պաշտպանում է ձեր համակարգիչը վնասակար ծրագրերից, որոնք կարող են գողանալ ձեր տվյալները կամ վնասել համակարգը։'
        },
        {
            question: 'Արդյո՞ք հանրային Wi-Fi-ը վտանգավոր է։',
            answer: 'Այո, հանրային Wi-Fi ցանցերը հաճախ պաշտպանված չեն, ինչը թույլ է տալիս հաքերներին գաղտնալսել ձեր տվյալները։ Խորհուրդ է տրվում օգտագործել VPN։'
        }
    ];

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        articleDiv.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
        `;
        articlesContainer.appendChild(articleDiv);
    });

    faqs.forEach(faq => {
        const faqDiv = document.createElement('div');
        faqDiv.classList.add('faq-item');
        faqDiv.innerHTML = `
            <div class="faq-question">${faq.question}</div>
            <div class="faq-answer" style="display: none;">${faq.answer}</div>
        `;
        faqContainer.appendChild(faqDiv);
    });

    faqContainer.addEventListener('click', (event) => {
        const clickedItem = event.target.closest('.faq-item');
        if (clickedItem) {
            const answer = clickedItem.querySelector('.faq-answer');
            const allAnswers = faqContainer.querySelectorAll('.faq-answer');

            allAnswers.forEach(ans => {
                if (ans !== answer) {
                    ans.style.display = 'none';
                }
            });

            if (answer.style.display === 'none') {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        }
    });

    const typingElement = document.querySelector('.typing-animation');
    if (typingElement) {
        const textToType = typingElement.getAttribute('data-text');
        typingElement.textContent = '';
        let i = 0;
        function typeWriter() {
            if (i < textToType.length) {
                typingElement.textContent += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();
    }
});