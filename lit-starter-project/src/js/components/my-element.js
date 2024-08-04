import { LitElement, html, css, nothing } from 'lit';

class MyElement extends LitElement {
  static properties = {
    minPasswordLenght: {
      type: Number,
    },
    freeze: {
      type: Boolean,
    },
    withPlaceHolder: {
      type: Boolean,
    },
  };

  static styles = css`
    form > div {
      margin-block-end: 8px;
    }

    label,
    input {
      display: block;
    }
  `;

  constructor() {
    super();
    this.minPasswordLenght = 8;
  }

  render() {
    return html`
      <form>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            ?readonly=${this.freeze}
            placeholder=${this.withPlaceholder ? 'Masukkan email' : nothing}
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            minlength="${this.minPasswordLenght}"
            ?readonly=${this.freeze}
            placeholder=${this.withPlaceholder ? 'Masukkan password' : nothing}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    `;
  }
}

customElements.define('my-element', MyElement);
