(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) { }
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {
        }
    }

    class InputEvents {
        // biome-ignore lint/complexity/noUselessConstructor: <explanation>
        constructor() {
        }

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }



    class InputElement {
        public html: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;
        constructor(
            value: string, placeholder: string, id: string
        ) {
            this.html = new HtmlElement(id, 'input');
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();

        }
    }


    //? Idea para la nueva clase InputElement

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()