function getlog(){
    var TextBox = document.getElementById('historyTextBox');
    var getext = ''
    var children = [], child = TextBox.firstChild;
    var chd , sdl ,clr
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
            if (chd === '薛定谔:'){
                clr = 'rgb(161, 135, 121)'
            }else if(chd === '普朗克:'){
                clr = 'rgb(208, 223, 162)'
            }else if(chd === '爱因斯坦:'){
                clr = '#6495ED'
            }else if(chd === '特斯拉:'){
                clr = '#E32636'
            }else if(chd === '芬兰人:' || chd === '图书管理员:'){
                clr = '#CD853F'
            }else if(chd === '蕾安娜:'){
                clr = 'rgb(255, 242, 196)'
            }else if(chd === '约阿希姆:'){
                clr = 'rgb(204, 189, 172)'
            }
            if(clr){
                sdl = '{{color|' + clr +'|' + sdl;
            };
            getext = getext + sdl;
            clr = undefined;
        }else{
            getext = getext + chd + '\n';
        };
    }
    getext = getext.replace(/<\/?p[\s\S]*>/g,'').replace(/({{color.+)/g,function($){return $ + '}}\n';});
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
    getext = getext.replace(/undefined/g,'')
    prompt('读取',getext)
    return getext
}
var stle = 'float:right;padding:10px;z-index:999;display:block;position:absoluted;top:0px;left:-80px;';
var ts = document.createElement('img')
var bt = document.createElement('button')
var btt = document.createElement('button')
ts.src = 'https://img.moegirl.org/common/f/fc/%E5%B4%A9%E5%9D%8F3%E6%AC%A1%E5%85%83Q.png'
var tx = document.createElement('img')
tx.src = 'https://img.moegirl.org/common/f/fc/%E5%B4%A9%E5%9D%8F3%E6%AC%A1%E5%85%83Q.png'
bt.setAttribute('onclick','getlog()');
bt.style = stle;
bt.appendChild(tx);
var iaa=document.getElementsByClassName('history')[0]
iaa.insertBefore(bt,iaa.firstChild);

btt.setAttribute('onclick','getref()');
btt.style = stle;
btt.appendChild(ts);
var ibb=document.getElementsByClassName('remark')[0]
ibb.insertBefore(btt,ibb.firstChild);
