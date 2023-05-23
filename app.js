let myDivs = document.getElementsByClassName("fdiv");
let myContainer = document.getElementById("containerId");
let myMdiv2 = document.getElementById("mdiv2Id");
let myMenu = document.getElementById("menuId");
let myNavBar = document.getElementById("navBarId");
let myAnchor = document.getElementsByClassName("anchors");
let myList = document.getElementsByClassName("lists");





myMenu.addEventListener("click",()=>{

    myNavBar.classList.toggle("activeNavBar");
    for(let  i = 0 ; i < myList.length ; i++ )
    {
        myList[i].classList.toggle("activeLi");  
        myAnchor[i].classList.toggle("activeA");

    } 
       
         
    

})  

for(let i = 0 ;  i < myDivs.length ; i++)
{
    myDivs[i].addEventListener("click",(e) =>{
    
        let myCurrentTarget = e.currentTarget;
         if(myCurrentTarget.firstElementChild.alt==="mango")
        {
            
                myDivs[0].style.cssText="border: 1px solid rgb(207, 207, 207);";
                myDivs[1].style.cssText="border: 1px solid rgb(207, 207, 207);";
                myDivs[3].style.cssText="border: 1px solid rgb(207, 207, 207);";
                myDivs[4].style.cssText="border: 1px solid rgb(207, 207, 207);";
            
            myContainer.style.cssText="background-image: linear-gradient(to right,#F3C364 80% ,#f6dca8 20%)";
            myMdiv2.firstElementChild.setAttribute("src","drive-download-20210613T151042Z-001/mango.png");
            myCurrentTarget.style.cssText="border : 2px solid white";
        }
        else if(myCurrentTarget.firstElementChild.alt==="pineApple")
        {
            myDivs[0].style.cssText="border: 1px solid rgb(207, 207, 207);";
            myDivs[2].style.cssText="border: 1px solid rgb(207, 207, 207);";
            myDivs[3].style.cssText="border: 1px solid rgb(207, 207, 207);";
            myDivs[4].style.cssText="border: 1px solid rgb(207, 207, 207);";

            myContainer.style.cssText="background-image: linear-gradient(to right,#E69600 80% ,#ebb85b 20%);";
            myMdiv2.firstElementChild.setAttribute("src","drive-download-20210613T151042Z-001/pineApple.png");
            myCurrentTarget.style.cssText="border : 2px solid white";
            
        }
        
        else if(myCurrentTarget.firstElementChild.alt==="apple")
        {
            myDivs[0].style.cssText="border: 1px solid rgb(207, 207, 207);";
            myDivs[1].style.cssText="border: 1px solid rgb(207, 207, 207);";
            myDivs[2].style.cssText="border: 1px solid rgb(207, 207, 207);";
            myDivs[4].style.cssText="border: 1px solid rgb(207, 207, 207);";

            myContainer.style.cssText="background-image: linear-gradient(to right,#F23F48 80% ,#f86c73 20%);";
            myMdiv2.firstElementChild.setAttribute("src","drive-download-20210613T151042Z-001/apple.png");
            myCurrentTarget.style.cssText="border : 2px solid white";
            
        }
        else if(myCurrentTarget.firstElementChild.alt==="dragonFruits")
        {   
            myDivs[0].style.cssText="border: 1px solid rgb(207, 207, 207);";
            myDivs[1].style.cssText="border: 1px solid rgb(207, 207, 207);";
            myDivs[2].style.cssText="border: 1px solid rgb(207, 207, 207);";
            myDivs[3].style.cssText="border: 1px solid rgb(207, 207, 207);";

            myContainer.style.cssText="background-image: linear-gradient(to right,#FB7EA6 80% ,#f8b2c8 20%);";
            myMdiv2.firstElementChild.setAttribute("src","drive-download-20210613T151042Z-001/dragonFruits.png");
            myCurrentTarget.style.cssText="border : 2px solid white";
            
        }
        else
        {
            myDivs[1].style.cssText="border: 1px solid rgb(207, 207, 207);";
            myDivs[2].style.cssText="border: 1px solid rgb(207, 207, 207);";
            myDivs[3].style.cssText="border: 1px solid rgb(207, 207, 207);";
            myDivs[4].style.cssText="border: 1px solid rgb(207, 207, 207);";
            myContainer.style.cssText="background-image: linear-gradient(to right,#96B879 80% ,#a1bd87 20%);";
            myMdiv2.firstElementChild.setAttribute("src","drive-download-20210613T151042Z-001/watermelon.png");
            myCurrentTarget.style.cssText="border : 2px solid white";
            
        }
        
    
    })
}


