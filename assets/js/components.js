class PortfolioHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
		<div class="inner">
      <a href="/index.html" class="image avatar"><img src="/images/avatar.jpg" alt="" /></a>

      <h1><strong>I’m Jenna</strong>, a data enthusiast<br />
        who thrives on new challenges <br />
        and solving tough problems.
      </h1>
    </div>`;
  }
}

class PortfolioFooter extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
    <div class="inner">
      <ul class="icons">
        <li><a href="https://www.linkedin.com/in/jenna-cowen/" class="icon brands fa-linkedin"><span
              class="label">LinkedIn</span></a></li>
        <li><a href="https://github.com/j-cowen" class="icon brands fa-github"><span class="label">Github</span></a>
        </li>
      </ul>
      <ul class="copyright">
        <li>&copy; Jenna Cowen ${new Date().getFullYear()}</li>
        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </div>`;
  }
}

customElements.define('portfolio-header', PortfolioHeader);
customElements.define('portfolio-footer', PortfolioFooter);