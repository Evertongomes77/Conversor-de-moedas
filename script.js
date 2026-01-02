const input = document.querySelector('.valor');
const select=document.querySelector('.select');

const dolar = 5.48
const euro=6.42
const libra=7.31
const pesos=0.30

const valorreal = document.querySelector('.valor1');
const valorconvertido = document.querySelector('.valor2');

const imagem=document.querySelector('.imagem-conversao');
const textoconverter=document.getElementById('textoconverter');


function mudou(){
    if(select.value=='dolar'){
         imagem.src="img/estados-unidos-da-america.png";
         valorconvertido.innerHTML="$ 0.00"
         textoconverter.innerHTML="Dólar americano"
    }
    else if(select.value=='euro'){
        imagem.src="img/euro.png"
        valorconvertido.innerHTML="£ 0.00"
        textoconverter.innerHTML="Euro"
    }
    else if(select.value=='libra'){
        imagem.src="img/libra.png"
        textoconverter.innerHTML="Libra"
        valorconvertido.innerHTML="£ 0.00"
    }
    else if(select.value=='pesos'){
        imagem.src="img/peso-mexicano.png"
        textoconverter.innerHTML="Pesos"
    }

    converter()
}


function converter() {

    if(select.value=='dolar'){
        const resultado = input.value / dolar;
        valorreal.innerHTML = new Intl.NumberFormat("pt-br",{
        style:"currency",
        currency:"BRL"
    }).format(input.value);

    valorconvertido.innerHTML = new Intl.NumberFormat("en-us",{
        style:"currency",
        currency:"USD"
    }).format(resultado);
    }

    else if(select.value=="euro"){

        const resultado= input.value/ euro;
        valorreal.innerHTML=new Intl.NumberFormat("pt-br",{
        style:"currency",
        currency:"BRL"
    }).format(input.value);

        valorconvertido.innerHTML= new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency:"EUR"
    }).format(resultado);
}

else if(select.value=="libra"){
    const resultado=input.value/libra;
    valorreal.innerHTML= innerHTML=new Intl.NumberFormat("pt-br",{
        style:"currency",
        currency:"BRL"
    }).format(input.value);

    valorconvertido.innerHTML= new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP"
}).format(resultado);
}

else if(select.value=="pesos"){
    const resultado=input.value/pesos;

    valorreal.innerHTML= new Intl.NumberFormat("pt-br",{
        style:"currency",
        currency:"BRL"
    }).format(input.value);

    valorconvertido.innerHTML= new Intl.NumberFormat("es-MX",{
        style:"currency",
        currency:"MXN"
    }).format(resultado)
}
}