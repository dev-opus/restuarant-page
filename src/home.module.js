// IT HAS BEGUN!

const Home = (() => {
    const main = document.createElement('main');
    const heading = document.createElement('h2');
    const article = document.createElement('article');

    heading.innerText = 'Welcome to Dolores Restaurant - The home of Nigerian Delicacies'
    article.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi unde temporibus nam laboriosam voluptatibus ab possimus tempore accusamus laudantium earum, voluptas, dolor neque ex saepe adipisci doloribus totam autem.'
    
    const append = ((...args) => {
        args.forEach(arg => main.appendChild(arg))
    })(heading, article);

    return {
        main
    }
})();

export {Home};