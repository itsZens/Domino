var pathArray = window.location.pathname.split('/');
var secondLevelLocation = pathArray[1];

document.getElementById('dropdownUser').innerHTML= secondLevelLocation;
