(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';

    interface HtmlElementProps {
        id: string;
        type: HtmlType;
    }
    class HtmlElement {
        public id: string;
        public type: HtmlType;
        constructor( {id, type}: HtmlElementProps) {
            this.id   = id;
            this.type = type;
        }
    }


    interface AttributesProps {
        value       : string;
        placeholder : string;
    }

    class Attributes {
        public value       : string;
        public placeholder : string;

        constructor( {value, placeholder}: AttributesProps) {
            this.value       = value;
            this.placeholder = placeholder;
        }
    }


    
    class Events {
        constructor( ) {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement

    interface InputElementProps {
        value       : string;
        placeholder : string;
        id          : string;
        type        : HtmlType;
    }

    class InputElement {
        public attributes  : Attributes;
        public events      : Events;
        public htmlElement : HtmlElement;

        constructor({
            value, placeholder,
            id, type,
        }: InputElementProps){
            this.attributes  = new Attributes({ value, placeholder });
            this.htmlElement = new HtmlElement({ id, type });
            this.events      = new Events();
        }
    }

    const nameField = new InputElement({
        id              : 'txtName',
        value       : 'Fernando',
        placeholder : 'Enter first name',
        type        : 'input'
    });

    console.log({ nameField });

})()
