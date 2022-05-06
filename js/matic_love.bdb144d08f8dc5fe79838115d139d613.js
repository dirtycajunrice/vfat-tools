/*!
* YieldFarming
* Boilerplate for a Static website using EJS and SASS
* https://yieldfarming.info
* @author Jongseung Lim -- https://yieldfarming.info
* Copyright 2022. MIT Licensed.
*/

$(function() {
  consoleInit(main)
})

const LOVE_STAKING_ABI = [
  {
    inputs: [
      {internalType: 'address', name: '_rewardsDistribution', type: 'address'},
      {internalType: 'address', name: '_rewardsToken', type: 'address'},
      {internalType: 'address', name: '_stakingToken', type: 'address'},
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [{indexed: false, internalType: 'uint256', name: 'reward', type: 'uint256'}],
    name: 'RewardAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: 'address', name: 'user', type: 'address'},
      {indexed: false, internalType: 'uint256', name: 'reward', type: 'uint256'},
    ],
    name: 'RewardPaid',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: 'address', name: 'user', type: 'address'},
      {indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256'},
    ],
    name: 'Staked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: 'address', name: 'user', type: 'address'},
      {indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256'},
    ],
    name: 'Withdrawn',
    type: 'event',
  },
  {
    constant: true,
    inputs: [{internalType: 'address', name: 'account', type: 'address'}],
    name: 'balanceOf',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{internalType: 'address', name: 'account', type: 'address'}],
    name: 'earned',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'exit',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'getReward',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getRewardForDuration',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'lastTimeRewardApplicable',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'lastUpdateTime',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{internalType: 'uint256', name: 'reward', type: 'uint256'}],
    name: 'notifyRewardAmount',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'periodFinish',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'rewardPerToken',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'rewardPerTokenStored',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'rewardRate',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{internalType: 'address', name: '', type: 'address'}],
    name: 'rewards',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'rewardsDistribution',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'rewardsDuration',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'rewardsToken',
    outputs: [{internalType: 'contract IERC20', name: '', type: 'address'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{internalType: 'uint256', name: 'amount', type: 'uint256'}],
    name: 'stake',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {internalType: 'uint256', name: 'amount', type: 'uint256'},
      {internalType: 'uint256', name: 'deadline', type: 'uint256'},
      {internalType: 'uint8', name: 'v', type: 'uint8'},
      {internalType: 'bytes32', name: 'r', type: 'bytes32'},
      {internalType: 'bytes32', name: 's', type: 'bytes32'},
    ],
    name: 'stakeWithPermit',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'stakingToken',
    outputs: [{internalType: 'contract IERC20', name: '', type: 'address'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{internalType: 'address', name: '', type: 'address'}],
    name: 'userRewardPerTokenPaid',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{internalType: 'uint256', name: 'amount', type: 'uint256'}],
    name: 'withdraw',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

async function main() {
  const App = await init_ethers()

  _print(`Initialized ${App.YOUR_ADDRESS}\n`)
  _print('Reading smart contracts...\n')

  const tokens = {}
  const prices = await getMaticPrices()

  const pools = LoveStakingContracts.map(c => {
    return {
      address: c.stakingRewardAddress,
      abi: LOVE_STAKING_ABI,
      stakeTokenFunction: 'stakingToken',
      rewardTokenFunction: 'rewardsToken',
    }
  })

  let p = await loadMultipleMaticSynthetixPools(App, tokens, prices, pools)
  _print_bold(`Total staked: $${formatMoney(p.staked_tvl)}`)
  if (p.totalUserStaked > 0) {
    _print(
      `You are staking a total of $${formatMoney(p.totalUserStaked)} at an APR of ${(p.totalAPR * 100).toFixed(2)}%\n`
    )
  }

  hideLoading()
}

const LoveStakingContracts = [
  {
    stakingRewardAddress: '0x1eC753dE7B88C5F2a3ab143642495A5ee2221FBf',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 80,
    //pair: '0x8bc6F4b90129b26Efb0E52C2B51E5B1782ca29Ad',
  },
  {
    stakingRewardAddress: '0x55D19480514667288aE39f55938AcdaF4b3eB11e',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 80,
    //pair: '0x096c77c7b446237f607a1D5309Bf06C643B17Fd4',
  },
  {
    stakingRewardAddress: '0x27E70eD8FF2f3ABCA58503A323cA72adFc2712C0',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 95,
    //pair: '0x10838EF3DEf20f6F5Dd963c3E9E510971ee4CA4F',
  },
  {
    stakingRewardAddress: '0xeE772d27892dF6c8E1C584031e980a356023CCbb',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 40,
    //pair: '0xCe723E1b57ADf1624A92C0Ca73b468d86d9230B2',
  },
  {
    stakingRewardAddress: '0xb145E2f781e99F1A876f67279516c03624b3AbB0',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 40,
    //pair: '0x73f8D336aA6080c74FFa02Dc610740E6a90B6b22',
  },
  {
    stakingRewardAddress: '0xB6F29e24E979DDB32da335EFBf50B76bcE2Beb19',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 14,
    //pair: '0xB0609659A45708F2d8A3E741EDbadF0032e97631',
  },
  {
    stakingRewardAddress: '0xECdb81dA597F61E7Df01c10e7b7039e59704F793',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 14,
    //pair: '0xc6094416d714E3478A54A3D6362Af7b9a0B05693',
  },
  {
    stakingRewardAddress: '0xBf6636c189e2BA3B88aCc9fB41c3A37dBc08A4B6',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 14,
    //pair: '0xF18077afd3da973fFD4427f5A1Ff610FCa25c9Df',
  },
  {
    stakingRewardAddress: '0x719e35aBdC9994FBA92A9d50F10acb32d0AE80B4',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 14,
    //pair: '0x619606a2dA74D5b286202423c01D5bF89e0B0273',
  },
  {
    stakingRewardAddress: '0xE0A891bB272C2170DA238eb7FDFD1eE5F9eBeB18',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 14,
    //pair: '0xA3FF54833aA7f7532455e8EC52Db7Ef1f9D2a33e',
  },
  {
    stakingRewardAddress: '0xA54Efd3BDf02A67b4ac55A042570933c7FC7164A',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 10,
    //pair: '0xE12A0B6d024c63a1C06886d8F2a4A6F879e26720',
  },
  {
    stakingRewardAddress: '0xd1629C43952Cb071FB7F71663EA70C6561997566',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 5,
    //pair: '0xFCae1672F179945693B053A4dA5f2fD87Fb3f3E4',
  },
  {
    stakingRewardAddress: '0x8023eAef24a8B36ddd33F49FB894df928dA00c13',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 5,
    //pair: '0x497DF74868581BcC29bbFcd271990FD9f726BA64',
  },
  {
    stakingRewardAddress: '0x13054DB1E896023bFE5EeBB3136fF09a26D42F59',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 1,
    //pair: '0x71e94F3B3E1D60569906fcFcD8829E4B5FFCAf60',
  },
  {
    stakingRewardAddress: '0x066e895639B8A8e186893bA74C17C165efF3731b',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 2,
    //pair: '0x2A25d5185f8cC8098Ae0433cE2dC88CC30bc0eB3',
  },
  {
    stakingRewardAddress: '0x45B4aEcebd0a4c455a33762C4B16c54B85065D81',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 2,
    //pair: '0xDb40e2ceAd0b1fba646f7f6BF47A10523931e77A',
  },
  {
    stakingRewardAddress: '0x683F4C423c5BF054139cb46aeB539Ce594eb579F',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 2,
    //pair: '0xaeE2afabAC819137F9aA83C6A3fBb35087bA0C36',
  },
  {
    stakingRewardAddress: '0x51a4980f3E4F8796B71114ED21fC3924548E48b6',
    //ended: !1,
    //lp: '',
    //name: '',
    //rate: 7,
    //pair: '0x79088B108EbeA61eaFd86B29C7a1894aB1a4C551',
  },
]
