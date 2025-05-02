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
    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }5

    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    function checkFullName(fullName: string) {
        console.log({ fullName });
        return true;
    }
    function createActor(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (checkFullName(fullName)) return false;

        console.log('Crear actor', birthdate);
        return true;

    }

    // Continuar

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if (isDead) return 1500;
        if (isSeparated) return 2500;
        return isRetired ? 3000 : 4000;
    }

})();




