let imageSrc = ['https://tse3.mm.bing.net/th?id=OIP.7jpR1fZDpLLZXmA3eKv-_AHaFC&pid=Api&P=0&h=180',
'https://tse4.mm.bing.net/th?id=OIP.ErAiMih0ltX9nxzgEbfN0gHaEp&pid=Api&P=0&h=180',
'https://tse3.mm.bing.net/th?id=OIP.pmI3XxKBxp8qUqtrleA23AHaEo&pid=Api&P=0&h=180'
]

let index = 0;

let container = document.getElementById('container');
let element = document.createElement('img');
element.src = imageSrc[index];
container.appendChild(element);

let prevBtn = document.createElement('button');
prevBtn.textContent = 'Prev';
container.appendChild(prevBtn);

let nextBtn = document.createElement('button');
nextBtn.textContent = 'Next';
container.appendChild(nextBtn);

// Implement for the nextbutton(1)
//  nextBtn.addEventListener('click',()=>{
//      if(index < imageSrc.length-1){
//          index++;
//          element.src = imageSrc[index];
//          if(index==imageSrc.length-1){
//             nextBtn.disabled = true;
//          }
//      }else{
//         nextBtn.disabled = true;
//         // element.src = imageSrc[index];
        
//      }
//  })
// // // Implement for the prevbutton(2)
// prevBtn.addEventListener('click',()=>{
//     if(index <= imageSrc.length-1){
//         index--;
//         element.src = imageSrc[index];
//         if(index == 0){
//             prevBtn.disabled = true;
//         }
//        }   else{
//              // index=imageSrc.length
//             // element.src=imageSrc[index];
//             prevBtn.disabled = true;
//      }
// })


// //Implement for the loop(3)
// nextBtn.addEventListener('click',()=>{
//     if(index < imageSrc.length-1){
//         index++;
//         element.src = imageSrc[index];
//         // nextBtn.disabled = true;
//     }else{
//         index=0;
//         element.src = imageSrc[index];
//         // nextBtn.disabled = false;
//     }
// })
// prevBtn.addEventListener('click',()=>{
//     if(index <= imageSrc.length-1 && index>0) {
//         index--;
//         element.src = imageSrc[index];
        
//        }   else{
//             index=imageSrc.length-1;
//             element.src=imageSrc[index];
//             // prevBtn.disabled = false;
//      }
// })


//Implement for the loop without button(4)
setInterval(()=>{
    nextBtn.disabled = true;
    prevBtn.disabled = true;
    if(index < imageSrc.length-1){
        index++;
        element.src = imageSrc[index];
        
      }else{
        index=0;
        element.src = imageSrc[index];
      }

 },2000);

