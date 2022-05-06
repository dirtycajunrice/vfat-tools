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

const COUGAR_CHEF_ABI = [{"stateMutability":"nonpayable","inputs":[{"type":"address","internalType":"contract CougarToken","name":"_cougar"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"name":"_cougarPerBlock","type":"uint256","internalType":"uint256"}],"type":"constructor"},{"name":"Deposit","type":"event","inputs":[{"name":"user","indexed":true,"type":"address","internalType":"address"},{"indexed":true,"name":"pid","type":"uint256","internalType":"uint256"},{"internalType":"uint256","name":"amount","indexed":false,"type":"uint256"}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"type":"uint256","indexed":true,"internalType":"uint256","name":"pid"},{"name":"amount","type":"uint256","internalType":"uint256","indexed":false}],"anonymous":false},{"anonymous":false,"inputs":[{"internalType":"address","name":"caller","indexed":true,"type":"address"},{"name":"previousAmount","internalType":"uint256","type":"uint256","indexed":false},{"name":"newAmount","internalType":"uint256","indexed":false,"type":"uint256"}],"name":"EmissionRateUpdated","type":"event"},{"type":"event","inputs":[{"internalType":"address","type":"address","name":"previousOwner","indexed":true},{"type":"address","internalType":"address","name":"newOwner","indexed":true}],"anonymous":false,"name":"OwnershipTransferred"},{"name":"ReferralCommissionPaid","type":"event","inputs":[{"type":"address","indexed":true,"internalType":"address","name":"user"},{"name":"referrer","internalType":"address","type":"address","indexed":true},{"indexed":false,"name":"commissionAmount","internalType":"uint256","type":"uint256"}],"anonymous":false},{"inputs":[{"name":"user","indexed":true,"internalType":"address","type":"address"},{"name":"pid","type":"uint256","internalType":"uint256","indexed":true},{"internalType":"uint256","name":"amount","type":"uint256","indexed":false}],"type":"event","name":"Withdraw","anonymous":false},{"type":"function","stateMutability":"view","inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}]},{"type":"function","outputs":[{"type":"address","internalType":"address","name":""}],"name":"BURN_ADDRESS","stateMutability":"view","inputs":[]},{"type":"function","outputs":[{"name":"","internalType":"uint256","type":"uint256"}],"name":"CougarMaxSupply","stateMutability":"view","inputs":[]},{"outputs":[{"type":"uint16","name":"","internalType":"uint16"}],"name":"MAXIMUM_DEPOSIT_FEE","stateMutability":"view","type":"function","inputs":[]},{"outputs":[{"type":"uint16","name":"","internalType":"uint16"}],"inputs":[],"name":"MAXIMUM_REFERRAL_COMMISSION_RATE","type":"function","stateMutability":"view"},{"name":"cougar","stateMutability":"view","inputs":[],"type":"function","outputs":[{"type":"address","internalType":"contract CougarToken","name":""}]},{"name":"cougarPerBlock","outputs":[{"name":"","internalType":"uint256","type":"uint256"}],"stateMutability":"view","inputs":[],"type":"function"},{"name":"cougarReferral","stateMutability":"view","inputs":[],"type":"function","outputs":[{"name":"","type":"address","internalType":"contract ICougarReferral"}]},{"inputs":[],"stateMutability":"view","type":"function","outputs":[{"internalType":"address","name":"","type":"address"}],"name":"devAddress"},{"stateMutability":"view","outputs":[{"name":"","type":"address","internalType":"address"}],"name":"feeAddress","type":"function","inputs":[]},{"name":"owner","inputs":[],"type":"function","outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"name":"poolInfo","outputs":[{"name":"lpToken","type":"address","internalType":"contract IBEP20"},{"name":"allocPoint","internalType":"uint256","type":"uint256"},{"type":"uint256","name":"lastRewardBlock","internalType":"uint256"},{"type":"uint256","name":"accCougarPerShare","internalType":"uint256"},{"name":"depositFeeBP","internalType":"uint16","type":"uint16"}],"inputs":[{"name":"","internalType":"uint256","type":"uint256"}],"stateMutability":"view","type":"function"},{"outputs":[{"internalType":"uint16","type":"uint16","name":""}],"inputs":[],"name":"referralCommissionRate","type":"function","stateMutability":"view"},{"outputs":[],"type":"function","name":"renounceOwnership","stateMutability":"nonpayable","inputs":[]},{"name":"startBlock","outputs":[{"type":"uint256","internalType":"uint256","name":""}],"type":"function","inputs":[],"stateMutability":"view"},{"type":"function","stateMutability":"view","inputs":[],"outputs":[{"internalType":"address","type":"address","name":""}],"name":"syrupAddress"},{"type":"function","name":"totalAllocPoint","outputs":[{"name":"","internalType":"uint256","type":"uint256"}],"stateMutability":"view","inputs":[]},{"outputs":[],"type":"function","name":"transferOwnership","stateMutability":"nonpayable","inputs":[{"name":"newOwner","internalType":"address","type":"address"}]},{"type":"function","stateMutability":"view","inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"name":"","type":"address","internalType":"address"}],"name":"userInfo","outputs":[{"type":"uint256","internalType":"uint256","name":"amount"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}]},{"type":"function","inputs":[],"stateMutability":"view","name":"poolLength","outputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"name":"currentBlock"},{"stateMutability":"nonpayable","inputs":[{"name":"_allocPoint","internalType":"uint256","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"name":"_depositFeeBP","type":"uint16","internalType":"uint16"},{"internalType":"bool","type":"bool","name":"_withUpdate"}],"outputs":[],"type":"function","name":"add"},{"name":"set","stateMutability":"nonpayable","type":"function","inputs":[{"type":"uint256","internalType":"uint256","name":"_pid"},{"type":"uint256","internalType":"uint256","name":"_allocPoint"},{"name":"_depositFeeBP","internalType":"uint16","type":"uint16"},{"name":"_withUpdate","type":"bool","internalType":"bool"}],"outputs":[]},{"name":"getMultiplier","type":"function","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","inputs":[{"type":"uint256","internalType":"uint256","name":"_from"},{"internalType":"uint256","name":"_to","type":"uint256"}]},{"type":"function","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"inputs":[{"type":"uint256","internalType":"uint256","name":"_pid"},{"type":"address","internalType":"address","name":"_user"}],"name":"pendingCougar","stateMutability":"view"},{"name":"massUpdatePools","inputs":[],"outputs":[],"stateMutability":"nonpayable","type":"function"},{"outputs":[],"name":"updatePool","type":"function","stateMutability":"nonpayable","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"inputs":[{"name":"_pid","type":"uint256","internalType":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"name":"_referrer","internalType":"address","type":"address"}],"outputs":[],"stateMutability":"nonpayable","name":"deposit","type":"function"},{"outputs":[],"name":"withdraw","type":"function","stateMutability":"nonpayable","inputs":[{"name":"_pid","type":"uint256","internalType":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}]},{"inputs":[{"name":"_pid","internalType":"uint256","type":"uint256"}],"name":"emergencyWithdraw","stateMutability":"nonpayable","outputs":[],"type":"function"},{"inputs":[{"name":"_devAddress","type":"address","internalType":"address"}],"name":"setDevAddress","type":"function","outputs":[],"stateMutability":"nonpayable"},{"inputs":[{"type":"address","internalType":"address","name":"_feeAddress"}],"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setFeeAddress"},{"name":"setSyrupAddress","inputs":[{"internalType":"address","name":"_syrupAddress","type":"address"}],"outputs":[],"type":"function","stateMutability":"nonpayable"},{"name":"updateEmissionRate","stateMutability":"nonpayable","inputs":[{"type":"uint256","internalType":"uint256","name":"_cougarPerBlock"}],"type":"function","outputs":[]},{"name":"setCougarReferral","inputs":[{"name":"_cougarReferral","type":"address","internalType":"contract ICougarReferral"}],"stateMutability":"nonpayable","outputs":[],"type":"function"},{"type":"function","inputs":[{"name":"_referralCommissionRate","type":"uint16","internalType":"uint16"}],"outputs":[],"name":"setReferralCommissionRate","stateMutability":"nonpayable"},{"type":"function","inputs":[{"internalType":"uint256","type":"uint256","name":"_startBlock"}],"outputs":[],"stateMutability":"nonpayable","name":"updateStartBlock"}]

async function main() {
    const App = await init_ethers();

    _print(`Initialized ${App.YOUR_ADDRESS}\n`);
    _print("Reading smart contracts...\n");

    const COUGAR_CHEF_ADDR = "0x1357521115A4dAA6524045215ac7F979e64d6079";
    const COUGAR_ADDR = "0x6cc35220349C444c39b8e26b359757739aAEc952";
    const COUGAR_USDC_ADDR = "0x611917Ad4d306D08914f024ae191f168f6c793aB";
    const rewardTokenTicker = "CGS";
    const COUGAR_CHEF = new ethers.Contract(COUGAR_CHEF_ADDR, COUGAR_CHEF_ABI, App.provider);


    const blockNumber = await App.provider.getBlockNumber();
    const startBlock = await COUGAR_CHEF.startBlock();

    let rewardsPerWeek = 0
    if(blockNumber < startBlock){
        _print(`REWARDS HAVE NOT YET STARTED!\n\tRewards will start at block ${startBlock}\n`);
    }else{
        const multiplier = await COUGAR_CHEF.getMultiplier(blockNumber, blockNumber+1);
        const rewardPerBlock = await COUGAR_CHEF.cougarPerBlock();
        rewardsPerWeek = rewardPerBlock / 1e18 * multiplier * 604800 / 2
    }

    const cgsUsdcPoolInfo = await getHarmonyToken(App, COUGAR_USDC_ADDR, COUGAR_CHEF_ADDR);

    if (cgsUsdcPoolInfo) {
        const tokens = {};
        const prices = await getHarmonyPrices();

        // Add CGS price
        var q0 = cgsUsdcPoolInfo.q0 / 10 ** 18;
        var q1 = cgsUsdcPoolInfo.q1 / 10 ** 6;
        prices[COUGAR_ADDR] = {usd: q1 / q0};

        await loadHarmonyChefContract(App, tokens, prices, COUGAR_CHEF, COUGAR_CHEF_ADDR, COUGAR_CHEF_ABI, rewardTokenTicker,
            "cougar", null, rewardsPerWeek, "pendingCougar", []);
    }
    else {
        _print(`Could not load CGS price.\n\tThis probably due to liquidity have not yet added or the network error. Please try again later!\n`);
    }

    hideLoading();
  }
