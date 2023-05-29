const searchForm= document.querySelector(".search-form");
const cartItem= document.querySelector(".cart-items-container");
const navbar= document.querySelector(".navbar");

//! buttons

const searchBtn = document.querySelector("#search-btn"); /*# id işaretidir */
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active"); /*search ikonuna tıklanınca search-bar açılıyor ama sadece ikona tıklayınca kapanır */
    document.addEventListener("click",function(e){
        if(
            !e.composedPath().includes(searchBtn) && /*başka yere tıklanırsa kapansın*/
            !e.composedPath().includes(searchForm) /*sadece search-bar içerisine tıklanırsa kapanmayacak */
            ){
            searchForm.classList.remove("active")
        }
    });
});

cartBtn.addEventListener("click", function(){
    cartItem.classList.toggle("active"); 
    document.addEventListener("click",function(e){
        if(
            !e.composedPath().includes(cartBtn) && 
            !e.composedPath().includes(cartItem) 
            ){
            cartItem.classList.remove("active")
        }
    });
});

menuBtn.addEventListener("click", function(){
    navbar.classList.toggle("active"); 
    document.addEventListener("click",function(e){
        if(
            !e.composedPath().includes(menuBtn) && 
            !e.composedPath().includes(navbar) 
            ){
                navbar.classList.remove("active")
        }

    });


});