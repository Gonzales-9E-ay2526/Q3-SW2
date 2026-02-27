// Function for Discount Button
function buttonDiscount(){
    let CustomerBudget = document.getElementById("budget").value;
    let discountedPrice = Number(CustomerBudget * 0.2); 

    document.getElementById("disc-box").innerHTML =`
        <div class="container bg-secondary  bg-white rounded mt-5">
                <h4 class="text-white">Recommended Brands:</h4>

                <button class="btn btn-primary mt-3">Acer</button>
                <button class="btn btn-primary mt-3">Lenovo</button>
                <button class="btn btn-primary mt-3">Asus</button>

                <p class="text-muted">Elligible discount: <span class="bg-danger">${discountedPrice}</span></p>

        </div>`;        
}

function storelocations(){
    document.getElementById("loc-box").innerHTML =`
        <div class="container bg-secondary bg-white rounded mt-5">
                <h4 class="text-white">Store branches:</h4>

                <h5 class="text-warning mt-3>Acer</h5> 
                <p class="text-warning"> ACER Concept Store Greenhills</p>
                <p class="text-warning"> ACER Flagship Store SM Megamall</p>

                <h5 class="text-warning mt-3>Lenovo</h5> 
                <p class="text-warning"> Lenovo @ LES - MegaMall</p>
                <p class="text-warning"> Lenovo Service Center - SM Megamall</p>

                <h5 class="text-warning mt-3>Asus</h5> 
                <p class="text-warning"> ASUS Concept Store Greenhills Mall</p>
                <p class="text-warning"> ASUS Concept Store SM Megamall</p>
       
        </div>`;  
}
