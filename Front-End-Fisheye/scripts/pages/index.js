    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const photographersTemplate = document.querySelector(".photographer_section");
        const res = await fetch("../../data/photographers.json");
        const data = await res.json();
        const photographerData = data.photographers;
        console.log(photographerData);
        photographerData.forEach((photographer) => {
            const photographerModel = new PhotographerFactoryIndex(photographer);
            const userCardDOM = photographerModel.createPhotgrapherCard();
            photographersTemplate.innerHTML += userCardDOM;
            console.log(userCardDOM);
        });
        // et bien retourner le tableau photographers seulement une fois
        return photographerData;
    };




 
 
    async function init() {
        // Récupère les datas des photographes
         await getPhotographers();
    };
    
    init();
    