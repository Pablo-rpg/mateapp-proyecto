function enviar(){
    alert ("enviar data...procesada");
    }
    // Funcion validar Pefecto 17.06.21
    function valida()
    {
        if (window.event.keyCode<48 || window.event.keyCode>57)
        {
                alert("Solo ingresar números");
                event.returnValue = false;
        }
    }
    
    // Funcion validar Pefecto 17.06.21
    function validanombre(){
    if (window.event.keyCode<65 || window.event.keyCode>90 && window.event.keyCode<97 || window.event.keyCode>122)
        {
            alert("Solo caracteres");
            event.returnValue = false;
        }
    }
    
    function llenarsubtipo(){
    //consultar sobre el indice del 1er combo
    if(document.frmcliente.cmbtipo.selectedIndex==0)
    {
        var option0=new Option("Pentium II");
        var option1=new Option("Pentium III");
        var option2=new Option("Pentium IV");
    for(i=0;i<=2;i++)
        {
        eval("document.frmcliente.cmbsubtipo.options[i]=option"+i);	
        }
    }
    else{
    var option0=new Option("LG Thin Flat");
        var option1=new Option("Samsumng LCD Black");
        var option2=new Option("Lenovo Black LCD");
            for(i=0;i<=2;i++){
            eval("document.frmcliente.cmbsubtipo.options[i]=option"+i);	
            }	
        }
    }