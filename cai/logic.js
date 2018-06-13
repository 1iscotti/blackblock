var clock = null;//定时器
var state = 0;//游戏状态
var speed = 4;//初始速度
var flag = 1;

//初始化init
function init(){
    while(con.childNodes.length){
        con.removeChild(con.lastChild);
    }
    $('score').innerHTML = 0;
    state = 0;
    speed = 4;
    for(var i=0; i<4; i++)//创建四行
    {
        createrow();
    }
//添加onclick事件
    $('main').onclick = function(ev){
        judge(ev);
    }
//定时器,每40ms调用一次move()
    clock = window.setInterval('move()',40);
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

    if(top === 0){
        createrow();
        con.style.top = '-100px';
        delerow();
    }else if(top === (-100 + speed)){
        var rows = con.childNodes; //行元素
        //alert(rows.length);
        if((rows.length === 5)&&(rows[rows.length - 1].pass !==1)){
            fail();
        }
    }
}

//加速函数
function speedup(){
    speed += 4;
    if(speed === 20){
        alert("amazing！！");
    }
}

//判断是否点击到黑块
function judge(ev){
    if (ev.target.className.indexOf('black')!==-1&&state === 0){//点击确认是黑块
        ev.target.className = 'whiteDiv';//黑块消失
        ev.target.parentNode.pass = 1;//定义属性pass,表明此行已被点击，父节点被标记
        score();
    }
}

function fail(){
    clearInterval(clock);
    state = 1;
    $('rank').innerHTML = "最终成绩 : "+$('score').innerHTML;
    $('rank').style.display = 'block';
    //confirm('你的得分为：' + parseInt($('score').innerHTML));
}

//累计分数
function score(){
    var newscore = parseInt($('score').innerHTML) + 1;
    $('score').innerHTML = newscore;
    if(newscore % 10 === 0){
        speedup();
    }
}
