// PROJECT'S FOOTER PAGE

const authorDetails = (() => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const generateFooterContents = ((...args) => {
        args = Array.from(args)

        const setAtributes = (elem, atrrs) => {
            for (const key in atrrs) {
                elem.setAttribute(key, atrrs[key]);
            }
        }

        const anchors = args.map(arg => {
            const a = document.createElement('a');
            setAtributes(a, {'href': arg[0], 'target': '_blank'});
            a.textContent = arg[1];
            return a;
        });

        const para = document.createElement('p');
        para.innerText = 'created by victor orlunda'

        const para1 = document.createElement('p');
        para1.innerText = 'github: ';
        para1.insertAdjacentElement('beforeend', anchors[0])

        const para2 = document.createElement('p');
        para2.innerText = 'twitter: ';
        para2.insertAdjacentElement('beforeend', anchors[1])

        const appendToFooter = ((...args) => {
            args.forEach(arg => {
                footer.appendChild(arg)
            })
        })(para, para1, para2)

    })(['https://github.com/dev-opus', 'dev-opus'], ['https://twitter.com/hiatus_01', 'hiatus_01']);

    return {
        footer
    }
})()

export default authorDetails;