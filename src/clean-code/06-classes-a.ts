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
    
    class User extends Person {
        
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super( name, gender, birthdate)
            this.lastAccess = new Date();
        }
        
        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory : string,
            public lastOpenFolder   : string,
            email                   :string,
            role                    : string,
            name                    : string,
            gender                  : Gender,
            birthdate               : Date,
        ){
            super( email, role, name, gender, birthdate );
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        'home',
        'fabio@gmail.com',
        'Admin',
        'Fabio',
        'M',
        new Date('2001-05-24')
    );

    console.log( { userSettings });
    
})()