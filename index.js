function onStart() {
    document.getElementById('fuelCalculatorForm').addEventListener('submit', calculateFuel);
}

function handleButtonClick() {
    alert('Why the fuck would you click me!?');
}

function calculateFuel (event) {
    event.preventDefault();

    var inputMinutes = Number.parseInt(document.getElementById('inputMinutes').value);
    var inputSeconds = Number.parseInt(document.getElementById('inputSeconds').value);
    var inputRaceLength = Number.parseInt(document.getElementById('inputRaceLength').value);
    var inputRaceLengthType = document.getElementById('inputRaceLengthType').value;
    var inputHasPaceLap = document.getElementById('inputHasPaceLap').checked;
    var inputFuelPerLap = Number.parseFloat(document.getElementById('inputFuelPerLap').value);
    var inputFuelUnitType = document.getElementById('inputFuelUnitType').value;

    var lapInSeconds = 60 * inputMinutes + inputSeconds;
    var totalLaps = 0;
    switch (inputRaceLengthType) {
        case 'minutes':
            totalLaps = Math.ceil(inputRaceLength * 60 / lapInSeconds);
            break;
        case 'laps':
            totalLaps = inputRaceLength;
            break;
    }

    if (inputHasPaceLap) {
        totalLaps++;
    }

    document.getElementById('oppositeFuelUnitValue').innerHTML = inputFuelUnitType === 'gal' ? `${(inputFuelPerLap * 3.78541).toFixed(2)} L / lap` : `${(inputFuelPerLap * 0.264172).toFixed(2)} gal / lap`;

    var exactFuel = totalLaps * inputFuelPerLap;
    var exactFuelString = `${exactFuel.toFixed(2)}`
    var exactLapsString = `${totalLaps} laps`
    var riskyFuel = (totalLaps + .5) * inputFuelPerLap;
    var riskyFuelString = `${riskyFuel.toFixed(2)}`
    var riskyLapsString = `${totalLaps + .5} laps`
    var safeFuel = (totalLaps + 1) * inputFuelPerLap;
    var safeFuelString = `${safeFuel.toFixed(2)}`
    var safeLapsString = `${totalLaps + 1} laps`

    switch (inputFuelUnitType) {
        case 'gal':
            exactFuelString += ` gal (${(exactFuel * 3.78541).toFixed(2)} L)`;
            riskyFuelString += ` gal (${(riskyFuel * 3.78541).toFixed(2)} L)`;
            safeFuelString += ` gal (${(safeFuel * 3.78541).toFixed(2)} L)`;
            break;
        case 'l':
            exactFuelString += ` L (${(exactFuel * 0.264172).toFixed(2)} gal)`;
            riskyFuelString += ` L (${(riskyFuel * 0.264172).toFixed(2)} gal)`;
            safeFuelString += ` L (${(safeFuel * 0.264172).toFixed(2)} gal)`;
            break;
    }

    document.getElementById('exactFuel').innerHTML = exactFuelString;
    document.getElementById('exactLaps').innerHTML = exactLapsString;
    document.getElementById('riskyFuel').innerHTML = riskyFuelString;
    document.getElementById('riskyLaps').innerHTML = riskyLapsString;
    document.getElementById('safeFuel').innerHTML = safeFuelString;
    document.getElementById('safeLaps').innerHTML = safeLapsString;
}