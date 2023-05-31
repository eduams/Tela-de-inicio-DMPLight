    const isIE = !!document.documentMode;
    console.log(isIE)
    if(isIE == false){
        document.getElementById('link').setAttribute('onclick','alerta()');
    }
    else{
        document.getElementById('link').setAttribute('href','http://192.168.0.123/dmplightweb/')
        document.getElementById('iebox').innerHTML = 'Modo IE ativado';
        document.getElementById('iebox').style.display = 'flex';
        document.getElementById('iebox').style.justifyContent = 'center';
        document.getElementById('iebox').style.alignItems = 'center';
        document.getElementById('iebox').style.backgroundColor='green';
        document.getElementById('iebox').style.marginRight='0px';
        document.getElementById('iebox').style.width='100%';
        document.getElementById('iebox').style.marginBottom='100px';
    }
    
    function alerta(){
        alert("O modo IE está desativado. O DMPlight funciona apenas no Edge com o modo IE ativado.") ;
        }