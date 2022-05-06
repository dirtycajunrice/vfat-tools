/*!
* YieldFarming
* Boilerplate for a Static website using EJS and SASS
* https://yieldfarming.info
* @author Jongseung Lim -- https://yieldfarming.info
* Copyright 2022. MIT Licensed.
*/

$(function() {
consoleInit(main)
});

async function main() {
    const params = Dollars.SSD.Parameters;

    const calcPrice = twap => Math.min((twap - 1) / params.SupplyChangeDivisor, params.SupplyChangeLimit);

    loadDollar(Dollars.SSD, calcPrice);
}
