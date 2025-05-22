(() => {

    // No aplicando el princio de responsabilidad única
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

    interface UserProps extends PersonProps {
        password: string
        email: string
        username: string
    }


    class User extends Person {
        public lastAccess: Date;
        public password: string;
        public email: string;
        public username: string;
        constructor(
            { name, gender, birthdate, password, email, username }: UserProps) {
            super({ name, gender, birthdate });
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
        name: 'Fernando',
        gender: 'M',
        birthdate: new Date('1993-08-23'),
        password: '123456',
        email: 'fernando@gmail.com',
        username: 'fernando'
    });

    interface UserSettingsProps extends UserProps {
        workingDirectory: string
        lastOpenFolder: string
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({ name, gender, birthdate, password, email, username, workingDirectory, lastOpenFolder }: UserSettingsProps) {

            super({ name, gender, birthdate, password, email, username });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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
    console.log({ userSettings, areCredetentialsValid: userSettings.checkCredentials('123456') });
})();