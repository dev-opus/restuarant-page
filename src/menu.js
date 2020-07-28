// MENU COMONENT TAB
const menu =(() => {
    const main = document.createElement('main');
    main.classList.add('menu-container');

    const header = document.createElement('header');
    header.classList.add('menu-header');

    const generateHeaderContents = (() => {
        const h2 = document.createElement('h2');
        h2.innerText = 'dolores'

        const para = document.createElement('p');
        para.innerText = '~ The home of Nigerian Delicacies';

        const append =((...args) => {
            args.forEach(arg => header.appendChild(arg));
        })(h2, para);
    })()

    const article = document.createElement('article');
    article.classList.add('menu-text');

    const para = document.createElement('p');
    para.innerText = 'Browse through our list of mouth-watering dishes original to the Nigerian people'

    const grid = document.createElement('div');
    grid.classList.add('menu-grid');

    const generateGridContents =(() => {
        const setAtributes = (elem, atrrs) => {
            for (const key in atrrs) {
                elem.setAttribute(key, atrrs[key]);
            }
        }

        const generateImages =((...args) => {
            const texts = ['coconut rice', 'oha soup', 'jollof rice and chicken', 'goatmeat pepersoup', 'ogbono soup', 'afang soup']
            args.forEach(arg => {
                const img = document.createElement('img');
                setAtributes(img, arg)

                const cell = document.createElement('div');
                cell.classList.add('menu-item');

                cell.appendChild(img);
                cell.insertAdjacentText('beforeend', texts[texts.length - 1]);
                texts.pop();

                grid.appendChild(cell)
            })
        })({'src': './img/afang.jpg'}, {'src':'./img/ogbono.jpg', 'width': '320'}, {'src': './img/goatmeat.jpg'}, {'src': './img/jollof.jpg'}, {'src': './img/oha-soup.jpg', 'width': '320'}, {'src': './img/coconut.jpg'});
    })()

    const appendToArticle = ((...args) => {
        args.forEach(arg => article.appendChild(arg))
    })(para, grid);

    const appendToMain = ((...args) => {
        args.forEach(arg => main.appendChild(arg))
    })(header, article);

    return {
        main
    }
})()

export default menu;