
let count = 1
document.getElementById("count").innerHTML = count
const increase = ()=>{
    if(count<5){
        count++
        document.getElementById("count").innerHTML = count
    }
    else{
        console.log("limit exceed");
    }
}
const decrease = ()=>{
    if(count>1){
        count--
        document.getElementById("count").innerHTML = count
    }
    else{
        console.log("limit exceed");
    }
    
}
const buynow = ()=>{
    alert("Your order place now!!!")
    window.location.reload()
}
const addtocart = ()=>{
    alert("Your order added successfully😊")
    window.location.reload()
}



let darkmode = ()=>{
    document.getElementById("body").style.background = "gray"
 document.getElementById("topbar").style.background = "black"
  document.getElementById("sectioncontent").style.background = "black"
   document.getElementById("sectioncontent").style.color = "white"
    document.getElementById("stock").style.color = "white"
}



let lightmode = ()=>{
    document.getElementById("body").style.background = "rgb(243, 243, 243)"
 document.getElementById("topbar").style.background = "green"
  document.getElementById("sectioncontent").style.background = "white"
   document.getElementById("sectioncontent").style.color = "black"
    document.getElementById("stock").style.color = "black"
}

