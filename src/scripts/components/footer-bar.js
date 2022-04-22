class FooterBar extends HTMLElement {
     connectedCallback() {
          this.render()
     }

     render(){
          this.innerHTML = `<p>
          Copyright &copy; 2022 - <span class="makan">Makan Terus</span>
        </p>`
     }
}

customElements.define('footer-bar', FooterBar);