


function toggleIcon(id,activeClasses,inactiveClasses) {
    var id,activeClasses,inactiveClasses;
    const icon = document.getElementById(id);
    let classes = icon.className;
    
    if(classes !== activeClasses) {
        icon.className = activeClasses;
    } else {
        icon.className = inactiveClasses;
    }
    
    

}