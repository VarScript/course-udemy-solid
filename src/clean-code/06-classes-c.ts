(() => {

    // Aplying  the single responsibility principle
    // rioritize the composition front to the inheritance
    // Avoid the extensions

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor( {name, gender, birthdate}: PersonProps ) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {
        email : string;
        role  : string;
    }

    class User {
        public email      : string;
        public lastAccess : Date;
        public role       : string;
        
        constructor( {email, role}: UserProps ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        lastOpenFolder   : string;
        workingDirectory : string;
    }

    class Settings{
        public lastOpenFolder   : string;
        public workingDirectory : string;
        
        constructor( {workingDirectory, lastOpenFolder}: SettingsProps ){
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }


    interface UserSettingsProps {
        birthdate               : Date;
        email                   : string;
        gender                  : Gender;
        lastOpenFolder          : string;
        name                    : string;
        role                    : string;
        workingDirectory        : string;
    }

    class UserSettings {
        public person   : Person;
        public settings : Settings;
        public user     : User;

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory
        }: UserSettingsProps) {
            this.person   = new Person({ name, gender, birthdate });
            this.user     = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory })
        }
    }


    const userSettings = new UserSettings({
        birthdate        : new Date('2001-05-24'),
        email            : 'fabio@gmail.com',
        gender           :  'M',
        lastOpenFolder   : 'home',
        name             :  'Fabio',
        role             :  'Admin',
        workingDirectory : '/usr/home',
    });

    console.log( { userSettings });

})()