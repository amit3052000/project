var obj = {
  "data": [
    {
      "name": "Cosmetics",
      "productList": [
        {
          "name": "Hair Oil",
          "price": 122
        },
        {
          "name": "Face wash",
          "price": 123
        }
      ]
    },
    {
      "name": "Household",
      "productList": [
        {
          "name": "Hair Oil",
          "price": 122
        },
        {
          "name": "Face wash",
          "price": 123
        }
      ]
    }
  ]
}
var data= obj.data;
const x =Object.values(obj);
// for( let y in data){
  //   console.log(data);
  // }  
var myval;
  // for( let x in data){
    //   // let s =Object.keys(data[0])
    //   // console.log(data[x].name);
    //   // console.log(myval);
    //   for( let y in data[x].productList){
      //     let p = data[x].productList[y]
      //     let pri = data[x].productList[0];
      //     console.log(Object.keys(p)[y],p.name);
      //   }
      // }
      
      
      // var box="<div class='box'>asdd</div>";
      // for (let i =0; i<10;i++){
      //   document.getElementById('app').innerHTML+=box;
      // }
      // document.getElementById("app").innerHTML =`
      // <div>
      
      // </div>`;

// for(let i in data){
//   console.log(data[i].name);
//   box=`<div class="abc">1234567<div class="abcd>asdasd</div></div>`;
//   // box+="</div></div>"
//   document.getElementById('app').innerHTML+=box;
//   for(j in data[i].productList){
//       inner = '<div class="abcde">'+Object.keys(data[i].productList[j])[0]+":"+data[i].productList[j].name+`</div><div class="abcde">`+Object.keys(data[i].productList[j])[1]+":"+data[i].productList[j].price+"</div>";
//       // inner2 = '<div>'+Object.keys(data[i].productList[j])[1]+":"+data[i].productList[j].name+"</div><div>"+Object.keys(data[i].productList[j])[1]+":"+data[i].productList[j].price+"</div>";
//       document.getElementById('app').innerHTML+=inner;
//       console.log(inner);
//       // console.log(Object.keys(data[i].productList[j])[1]);
//       // console.log(data[i].productList[j].price);
//   }
// }
  function remove(){
    var element = document.getElementsByClassName("card");
    console.log(element.parentElement);
  }

  box=`
  <div class='main-box'>
    <div class="heading">`+data[0].name+`</div>
    <div class="card-container">
    <div class='card1 card'>
      <div>`+Object.keys(data[0].productList[0])[0]+`:`+data[0].productList[0].name+`</div>
      <div>`+Object.keys(data[0].productList[0])[1]+`:`+data[0].productList[0].price+`</div>
      <button>Add to the Cart</button>
      <button onClick="Remove">Remove from cart</button>
    </div>
    <div class='card2 card'>
      <div>`+Object.keys(data[0].productList[1])[0]+`:`+data[0].productList[1].name+`</div>
      <div>`+Object.keys(data[0].productList[1])[1]+`:`+data[0].productList[1].price+`</div>
      <button>Add to the cart</button>
      <button>Remove from cart</button>
    </div>
    </div>
    <div class="heading">`+data[1].name+`</div>
    <div class="card-container">
    <div class='card1 card'>
      <div>`+Object.keys(data[1].productList[0])[0]+`:`+data[1].productList[0].name+`</div>
      <div>`+Object.keys(data[1].productList[0])[1]+`:`+data[1].productList[0].price+`</div>
      <button>Add to the cart</button>
      <button>Remove from cart</button>
    </div>
    <div class='card2 card'>
      <div>`+Object.keys(data[1].productList[1])[0]+`:`+data[1].productList[1].name+`</div>
      <div>`+Object.keys(data[1].productList[1])[1]+`:`+data[1].productList[1].price+`</div>
      <button>Add to the cart</button>
      <button onClick=remove()>Remove from cart</button>
      </div>
    </div>
  </div>
  `
  document.getElementById("app").innerHTML+=box;




