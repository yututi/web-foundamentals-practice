
export class Button extends HTMLElement {
    constructor() {
        super()

        const shadowRoot = this.attachShadow({ mode: "open" })

        shadowRoot.innerHTML = `
            <style>
                button {
                    background-color: transparent;
                    border: 1px solid gainsboro;
                    box-sizing: border-box;
                    cursor: pointer;
                    outline: none;
                    padding: 0.5em;
                    appearance: none;
                    border-radius: 3px;
                    display: flex;
                    align-items: center;
                }
                .text {
                    flex:1;
                }
            </style>
            <button>
                <slot class="icon" name="icon"></slot>
                <div class="text">
                    <slot>this text is fallback content.</slot>
                </div>
            </button>
        `
    }

    static get observedAttributes() {
        return ["color"]
    }

    attributeChangedCallback(name, oldVal, newVal) {

        switch (name) {
            case "color":
                this.changeColor(oldVal, newVal)
        }
    }

    changeColor(oldVal, newVal) {
        
    }
}