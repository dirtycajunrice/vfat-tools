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

const COPYPASTA_CHEF_ABI = [{"inputs":[{"internalType":"contract GovernanceToken","name":"_govToken","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"address","name":"_liquidityaddr","type":"address"},{"internalType":"address","name":"_comfundaddr","type":"address"},{"internalType":"address","name":"_founderaddr","type":"address"},{"internalType":"uint256","name":"_rewardPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_halvingAfterBlock","type":"uint256"},{"internalType":"uint256","name":"_userDepFee","type":"uint256"},{"internalType":"uint256","name":"_devDepFee","type":"uint256"},{"internalType":"uint256[]","name":"_rewardMultiplier","type":"uint256[]"},{"internalType":"uint256[]","name":"_blockDeltaStartStage","type":"uint256[]"},{"internalType":"uint256[]","name":"_blockDeltaEndStage","type":"uint256[]"},{"internalType":"uint256[]","name":"_userFeeStage","type":"uint256[]"},{"internalType":"uint256[]","name":"_devFeeStage","type":"uint256[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"lockAmount","type":"uint256"}],"name":"SendGovernanceTokenReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"FINISH_BONUS_AT_BLOCK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"HALVING_AT_BLOCK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_FOR_COM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_FOR_DEV","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_FOR_FOUNDERS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_FOR_LP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_LOCK_BONUS_REWARD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"REWARD_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_PER_BLOCK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"START_BLOCK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_toAdd","type":"address"}],"name":"addAuthorized","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"blockDeltaEndStage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"blockDeltaStartStage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newFinish","type":"uint256"}],"name":"bonusFinishUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_pids","type":"uint256[]"}],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newCom","type":"address"}],"name":"comUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"comfundaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_ref","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devDepFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"devFeeStage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newFounder","type":"address"}],"name":"founderUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"founderaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getGlobalAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getGlobalRefAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"pid1","type":"uint256"}],"name":"getNewRewardPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"getPoolReward","outputs":[{"internalType":"uint256","name":"forDev","type":"uint256"},{"internalType":"uint256","name":"forFarmer","type":"uint256"},{"internalType":"uint256","name":"forLP","type":"uint256"},{"internalType":"uint256","name":"forCom","type":"uint256"},{"internalType":"uint256","name":"forFounders","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"address","name":"_user2","type":"address"}],"name":"getRefValueOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTotalRefs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"govToken","outputs":[{"internalType":"contract GovernanceToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_newHalving","type":"uint256[]"}],"name":"halvingUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"liquidityaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newlock","type":"uint256"}],"name":"lockUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newcomlock","type":"uint256"}],"name":"lockcomUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newdevlock","type":"uint256"}],"name":"lockdevUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newfounderlock","type":"uint256"}],"name":"lockfounderUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newlplock","type":"uint256"}],"name":"locklpUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newLP","type":"address"}],"name":"lpUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"name":"poolExistence","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"poolId1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accGovTokenPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"reclaimTokenOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_toRemove","type":"address"}],"name":"removeAuthorized","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"reviseDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"reviseWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_newMulReward","type":"uint256[]"}],"name":"rewardMulUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newReward","type":"uint256"}],"name":"rewardUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_devDepFees","type":"uint256"}],"name":"setDevDepFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_devFees","type":"uint256[]"}],"name":"setDevFeeStage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_blockEnds","type":"uint256[]"}],"name":"setStageEnds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_blockStarts","type":"uint256[]"}],"name":"setStageStarts","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_usrDepFees","type":"uint256"}],"name":"setUserDepFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_userFees","type":"uint256[]"}],"name":"setUserFeeStage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newstarblock","type":"uint256"}],"name":"starblockUpdate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"userDelta","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"userDepFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"userFeeStage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userGlobalInfo","outputs":[{"internalType":"uint256","name":"globalAmount","type":"uint256"},{"internalType":"uint256","name":"totalReferals","type":"uint256"},{"internalType":"uint256","name":"globalRefAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"rewardDebtAtBlock","type":"uint256"},{"internalType":"uint256","name":"lastWithdrawBlock","type":"uint256"},{"internalType":"uint256","name":"firstDepositBlock","type":"uint256"},{"internalType":"uint256","name":"blockdelta","type":"uint256"},{"internalType":"uint256","name":"lastDepositBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_ref","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const COPYPASTA_PIT_ABI = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"contract IERC20","name":"_govToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"enter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"govToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_share","type":"uint256"}],"name":"leave","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]

const PASTA_TOKEN_ADDR = "0x5903720f0132E8bd48530010d9b3192B25F51D8e";
const PASTA_CHEF_ADDR = "0xFA9E5F11a1e1dB500B0BfC59839bCfFeaEF59683";
const PASTA_PIT_ADDR = "0x0485c47FBfDee263bF88329cb3e37dDD948bdFf6";

const REWARD_TOKEN_TICKER = "PASTA";
const PIT_NAME = "PastaBowl";

async function main() {
  const App = await init_ethers();

  _print(`Initialized ${App.YOUR_ADDRESS}\n`);
  _print("Reading smart contracts...\n");

  const PASTA_CHEF = new ethers.Contract(PASTA_CHEF_ADDR, COPYPASTA_CHEF_ABI, App.provider);
  
  const poolindices = await PASTA_CHEF.poolLength();
  const blockNumber = await App.provider.getBlockNumber();
  const multiplier = await PASTA_CHEF.getMultiplier(blockNumber, blockNumber+1);
  const rewardPerBlock = await PASTA_CHEF.REWARD_PER_BLOCK();
  const rewardsPerWeek = rewardPerBlock / 1e18 * multiplier * 604800 / 2

  const tokens = {};
  const basePrices = await getHarmonyPrices();

  const { prices, totalUserStaked, totalStaked, averageApr } = await loadPastaChefContract(
    App,
    tokens,
    basePrices,
    PASTA_CHEF,
    PASTA_CHEF_ADDR,
    COPYPASTA_CHEF_ABI,
    REWARD_TOKEN_TICKER,
    "govToken",
    null,
    rewardsPerWeek,
    "pendingReward",
    Array.from(Array(Number(poolindices)).keys()),
    true
  );
  // const { prices, totalUserStaked, totalStaked, averageApr } = await loadPastaChefContract(
  //   App,
  //   tokens,
  //   basePrices,
  //   PASTA_CHEF,
  //   PASTA_CHEF_ADDR,
  //   COPYPASTA_CHEF_ABI,
  //   REWARD_TOKEN_TICKER,
  //   "govToken",
  //   null,
  //   rewardsPerWeek,
  //   "pendingReward",
  //   [0,1],
  //   true
  // );
  const PASTA = new ethers.Contract(PASTA_TOKEN_ADDR, ERC20_ABI, App.provider.getSigner());
  const PASTA_PIT = new ethers.Contract(PASTA_PIT_ADDR, COPYPASTA_PIT_ABI, App.provider.getSigner());
  const pastaBowl = await pastaBowlData(PASTA, PASTA_PIT, App, prices);

  const totalStakedInclPastaPit = totalStaked + pastaBowl.totalBalanceUSD

  _print_bold(`Total Staked: $${formatMoney(totalStakedInclPastaPit)}`);
  if (totalUserStaked > 0) {
    _print_bold(`\nYou are staking a total of $${formatMoney(totalUserStaked)} at an average APR of ${(averageApr * 100).toFixed(2)}% in LP staking pools.`);
    _print(`Estimated earnings:`
        + ` Day $${formatMoney(totalUserStaked*averageApr/365)}`
        + ` Week $${formatMoney(totalUserStaked*averageApr/52)}`
        + ` Year $${formatMoney(totalUserStaked*averageApr)}`);
  }

  if (pastaBowl.userBalanceUSD > 0) {
    _print(`You are staking a total of $${formatMoney(pastaBowl.userBalanceUSD)} in the ${PIT_NAME} single staking pool.`);
  }

  hideLoading();
}

async function loadPastaChefContract(App, tokens, prices, chef, chefAddress, chefAbi, rewardTokenTicker,
  rewardTokenFunction, rewardsPerBlockFunction, rewardsPerWeekFixed, pendingRewardsFunction,
  deathPoolIndices, hideFooter) {
  const chefContract = chef ?? new ethers.Contract(chefAddress, chefAbi, App.provider);

  const poolCount = parseInt(await chefContract.poolLength(), 10);
  const totalAllocPoints = await chefContract.totalAllocPoint();

  _print(`Found ${poolCount} pools.\n`)
  _print(`Showing incentivized pools only.\n`);

  var tokens = {};
  const rewardTokenAddress = await chefContract.callStatic[rewardTokenFunction]();
  const rewardToken = await getHarmonyToken(App, rewardTokenAddress, chefAddress);
  const rewardsPerWeek = rewardsPerWeekFixed ??
    await chefContract.callStatic[rewardsPerBlockFunction]()
    / 10 ** rewardToken.decimals * 604800 / 3

  const poolInfos = await Promise.all([...Array(poolCount).keys()].map(async (x) =>
    await getHarmonyPoolInfo(App, chefContract, chefAddress, x, pendingRewardsFunction)));
  var tokenAddresses = [].concat.apply([], poolInfos.filter(x => x.poolToken).map(x => x.poolToken.tokens));

  await Promise.all(tokenAddresses.map(async (address) => {
      tokens[address] = await getHarmonyToken(App, address, chefAddress);
  }));

  if (deathPoolIndices) {  //load prices for the deathpool assets
    deathPoolIndices.map(i => poolInfos[i])
                     .map(poolInfo =>
      poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "Harmony") : undefined);
  }

  const poolPrices = poolInfos.map(poolInfo => poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "Harmony") : undefined);


  _print("Finished reading smart contracts.\n");

  let aprs = []
  for (i = 0; i < poolCount; i++) {
    if (poolPrices[i]) {
      const apr = printPastaChefPool(App, chefAbi, chefAddress, prices, tokens, poolInfos[i], i, poolPrices[i],
        totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
        pendingRewardsFunction, null, null, "harmony")
      aprs.push(apr);
    }
  }
  let totalUserStaked=0, totalStaked=0, averageApr=0;
  for (const a of aprs) {
    if (!isNaN(a.totalStakedUsd)) {
      totalStaked += a.totalStakedUsd;
    }
    if (a.userStakedUsd > 0) {
      totalUserStaked += a.userStakedUsd;
      averageApr += a.userStakedUsd * a.yearlyAPR / 100;
    }
  }
  averageApr = averageApr / totalUserStaked;

  if (!hideFooter) {
    _print_bold(`Total Staked: $${formatMoney(totalStaked)}`);
    if (totalUserStaked > 0) {
      _print_bold(`\nYou are staking a total of $${formatMoney(totalUserStaked)} at an average APR of ${(averageApr * 100).toFixed(2)}%`)
      _print(`Estimated earnings:`
          + ` Day $${formatMoney(totalUserStaked*averageApr/365)}`
          + ` Week $${formatMoney(totalUserStaked*averageApr/52)}`
          + ` Year $${formatMoney(totalUserStaked*averageApr)}\n`);
    }
  }

  return { prices, totalUserStaked, totalStaked, averageApr }
}


function printPastaChefPool(App, chefAbi, chefAddr, prices, tokens, poolInfo, poolIndex, poolPrices,
                            totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
                            pendingRewardsFunction, fixedDecimals, claimFunction, chain="Harmony", depositFee=0, withdrawFee=0) {
  fixedDecimals = fixedDecimals ?? 2;
  const sp = (poolInfo.stakedToken == null) ? null : getPoolPrices(tokens, prices, poolInfo.stakedToken, chain);
  var poolRewardsPerWeek = poolInfo.allocPoints / totalAllocPoints * rewardsPerWeek;
  if (poolRewardsPerWeek == 0 && rewardsPerWeek != 0) return;
  const userStaked = poolInfo.userLPStaked ?? poolInfo.userStaked;
  const rewardPrice = getParameterCaseInsensitive(prices, rewardTokenAddress)?.usd;
  const staked_tvl = sp?.staked_tvl ?? poolPrices.staked_tvl;
  _print_inline(`${poolIndex} - `);
  poolPrices.print_price(chain);
  sp?.print_price(chain);
  const apr = printAPR(rewardTokenTicker, rewardPrice, poolRewardsPerWeek, poolPrices.stakeTokenTicker,
  staked_tvl, userStaked, poolPrices.price, fixedDecimals);
  if (poolInfo.userLPStaked > 0) sp?.print_contained_price(userStaked);
  if (poolInfo.userStaked > 0) poolPrices.print_contained_price(userStaked);
  printPastaChefContractLinks(App, chefAbi, chefAddr, poolIndex, poolInfo.address, pendingRewardsFunction,
  rewardTokenTicker, poolPrices.stakeTokenTicker, poolInfo.poolToken.unstaked,
  poolInfo.userStaked, poolInfo.pendingRewardTokens, fixedDecimals, claimFunction, rewardPrice, chain, depositFee, withdrawFee);
  return apr;
}

function printPastaChefContractLinks(App, chefAbi, chefAddr, poolIndex, poolAddress, pendingRewardsFunction,
                                     rewardTokenTicker, stakeTokenTicker, unstaked, userStaked, pendingRewardTokens, fixedDecimals,
                                     claimFunction, rewardTokenPrice, chain, depositFee, withdrawFee) {
  fixedDecimals = fixedDecimals ?? 2;
  const approveAndStake = async function() {
    return pastaContract_stake(chefAbi, chefAddr, poolIndex, poolAddress, App)
  }
  const unstake = async function() {
    return pastaContract_unstake(chefAbi, chefAddr, poolIndex, App, pendingRewardsFunction)
  }
  const claim = async function() {
    return pastaContract_claim(chefAbi, chefAddr, poolIndex, App, pendingRewardsFunction, claimFunction)
  }
  if(depositFee > 0){
    _print_link(`Stake ${unstaked.toFixed(fixedDecimals)} ${stakeTokenTicker} - Fee ${depositFee}%`, approveAndStake)
  }else{
    _print_link(`Stake ${unstaked.toFixed(fixedDecimals)} ${stakeTokenTicker}`, approveAndStake)
  }
  if(withdrawFee > 0){
    _print_link(`Unstake ${userStaked.toFixed(fixedDecimals)} ${stakeTokenTicker} - Fee ${withdrawFee}%`, unstake)
  }else{
    _print_link(`Unstake ${userStaked.toFixed(fixedDecimals)} ${stakeTokenTicker}`, unstake)
  }
  _print_link(`Claim ${pendingRewardTokens.toFixed(fixedDecimals)} ${rewardTokenTicker} ($${formatMoney(pendingRewardTokens*rewardTokenPrice)})`, claim)
  _print(`Staking or unstaking also claims rewards.`)
  _print("");
}

const pastaContract_stake = async function(chefAbi, chefAddress, poolIndex, stakeTokenAddr, App) {
  const signer = App.provider.getSigner()

  const STAKING_TOKEN = new ethers.Contract(stakeTokenAddr, ERC20_ABI, signer)
  const CHEF_CONTRACT = new ethers.Contract(chefAddress, chefAbi, signer)

  const currentTokens = await STAKING_TOKEN.balanceOf(App.YOUR_ADDRESS)
  const allowedTokens = await STAKING_TOKEN.allowance(App.YOUR_ADDRESS, chefAddress)

  let allow = Promise.resolve()

  if (allowedTokens / 1e18 < currentTokens / 1e18) {
    showLoading()
    allow = STAKING_TOKEN.approve(chefAddress, ethers.constants.MaxUint256)
      .then(function(t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function() {
        hideLoading()
        alert('Try resetting your approval to 0 first')
      })
  }

  if (currentTokens / 1e18 > 0) {
    showLoading()
    allow
      .then(async function() {
          CHEF_CONTRACT.deposit(poolIndex, currentTokens, "0x0000000000000000000000000000000000000000", {gasLimit: 500000})
          .then(function(t) {
            App.provider.waitForTransaction(t.hash).then(function() {
              hideLoading()
            })
          })
          .catch(function() {
            hideLoading()
            _print('Something went wrong.')
          })
      })
      .catch(function() {
        hideLoading()
        _print('Something went wrong.')
      })
  } else {
    alert('You have no tokens to stake!!')
  }
}

const pastaContract_unstake = async function(chefAbi, chefAddress, poolIndex, App, pendingRewardsFunction) {
  const signer = App.provider.getSigner()
  const CHEF_CONTRACT = new ethers.Contract(chefAddress, chefAbi, signer)

  const currentStakedAmount = (await CHEF_CONTRACT.userInfo(poolIndex, App.YOUR_ADDRESS)).amount
  const earnedTokenAmount = await CHEF_CONTRACT.callStatic[pendingRewardsFunction](poolIndex, App.YOUR_ADDRESS) / 1e18

  if (earnedTokenAmount > 0) {
    showLoading()
    CHEF_CONTRACT.withdraw(poolIndex, currentStakedAmount, "0x0000000000000000000000000000000000000000", {gasLimit: 500000})
      .then(function(t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function() {
        hideLoading()
      })
  }
}

const pastaContract_claim = async function(chefAbi, chefAddress, poolIndex, App,
    pendingRewardsFunction, claimFunction) {
  const signer = App.provider.getSigner()

  const CHEF_CONTRACT = new ethers.Contract(chefAddress, chefAbi, signer)

  const earnedTokenAmount = await CHEF_CONTRACT.callStatic[pendingRewardsFunction](poolIndex, App.YOUR_ADDRESS) / 1e18

  if (earnedTokenAmount > 0) {
    CHEF_CONTRACT.claimReward(poolIndex, {gasLimit: 500000})
      .then(function(t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function() {
        hideLoading()
      })
  }
}

async function pastaBowlData(PASTA, PASTA_PIT, App, prices) {
  const pastaPitTotalBalance = await PASTA.balanceOf(PASTA_PIT_ADDR) / 1e18;
  const pastaPitTotalSupply = await PASTA_PIT.totalSupply() / 1e18;
  const xPastaRatio = pastaPitTotalBalance / pastaPitTotalSupply;

  const pastaPitUserBalanceBigNum = await PASTA_PIT.balanceOf(App.YOUR_ADDRESS);
  const pastaPitUserBalance = (pastaPitUserBalanceBigNum / 1e18) * xPastaRatio;
  const pastaPitShare = pastaPitUserBalance / pastaPitTotalBalance;
  const pastaBalanceBigNum = await PASTA.balanceOf(App.YOUR_ADDRESS);
  const pastaBalance = pastaBalanceBigNum / 1e18;

  const pastaPrice = prices[PASTA_TOKEN_ADDR];

  let pastaPitTotalBalanceUSD;
  let pastaPitUserBalanceUSD;

  if (pastaPrice && pastaPrice.usd) {
    pastaPitTotalBalanceUSD = pastaPitTotalBalance * pastaPrice.usd;
    pastaPitUserBalanceUSD = pastaPitUserBalance * pastaPrice.usd;

    _print(`${PIT_NAME} TVL: $${formatMoney(pastaPitTotalBalanceUSD)}`);
    _print(`${REWARD_TOKEN_TICKER} Price: $${formatMoney(pastaPrice.usd)}`);
    _print(`Staked: ${(pastaPitTotalBalance).toFixed(2)} ${REWARD_TOKEN_TICKER} ($${formatMoney(pastaPitTotalBalanceUSD)})`);
    _print(`You are staking ${(pastaPitUserBalance).toFixed(2)} ${REWARD_TOKEN_TICKER} ($${formatMoney(pastaPitUserBalanceUSD)}), ${(pastaPitShare * 100).toFixed(2)}% of the pool.`);

    const approveAndEnter = async function() {
      return pastaPitApproveAndEnter(PASTA, PASTA_PIT, pastaBalanceBigNum, App);
    }

    const leave = async function() {
      return pastaPitLeave(PASTA_PIT, pastaPitUserBalanceBigNum, App);
    }

    _print_link(`Stake ${(pastaBalance).toFixed(2)} ${REWARD_TOKEN_TICKER}`, approveAndEnter);

    if (pastaPitUserBalance > 0) {
      _print_link(`Unstake ${pastaPitUserBalance.toFixed(2)} ${REWARD_TOKEN_TICKER}`, leave);
    }

    _print(`${PIT_NAME} rewards are visible after unstaking / exiting the pool.`)
    _print('');
  }

  hideLoading()

  return {
    totalBalance: pastaPitTotalBalance,
    totalBalanceUSD: pastaPitTotalBalanceUSD,
    userBalance: pastaPitUserBalance,
    userBalanceUSD: pastaPitUserBalanceUSD
  }
}

async function pastaPitApproveAndEnter(PASTA, PASTA_PIT, currentTokens, App) {
  const allowedTokens = await PASTA.allowance(App.YOUR_ADDRESS, PASTA_PIT_ADDR)
  let allow = Promise.resolve()

  if (allowedTokens / 1e18 < currentTokens / 1e18) {
    showLoading()
    allow = PASTA.approve(PASTA_PIT_ADDR, ethers.constants.MaxUint256)
    .then(function(t) {
      return App.provider.waitForTransaction(t.hash)
    })
    .catch(function() {
      hideLoading()
      alert('Try resetting your approval to 0 first')
    })
  }

  if (currentTokens / 1e18 > 0) {
    showLoading()
    allow
    .then(async function() {
      PASTA_PIT.enter(currentTokens, {gasLimit: 500000})
      .then(function(t) {
        App.provider.waitForTransaction(t.hash).then(function() {
          hideLoading()
        })
      })
      .catch(function() {
        hideLoading()
        _print('Something went wrong.')
      })
    })
    .catch(function() {
        hideLoading()
        _print('Something went wrong.')
    })
  } else {
    alert('You have no tokens to stake!!')
  }
}

async function pastaPitLeave(PASTA_PIT, currentStakedAmount, App) {
  showLoading()
  PASTA_PIT.leave(currentStakedAmount, {gasLimit: 500000})
  .then(function(t) {
    App.provider.waitForTransaction(t.hash).then(function() {
      hideLoading()
    })
  })
  .catch(function() {
    hideLoading()
  })
}
