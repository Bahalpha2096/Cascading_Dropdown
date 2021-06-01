"use strict"
let cityStates = [{
    state: "California",
    stateAbbr: "CA",
    cities: ["Los Angeles", "San Francisco", "San Diego"],
},
{
    state: "Colorado",
    stateAbbr: "CO",
    cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"],
},
{
    state: "Texas",
    stateAbbr: "TX",
    cities: ["Austin", "Dallas", "Houston", "San Antonio"],
}
];

window.onload = function () {

    loadstatesDropdown();
    const statesDropdown = document.getElementById("statesDropdown");
    statesDropdown.onchange = onstatesDropdownChanged;

    const citiesDropdown = document.getElementById("citiesDropdown");
    citiesDropdown.onchange = oncitiesDropdownChanged;
}

function loadstatesDropdown() {

    const statesDropdown = document.getElementById("statesDropdown");

    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    statesDropdown.appendChild(selectOneOption);

    for(let i = 0; i < cityStates.length; i++){
        let theOption = document.createElement("option");
        theOption.textContent = cityStates[i].state;
        theOption.value = cityStates[i].stateAbbr;
        statesDropdown.appendChild(theOption);
    }

   

    const citiesDropdown = document.getElementById("citiesDropdown");

    selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select states first...";
    selectOneOption.value = "";
    citiesDropdown.appendChild(selectOneOption);
}
function onstatesDropdownChanged() {

    const statesDropdown = document.getElementById("statesDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");

    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";

    citiesDropdown.options.length = 0;

    let selectedstateAbbr = statesDropdown.value;

    if (selectedstateAbbr == "") {

        let selectOneOption = document.createElement("option");
        selectOneOption.textContent = "Select states first...";
        selectOneOption.value = "";
        teamDropdown.appendChild(selectOneOption);

        return;
    };

    let matchingstates = cityStates.find(arrayElement => arrayElement.stateAbbr == selectedstateAbbr);

    let selectOneOption = document.createElement("option");
    selectOneOption.value = "";
    citiesDropdown.appendChild(selectOneOption);

    for(let i = 0; i < cities.length; i++){
        let theOption = document.createElement("option");
        theOption.textContent = cityStates[i].state;
        theOption.value = cityStates[i].stateAbbr;
        citiesDropdown.appendChild(theOption);
    }
};
function oncitiesDropdownChanged() {

    const statesDropdown = document.getElementById("statesDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");

    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";

    let selectedCities = CityDropdown.value;

    if (selectedCities == "") {
        return;
    };

    let selectedStateIndex = stateDropdown.selectedIndex;
    let selectedState = stateDropdown.options[selectedStateIndex].text;

    let message = "Cities: " + selectedCities + "<br>" +
        "states: " + selectedState;
    messagePara.innerHTML = message;
};