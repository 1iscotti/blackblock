//根据id来get dom元素
function $(id){
    return document.getElementById(id);
}

//初始化init
function init(){
    for(var i=0; i<4; i++)
    {
        createrow();
    }
//添加onclick事件
    $('main').onclick = function(ev){
        judge(ev);
    }
//定时器,每30ms调用一次move()
    clock = window.setInterval('move()',30);
}


//向下移动
function move(){
    var con = $('con');
    var top = parseInt(window.getComputedStyle(con,null)['top']);

    if(speed + top > 0){
        top = 0;
    }else{
        top += speed;
    }
    con.style.top = top +'px';

    if(top == 0){
        createRow();
        con.style.top = '-100px';
        delerow();
    }else if(top == (-100 + speed)){
        var rows = con.childNodes;
        if((rows.length == 5)&&(row[rows.length - 1].pass !== 1)){
            fail();
        }
    }
}

//加速函数
function speedup(){
    speed += 2;
    if(speed == 20){
        alert("amazing！！");
    }
}

//判断是否点击到黑块
function judge(ev){
    if (ev.target.className.indexOf('blackDiv') != -1){
        ev.target.className ='whiteDiv';
        ev.target.parentNode.pass = 1;//定义属性pass,表明此行已被点击
        score();
    }
}

function fail(){
    clearInterval(clock);
    confirm('你的得分为：' + parseInt($('score').innerHTML));
}

//累计分数
function score(){
    var newscore = parseInt($('score').innerHTML) + 1;
    $('score').innerHTML = newscore;
    if(newscore % 10 == 0){
        speedup();
    }
}