// PROJECT'S NAVIGATION BAR

const navBar = (() => {
    const header = document.createElement('header');
    header.classList.add('main-header');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerText = 'dolores'

    const tabs = document.createElement('div');
    tabs.classList.add('nav-bar');
    
    const generateTabcontents = ((...args) => {
        args = Array.from(args)
        const elems1 = args.map(arg => {
            const a = document.createElement('a');
            a.setAttribute('href', '#');
            a.innerText = arg;
            return a;
        });

        const elems2 = elems1.map(node => {
            const li = document.createElement('li');
            li.appendChild(node);
            return li;
        })

        const elems3 = elems2.map(node => {
            const ul = document.createElement('ul');
            ul.appendChild(node);
            return ul;
        })

        elems3.forEach(node => {
            tabs.appendChild(node);
        })
    })('home', 'menu', 'contact');


    const appendToHeader = ((...args) => {
        args.forEach(arg => header.appendChild(arg))
    })(logo, tabs)

    return {
        header
    }
})()

export default navBar;