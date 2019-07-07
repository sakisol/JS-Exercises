//EXERCISE 4.JS

var head = ["eyes", "nose", "eyebrows", "mouth", "ears"];

var torso = ["breast", "nipple", "bellybutton", "neck"];

var limbs =  ["arm", "leg", "knee", "elbow", "foot", "hand"];

//try this later 
//var clothing = ["shirt", "hat", "shoe", "watch", "glove", "brassiere"];

document.getElementById("headbtn").addEventListener("click", function(){getBodyParts(head,'head')});

document.getElementById("torsobtn").addEventListener("click", function(){getBodyParts(torso,'torso')});

document.getElementById("limbbtn").addEventListener("click", function(){getBodyParts(limbs,'limbs')});


//document.getElementById("torsobtn").addEventListener("click", getBodyParts(torso, "torso"));
//document.getElementById("limbbtn").addEventListener("click", getBodyParts(limbs, "limbs"));

//can't put () in eventlistener as that calls the function on page load

// if (document.getElementById("headbtn").onlcick == true ){
//        
//        alert ("i've been clicked")
//        
////        return getBodyParts(head, "head")
//        }

function getBodyParts (things, section){
    
//    alert("clicktrack");
    
    for (var i=0; i < things.length; i++){
        
        var li = document.createElement("li");
        var text = things[i];

        li.innerHTML = text;
        
        document.getElementById(section).appendChild(li);
            
    }
    
   
} 
    