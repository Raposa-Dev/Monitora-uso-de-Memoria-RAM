const OS = require('node:os');
const { arch, platform, totalmem, freemem } = OS;

function amount(sum) {
    return  parseInt(sum / 1024 / 1024);
};

setInterval(() => {
const stats = {
    TypeOS: platform(),
    Archtecture: arch(),
    TotalRam: amount(totalmem()) + " : MB",
    FreeRam: amount(freemem()) + " : MB",
    UsageRAM: (( amount(freemem()) / amount(totalmem()) ) * 100).toFixed(2) + " : %"
};

exports.stats = stats;

console.clear();
console.table(stats);

},5000);

