
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
                    border-radius: 0.5em;
                    display: flex;
                    align-items: center;
                }
                :host-context(.themed--dark) button {
                    background-color: #000113;
                    color: white;
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

        shadowRoot.querySelector("button").addEventListener("click", () => {
            alert("this event is registered on shadow root")
        })
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