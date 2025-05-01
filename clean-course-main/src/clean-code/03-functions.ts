(() => {

    function getMovieById(id: string) {
        console.log({ id });
    }

    function getMovieCastById(movieId: string) {
        console.log({ movieId });
    }

    function getActorBioById(ActorId: string) {
        console.log({ ActorId });
    }

    // Crear una película
    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }

    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    function checkFullName(fullName: string) {
        console.log({ fullName });
        return true;
    }
    // Crea un nuevo actor
    function createActor(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (checkFullName(fullName)) return false;

        console.log('Crear actor', birthdate);
        return true;

    }

})();




