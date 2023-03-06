let v=prompt("enter your name") 
document.getElementById("name").textContent=v
let b=document.querySelectorAll("li")
setTimeout(function(){
    for(let c=0;c<b.length;c++){
    b[c].classList.add("visual")
    }
},2)

let item=document.getElementById("addbutton")
item.addEventListener("click",addwork)
window.addEventListener("keyup",function(e){
    if(e.keyCode==13){
        let d=document.getElementById("newwork")
        let data=d.value
        let text=document.createTextNode(data)
      let oldul=document.getElementById("target")
      if(data.length>0){
        console.log(data.length)
       
        let li=document.createElement("li");
        let checkb=document.createElement("input")
        checkb.type="checkbox";
        checkb.setAttribute("id","check")
    
        
        let label=document.createElement("label")
        label.setAttribute("for","check")
        
    
        //  ul.appendChild(label)
        li.appendChild(checkb);
        label.appendChild(text)
        li.appendChild(label);
        // myul.appendChild(li)
        // ul.insertBefore(li,ul.childNodes[0]);
        // console.log(oldul)
        // console.log(li)
        let arr=document.querySelectorAll("li")
        // console.log(arr)
        oldul.insertBefore(li,arr[0])
        d.value=""
       setTimeout(function(){
        li.classList.add("visual")
       },500)
      }
    }
})
function addwork(){
  
    let d=document.getElementById("newwork")
    let data=d.value
    let text=document.createTextNode(data)
  let oldul=document.getElementById("target")
  if(data.length>0){
    // console.log(data.length)
   
    let li=document.createElement("li");
    let checkb=document.createElement("input")
    checkb.type="checkbox";
    checkb.setAttribute("id","check")

    
    let label=document.createElement("label")
    label.setAttribute("for","check")
    

    //  ul.appendChild(label)
    li.appendChild(checkb);
    label.appendChild(text)
    li.appendChild(label);
    // myul.appendChild(li)
    // ul.insertBefore(li,ul.childNodes[0]);
    // console.log(oldul)
    // console.log(li)
    let arr=document.querySelectorAll("li")
    // console.log(arr)
    oldul.insertBefore(li,arr[0])
    d.value=""
  
    li.classList.add("visual")
   
  }
}


document.getElementById("c2button").addEventListener("click",clearall)

function clearall(){
    document.getElementById("target").innerHTML=""
}


document.getElementById("c1button").addEventListener("click",clearchecked)
function clearchecked(){
    let arr=document.querySelectorAll("li")
    let ul=document.getElementById("target")
    // console.log(arr[0].childNodes[0].checked)

      for(let a=0;a<arr.length;a++){
        if(arr[a].childNodes[0].checked){
            ul.removeChild(arr[a])
        }
      }




}
