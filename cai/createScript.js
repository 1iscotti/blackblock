//根据id来get dom元素
function $(id){
    return document.getElementById(id);
}


function creatediv(className){
    var div = document.createElement('Div');//参数大小写不敏感
    div.className = className;
    return div;
}//创建div

//创建一个类名的数组，其中一个为whiteDiv blackDiv，其余为whiteDiv
function creatwhiteDiv(){
    var temp = ["whiteDiv","whiteDiv","whiteDiv","whiteDiv"];
    var i = Math.floor(Math.random()*4);
    temp[i] = "whiteDiv black";
    return temp;
}

//创建一个div class = "row" 并且有四个子节点class=whiteDiv;
function createrow() {
    var con = $('con');
    var row = creatediv('row');//创建div classname=row；
    var arr = creatwhiteDiv();//定义div white的类名，数组
    //con.appendChild(row);//添加row为con的子节点

    for (var i = 0; i < 4; i++) {
        row.appendChild(creatediv(arr[i]));//添加row的子节点whiteDiv
    }

    if (con.firstChild == null) {
        con.appendChild(row);
    }
    else {
        con.insertBefore(row, con.firstChild);
    }
}

//删除div#con的子节点中最后那个class="row"
function delerow(){
    var con = $('con');
    if(con.childNodes.length === 6){
        con.removeChild(con.lastChild);
    }
}


