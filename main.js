

var boxe = document.getElementsByClassName("boxe");

var minus = document.getElementsByClassName("minus")[0];
var plus = document.getElementsByClassName("plus")[0];
var qte= document.getElementsByClassName("qte")[0];

plus.addEventListener("click", function () {
  qte.innerText = Number(qte.innerText) + 1;
  //appel de la foction
  total();
});
minus.addEventListener("click", function () {
  if(qte.innerText!=0)
  qte.innerText = Number(qte.innerText) - 1;

  //appel de la foction
  total();
});


// creation de la fonction
function total() {
  //le prix total
  var totals = document.querySelector(".totalprice");
 
  //prix de produit
  var price = document.getElementsByClassName("price");
  //les quantités des produits
  var qte = document.getElementsByClassName("qtet");
  //compteur des prix
  var sum = 0;


  console.log(totals.innerHTML,price.innerHTML,qte.innerHTML)
  // selection des tous les prix et les produits
  for (var i = 0; i < 6; i++) {
    //calcul de la somme

    sum += parseFloat(qte[i].innerHTML) * parseFloat(price[i].innerHTML);
    
  }
  //mettre la somme dans le html à la place de zero
  totals.innerHTML = sum;
}


var boxe1 = document.getElementsByClassName("boxe1");

var minus1 = document.getElementsByClassName("minus1")[0];
var plus1 = document.getElementsByClassName("plus1")[0];
var qte1 = document.getElementsByClassName("qte1")[0];

plus1.addEventListener("click", function () {
  qte1.innerText = Number(qte1.innerText) + 1;
  //appel de la foction
  total();
});
minus1.addEventListener("click", function () {
  if(qte1.innerText!=0)
  qte1.innerText = Number(qte1.innerText) - 1;

  //appel de la foction
  total();
});








var boxe2 = document.getElementsByClassName("boxe2");

var minus2 = document.getElementsByClassName("minus2")[0];
var plus2 = document.getElementsByClassName("plus2")[0];
var qte2 = document.getElementsByClassName("qte2")[0];

plus2.addEventListener("click", function () {
  qte2.innerText = Number(qte2.innerText) + 1;
  //appel de la foction
  total();
});
minus2.addEventListener("click", function () {
  if(qte2.innerText!=0)
  qte2.innerText = Number(qte2.innerText) - 1;

  //appel de la foction
  total();
});





var boxe3 = document.getElementsByClassName("boxe3");

var minus3 = document.getElementsByClassName("minus3")[0];
var plus3 = document.getElementsByClassName("plus3")[0];
var qte3 = document.getElementsByClassName("qte3")[0];

plus3.addEventListener("click", function () {
  qte3.innerText = Number(qte1.innerText) + 1;
  //appel de la foction
  total();
});
minus3.addEventListener("click", function () {
  if(qte3.innerText!=0)
  qte3.innerText = Number(qte3.innerText) - 1;

  //appel de la foction
  total();
});




var boxe4 = document.getElementsByClassName("boxe4");

var minus4 = document.getElementsByClassName("minus4")[0];
var plus4 = document.getElementsByClassName("plus4")[0];
var qte4 = document.getElementsByClassName("qte4")[0];

plus4.addEventListener("click", function () {
  qte4.innerText = Number(qte4.innerText) + 1;
  //appel de la foction
  total();
});
minus4.addEventListener("click", function () {
  if(qte4.innerText!=0)
  qte4.innerText = Number(qte4.innerText) - 1;

  //appel de la foction
  total();
});




var boxe5 = document.getElementsByClassName("boxe5");

var minus5 = document.getElementsByClassName("minus5")[0];
var plus5 = document.getElementsByClassName("plus5")[0];
var qte5 = document.getElementsByClassName("qte5")[0];

plus5.addEventListener("click", function () {
  qte5.innerText = Number(qte4.innerText) + 1;
  //appel de la foction
  total();
});
minus5.addEventListener("click", function () {
  if(qte5.innerText!=0)
  qte5.innerText = Number(qte5.innerText) - 1;

  //appel de la foction
  total();
});



var btndelete=document.getElementsByClassName("btndelete")
var boxing=document.getElementsByClassName("boxing")


for (var index = 0; index < btndelete.length; index++) {
  var delt=btndelete[index];
    let boxd=boxing[index];
   
    
     
delt.addEventListener("click", function () {

  boxd.remove();
  total()
});
  
}

var hearts=document.getElementsByClassName("coeur")
for (let index = 0; index < hearts.length; index++) {
let heart=hearts[index]
  heart.addEventListener("click", function () {
    if(heart.style.color !="red")
    heart.style.color ="red"
    else
    heart.style.color ="black"
  });
}