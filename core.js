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
    prompt('读取',getext);
}
