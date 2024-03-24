const template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <style>
        * {
            box-sizing: border-box !important;
        }

        button.sort-btn {
            color: white;
            background-color: transparent;
            height: fit-content;
            border: none;
            outline: none;
            border-radius: 4px;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -ms-border-radius: 4px;
            -o-border-radius: 4px;
            font-size: 16px;
            position:relative;
        }

        .sort-item {
            position: absolute;
            color: black;
            display: flex;
            flex-direction: column;
            right: 10px;
            background-color: white;
            padding: 5px 7px;
            margin-top: 10px;
            box-shadow: 0px 2px 3px 0px grey;
            border-radius: 5px;
            gap: 6px;
            transform: translateY(-10px);
            opacity: 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .sort-item.active {
            transform: translateY(0);
            opacity: 1;
        }


        ::slotted([slot=sort-mode]){
            display:flex;
            gap:6px;
        }

    </style>
    <button class="sort-btn">
        <i class="bi bi-funnel-fill"></i>
    </button>
    <div class="sort-item">
        <slot name="sort-mode"></slot>
    </div>
`

export class SortButton extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const newTemplate = template.content.cloneNode(true)
        this.shadowRoot.appendChild(newTemplate)
        this.runSortBtnEvent()
    }

    runSortBtnEvent() {
        this.shadowRoot.addEventListener('click', () => {
            this.shadowRoot.querySelector('.sort-item').classList.toggle('active')
        })
    }

}