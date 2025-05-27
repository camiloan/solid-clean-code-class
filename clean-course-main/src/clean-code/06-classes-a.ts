(() => {

    // No aplicando el princio de responsabilidad única

    type Gender = 'M' | 'F' | 'NB';
    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date) { }
    }

    const newPerson = new Person('Fernando', 'M', new Date('1993-08-23'));


    class User extends Person {
        public lastAccess: Date;
        constructor(
            public username: string,
            public email: string,
            public password: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(password: string) {
            return password === this.password;
        }
    }

    const newUser = new User('fernando', 'fernando@gmail.com', '123456', 'Fernando', 'M', new Date('1993-08-23'));

    class UserSettings extends User {
        constructor(public workingDirectory: string,
            public lastOpenFolder: string,
            username: string,
            email: string,
            password: string,
            name: string, gender: Gender, birthdate: Date) {
            super(username, email, password, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings('C:\\Users\\fernando', 'C:\\Users\\fernando', 'fernando', 'fernando@gmail.com', '123456', 'Fernando', 'M', new Date('1993-08-23'));

    console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials('123456') });
})