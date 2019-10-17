
export class Badge extends HTMLElement {
    constructor() {
        super()

        this.addEventListener("mouseover", () => {
            if (this.disabled) return
        })

        this.classList.add("badge");
    }

    static get observedAttributes() {
        return ["primary", "secondary", "success", "danger", "warning", "info"]
    }

    attributeChangedCallback(name, oldVal, newVal) {
        const className = `badge-${name}`

        if (newVal || newVal == "") {
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

export class DropDown extends HTMLElement {
    constructor() {
        super()
    }
}