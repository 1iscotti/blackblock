
function bp(){
    init();
    $('rank').style.display = 'none';
    pause(this,3000);
    GoOn();
}

//暂停游戏,把要暂停的函数放到数组window.eventList，
// 通过setTimeout来调用继续函数
function pause(obj,mSecond){
    if(window.eventList===null)
        window.eventList = new Array();
    var ind = -1;
    for(var i=0; i<window.eventList.length;i++){
        if(window.eventList[i]===null){
            window.eventList[i] = obj;
            ind = 1;
            break;
        }
    }
    if(ind === -1){
        ind = window.eventList.length;
        window.eventList[ind] = obj;
    }
    setTimeout("GoOn("+ind+")",mSecond);
}
//继续游戏
function GoOn(ind){
    var obj = window.eventList[ind];
    window.eventList[ind] = null;
    if(obj.NextStep) obj.NextStep();
    else obj();
}