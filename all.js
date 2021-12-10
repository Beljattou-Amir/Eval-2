



document.querySelector("#saisie").addEventListener("submit", async e => {
    e.preventDefault();
    const total = {
        name : e.target.name.value,
        montant : e.target.montant.value
    }
   

    const options = {
        body : JSON.stringify(total),
        method : "POST",
        headers : {'Content-Type': 'application/json'} 
    }
   const req = await fetch("http://localhost:3000/total" , options);

   console.log(req.status);

})


    






window.addEventListener("DOMContentLoaded"  , async() => {

    const reponse = await fetch("http://localhost:3000/total" )
    const total = await reponse.json(); 
    
    

   
    document.querySelector(".js-compteur").innerHTML = total.filter( total =>("depense.value" - "recette.value") ); 


   
    document.querySelector(".js-list-tache").addEventListener("click" , async e => {
        e.preventDefault();
        if(e.target.className.includes("btn")){
            const form = e.target.parentNode;
            const action = e.target.value ;
            const id = form.id.value
            if(action == "modifier"){
                const data = {
                    id : id,
                    name : form.name.value,
                    montant : form.montant.value 
                }
                const options = { method : "PUT" , body : JSON.stringify(data) , headers : {'Content-Type': 'application/json'} }
                await fetch("http://localhost:3000/total/"+id , options)
            }else if(action == "supprimer"){
                const options = {method : "DELETE"}
                await fetch("http://localhost:3000/total/"+id , options);
            }
        }
    })
})

