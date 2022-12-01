(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    interface Movie {
        cast:        string[];
        description: string;
        rating:      number;
        title:       string;
    }
    function createMovie({title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    // Continuation

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }):number => {
        let result: number;
        if ( isDead ) return  1500;
        
        if ( isSeparated ) return 2500;

        return isRetired ? 3000 : 4000;
        
    }



})();




