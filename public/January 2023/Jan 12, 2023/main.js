const percent = document.querySelectorAll(".percent");
const submit = document.getElementById("submit");

submit.addEventListener('click',() =>{
    percent.forEach(element => {
        let output = element.innerHTML;
  //  console.log(element.innerHTML)
    element = parseInt(element.innerHTML, 10)
 //   console.log(element);
    element = element + 1;
   // console.log(element);
    output = element + '%'
    console.log(output)
    return output;
});
} )


//     percent.forEach(element => {
//         let output = element.innerHTML;
//   //  console.log(element.innerHTML)
//     element = parseInt(element.innerHTML, 10)
//  //   console.log(element);
//     element = element + 1;
//     console.log(element);
//     output = element + '%'
//     console.log(output);
//     }
    )