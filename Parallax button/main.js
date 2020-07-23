const docStyle = document.documentElement.style;
const anElement = document.querySelector('a');
const boundingClientRect = anElement.getBoundingClientRect();

anElement.onmousemove = function(e) {

    const x = e.clientX - boundingClientRect.left;
    const y = e.clientY - boundingClientRect.top;

    const xc = boundingClientRect.width/2;
    const yc = boundingClientRect.height/2;

    const dx = x - xc;
    const dy = y - yc;

    docStyle.setProperty('--rx', `${ dy/-1 }deg`);
    docStyle.setProperty('--ry', `${ dx/10 }deg`);
    
}

anElement.onmouseleave = function(e) {

    docStyle.setProperty('--ty', '0');
    docStyle.setProperty('--rx', '0');
    docStyle.setProperty('--ry', '0');

}

anElement.onmousedown = function(e) {

    docStyle.setProperty('--tz', '-25px');

}

anElement.onmouseup = function(e) {

    docStyle.setProperty('--tz', '-12px');

}