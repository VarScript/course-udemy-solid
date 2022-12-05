(()=>{
    // No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';

    // Alto Acoplamiento

    class Person {
        constructor(
            public firtsName: string,
            public lastName: string,
            public gender: Gender,
            public birthdate: Date,
        ){}
    }

    class User extends Person {
        constructor(
            public email: string,
            public role: string,
            private lastAccess: Date,
            gender: Gender,
            birthdate: Date,
            firtsName: string,
            lastName: string,
        ){
            super(firtsName, lastName, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


class UserSettings extends User {
    constructor(
        public workingDirectory: string,
        public lastFolderOpen: string,
        email     : string,
        role      : string,
        gender    : Gender,
        birthdate : Date,
        firtsName: string,
        lastName: string,
    ){
        super(
            email,
            role,
            new Date(),
            gender,
            birthdate,
            firtsName,
            lastName
        )
    }
}
    


    const userSettings = new UserSettings(
        'fernando@google.com',
        'Admid',
        '/urs/home',
        '/development',
        'M',
        new Date('1985-10-21'),
        'Fabio',
        'Henry',
    );

    console.log({ userSettings, credentials: userSettings.checkCredentials() });
    
})()