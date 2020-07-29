// HOME TAB COMPONENT

const welcomePage = (() => {
    const main = document.createElement('main');
    main.classList.add('home-container');

    const header = document.createElement('header');
    header.classList.add('home-header');

    const generateHeaderContents = (() => {
        const h2 = document.createElement('h2')
        h2.innerText = 'Welcome to Dolores'

        const p = document.createElement('p');
        p.innerText = '~ The home of Nigerian Delicacies'

        const append = ((...args) => {
            args.forEach(arg => header.appendChild(arg));
        })(h2, p);
    })()

    const article = document.createElement('article');
    article.classList.add('home-text')

    const generateArticleContents = (() => {
        const setAtributes = (elem, atrrs) => {
            for (const key in atrrs) {
                elem.setAttribute(key, atrrs[key]);
            }
        }

        const img = document.createElement('img');
        setAtributes(img, {'src': '../img/jollof-rice-2.jpg', 'width': '300', 'height': '250'})

        const div = document.createElement('div');
        div.classList.add('img-container');
        div.appendChild(img);

        const para = document.createElement('p');
        para.innerText = 'Dolores offers the best mouth-watering and satisfying nigerian dishes. Our cousines ranges from a variety of rice dishes, to soups. click on the other tabs to find out more.'

        const append =((...args) => {
            args.forEach(arg => article.appendChild(arg))
        })(div, para)
    })()

    const appendToMain = ((...args) => {
        args.forEach(arg => main.appendChild(arg))
    })(header, article)

    return {
        main
    }
})()

export default welcomePage;