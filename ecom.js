var addItemID=0;
function addToCart(item)
{
    addItemID +=1;
var selectedItem=document.createElement('div');
selectedItem.classList.add('cartImg');
selectedItem.setAttribute('id',addItemID)
var img=document.createElement('img');
img.setAttribute('src',item.children[0].currentSrc);
var title=document.createElement('div');
title.innerText=item.children[1].innerText;
 var dlelbtn=document.createElement('button');
 dlelbtn.innerText='Delete';
dlelbtn.setAttribute('onclick','dlt("+addItemID+")');

var cartItems=document.getElementById('title');
selectedItem.append(img);
selectedItem.append(title);
selectedItem.append(dlelbtn);
cartItems.append(selectedItem);
}

function dlt(item)
{
    console.log("harsh");
 document.getElementById(item).remove();
}




