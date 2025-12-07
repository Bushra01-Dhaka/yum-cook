const getLikeData = () => {
    const storedLikeSTR = localStorage.getItem("likedList");

    if(storedLikeSTR){
        const storedLikedData = JSON.parse(storedLikeSTR);
        return storedLikedData;
    }
    else{
        return [];
    }
}


const addToLikedDB = (id) => {
    const storedLikes = getLikeData();
    
    if(storedLikes.includes(id)){
        alert("Recipe has already liked by you")
    }
    else{
        storedLikes.push(id);
        // console.log(storedLikes);
        const data = JSON.stringify(storedLikes);
        localStorage.setItem("likedList", data);
    }
}

export {addToLikedDB, getLikeData};