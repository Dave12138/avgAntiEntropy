function getlog(){
    var TextBox = document.getElementById('historyTextBox');
    var getext = ''
    var children = [], child = TextBox.firstChild;
    if (!child){
        return undefined
    }
    while (child) {
        children[children.length] = child;
        child = child.nextSibling;
    }
    for (child = 0; child < children.length; child++) {
        getext = getext + '\n' + children[child].innerHTML;
    }
    //prompt('读取',getext)
    x.value = getext
    return getext
}
function getref(){
    var TextBox = document.getElementById('remarkTextBox');
    var getext = ''
    var children = [], child = TextBox.firstChild;
    if (!child){
        return undefined
    }
    while (child) {
        children[children.length] = child;
        child = child.nextSibling;
    }
    for (child = 0; child < children.length; child++) {
        getext = getext + '\n' + children[child].innerHTML;
    }
    //prompt('读取',getext)
    y.value = getext
    return getext
}

var ts = document.createElement('img')
var bt = document.createElement('button')
var btt = document.createElement('button')
ts.src = 'https://img.moegirl.org/common/f/fc/%E5%B4%A9%E5%9D%8F3%E6%AC%A1%E5%85%83Q.png'
bt.setAttribute('onclick','getlog()');
bt.style = 'float:right;padding:10px;z-index:999;position:absoluted;top:0px;left:-80px;display:block;';
bt.appendChild(ts);
var iaa=document.getElementsByClassName('history')[0]
iaa.insertBefore(bt,iaa.firstChild);

btt.setAttribute('onclick','getref()');
btt.style = 'float:right;padding:10px;z-index:999;position:absoluted;top:0px;left:-80px;display:block;';
btt.appendChild(ts);
var ibb=document.getElementsByClassName('remark')[0]
ibb.insertBefore(btt,ibb.firstChild);
var x = document.createElement("INPUT");
x.setAttribute("type", "text");
x.id = 'oba';
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.id = 'obb';
iaa.appendChild(x);
ibb.appendChild(y);
