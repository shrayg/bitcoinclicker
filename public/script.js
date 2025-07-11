const bitcoinCountElement = document.getElementById('bitcoin-count');
const clickButton = document.getElementById('click-button');
const leaderboardButton = document.getElementById('leaderboard-button'); // Get the new button

// Click Power Elements
const buyClickPowerButton = document.getElementById('buy-click-power');
const clickPowerCostElement = document.getElementById('click-power-cost');
const clickPowerLevelElement = document.getElementById('click-power-level');
const clickPowerRateElement = document.getElementById('click-power-rate');

// Basic Miner Elements
const buyBasicMinerButton = document.getElementById('buy-basic-miner');
const basicMinerCostElement = document.getElementById('basic-miner-cost');
const basicMinerLevelElement = document.getElementById('basic-miner-level');
const basicMinerRateElement = document.getElementById('basic-miner-rate');

// Reinforced Miner Elements
const buyReinforcedMinerButton = document.getElementById('buy-reinforced-miner');
const reinforcedMinerCostElement = document.getElementById('reinforced-miner-cost');
const reinforcedMinerLevelElement = document.getElementById('reinforced-miner-level');
const reinforcedMinerRateElement = document.getElementById('reinforced-miner-rate');

// Charged Miner Elements
const buyChargedMinerButton = document.getElementById('buy-charged-miner');
const chargedMinerCostElement = document.getElementById('charged-miner-cost');
const chargedMinerLevelElement = document.getElementById('charged-miner-level');
const chargedMinerRateElement = document.getElementById('charged-miner-rate');

// Laser Miner Elements
const buyLaserMinerButton = document.getElementById('buy-laser-miner');
const laserMinerCostElement = document.getElementById('laser-miner-cost');
const laserMinerLevelElement = document.getElementById('laser-miner-level');
const laserMinerRateElement = document.getElementById('laser-miner-rate');

// Thermal Miner Elements
const buyThermalMinerButton = document.getElementById('buy-thermal-miner');
const thermalMinerCostElement = document.getElementById('thermal-miner-cost');
const thermalMinerLevelElement = document.getElementById('thermal-miner-level');
const thermalMinerRateElement = document.getElementById('thermal-miner-rate');

// Surge Miner Elements (New)
const buySurgeMinerButton = document.getElementById('buy-surge-miner');
const surgeMinerCostElement = document.getElementById('surge-miner-cost');
const surgeMinerLevelElement = document.getElementById('surge-miner-level');
const surgeMinerRateElement = document.getElementById('surge-miner-rate');

// Plasma Miner Elements (New)
const buyPlasmaMinerButton = document.getElementById('buy-plasma-miner');
const plasmaMinerCostElement = document.getElementById('plasma-miner-cost');
const plasmaMinerLevelElement = document.getElementById('plasma-miner-level');
const plasmaMinerRateElement = document.getElementById('plasma-miner-rate');

// Nova Miner Elements (New)
const buyNovaMinerButton = document.getElementById('buy-nova-miner');
const novaMinerCostElement = document.getElementById('nova-miner-cost');
const novaMinerLevelElement = document.getElementById('nova-miner-level');
const novaMinerRateElement = document.getElementById('nova-miner-rate');

// Quantum Miner Elements (New)
const buyQuantumMinerButton = document.getElementById('buy-quantum-miner');
const quantumMinerCostElement = document.getElementById('quantum-miner-cost');
const quantumMinerLevelElement = document.getElementById('quantum-miner-level');
const quantumMinerRateElement = document.getElementById('quantum-miner-rate');

// Voidcore Miner Elements (New)
const buyVoidcoreMinerButton = document.getElementById('buy-voidcore-miner');
const voidcoreMinerCostElement = document.getElementById('voidcore-miner-cost');
const voidcoreMinerLevelElement = document.getElementById('voidcore-miner-level');
const voidcoreMinerRateElement = document.getElementById('voidcore-miner-rate');

// Singularity Miner Elements (New)
const buySingularityMinerButton = document.getElementById('buy-singularity-miner');
const singularityMinerCostElement = document.getElementById('singularity-miner-cost');
const singularityMinerLevelElement = document.getElementById('singularity-miner-level');
const singularityMinerRateElement = document.getElementById('singularity-miner-rate');

// Infinity Miner Elements (New)
const buyInfinityMinerButton = document.getElementById('buy-infinity-miner');
const infinityMinerCostElement = document.getElementById('infinity-miner-cost');
const infinityMinerLevelElement = document.getElementById('infinity-miner-level');
const infinityMinerRateElement = document.getElementById('infinity-miner-rate');

// Oblivion Miner Elements (New)
const buyOblivionMinerButton = document.getElementById('buy-oblivion-miner');
const oblivionMinerCostElement = document.getElementById('oblivion-miner-cost');
const oblivionMinerLevelElement = document.getElementById('oblivion-miner-level');
const oblivionMinerRateElement = document.getElementById('oblivion-miner-rate');

// Hyperion Miner Elements (New)
const buyHyperionMinerButton = document.getElementById('buy-hyperion-miner');
const hyperionMinerCostElement = document.getElementById('hyperion-miner-cost');
const hyperionMinerLevelElement = document.getElementById('hyperion-miner-level');
const hyperionMinerRateElement = document.getElementById('hyperion-miner-rate');

// Apex Miner Elements (New)
const buyApexMinerButton = document.getElementById('buy-apex-miner');
const apexMinerCostElement = document.getElementById('apex-miner-cost');
const apexMinerLevelElement = document.getElementById('apex-miner-level');
const apexMinerRateElement = document.getElementById('apex-miner-rate');

// Celestial Miner Elements (New)
const buyCelestialMinerButton = document.getElementById('buy-celestial-miner');
const celestialMinerCostElement = document.getElementById('celestial-miner-cost');
const celestialMinerLevelElement = document.getElementById('celestial-miner-level');
const celestialMinerRateElement = document.getElementById('celestial-miner-rate');

// --- Game State ---
let bitcoin = 0;
let clickPower = 1; // Starts at 1

let basicMinerLevel = 0;
let basicMinerRate = 0;
let basicMinerCost = 10;
const basicMinerInitialRate = 0.1;
const basicMinerRateIncrease = 0.05;

let clickPowerLevel = 1; // Starts at level 1
let clickPowerCost = 25;
const clickPowerIncrease = 0.2; // Fixed increase per level

let reinforcedMinerLevel = 0;
let reinforcedMinerRate = 0;
let reinforcedMinerCost = 200;
const reinforcedMinerInitialRate = 0.5;
const reinforcedMinerRateIncrease = 0.3;

let chargedMinerLevel = 0;
let chargedMinerRate = 0;
let chargedMinerCost = 2000;
const chargedMinerInitialRate = 2.0;
const chargedMinerRateIncrease = 1.0;

let laserMinerLevel = 0;
let laserMinerRate = 0;
let laserMinerCost = 20000;
const laserMinerInitialRate = 25.0;
const laserMinerRateIncrease = 10.0;

let thermalMinerLevel = 0;
let thermalMinerRate = 0;
let thermalMinerCost = 200000;
const thermalMinerInitialRate = 250.0;
const thermalMinerRateIncrease = 100.0;

// New Miner States and Constants
let surgeMinerLevel = 0;
let surgeMinerRate = 0;
let surgeMinerCost = 1200000; // Scaling from Thermal * 6
const surgeMinerInitialRate = 1000.0; // Scaling from Thermal * 4
const surgeMinerRateIncrease = 100.0; // InitialRate / 10

let plasmaMinerLevel = 0;
let plasmaMinerRate = 0;
let plasmaMinerCost = 7200000; // Scaling from Surge * 6
const plasmaMinerInitialRate = 4000.0; // Scaling from Surge * 4
const plasmaMinerRateIncrease = 400.0; // InitialRate / 10

let novaMinerLevel = 0;
let novaMinerRate = 0;
let novaMinerCost = 43200000; // Scaling from Plasma * 6
const novaMinerInitialRate = 16000.0; // Scaling from Plasma * 4
const novaMinerRateIncrease = 1600.0; // InitialRate / 10

let quantumMinerLevel = 0;
let quantumMinerRate = 0;
let quantumMinerCost = 259200000; // Scaling from Nova * 6
const quantumMinerInitialRate = 64000.0; // Scaling from Nova * 4
const quantumMinerRateIncrease = 6400.0; // InitialRate / 10

let voidcoreMinerLevel = 0;
let voidcoreMinerRate = 0;
let voidcoreMinerCost = 1555200000; // Scaling from Quantum * 6
const voidcoreMinerInitialRate = 256000.0; // Scaling from Quantum * 4
const voidcoreMinerRateIncrease = 25600.0; // InitialRate / 10

let singularityMinerLevel = 0;
let singularityMinerRate = 0;
let singularityMinerCost = 9331200000; // Scaling from Voidcore * 6
const singularityMinerInitialRate = 1024000.0; // Scaling from Voidcore * 4
const singularityMinerRateIncrease = 102400.0; // InitialRate / 10

let infinityMinerLevel = 0;
let infinityMinerRate = 0;
let infinityMinerCost = 55987200000; // Scaling from Singularity * 6
const infinityMinerInitialRate = 4096000.0; // Scaling from Singularity * 4
const infinityMinerRateIncrease = 409600.0; // InitialRate / 10

let oblivionMinerLevel = 0;
let oblivionMinerRate = 0;
let oblivionMinerCost = 335923200000; // Scaling from Infinity * 6
const oblivionMinerInitialRate = 16384000.0; // Scaling from Infinity * 4
const oblivionMinerRateIncrease = 1638400.0; // InitialRate / 10

let hyperionMinerLevel = 0;
let hyperionMinerRate = 0;
let hyperionMinerCost = 2015539200000; // Scaling from Oblivion * 6
const hyperionMinerInitialRate = 65536000.0; // Scaling from Oblivion * 4
const hyperionMinerRateIncrease = 6553600.0; // InitialRate / 10

let apexMinerLevel = 0;
let apexMinerRate = 0;
let apexMinerCost = 12093235200000; // Scaling from Hyperion * 6
const apexMinerInitialRate = 262144000.0; // Scaling from Hyperion * 4
const apexMinerRateIncrease = 26214400.0; // InitialRate / 10

let celestialMinerLevel = 0;
let celestialMinerRate = 0;
let celestialMinerCost = 72559411200000; // Scaling from Apex * 6
const celestialMinerInitialRate = 1048576000.0; // Scaling from Apex * 4
const celestialMinerRateIncrease = 104857600.0; // InitialRate / 10

// --- Audio ---
// Use WebAudio API instead of HTML AudioElement
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let clickBuffer = null;
let upgradeBuffer = null;

async function loadSound(url) {
    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        return await audioContext.decodeAudioData(arrayBuffer);
    } catch (e) {
        console.error(`Error loading sound ${url}:`, e);
        return null;
    }
}

loadSound('click.mp3').then(buffer => clickBuffer = buffer);
loadSound('upgrade.mp3').then(buffer => upgradeBuffer = buffer);

function playSound(buffer) {
    if (buffer) {
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start(0);
    }
}

// --- Game Logic ---

function formatNumber(num) {
    if (num >= 1e18) { // Quintillion (E)
        return (num / 1e18).toFixed(2).replace(/\.00$/, '') + 'E';
    }
    if (num >= 1e15) { // Quadrillion (P) - Often Q used, using P for peta
        return (num / 1e15).toFixed(2).replace(/\.00$/, '') + 'P';
    }
    if (num >= 1e12) { // Trillion (T)
        return (num / 1e12).toFixed(2).replace(/\.00$/, '') + 'T';
    }
    if (num >= 1e9) { // Billion (G) - Often B used, using G for giga
        return (num / 1e9).toFixed(2).replace(/\.00$/, '') + 'G';
    }
    if (num >= 1e6) { // Million (M)
        return (num / 1e6).toFixed(2).replace(/\.00$/, '') + 'M';
    }
    if (num >= 1e3) { // Thousand (K)
        return (num / 1e3).toFixed(2).replace(/\.00$/, '') + 'K';
    }
     // For numbers less than 1000, show decimals only if necessary, but generally aim for whole numbers for low counts
    if (num % 1 !== 0) { // Has decimal places
        // Limit decimal places for smaller numbers too if needed
        if (num < 100) return num.toFixed(2);
        if (num < 1000) return num.toFixed(1);
    }
    return num.toFixed(0); // Show whole numbers
}

function updateDisplay() {
    bitcoinCountElement.textContent = formatNumber(bitcoin);

    // Update Click Power display
    clickPowerLevelElement.textContent = `(Level ${clickPowerLevel})`;
    clickPowerRateElement.textContent = clickPower.toFixed(1);
    clickPowerCostElement.textContent = formatNumber(clickPowerCost);
    buyClickPowerButton.disabled = bitcoin < clickPowerCost;
    // Add/remove affordable class
    if (bitcoin >= clickPowerCost) {
        buyClickPowerButton.classList.add('affordable');
    } else {
        buyClickPowerButton.classList.remove('affordable');
    }

    // Update Basic Miner display
    basicMinerLevelElement.textContent = `(Level ${basicMinerLevel})`;
    basicMinerRateElement.textContent = basicMinerRate.toFixed(2);
    basicMinerCostElement.textContent = formatNumber(basicMinerCost);
    buyBasicMinerButton.disabled = bitcoin < basicMinerCost;
     // Add/remove affordable class
    if (bitcoin >= basicMinerCost) {
        buyBasicMinerButton.classList.add('affordable');
    } else {
        buyBasicMinerButton.classList.remove('affordable');
    }

    // Update Reinforced Miner display
    reinforcedMinerLevelElement.textContent = `(Level ${reinforcedMinerLevel})`;
    reinforcedMinerRateElement.textContent = reinforcedMinerRate.toFixed(2);
    reinforcedMinerCostElement.textContent = formatNumber(reinforcedMinerCost);
    buyReinforcedMinerButton.disabled = bitcoin < reinforcedMinerCost;
     // Add/remove affordable class
    if (bitcoin >= reinforcedMinerCost) {
        buyReinforcedMinerButton.classList.add('affordable');
    } else {
        buyReinforcedMinerButton.classList.remove('affordable');
    }

    // Update Charged Miner display
    chargedMinerLevelElement.textContent = `(Level ${chargedMinerLevel})`;
    chargedMinerRateElement.textContent = chargedMinerRate.toFixed(2);
    chargedMinerCostElement.textContent = formatNumber(chargedMinerCost);
    buyChargedMinerButton.disabled = bitcoin < chargedMinerCost;
     // Add/remove affordable class
    if (bitcoin >= chargedMinerCost) {
        buyChargedMinerButton.classList.add('affordable');
    } else {
        buyChargedMinerButton.classList.remove('affordable');
    }

    // Update Laser Miner display
    laserMinerLevelElement.textContent = `(Level ${laserMinerLevel})`;
    laserMinerRateElement.textContent = laserMinerRate.toFixed(2);
    laserMinerCostElement.textContent = formatNumber(laserMinerCost);
    buyLaserMinerButton.disabled = bitcoin < laserMinerCost;
     // Add/remove affordable class
    if (bitcoin >= laserMinerCost) {
        buyLaserMinerButton.classList.add('affordable');
    } else {
        buyLaserMinerButton.classList.remove('affordable');
    }

    // Update Thermal Miner display
    thermalMinerLevelElement.textContent = `(Level ${thermalMinerLevel})`;
    thermalMinerRateElement.textContent = thermalMinerRate.toFixed(2);
    thermalMinerCostElement.textContent = formatNumber(thermalMinerCost);
    buyThermalMinerButton.disabled = bitcoin < thermalMinerCost;
     // Add/remove affordable class
    if (bitcoin >= thermalMinerCost) {
        buyThermalMinerButton.classList.add('affordable');
    } else {
        buyThermalMinerButton.classList.remove('affordable');
    }

    // Update Surge Miner display
    surgeMinerLevelElement.textContent = `(Level ${surgeMinerLevel})`;
    surgeMinerRateElement.textContent = surgeMinerRate.toFixed(2);
    surgeMinerCostElement.textContent = formatNumber(surgeMinerCost);
    buySurgeMinerButton.disabled = bitcoin < surgeMinerCost;
     // Add/remove affordable class
    if (bitcoin >= surgeMinerCost) {
        buySurgeMinerButton.classList.add('affordable');
    } else {
        buySurgeMinerButton.classList.remove('affordable');
    }

    // Update Plasma Miner display
    plasmaMinerLevelElement.textContent = `(Level ${plasmaMinerLevel})`;
    plasmaMinerRateElement.textContent = plasmaMinerRate.toFixed(2);
    plasmaMinerCostElement.textContent = formatNumber(plasmaMinerCost);
    buyPlasmaMinerButton.disabled = bitcoin < plasmaMinerCost;
     // Add/remove affordable class
    if (bitcoin >= plasmaMinerCost) {
        buyPlasmaMinerButton.classList.add('affordable');
    } else {
        buyPlasmaMinerButton.classList.remove('affordable');
    }

    // Update Nova Miner display
    novaMinerLevelElement.textContent = `(Level ${novaMinerLevel})`;
    novaMinerRateElement.textContent = novaMinerRate.toFixed(2);
    novaMinerCostElement.textContent = formatNumber(novaMinerCost);
    buyNovaMinerButton.disabled = bitcoin < novaMinerCost;
     // Add/remove affordable class
    if (bitcoin >= novaMinerCost) {
        buyNovaMinerButton.classList.add('affordable');
    } else {
        buyNovaMinerButton.classList.remove('affordable');
    }

    // Update Quantum Miner display
    quantumMinerLevelElement.textContent = `(Level ${quantumMinerLevel})`;
    quantumMinerRateElement.textContent = quantumMinerRate.toFixed(2);
    quantumMinerCostElement.textContent = formatNumber(quantumMinerCost);
    buyQuantumMinerButton.disabled = bitcoin < quantumMinerCost;
     // Add/remove affordable class
    if (bitcoin >= quantumMinerCost) {
        buyQuantumMinerButton.classList.add('affordable');
    } else {
        buyQuantumMinerButton.classList.remove('affordable');
    }

    // Update Voidcore Miner display
    voidcoreMinerLevelElement.textContent = `(Level ${voidcoreMinerLevel})`;
    voidcoreMinerRateElement.textContent = voidcoreMinerRate.toFixed(2);
    voidcoreMinerCostElement.textContent = formatNumber(voidcoreMinerCost);
    buyVoidcoreMinerButton.disabled = bitcoin < voidcoreMinerCost;
     // Add/remove affordable class
    if (bitcoin >= voidcoreMinerCost) {
        buyVoidcoreMinerButton.classList.add('affordable');
    } else {
        buyVoidcoreMinerButton.classList.remove('affordable');
    }

    // Update Singularity Miner display
    singularityMinerLevelElement.textContent = `(Level ${singularityMinerLevel})`;
    singularityMinerRateElement.textContent = singularityMinerRate.toFixed(2);
    singularityMinerCostElement.textContent = formatNumber(singularityMinerCost);
    buySingularityMinerButton.disabled = bitcoin < singularityMinerCost;
     // Add/remove affordable class
    if (bitcoin >= singularityMinerCost) {
        buySingularityMinerButton.classList.add('affordable');
    } else {
        buySingularityMinerButton.classList.remove('affordable');
    }

    // Update Infinity Miner display
    infinityMinerLevelElement.textContent = `(Level ${infinityMinerLevel})`;
    infinityMinerRateElement.textContent = infinityMinerRate.toFixed(2);
    infinityMinerCostElement.textContent = formatNumber(infinityMinerCost);
    buyInfinityMinerButton.disabled = bitcoin < infinityMinerCost;
     // Add/remove affordable class
    if (bitcoin >= infinityMinerCost) {
        buyInfinityMinerButton.classList.add('affordable');
    } else {
        buyInfinityMinerButton.classList.remove('affordable');
    }

    // Update Oblivion Miner display
    oblivionMinerLevelElement.textContent = `(Level ${oblivionMinerLevel})`;
    oblivionMinerRateElement.textContent = oblivionMinerRate.toFixed(2);
    oblivionMinerCostElement.textContent = formatNumber(oblivionMinerCost);
    buyOblivionMinerButton.disabled = bitcoin < oblivionMinerCost;
     // Add/remove affordable class
    if (bitcoin >= oblivionMinerCost) {
        buyOblivionMinerButton.classList.add('affordable');
    } else {
        buyOblivionMinerButton.classList.remove('affordable');
    }

    // Update Hyperion Miner display
    hyperionMinerLevelElement.textContent = `(Level ${hyperionMinerLevel})`;
    hyperionMinerRateElement.textContent = hyperionMinerRate.toFixed(2);
    hyperionMinerCostElement.textContent = formatNumber(hyperionMinerCost);
    buyHyperionMinerButton.disabled = bitcoin < hyperionMinerCost;
     // Add/remove affordable class
    if (bitcoin >= hyperionMinerCost) {
        buyHyperionMinerButton.classList.add('affordable');
    } else {
        buyHyperionMinerButton.classList.remove('affordable');
    }

    // Update Apex Miner display
    apexMinerLevelElement.textContent = `(Level ${apexMinerLevel})`;
    apexMinerRateElement.textContent = apexMinerRate.toFixed(2);
    apexMinerCostElement.textContent = formatNumber(apexMinerCost);
    buyApexMinerButton.disabled = bitcoin < apexMinerCost;
     // Add/remove affordable class
    if (bitcoin >= apexMinerCost) {
        buyApexMinerButton.classList.add('affordable');
    } else {
        buyApexMinerButton.classList.remove('affordable');
    }

    // Update Celestial Miner display
    celestialMinerLevelElement.textContent = `(Level ${celestialMinerLevel})`;
    celestialMinerRateElement.textContent = celestialMinerRate.toFixed(2);
    celestialMinerCostElement.textContent = formatNumber(celestialMinerCost);
    buyCelestialMinerButton.disabled = bitcoin < celestialMinerCost;
     // Add/remove affordable class
    if (bitcoin >= celestialMinerCost) {
        buyCelestialMinerButton.classList.add('affordable');
    } else {
        buyCelestialMinerButton.classList.remove('affordable');
    }
}

// --- Event Listeners ---
clickButton.addEventListener('click', () => {
    bitcoin += clickPower;
    playSound(clickBuffer); // Play click sound
    updateDisplay();
});

buyClickPowerButton.addEventListener('click', () => {
    if (bitcoin >= clickPowerCost) {
        bitcoin -= clickPowerCost;
        clickPowerLevel++;

        // Calculate the new click power based on the fixed increase per level
        // Base is 1 at Level 1. Each subsequent level adds 0.2.
        clickPower = 1 + (clickPowerLevel - 1) * clickPowerIncrease;

        clickPowerCost = Math.ceil(clickPowerCost * 1.8); // Keep cost increase the same
        playSound(upgradeBuffer);
        updateDisplay();
    }
});

buyBasicMinerButton.addEventListener('click', () => {
    if (bitcoin >= basicMinerCost) {
        bitcoin -= basicMinerCost;
        basicMinerLevel++;
        // Recalculate rate based on level and consistent increase
        // Level 1 = InitialRate
        // Level 2 = InitialRate + RateIncrease
        // Level 3 = InitialRate + 2 * RateIncrease
        // Level N = InitialRate + (N - 1) * RateIncrease
        basicMinerRate = basicMinerInitialRate + (basicMinerLevel - 1) * basicMinerRateIncrease;

        basicMinerCost = Math.ceil(basicMinerCost * 1.5); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

buyReinforcedMinerButton.addEventListener('click', () => {
    if (bitcoin >= reinforcedMinerCost) {
        bitcoin -= reinforcedMinerCost;
        reinforcedMinerLevel++;
        // Calculate reinforced miner rate based on level
         reinforcedMinerRate = reinforcedMinerInitialRate + (reinforcedMinerLevel - 1) * reinforcedMinerRateIncrease;

        reinforcedMinerCost = Math.ceil(reinforcedMinerCost * 1.8); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

buyChargedMinerButton.addEventListener('click', () => {
    if (bitcoin >= chargedMinerCost) {
        bitcoin -= chargedMinerCost;
        chargedMinerLevel++;
        // Calculate charged miner rate based on level
        chargedMinerRate = chargedMinerInitialRate + (chargedMinerLevel - 1) * chargedMinerRateIncrease;

        chargedMinerCost = Math.ceil(chargedMinerCost * 1.8); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

buyLaserMinerButton.addEventListener('click', () => {
    if (bitcoin >= laserMinerCost) {
        bitcoin -= laserMinerCost;
        laserMinerLevel++;
        // Calculate laser miner rate based on level
        laserMinerRate = laserMinerInitialRate + (laserMinerLevel - 1) * laserMinerRateIncrease;

        laserMinerCost = Math.ceil(laserMinerCost * 1.8); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

buyThermalMinerButton.addEventListener('click', () => {
    if (bitcoin >= thermalMinerCost) {
        bitcoin -= thermalMinerCost;
        thermalMinerLevel++;
        // Calculate thermal miner rate based on level
        thermalMinerRate = thermalMinerInitialRate + (thermalMinerLevel - 1) * thermalMinerRateIncrease;

        thermalMinerCost = Math.ceil(thermalMinerCost * 1.8); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

buySurgeMinerButton.addEventListener('click', () => {
    if (bitcoin >= surgeMinerCost) {
        bitcoin -= surgeMinerCost;
        surgeMinerLevel++;
        // Calculate surge miner rate based on level
        surgeMinerRate = surgeMinerInitialRate + (surgeMinerLevel - 1) * surgeMinerRateIncrease;

        surgeMinerCost = Math.ceil(surgeMinerCost * 1.8); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

buyPlasmaMinerButton.addEventListener('click', () => {
    if (bitcoin >= plasmaMinerCost) {
        bitcoin -= plasmaMinerCost;
        plasmaMinerLevel++;
        // Calculate plasma miner rate based on level
        plasmaMinerRate = plasmaMinerInitialRate + (plasmaMinerLevel - 1) * plasmaMinerRateIncrease;

        plasmaMinerCost = Math.ceil(plasmaMinerCost * 1.8); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

buyNovaMinerButton.addEventListener('click', () => {
    if (bitcoin >= novaMinerCost) {
        bitcoin -= novaMinerCost;
        novaMinerLevel++;
        // Calculate nova miner rate based on level
        novaMinerRate = novaMinerInitialRate + (novaMinerLevel - 1) * novaMinerRateIncrease;

        novaMinerCost = Math.ceil(novaMinerCost * 1.8); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

buyQuantumMinerButton.addEventListener('click', () => {
    if (bitcoin >= quantumMinerCost) {
        bitcoin -= quantumMinerCost;
        quantumMinerLevel++;
        // Calculate quantum miner rate based on level
        quantumMinerRate = quantumMinerInitialRate + (quantumMinerLevel - 1) * quantumMinerRateIncrease;

        quantumMinerCost = Math.ceil(quantumMinerCost * 1.8); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

buyVoidcoreMinerButton.addEventListener('click', () => {
    if (bitcoin >= voidcoreMinerCost) {
        bitcoin -= voidcoreMinerCost;
        voidcoreMinerLevel++;
        // Calculate voidcore miner rate based on level
        voidcoreMinerRate = voidcoreMinerInitialRate + (voidcoreMinerLevel - 1) * voidcoreMinerRateIncrease;

        voidcoreMinerCost = Math.ceil(voidcoreMinerCost * 1.8); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

buySingularityMinerButton.addEventListener('click', () => {
    if (bitcoin >= singularityMinerCost) {
        bitcoin -= singularityMinerCost;
        singularityMinerLevel++;
        // Calculate singularity miner rate based on level
        singularityMinerRate = singularityMinerInitialRate + (singularityMinerLevel - 1) * singularityMinerRateIncrease;

        singularityMinerCost = Math.ceil(singularityMinerCost * 1.8); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

buyInfinityMinerButton.addEventListener('click', () => {
    if (bitcoin >= infinityMinerCost) {
        bitcoin -= infinityMinerCost;
        infinityMinerLevel++;
        // Calculate infinity miner rate based on level
        infinityMinerRate = infinityMinerInitialRate + (infinityMinerLevel - 1) * infinityMinerRateIncrease;

        infinityMinerCost = Math.ceil(infinityMinerCost * 1.8); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

buyOblivionMinerButton.addEventListener('click', () => {
    if (bitcoin >= oblivionMinerCost) {
        bitcoin -= oblivionMinerCost;
        oblivionMinerLevel++;
        // Calculate oblivion miner rate based on level
        oblivionMinerRate = oblivionMinerInitialRate + (oblivionMinerLevel - 1) * oblivionMinerRateIncrease;

        oblivionMinerCost = Math.ceil(oblivionMinerCost * 1.8); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

buyHyperionMinerButton.addEventListener('click', () => {
    if (bitcoin >= hyperionMinerCost) {
        bitcoin -= hyperionMinerCost;
        hyperionMinerLevel++;
        // Calculate hyperion miner rate based on level
        hyperionMinerRate = hyperionMinerInitialRate + (hyperionMinerLevel - 1) * hyperionMinerRateIncrease;

        hyperionMinerCost = Math.ceil(hyperionMinerCost * 1.8); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

buyApexMinerButton.addEventListener('click', () => {
    if (bitcoin >= apexMinerCost) {
        bitcoin -= apexMinerCost;
        apexMinerLevel++;
        // Calculate apex miner rate based on level
        apexMinerRate = apexMinerInitialRate + (apexMinerLevel - 1) * apexMinerRateIncrease;

        apexMinerCost = Math.ceil(apexMinerCost * 1.8); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

buyCelestialMinerButton.addEventListener('click', () => {
    if (bitcoin >= celestialMinerCost) {
        bitcoin -= celestialMinerCost;
        celestialMinerLevel++;
        // Calculate celestial miner rate based on level
        celestialMinerRate = celestialMinerInitialRate + (celestialMinerLevel - 1) * celestialMinerRateIncrease;

        celestialMinerCost = Math.ceil(celestialMinerCost * 1.8); // Increase cost
        playSound(upgradeBuffer); // Play upgrade sound
        updateDisplay();
    }
});

// --- Game Loop (for passive income) ---
setInterval(() => {
    // Sum up all miner rates
    let totalMinerRate = basicMinerRate + reinforcedMinerRate + chargedMinerRate + laserMinerRate + thermalMinerRate + surgeMinerRate + plasmaMinerRate + novaMinerRate + quantumMinerRate + voidcoreMinerRate + singularityMinerRate + infinityMinerRate + oblivionMinerRate + hyperionMinerRate + apexMinerRate + celestialMinerRate;
    if (totalMinerRate > 0) {
        bitcoin += totalMinerRate / 10; // Add fraction of rate every 100ms
        updateDisplay();
    }
}, 100); // Update 10 times per second for smoother income display

const leaderboardOverlay = document.getElementById('leaderboard-overlay');

function loadLeaderboard() {
  fetch('/get-leaderboard')
    .then(res => res.json())
    .then(entries => {
      const tbody = document.getElementById('leaderboard-body');
      tbody.innerHTML = '';
      entries
        .sort((a, b) => b.score - a.score)
        .forEach((entry, index) => {
          const row = `<tr><td>${index + 1}</td><td>${entry.name}</td><td>${entry.score}</td></tr>`;
          tbody.innerHTML += row;
        });
    })
    .catch(() => {
      document.getElementById('leaderboard-body').innerHTML = '<tr><td colspan="3">Unable to load leaderboard.</td></tr>';
    });
}



leaderboardButton.addEventListener('click', () => {
    if (leaderboardOverlay.style.display === 'flex') {
        leaderboardOverlay.style.display = 'none';
    } else {
        leaderboardOverlay.style.display = 'flex';
        loadLeaderboard();
    }
});


document.getElementById('save-score-button').addEventListener('click', function() {
    const playerName = prompt('Enter your name for the leaderboard:');
    if (!playerName) return;
    const score = bitcoinCountElement.textContent || '0';

    fetch('http://localhost:5500/save-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: playerName, score: score })
    })
    .then(res => res.text())
    .then(msg => {
        alert(msg);
        loadLeaderboard(); // Optionally reload leaderboard after saving
    })
    .catch(() => alert('Failed to save score.'));
});

// --- Initial Setup ---
updateDisplay(); // Set initial values on load