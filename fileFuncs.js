const csv = require('csvtojson');

async function readCSV(filePath = '../file.csv') {
    const ticketData = await csv().fromFile(filePath);
    return ticketData;
}


module.exports = readCSV