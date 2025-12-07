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
        alert("Recipe has already saved!")
    }
    else{
        savedRecipes.push(id);
        const data = JSON.stringify(savedRecipes);
        localStorage.setItem("savedRecipeList", data);
    }
}

export {addToSaveRecipeDB, getSaveRecipes};