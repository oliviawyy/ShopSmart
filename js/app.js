 const v1 = document.getElementById("valor01")
 const v2 = document.getElementById("valor02")

 const resultado = document.getElementById("resultado")


function calcularTotal(){
    const v1 = parseFloat(document.getElementById('valor01').value);
    const v2 = parseFloat(document.getElementById('valor02').value);

    if (isNaN(v1) || isNaN(v2)) {
        alert("preencha os campos com valores numéricos.");
        return null;
    }
    
    resultado.style.display = "flex"

    
    resultado.innerHTML =
    
    `
        <ul>
            <li><span>Total da Compra</span></li>
            <li>Voce esta comprando ${v1} </li>
            <li>quantidade de produtos: <span>${v2}</span> </li>       
            <li>O VALOR TOTAL É ${v1 * v2}</li>
        </ul>
    `;   
}

function desconto(){
    const v1 = parseFloat(document.getElementById('valor01').value);
    const v2 = parseFloat(document.getElementById('valor02').value);
    valor_desconto = (v1 * v2) / 100

    if (isNaN(v1) || isNaN(v2)) {
        alert("preencha os campos com valores numéricos.");
        return null;
    }
    



}

function juros(){
    const v1 = parseFloat(document.getElementById('valor01').value);
    const v2 = parseFloat(document.getElementById('valor02').value);
    valor_acrescimo = (v1 * v2) / 100


}

function comissao(){

}

function lucro(){

}


function limpar(){
    resultado.style.display='none';
    v1.value = ''
    v2.value = ''
    input01.focus();
}