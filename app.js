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

































// const deg = 6;
// const hr = document.querySelector("#hr");
// const mn = document.querySelector("#mn");
// const sc = document.querySelector("#sc");
// setInterval (() =>{
//     let day = new Date();
//     let hh = day.getHours() * 30;
//     let mn = day.getMinutes() *deg;
//     let ss = day.getSeconds() *deg;
//     hr.style.transfrom = `rotateZ(${hh+(mm/12)}deg)`;
//     mn.style.transfrom = `rotateZ(${mm}deg)`;
//     sc.style.transfrom = `rotateZ(${ss}deg)`;
// })