// get elements
const sec = document.querySelector('.sc');
const mn = document.querySelector('.mn');
const hour = document.querySelector('.hr');




setInterval(() => {
    
    let time = new Date();
    let current_sec = time.getSeconds();
    let current_mn = time.getMinutes();
    let current_hour = time.getHours();
    sec.style.transform = `rotate(${katakuta(60, current_sec)}deg)`;
    mn.style.transform = `rotate(${katakuta(60, current_mn)}deg)`;
    hour.style.transform = `rotate(${katakuta(60, current_hour) + 12 }deg)`;
}, 1000);


function katakuta(time, current){
    return (360* current) / time;
};