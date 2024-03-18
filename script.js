// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function() {
        const randomPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
    });
    
    document.getElementById("formSubmit").addEventListener("click", function(event) {
        event.preventDefault();
        const pilot = document.getElementById("pilotName").value;
        const copilot = document.getElementsByName("copilotName")[0].value;
        const fuelLevel = document.getElementsByName("fuelLevel")[0].value;
        const cargoLevel = document.getElementsByName("cargoMass")[0].value;
        formSubmission(document, listedPlanets, pilot, copilot, fuelLevel, cargoLevel);
    });
    
 });