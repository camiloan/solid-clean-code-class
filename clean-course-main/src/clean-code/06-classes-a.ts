(() => {
    type Gender = 'M' | 'F' | 'NB';
    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date) { }
    }

    const newPerson = new Person('Fernando', 'M', new Date('1993-08-23'));
    console.log({ newPerson });
})