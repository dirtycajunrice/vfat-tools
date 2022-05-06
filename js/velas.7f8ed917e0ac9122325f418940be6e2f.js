/*!
* YieldFarming
* Boilerplate for a Static website using EJS and SASS
* https://yieldfarming.info
* @author Jongseung Lim -- https://yieldfarming.info
* Copyright 2022. MIT Licensed.
*/

$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Velas Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
        ["WagyuSwap",     `<a href="wagyuswap"       >Various</a>`,      "WAG",       "https://exchange.wagyuswap.app" ],
        ["JungleSwap",    `<a href="jungleswap"      >Various</a>`,      "JUNGLE",    "https://vlx.jungleswap.cash" ],
        ["Centaurus",     `<a href="centaurus"       >Various</a>`,      "CEN",       "https://cen.centaurus.network" ]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
