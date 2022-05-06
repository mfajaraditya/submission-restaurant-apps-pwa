import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './components/footer-bar';
import './components/app-bar';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburger-button'),
  drawer: document.querySelector('#navigation-drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
