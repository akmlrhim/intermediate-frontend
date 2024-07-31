import { LitElement, html, css } from 'lit';

class TitleApp extends LitElement {
  static styles = css`
    :host {
      display: block;
    h1 {
      text-align: center;
    }

    h1 {
      font-size: 24px;
      margin-top: 0;
    }
  `;

  render() {
    return html` <h1>ToDo App</h1> `;
  }
}

customElements.define('title-app', TitleApp);
