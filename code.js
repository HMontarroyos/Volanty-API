fetch("https://volanty-price-api.herokuapp.com/brands")
.then(response => response.json())
.then(dados => {
    
    brands = dados;

    for(let brand of brands) {

    document.getElementById("brands")
    .innerHTML += `<option value="${brand}">${brand}</option>`;

    selecionabrand();

    
    
    }
});




function selecionabrand() {
 
    let brand = document.getElementById('brands').value;

    fetch("https://volanty-price-api.herokuapp.com/brands/" + brand + "/models")

    .then( response => response.json())

    .then( dados => {
        
        model = dados;
        
        for(let model of model) {
        
        document.getElementById("model")
        .innerHTML += `<select value="${model}">${model}</select>`;
        
        showyear();
        
            
            
            }
        });

        


}

