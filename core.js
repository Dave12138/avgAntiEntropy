
function getlog(){
    var TextBox = document.getElementById('historyTextBox');
    var getext = ''
    var children = [], child = TextBox.firstChild;
    var chd , sdl ,clr
    var inpbox = document.getElementById('i1')
    if (!child){
        return undefined
    }
    while (child) {
        children[children.length] = child;
        child = child.nextSibling;
    }
    for (child = 0; child < children.length; child++) {
        chd = children[child].innerHTML;
        if(chd[chd["length"]-1] === ':'){
            sdl =  '<small>' + chd + '</small>';
            clr = swch(chd)
            if(clr){
                sdl = '{{color|' + clr +'|' + sdl;
            };
            getext = getext + sdl;
            clr = undefined;
        }else{
            getext = getext + chd + '\n';
        };
    }
    getext = getext.replace(/<p class="article-text"[^>]*>/g,'').replace(/<\/p>/g,'').replace(/({{color.+)/g,function($){return $ + '}}';}).replace(/\n\n/g,'\n');
    inpbox.value = getext.replace(/\n/g, "<br/>")
    inpbox.select()
    document.execCommand("Copy");
    return getext
}
function swch(_$_){
    switch(_$_){
        case '薛定谔:':
            return 'rgb(161, 135, 121)';
        case '普朗克:':
            return '#6495ED';
        case '爱因斯坦:':
            return '#6495ED';
        case '特斯拉:':
            return '#E32636';
        case '芬兰人:':
            return '#CD853F';
        case '图书管理员:':
            return '#CD853F';
        case '蕾安娜:':
            return 'rgb(255, 242, 196)';
        case '约阿希姆:':
            return 'rgb(204, 189, 172)';
        case '卡尔:':
            return 'rgb(227, 149, 65)';
        case '奥托:':
            return 'rgb(255, 247, 205)';
        case '丽塔:':
            return 'rgb(221, 149, 235)';
        case '？？？:':
            return '问号色，待填补';
        
        default :
            return undefined;
    }
}
function getref(){
    var TextBox = document.getElementById('remarkTextBox');
    var getext = ''
    var children = [], child = TextBox.firstChild;
    var inpbox = document.getElementById('i2')
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
    getext = getext.replace(/undefined/g,'')
    inpbox.value = getext.replace(/\n/g, "<br/>")
    inpbox.select()
    document.execCommand("Copy");
    return getext
}
function reburn(){
    document.write(old_doc)
}
var stle = 'float:left;padding:10px;z-index:999;display:block;position:absoluted;top:0px;left:-80px;';
var ts = document.createElement('img')
var bt = document.createElement('button')
var btt = document.createElement('button')
var inpbox = document.createElement('input')
var inpboxs = document.createElement('input')

inpbox.id = 'i1'
inpboxs.id = 'i2'

inpbox.setAttribute("type", "text");
inpboxs.setAttribute("type", "text");

ts.src = 'https://img.moegirl.org/common/f/fc/%E5%B4%A9%E5%9D%8F3%E6%AC%A1%E5%85%83Q.png'
var tx = document.createElement('img')
tx.src = 'https://img.moegirl.org/common/f/fc/%E5%B4%A9%E5%9D%8F3%E6%AC%A1%E5%85%83Q.png'
bt.setAttribute('onclick','getlog()');
bt.style = stle;
bt.appendChild(tx);
var iaa=document.getElementsByClassName('history')[0]
iaa.insertBefore(bt,iaa.firstChild);

document.getElementById('remarkTextBox').parentNode.appendChild(inpboxs)
document.getElementById('historyTextBox').parentNode.appendChild(inpbox)

btt.setAttribute('onclick','getref()');
btt.style = stle;
btt.appendChild(ts);
var ibb=document.getElementsByClassName('remark')[0]
ibb.insertBefore(btt,ibb.firstChild);
