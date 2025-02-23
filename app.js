const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";

let btn = document.querySelector(".btn");
let curr1 = document.querySelector(".no1 select");
let curr2 = document.querySelector(".no2 select");
let amount = document.querySelector(".inp");
let result = document.querySelector(".result");

let options = document.querySelectorAll(".options select")
for(let selector of options){
    for(let code in countryList){
        let option = document.createElement("option");
        option.innerText = code;
        option.value = code;
        if(selector.name === "currency1" && code == "INR"){
            option.selected = true;
        }
        else if(selector.name === "currency2" && code == "USD"){
            option.selected = true;
        }
        selector.append(option);
    }

    selector.addEventListener("change",(evt) => {
        changeFlag(evt.target);
    });
}

let changeFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let url = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = url;
}   

btn.addEventListener("click",async (evt) => {
    evt.preventDefault();
    let amt = document.querySelector(".inp");
    let amtVal = amt.value;
    if(amtVal === "" || amtVal < 0){
        result.innerHTML = `<span style="background-color: red; margin: 9rem; padding: 2px 5px; border-radius: 3px">Error</span>`; 
    }
    else{
        let url = `${BASE_URL}/${curr1.value.toLowerCase()}.json`;
        let response = await fetch(url);
        let data1 = await response.json();
        let date2 = data1[`${curr1.value.toLowerCase()}`];
        let rate = date2[`${curr2.value.toLowerCase()}`];
        let actualAmount = (rate)*(amount.value);
        console.log(rate);
        console.log(actualAmount);
        result.innerHTML = `Your amount after conversion is: <span style="background-color: yellow; padding: 2px 5px; border-radius: 3px;">${actualAmount}</span>`;
    }
})

 
