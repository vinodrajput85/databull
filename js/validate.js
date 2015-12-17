function validateForm(formId){
    var form=document.getElementById(formId);
    var allSelBox=form.getElementsByTagName("SELECT");
    var allInputs=form.getElementsByTagName("INPUT");
    var allTextArea=form.getElementsByTagName("TEXTAREA");
    for (var i =0; i < allSelBox.length; i++){
        if (allSelBox.getAttribute("required") && allSelBox.value==""){
            applyPopAttrib(allSelBox[i]);
        }
    }
    for (var i =0; i < allInputs.length; i++){
        if(allInputs[i].type=='radio'){
            
        }
        else if(allInputs[i].type=='text'){
            
            
        }
        else if(allInputs[i].type=='hidden'){            

        }
        else if(allInputs[i].type=='button'){
            
        }
        else if(allInputs[i].type=='checkbox'){
            
        }
        else if(allInputs[i].type=='file'){
            
        }
        
    }
    for (var i =0; i < allTextArea.length; i++){        
        
    }
    
}

function applyPopAttrib(element){
    element.setAttribute("data-toggle","popover");
    element.setAttribute("data-trigger","hover");
    element.setAttribute("data-placement","right");
    element.setAttribute("data-content","test Content");    
}