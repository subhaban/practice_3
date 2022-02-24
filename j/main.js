

const myButton = document.getElementById("growbtn");


   myButton.addEventListener('click', myGrow => {
   
    var answer = Number(prompt("Want to increase by how many pixels?"));

  
    flexibox.style.transform = `translate(${answer}px,${answer}px)`;
   
});

//function myGrow(){
//   const changeSize = document.getElementById("flexibox");
//   changeSize.style.transform =`translate()`


//unction mouseover(event){
       

          //flexibox.innerHTML = `x:$[myGrow.clientX], Y:$[event.clientY]`;
//} 
   //flexibox.addEventListener('mousedown',mouseover);
      // document.innerHTMl = event.offsetX + ', ' + event.offsetY;
//console.log(`$(flexibox.clientX")`);
 
 /*const point = document.querySelector(".point");

 //create shortcut constants
const demo  = document.querySelector('.demo');
const point = document.querySelector('#point');

//detect mousedown events and handle them.
demo.addEventListener('mousemove', (e) => {
    point.innerHTML = e.offsetX + ', ' + e.offsetY;
    
    //open the JS console to see the output
    console.log("Client: " , e.clientX , e.clientY)
    console.log("Page: " , e.pageX , e.pageY)
    console.log("Screen: " , e.screenX , e.screenY)
    console.log("Event Object: ", e);
});*/



 