const DATE = new Date();

const TODAY = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
const taskSection = document.querySelector("#taskSection");
const currentYearMonthDay = document.querySelector("#currentYearMonthDay");
const clock = document.querySelector("#clock");

let tostMessage = document.getElementById('tost_message');

const taskList = [];
taskList.push(
    {subject: '공부하기', title : '공부하기', description : '잘 하기', date : `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`, time: '', isCompleted : false},
    {subject: '숨쉬기', title : '숨쉬기', description : '잘 숨쉬기', date : `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`, time: '', isCompleted : true},
    {subject: '숨쉬기', title : '숨쉬기', description : '잘 숨쉬기', date : `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`, time: '', isCompleted : false},
    {subject: '김태희 공부해서 모두에게 전달하기', title : '김태희 공부해서 모두에게 전달하기', description : '잘 숨쉬기', date : `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`, time: '', isCompleted : false},
    {subject: '박소현 퇴근하기', title : '박소현 퇴근하기', description : '잘 숨쉬기', date : `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`, time: '', isCompleted : false},
    {subject: '최홍식 퇴근하기', title : '최홍식 퇴근하기', description : '잘 숨쉬기', date : `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`, time: '', isCompleted : false},
);

/*
function getCurrentTime() {
    const DATE = new Date();

    
    const month = DATE.getMonth()+1;
    currentYearMonthDay.innerText = `${DATE.getFullYear()}-${month.toString().padStart(2,"0")}-${DATE.getDate().toString().padStart(2,"0")}`;
    clock.innerText = `${DATE.getHours().toString().padStart(2,"0")} : ${DATE.getMinutes().toString().padStart(2,"0")} : ${DATE.getSeconds().toString().padStart(2,"0")}`;
    

    currentYearMonthDay.innerText = DATE.toLocaleDateString(('ko-kr'));
    clock.innerText = DATE.toLocaleTimeString(('ko-kr'));
    
}
*/

function getDateInstance() {
    return new Date();
}

function displayYearMonthDay(date) {
    currentYearMonthDay.innerText = date.toLocaleDateString(('ko-kr'));
}

function displayClock() {
    clock.innerText = date.toLocaleTimeString(('ko-kr'));
}

function getTodayTask() {
    taskList.forEach((task) =>{
        if (task.date == TODAY) {
            taskSection.innerHTML += `<li>`;
            if (task.isCompleted == true) {
                taskSection.innerHTML += `<input type=\'checkBox\' checked/> `;
            } else {
                taskSection.innerHTML += `<input type=\'checkBox\' /> `;
            }
            taskSection.innerHTML += `${task.title}`;
            taskSection.innerHTML += `</li>`;
        }
    });
}

//2. 토스트 메시지 노출-사라짐 함수 작성
function showToast(time){
    tostMessage.classList.add('active');
    setTimeout(function(){
        tostMessage.classList.remove('active');
    }, time);
}

function createTaskModal() {
    this.showToast(1000);
}

getTodayTask();
setInterval(() => {
    date = this.getDateInstance();
    this.displayYearMonthDay(date);
    this.displayClock(date);
}, 1000);