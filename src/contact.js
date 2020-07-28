// CONTACT TAB COMPONENT

const contact =(() => {
    const main = document.createElement('main');
    main.classList.add('contact-container');

    const header = document.createElement('header');
    const generateHeaderContents = (() => {
        const h2 = document.createElement('h2');
        h2.innerText = 'dolores';

        const para = document.createElement('p');
        para.innerText = '~ The home of Nigerian Delicacies'

        const append =((...args) => {
            args.forEach(arg => header.appendChild(arg));
        })(h2, para);
    })();

    const article = document.createElement('article');
    const generateArticleContents = (() => {
        const setAtributes = (elem, atrrs) => {
            for (const key in atrrs) {
                elem.setAttribute(key, atrrs[key]);
            }
        }

        const img = document.createElement('img');
        setAtributes(img, {'src': './img/location.png', 'width': '300', 'height': '250'});

        const para = document.createElement('p');
        para.innerHTML = 'We are located at Port-Harcourt Mall, No. 1 Azikiwe Road.<br />Call us on +234-000-000-000 or +234-111-111-111';

        const append =((...args) => {
            args.forEach(arg => article.appendChild(arg));
        })(img, para);
    })()

    const appendToMain = ((...args) => {
        args.forEach(arg => main.appendChild(arg));
    })(header, article)

    return {
        main
    }
})()

export default contact;