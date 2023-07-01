function onStart() {
    // alert('oh hey there!');
}

function handleButtonClick() {
    alert('Why the fuck would you click me!?');
}

function calculateFuel () {
    var inputMinutes = Number.parseInt(document.getElementById('inputMinutes').value);
    var inputSeconds = Number.parseInt(document.getElementById('inputSeconds').value);
    var inputRaceLength = Number.parseInt(document.getElementById('inputRaceLength').value);
    var inputRaceLengthType = document.getElementById('inputRaceLengthType').value;
    var inputHasPaceLap = document.getElementById('inputHasPaceLap').checked;
    var inputFuelPerLap = Number.parseFloat(document.getElementById('inputFuelPerLap').value);

    console.log(inputHasPaceLap);

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

    document.getElementById('exactFuel').innerHTML = totalLaps * inputFuelPerLap;
    document.getElementById('riskyFuel').innerHTML = (totalLaps + .5) * inputFuelPerLap;
    document.getElementById('safeFuel').innerHTML = (totalLaps + 1) * inputFuelPerLap;
}