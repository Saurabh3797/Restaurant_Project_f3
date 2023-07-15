
// let loaddata = document.getElementById("data-load");


async function getMenu(){
    let api = "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";

    try{
        let responce = await fetch(api);
        let result = await responce.json();
        console.log(result);
        loadmenu(result);

    }catch(Error){
        console.log(Error);
    }
}

getMenu();

function loadmenu(data){
    const items = document.getElementsByClassName("items")[0];
  
    for(let i = 0; i < 3; i++){
      let item = data[i];

      let elements = `
        <div class="item">
        <div class="item-img">
            <img src="${item.imgSrc}" alt="">
        </div>
        <div class="item-details">
           <div class="item-name">
           ${item.name}
           </div>
           
           <div class="item-price">
               <div class="price">${item.price}</div>
               <button><img src="/image/plus (1) 1.svg" alt=""></button>
           </div>
        </div>
        </div>
      `
      
      items.innerHTML += elements;
    }
}