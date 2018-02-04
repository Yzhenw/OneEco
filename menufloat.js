var flag=false;
function change()
{ 
    var menuup = document.getElementById("menuup");    
  var menudown = document.getElementById("menudown");    
  var menufloat = document.getElementById("menufloat");
  if(!flag)
    {
      menuup.className="menu-line-upcss";
     menudown.className="menu-line-downcss";
     menufloat.className="menufloatc";
     flag=true;
  }
      else 
  {
    menuup.className="menu-line-up";
        menudown.className="menu-line-down";
        menufloat.className="menufloat";
        
        flag=false;
  }
    
}
function moveup()
{ 
    var moveup = document.getElementById("move");   
    moveup.className="moveon";
    
}
function movedown()
{ 
    var movedown = document.getElementById("move");   
    movedown.className="moveout";
}
function moveupa()
{ 
    var moveupa = document.getElementById("move1");   
    moveupa.className="moveonn";
}
function movedowna()
{ 
    var movedowna = document.getElementById("move1");   
    movedowna.className="moveoutt";
}
function moveupb()
{ 
    var moveupb = document.getElementById("move2");   
    moveupb.className="moveonn";
}
function movedownb()
{ 
    var movedownb = document.getElementById("move2");   
    movedownb.className="moveoutt";
}
function moveupc()
{ 
    var moveupc = document.getElementById("move3");   
    moveupc.className="moveonn";
}
function movedownc()
{ 
    var movedownc = document.getElementById("move3");   
    movedownc.className="moveoutt";
}
function moveupd()
{ 
    var moveupd = document.getElementById("move4");   
    moveupd.className="moveon";
}
function movedownd()
{ 
    var movedownd = document.getElementById("move4");   
    movedownd.className="moveout";
}
