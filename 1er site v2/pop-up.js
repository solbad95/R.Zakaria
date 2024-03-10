var boutonHeader = document.querySelector(".bouton.header");    /* Bouton contactez-nous */
var popup = document.querySelector(".pop-up");   /* La pop-up formulaire */
var popupOpacity = document.querySelector(".pop-up-opacity");    /* Récupere la classe pop-up-opacity  */
var boutonClose = document.querySelector(".close"); /* Petite croix de la pop-up formulaire*/
var boutonEnvoyer = document.querySelector(".bouton-pop-up.orange");    /* Bouton envoyer */
var popUpValider = document.querySelector(".pop-up.pluspetite"); /* La pop-up valider*/
var boutonCloseValider = document.querySelector(".close-valider"); /* Petite croix de la pop-up de validation */


/* Quand je clique sur le bouton contactez-nous, fais ça :  */
boutonHeader.addEventListener('click', function(){  
    popup.classList.toggle("hidden");   /* Affiche la pop-up en DESACTIVANT la classe css hidden */
    popupOpacity.classList.toggle("hidden");    /* Met le fond en opaque/transparent en ACTIVANT la classe css hidden*/


    /* Quand je clique sur le bouton Envoyer fais ça : */
    boutonEnvoyer.addEventListener('click', function(){ 
        popup.classList.toggle("hidden");   /* N'affiche plus la pop up en ACTIVANT la classe css hidden*/
        popUpValider.classList.toggle("hidden");    /* Affiche la pop-up de validation en DESACTIVANT la classe css hidden */
        

        /* Quand je clique sur la croix de pop-up de validation, fais ça :  */ 
        boutonCloseValider.addEventListener('click', function(){    
            popUpValider.classList.toggle("hidden");    /* N'affiche plus la pop-up valider en ACTIVANT grace à toggle
                                                         la classe hidden */
            popupOpacity.classList.toggle("hidden");    /* Enlève le filtre opaque/transparant qui est sur le fond 
                                                        en ACTIVANT la classe hidden*/
        });

    });

     /* Quand je clique sur la croix de la pop-up formulaire, fais ça : */
    boutonClose.addEventListener('click', function(){
        popup.classList.toggle("hidden");   /* N'affiche plus la popup formulaire en ACTIVANT la classe hidden grace au toggle */
        popupOpacity.classList.toggle("hidden");    /* Enleve le fond opaque/transparant en ACTIVANT grace à toggle
                                                    la classe hidden*/

    });
});