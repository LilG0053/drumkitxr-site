/**
 * Site Navigation
 */
 class M2Header extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'header');

        // Logo
        const logo = document.createElement('h1');
        logo.setAttribute('id', 'title');
        logo.innerText = 'm₂';

        // Home link
        const home = document.createElement('a');
        home.setAttribute('href', '/');
        home.innerText = 'Home';

        // Silk Brush link
        const drumsim = document.createElement('a');
        drumsim.setAttribute('href', '/drum-sim/');
        drumsim.innerText = 'Drum Simulator XR';
        // Redirect to /drum-sim
        window.location.href = "/drum-sim";

        // Styling
        const style = document.createElement('style');
        style.textContent = `
            a {
                color: #dd4a4a;
                text-decoration: none;
                font-size: 1.5em;
            }
        
            h1 {
                font-size: 4em;
            }

            .header > a {
                margin: 1em;
            }

            p {
                display: inline;
                margin-left: -.5em;
                margin-right: 1em;
                font-size: 1.5em;
            }

            p > a {
                font-size: 1em;
            }
        `;

        shadowRoot.append(style);
        wrapper.appendChild(logo);
        wrapper.appendChild(home);
        wrapper.appendChild(drumsim);
        wrapper.appendChild(document.createElement('hr'));

        shadowRoot.append(wrapper);
    }
}
customElements.define('m2-header', M2Header);