function display(n){
    document.getElementById("textarea").value+=n
}
function calculate(){
    var val=document.getElementById("textarea").value
    var ans=eval(val);
    document.getElementById("textarea").value=ans
}
function clr(){
    document.getElementById("textarea").value=''
}