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
    prompt('读取',getext)
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
    prompt('读取',getext)
    return getext
}

var btt = document.createElement('button')
btt.setAttribute('onclick','getref()');
btt.style = 'float:right;padding:10px 10px;z-index:999;position:absoluted;top:0px;left:-80px;display:block;';
var tss = document.createElement('img')
tss.src = 'https://img.moegirl.org/common/f/fc/%E5%B4%A9%E5%9D%8F3%E6%AC%A1%E5%85%83Q.png'
btt.appendChild(tss);
var ibb=document.getElementsByClassName('remark')[0]
ibb.insertBefore(btt,ibb.firstChild);
