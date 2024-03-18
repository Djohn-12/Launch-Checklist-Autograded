// Write your helper functions here!

require('cross-fetch/polyfill');
async function myFetch() {
    const response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    return response.json();
}
 
 function pickPlanet(planets) {
    const index = Math.floor(Math.random() * planets.length);
    return planets[index];
 } 
 
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTargetDiv = document.getElementById('missionTarget');

    const htmlContent = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
`;
    missionTargetDiv.innerHTML = htmlContent;
 }
 
 function validateInput(value) {
    if (value === "") {
        return "Empty";
    } else if (isNaN(value)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = validateInput(pilot);
    let copilotStatus = validateInput(copilot);
    let fuelStatus = validateInput(fuelLevel);
    let cargoStatus = validateInput(cargoLevel);
     pilotStatus = document.getElementById('pilotStatus'); 
     copilotStatus = document.getElementById('copilotStatus');
     fuelStatus = document.getElementById('fuelStatus');
     cargoStatus = document.getElementById('cargoStatus');

    if (pilotStatus === "Empty" || copilotStatus === "Empty" || fuelStatus === "Empty" || cargoStatus === "Empty"){
        alert("All fields are required");
        
    }
    if (pilotStatus === "Is a Number" || copilotStatus === "Is a Number" || fuelStatus === "Not a Number" || cargoStatus === "Not a Number") {
        alert("Please enter valid information for all fields");
        
    } 
 
    

    

    if (fuelLevel < 10000 || cargoLevel > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("launchStatus").innerText ="Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
        if (fuelLevel < 10000) {
            document.getElementById("fuelStatus").innerText = "Fuel level too low for launch";
            document.getElementById("fuelStatus").style.color = "red";
        }
        if (cargoLevel > 10000) {
            document.getElementById("cargoStatus").innerText = "Cargo mass too high for launch";
            document.getElementById("cargoStatus").style.color = "red";
        }
    
    } 
    document.getElementById("pilotStatus").innerText = `Pilot ${pilot} Ready`;
    document.getElementById("copilotStatus").innerText = `Co-pilot ${copilot} Ready`;
    document.getElementById("fuelStatus").innerText = `Fuel level ${fuelLevel} high enough for launch`;
    document.getElementById("cargoStatus").innerText = `Cargo mass ${cargoLevel} low enough for launch`;  
    document.getElementById("launchStatus").innerText = "Shuttle is Ready for Launch";
    document.getElementById("launchStatus").style.color = "green";
    return;
}


 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;