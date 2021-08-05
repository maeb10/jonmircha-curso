/**
 * API Fetch 
 * Es un mecanismos más óptimo para hacer peticiones XMLHTTPREQUEST
 */

(()=>{
    const $fetch    = document.getElementById("fetch"),
          $fragment = document.createDocumentFragment();
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.ok ? res.json() : Promise.reject(res) )
    .then(json => {
        json.forEach( (el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}--${el.email}--${el.phone}`
            $fragment.appendChild($li);
        } );
        $fetch.appendChild($fragment);
    })
    .catch(err => {
        console.log("Estamos en el catch",err);
        let message = err.statusText || "Ocurrió un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
    }).finally(()=>{
        // console.log("Esto se ejecutará independientemente de la promesa fetch");
    });

})();

(()=> {
    const $fetchAsync = document.getElementById("fetch-async"),
          $fragment   = document.createDocumentFragment();
    
    async function getData(){
        try{
            let res  = await fetch("https://jsonplaceholder.typicode.com/users"), 
                json = await res.json();
            // console.log(res, json); 

            // if( !res.ok )throw new Error("Ocurrio un error al solicitar los datos");
            if(!res.ok) throw { status:res.status, statusText:res.statusText }

            json.forEach( (el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name}--${el.email}--${el.phone}`
                $fragment.appendChild($li);
            } );
            $fetchAsync.appendChild($fragment);
        }catch(err){
            // console.log("Estoy en el catch", err);
            let message = err.statusText || "Ocurrió un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;   
        } finally {
            // console.log("Esto se ejecutará independientemente del try catch");

        }
    }

    

    getData();
})();

( () => {
    const $axios = document.getElementById("axios"),
          $fragment   = document.createDocumentFragment();
    axios
    .get("https://jsonplaceholder.typicode.com/user")
    .then(res => {
        let json = res.data;
        json.forEach( (el) => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name}--${el.email}--${el.phone}`
            $fragment.appendChild($li);
        } );
        $axios.appendChild($fragment);
    })
    .catch(err => {
        let message = err.response.statusText || "Ocurrió un error";
        $axios.innerHTML = `Error ${err.response.status}: ${message}`; 
    })
    .finally(console.log("Esto se ejecutará independientemente del resultado axios"));
} )();