/*!
* Miandrs 
* Copyright 2023 Miandrs
*/
const allData = [
{
    id: "portfolioModal1", 
    img: "assets/img/portfolio/1.jpg", 
    title: "EasyCash", 
    intro: "Gestion de Cash Point", 
    description: "Notre projet est une solution de gestion des transactions par mobile monnaie incluant les trois(3) opérateurs mobiles dans notre pays dont Airtel, Orange et Telma Madagascar.", 
    client: "Cash Point", 
    category: "Application Mobile"
},
{
    id: "portfolioModal2", 
    img: "assets/img/portfolio/2.jpg", 
    title: "Quickasset", 
    intro: "Gestion de patrimoine", 
    description: "C’est une solution de gestion de stock et d’inventaire. Nous éditons une application digitale web et mobile qui vous permet d’avoir une solution digitale dédiée à l’inventaire physique.", 
    client: "Entreprise", 
    category: "Application Web/Mobile"
},
{
    id: "portfolioModal3", 
    img: "assets/img/portfolio/3.jpg", 
    title: "e-Gest", 
    intro: "Gestion de stock", 
    description: "C’est une solution de gestion de stock et de caisse des magasins. C'est une application logiciel desktop qui vous permet la gestion de votre magasin.", 
    client: "Magasin", 
    category: "Application Logiciel Desktop"
},
{
    id: "portfolioModal4", 
    img: "assets/img/portfolio/4.jpg", 
    title: "Dago-eBoky", 
    intro: "Librairie virtuelle", 
    description: "Cette application met à dispositon sur internet, plusieurs livres de types différentes en version électronique, accéssible et téléchargeable par touts les membres.", 
    client: "Librairie", 
    category: "Application Web"
},
{
    id: "portfolioModal5", 
    img: "assets/img/portfolio/5.jpg", 
    title: "TicTacToe", 
    intro: "Jeux à deux joueurs/contre IA", 
    description: "Cet jeux permet d'appliquer l'algorithme de MiniMax.", 
    client: "Tous le monde", 
    category: "Application Logiciel Desktop"
}];

const setPortfolio = (objectData) => {
    let portfolio = `<div class="col-lg-4 col-sm-6 mb-4">
            <!-- Portfolio item 1-->
            <div class="portfolio-item">
                <a class="portfolio-link" data-toggle="modal" href="${'#'+objectData.id}">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src="${objectData.img}" alt="..." />
                </a>
                <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">${objectData.title}</div>
                    <div class="portfolio-caption-subheading text-muted">${objectData.intro}</div>
                </div>
            </div>
        </div>`;
    return portfolio;
}

let divRow = document.createElement('div');
divRow.classList.add("row");
let porfolioContainer = document.getElementById('portfolio-container');
porfolioContainer.appendChild(divRow);

const setModal = (objectData) => {
    let portfolioModal = `<div class="portfolio-modal modal fade" id="${objectData.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                <!-- Project details-->
                                <h2 class="text-uppercase">${objectData.title}</h2>
                                <p class="item-intro text-muted">${objectData.intro}</p>
                                <img class="img-fluid d-block mx-auto full-img" src="${objectData.img}" alt="..." />
                                <p>${objectData.description}</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        ${objectData.client}
                                    </li>
                                    <li>
                                        <strong>Catégorie:</strong>
                                        ${objectData.category}
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-dismiss="modal" type="button">
                                    <i class="fas fa-times me-1"></i>
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    return portfolioModal;
}
const modalDiv = document.getElementById('modal-div');
let modal = "";
let portfolio = "";
for(let data of allData) {
    modal += setModal(data);
    portfolio += setPortfolio(data);
}

divRow.innerHTML = portfolio;
modalDiv.innerHTML = modal;