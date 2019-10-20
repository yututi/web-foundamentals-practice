
export class Badge extends HTMLElement {
    constructor() {
        super()

        this.classList.add("badge");
    }

    static modeList = ["primary", "secondary", "success", "danger", "warning", "info"]
    static get observedAttributes() {
        return ["appearance"]
    }

    attributeChangedCallback(name, oldVal, newVal) {

        switch (name) {
            case "appearance":
                this.changeAppearance(oldVal, newVal)
        }
    }

    changeAppearance(oldVal, newVal) {
        this.classList.remove(`badge-${oldVal}`)
        if (appearance) {
            const className = `badge-${newVal}`
            if (!this.classList.contains(className)) {
                this.classList.add(className)
            }
        }
        else {
            this.classList.remove(className)
        }
    }
}

export class Random extends HTMLElement {
    constructor() {
        super()

        this.innerText = Math.ceil(Math.random() * 100)
    }
}

export class Iterate extends HTMLElement {
    constructor() {
        super()

        this._shadowRoot = this.attachShadow({ mode: "open" })
        this._each = this.getAttribute("for")
    }

    static get observedAttributes() {
        return ["in"]
    }

    attributeChangedCallback(name, oldVal, newVal) {

        switch (name) {
            case "in":
                this.updateList(newVal)
        }
    }

    updateList(newList) {
        // remove all children
        while (this.firstChild) {
            this.removeChild(myNode.firstChild);
        }


    }
}