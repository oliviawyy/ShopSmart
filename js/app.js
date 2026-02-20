 const v1 = document.getElementById("valor01")
 const v2 = document.getElementById("valor02")

 const resultado = document.getElementById("resultado")


function calcularTotal(){
    const v1 = parseFloat(document.getElementById('valor01').value);
    const v2 = parseFloat(document.getElementById('valor02').value);

    if (isNaN(v1) || isNaN(v2)) {
        resultado.style.display = "flex"
    
        
        resultado.innerHTML =
        
        `
            <ul>
                <li><span>ERRO</span></li>
                <li>Voce deve preencher todos os campos!</li>       
            </ul>
        `; 
        return null;
    }
    
    resultado.style.display = "flex"

    
    resultado.innerHTML =
    
    `
        <ul>
            <li><span>Total da Compra</span></li>
            <li>Voce esta adquirindo ${v2} unidades com valor unitário de ${v1}</li>      
            <li>Valor total da compra: ${v1 * v2}</li>
        </ul>
    `;   
}

function desconto(){
    const v1 = parseFloat(document.getElementById('valor01').value);
    const v2 = parseFloat(document.getElementById('valor02').value);

    if (isNaN(v1) || isNaN(v2)) {
        resultado.style.display = "flex"
    
        
        resultado.innerHTML =
        
        `
            <ul>
                <li><span>ERRO</span></li>
                <li>Voce deve preencher todos os campos!</li>       
            </ul>
        `; 
        return null;
    }
    const valorDesconto = (v1 * v2) / 100
    
    resultado.style.display = "flex"

    
    resultado.innerHTML =
    
    `
        <ul>
            <li><span>Desconto Aplicado</span></li>
            <li>Foi aplicado um desconto de ${v2} sobre o valor de ${v1} </li>       
            <li>Valor final com desconto: ${v1 - valorDesconto}</li>
        </ul>
    `;   
    



}

function juros(){
    const v1 = parseFloat(document.getElementById('valor01').value);
    const v2 = parseFloat(document.getElementById('valor02').value);

   

    if (isNaN(v1) || isNaN(v2)) {
        resultado.style.display = "flex"
    
        
            resultado.innerHTML =
            
            `
                <ul>
                    <li><span>ERRO</span></li>
                    <li>Voce deve preencher todos os campos!</li>       
                </ul>
            `; 
        return null;
    }
    
    const valorJuros = (v1 * v2) / 100
    resultado.style.display = "flex"

    
    resultado.innerHTML =
    
    `
        <ul>
            <li><span>Total da Compra</span></li>
            <li>Voce esta adquirindo ${v2} unidade(s) com valor unitário de ${v1}</li>       
            <li>Valor total da compra: ${v1 + valorJuros}</li>
        </ul>
    `;   
    
}


function comissao(){
    const v1 = parseFloat(document.getElementById('valor01').value);
    const v2 = parseFloat(document.getElementById('valor02').value);
    // pegando desconto
    const valorComissao = (v1 * v2) / 100

    if (isNaN(v1) || isNaN(v2)) {
        resultado.style.display = "flex"
    
        
        resultado.innerHTML =
        
        `
            <ul>
                <li><span>ERRO</span></li>
                <li>Voce deve preencher todos os campos!</li>       
            </ul>
        `; 
        return null;
    }
    else{
    
    resultado.style.display = "flex"

    
    resultado.innerHTML =
    
    `
        <ul>
            <li><span>Comissão Calculada</span></li>
            <li>Comissão de ${v2} sobre uma venda de ${v1} </li>      
            <li>Valor da comissão: ${valorComissao}</li>
        </ul>
    `; 
 } 
}

function lucro(){
        const v1 = parseFloat(document.getElementById('valor01').value);
        const v2 = parseFloat(document.getElementById('valor02').value);
        // pegando desconto
        const valorLucro = v1 - v2
    
        if (isNaN(v1) || isNaN(v2)) {
            resultado.style.display = "flex"
    
        
            resultado.innerHTML =
            
            `
                <ul>
                    <li><span>ERRO</span></li>
                    <li>Voce deve preencher todos os campos!</li>       
                </ul>
            `; 
            return null;
        }
        else{
        
        resultado.style.display = "flex"
    
        
        resultado.innerHTML =
        
        `
            <ul>
                <li><span>Lucro Obtido</span></li>
                <li>Preço de venda: ${v1} | Custo: ${v2}</li>       
                <li>Resultado financeiro: ${valorLucro}</li>
            </ul>
        `; 
     } 
}


function limpar(){
    resultado.style.display='none';
    v1.value = ''
    v2.value = ''
    
}
