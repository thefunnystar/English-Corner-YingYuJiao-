var right=document.getElementById('bodyc').style.height;
var left=document.getElementById('htmlc').style.height;
if(htmlc>bodyc)
{
    document.getElementById('bodyc').style.height=htmlc;
}
else
{
    document.getElementById('htmlc').style.height=bodyc;
}