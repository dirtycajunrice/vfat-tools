/*!
* YieldFarming
* Boilerplate for a Static website using EJS and SASS
* https://yieldfarming.info
* @author Jongseung Lim -- https://yieldfarming.info
* Copyright 2022. MIT Licensed.
*/

$(function () {
  main()
});

const main = async () => {

  let tableData = {
    "title": "MCN Ventures Projects",
    "heading": ["Pool Provider", "Network", "LP", "Reward Tokens", "INFO"],
    "rows": [
      ["MCN Ventures    ", "Ethereum", `<a href="/mcn/farm"               >MCN / USDC-MCN / XDO</a>`,   "MCN    ","https://farm.mcn.ventures"],
      ["XDollar         ", "Polygon",  `<a href="../polygon/xdollar"      >Various</a>`,                "XDO / xUSD / MATIC  ","https://xdollar.mcn.ventures"],
      ["XDollar         ", "Avax",     `<a href="../avax/xdollar"         >Various</a>`,                "XDO / xUSD / AVAX   ","https://xdollar-avax.mcn.ventures"],
      ["XDollar         ", "Arbitrum", `<a href="../arbitrum/xdollar"     >Various</a>`,                "XDO / xUSD / ETH    ","https://xdollar-arb.mcn.ventures"],
      ["MinMax          ", "Iotex",    `<a href="../iotex/minmax"         >Various</a>`,                "MAX / iMAGIC        ","https://minmax.finance"]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
