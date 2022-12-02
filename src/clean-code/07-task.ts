(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';

    class HtmlElement {
        
        constructor(
            public id: string,
            public type: HtmlType
            ) {}
        
    }


    class Attributes {

        constructor( 
            public value       : string,
            public placeholder : string
        ) {}
        
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

        constructor(
            value       : string,
            placeholder : string,
            id          : string,
        ) {
            this.htmlElement = new HtmlElement(  id, 'input' );
            this.attributes  = new Attributes( value, placeholder );
            this.events      = new Events();
        }
    }

    const nameField = new InputElement( 'Fernando', 'Enter first name', 'input' );

    console.log({ nameField });


    // My error was that i make interface but the interface is created when the class have more of three arguments
    
})()
