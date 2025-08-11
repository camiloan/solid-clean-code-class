interface Bird {
    eat(): void;
}

interface FlyingBird extends Bird {
    fly(): number;
}
interface RunningBird extends Bird {
    run(): void;
}

interface SingingBird extends Bird {
    sing(): void;
}

interface SwimmingBird extends Bird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly() {
        console.log('Flying');
        return 20;
    }
    public eat() {
        console.log('Eating');
    }
}

class Hummingbird implements Bird, FlyingBird, SingingBird {
    public fly() {
        console.log('Flying');
        return 60;
    }
    public sing() {
        console.log('Singing');
    }
    public eat() {
        console.log('Eating');
    }
}

class Ostrich implements Bird, RunningBird {

    public run() {
        console.log('Running');
    }

    public eat() {
        console.log('Eating');
    }

}


class Penguin implements Bird, FlyingBird, SingingBird, SwimmingBird {
    public fly() {
        console.log('Flying');
        return 10;
    }
    public sing() {
        console.log('Singing');
    }
    public eat() {
        console.log('Eating');
    }
    public swim() {
        console.log('Swimming');
    }
}
