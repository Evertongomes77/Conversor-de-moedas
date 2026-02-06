const select = document.querySelector('.select');

 async function converter(){
    const input= document.querySelector('.input').value;
    const real = document.querySelector('.a-converter');
    const resultadoconvertido= document.querySelector('.resultconvertido');

    const url="https://economia.awesomeapi.com.br/json/last/USD-BRL,BRL-GBP,EUR-BRL?token=b47bd8ee1fd4e05c541ec90d782e5f0d8fbcd0ad5e6f172ecc988e73975b67b6";

    const moedas= await fetch(url).then((response)=>{
        return response.json();
    });

    const dolar= moedas.USDBRL.high
    const euro= moedas.EURBRL.high
    const libra= moedas.BRLGBP.high

    if(select.value==='dolar'){
        real.innerHTML=new Intl.NumberFormat("pt-BR",{
            style:"currency",
            currency:"BLR"
        }).format(input);
        const results= input/dolar

        resultadoconvertido.innerHTML= new Intl.NumberFormat("en-us",{style:"currency",
            currency:"USD"
        }).format(results)
    }
    else if(select.value==="libra"){
        real.innerHTML=new Intl.NumberFormat("pt-BR",{
            style:"currency",
            currency:"BLR"
        }).format(input);
        const results= input*libra

        resultadoconvertido.innerHTML= new Intl.NumberFormat("en-GB",{
            style:"currency",
            currency:"GBP"
        }).format(results);

    }
    else{
         real.innerHTML=new Intl.NumberFormat("pt-BR",{
            style:"currency",
            currency:"BLR"
        }).format(input);
        const results= input/euro

        resultadoconvertido.innerHTML= new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
        }).format(results);
    }
}


function mudarconversor(){
    const imagemdocoversor= document.getElementById('imagemcovertido');
    const textoconvertidos= document.querySelector('.textoconvertido')
    const resultadoconvertido= document.querySelector('.resultconvertido');


    if(select.value==="dolar"){
        imagemdocoversor.src="img/estados-unidos-da-america.png";
        textoconvertidos.innerHTML="Dólar americano"
        resultadoconvertido.innerHTML="$0,00"
    }
    else if(select.value==="libra"){
        imagemdocoversor.src="img/libra.png"
        textoconvertidos.innerHTML="Libra"
        resultadoconvertido.innerHTML="£ 0,00"
    }
    else{
        imagemdocoversor.src="img/euro.png";
        textoconvertidos.innerHTML="Euro"
        resultadoconvertido.innerHTML="0,00 €"
    }
    converter()
}