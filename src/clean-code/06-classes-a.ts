(() => {

    // Don't applying the principle of unique responsibility
    type Gender = 'M'|'F';

    class Person {

        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ) {}
    }


    const newPerson = new Person('Fabio', 'M', new Date('2001-05-24'));
    console.log( {newPerson} );
    
})()