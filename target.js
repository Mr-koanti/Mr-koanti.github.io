document.body.onkeydown = function(e) {
    if (e.keyCode == 13)
    validatePass();
    };
    
    
    
    
    
    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length ; i++) { var span=document.createElement("SPAN"); var txt=document.createTextNode( "a               \✔" ); span.className="close" ; span.prepend(txt); myNodelist[i].prepend(span); }
    // Click on a close button to hide the current list item
    var close=document.getElementsByClassName("close"); var i; for (i=0; i < close.length; i++) { close[i].onclick=function() { var div=this.parentElement; div.style.display="none" ; } } 
    // Add a "checked" symbol when clicking on a list item
    var list=document.querySelector('ul'); list.addEventListener('click', function(ev) { if (ev.target.tagName==='LI' ) { ev.target.classList.toggle('checked'); } }, false);
    // Create a new list item when clicking on the "Add" button
    function newElement() { var today=new Date(); var date=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); var time=today.toTimeString().split(" ")[0];
        var ntime = time.fontcolor(" blue")
        var textarea=document.createElement("textarea"); var inputValue=document.getElementById("myInput").value; var t=document.createTextNode(inputValue); var atime=document.createTextNode(time); textarea.prepend(t); if (inputValue==='' ) { alert("You must write something!"); } else { document.getElementById("myUL").prepend(textarea); } document.getElementById("myInput").value="" ;
        var atr=document.createElement("span"); atr.className="time" ; atr.append(atime); var span=document.createElement("SPAN"); var txt=document.createTextNode("\✔"); span.className="close" ; span.prepend(txt); li.append(atr); li.prepend(span); for (i=0; i < close.length; i++) { close[i].onclick=function() { var div=this.parentElement; div.style.display="none" ; } } } document.body.onkeydown=function(e) { if (e.keyCode==13) newElement(); };
