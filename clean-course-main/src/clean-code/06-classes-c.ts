(() => {

    // Aplicando el principio de responsabilidad única
    // Priorizar las composición frente a la herencia
    type Gender = 'M' | 'F' | 'NB';

    interface PersonProps {
        name: string
        gender: Gender
        birthdate: Date
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;
        constructor(
            { name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;

        }
    }

    const newPerson = new Person({ name: 'Fernando', gender: 'M', birthdate: new Date('1993-08-23') });

    interface UserProps{
        password: string
        email: string
        username: string
    }


    class User {
        public lastAccess: Date;
        public password: string;
        public email: string;
        public username: string;
        constructor(
            { password, email, username }: UserProps) {
            this.lastAccess = new Date();
            this.password = password;
            this.email = email;
            this.username = username;
        }

        checkCredentials(password: string) {
            return password === this.password;
        }
    }

    const newUser = new User({

        password: '123456',
        email: 'fernando@gmail.com',
        username: 'fernando'
    });

    interface SettingsProps {
        workingDirectory: string
        lastOpenFolder: string
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }

    }


   interface UserSettingsProps {
        name: string
        gender: Gender
        birthdate: Date
        password: string
        email: string
        username: string
        workingDirectory: string
        lastOpenFolder: string
       }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name,
            gender,
            birthdate,
            password,
            email,
            username,
            workingDirectory,
            lastOpenFolder
        }: UserSettingsProps) {

            this.person= new Person({ name, gender, birthdate });
            this.user = new User({ password, email, username });
            this.settings = new Settings({ workingDirectory, lastOpenFolder });

        }

    }


    


    const userSettings = new UserSettings({
        name: 'Fernando',
        gender: 'M',
        birthdate: new Date('1993-08-23'),
        password: '123456',
        email: 'fernando@gmail.com',
        username: 'fernando',
        workingDirectory: 'C:\\Users\\fernando\\Documents',
        lastOpenFolder: 'C:\\Users\\fernando\\Documents'
    });
    console.log({ userSettings, areCredentialsValid: userSettings.user.checkCredentials('123456') });
})();