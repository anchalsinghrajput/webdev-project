var password = document.querySelector('#password')
function genpassword()
{
    var char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passlength = 12;
    var getpassword = '';

    for(var i = 0; i<= passlength; i++)
    {
        var randomnumber = Math.floor(Math.random()*char.length)
        getpassword += char.substring(randomnumber,randomnumber+1);
    }
    document.querySelector('#password').value = getpassword;
    document.querySelector('#copy').innerHTML = "Copy";
}

function copypassword()
{
    var copytext = document.querySelector('#password')
    copytext.select()
    copytext.setSelectionRange(0,999)
    document.execCommand('copy')
    document.querySelector('#copy').innerHTML = "Copied";
}