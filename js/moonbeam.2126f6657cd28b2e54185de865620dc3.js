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
    "title":"Moonbeam Network",
    "heading":["Pool Provider","MCN","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["BeamSwap           ","", `<a href='beamswap'       >Various</a>`,"GLINT          ","https://beamswap.io"],
      ["Solarflare         ","", `<a href='solarflare'     >Various</a>`,"FLARE          ","https://app.solarflare.io"],
      ["Galaxy             ","", `<a href='galaxy'         >Various</a>`,"GSHARE / GLX   ","https://www.galaxyfinance.finance"],
      ["Zenlink            ","", `<a href='zenlink'        >Various</a>`,"Various        ","https://dex.zenlink.pro"],
      ["Moonbeam Cougar    ","", `<a href='cougar'         >Various</a>`,"CGS            ","https://moonbeam.cougarswap.io"],
      ["1Beam              ","", `<a href='1beam'          >Various</a>`,"1BEAM          ","https://1beam.io"],
      ["Monox Finance      ","", `<a href='monox'          >Various</a>`,"vUNIT          ","https://monox.finance"]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
