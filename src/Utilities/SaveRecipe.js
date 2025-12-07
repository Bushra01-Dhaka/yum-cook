import Swal from "sweetalert2";

const getSaveRecipes = () => {
   const savedRecipeSTR = localStorage.getItem("savedRecipeList");

   if(savedRecipeSTR){
     const savedRecipeData = JSON.parse(savedRecipeSTR);
     return savedRecipeData;
   }
   else{
    return [];
   }
}


const addToSaveRecipeDB = (id) => {
    const savedRecipes = getSaveRecipes();

    if(savedRecipes.includes(id)){
        // alert("Recipe has already saved!")
         Swal.fire({
                      title: "Recipe has alredy saved",
                      icon: "success",
                      draggable: true,
                    });
    }
    else{
        savedRecipes.push(id);
        const data = JSON.stringify(savedRecipes);
        localStorage.setItem("savedRecipeList", data);
    }
}

export {addToSaveRecipeDB, getSaveRecipes};