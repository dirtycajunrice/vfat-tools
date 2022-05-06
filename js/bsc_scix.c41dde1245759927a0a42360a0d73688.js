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
  
const SCIX_POOL_ABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "governance", "type": "address" }], "name": "GovernanceUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "pendingGovernance", "type": "address" }], "name": "PendingGovernanceUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "poolId", "type": "uint256" }, { "indexed": true, "internalType": "contractIERC20", "name": "token", "type": "address" }], "name": "PoolCreated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "poolId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "rewardWeight", "type": "uint256" }], "name": "PoolRewardWeightUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "rewardRate", "type": "uint256" }], "name": "RewardRateUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "poolId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "TokensClaimed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "poolId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "TokensDeposited", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "poolId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "TokensWithdrawn", "type": "event" }, { "inputs": [], "name": "governance", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "o", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pendingGovernance", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reward", "outputs": [{ "internalType": "contractIMintableERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "contractIERC20", "name": "", "type": "address" }], "name": "tokenPoolIds", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contractIMintableERC20", "name": "_reward", "type": "address" }, { "internalType": "address", "name": "_governance", "type": "address" }, { "internalType": "uint256", "name": "_rewardRate", "type": "uint256" }, { "internalType": "uint256", "name": "_reducedRewardRatePerEpoch", "type": "uint256" }, { "internalType": "uint256", "name": "_startBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_blocksPerEpoch", "type": "uint256" }, { "internalType": "uint256", "name": "_totalReducedEpochs", "type": "uint256" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_pendingGovernance", "type": "address" }], "name": "setPendingGovernance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "acceptGovernance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_rewardRate", "type": "uint256" }], "name": "setRewardRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contractIERC20", "name": "_token", "type": "address" }], "name": "createPool", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256[]", "name": "_rewardWeights", "type": "uint256[]" }], "name": "setRewardWeights", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_poolId", "type": "uint256" }, { "internalType": "uint256", "name": "_depositAmount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_poolId", "type": "uint256" }, { "internalType": "uint256", "name": "_withdrawAmount", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_poolId", "type": "uint256" }], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_poolId", "type": "uint256" }], "name": "exit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardRate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalRewardWeight", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "startBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "blocksPerEpoch", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "reducedRewardRatePerEpoch", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalReducedEpochs", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "poolCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_poolId", "type": "uint256" }], "name": "getPoolToken", "outputs": [{ "internalType": "contractIERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_poolId", "type": "uint256" }], "name": "getPoolTotalDeposited", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_poolId", "type": "uint256" }], "name": "getPoolRewardWeight", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }, { "internalType": "uint256", "name": "_poolId", "type": "uint256" }], "name": "getStakeTotalDeposited", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }, { "internalType": "uint256", "name": "_poolId", "type": "uint256" }], "name": "getStakeTotalUnclaimed", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }];
const IB_ALPACA_ABI = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "debtShare", "type": "uint256" }], "name": "AddDebt", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "killer", "type": "address" }, { "indexed": false, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "posVal", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "debt", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "prize", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "left", "type": "uint256" }], "name": "Kill", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "debtShare", "type": "uint256" }], "name": "RemoveDebt", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "id", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "loan", "type": "uint256" }], "name": "Work", "type": "event" }, { "inputs": [], "name": "POSITION_ID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "STRATEGY", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_IN_EXEC_LOCK", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "config", "outputs": [{ "internalType": "contractIVaultConfig", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "debtShare", "type": "uint256" }], "name": "debtShareToVal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "debtToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "debtVal", "type": "uint256" }], "name": "debtValToShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amountToken", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "fairLaunchPoolId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contractIVaultConfig", "name": "_config", "type": "address" }, { "internalType": "address", "name": "_token", "type": "address" }, { "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }, { "internalType": "uint8", "name": "_decimals", "type": "uint8" }, { "internalType": "address", "name": "_debtToken", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "kill", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "lastAccrueTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "nextPositionID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "pendingInterest", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }], "name": "positionInfo", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "positions", "outputs": [{ "internalType": "address", "name": "worker", "type": "address" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "debtShare", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "reduceReserve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "targetedToken", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "requestFunds", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reservePool", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_poolId", "type": "uint256" }], "name": "setFairLaunchPoolId", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalToken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contractIVaultConfig", "name": "_config", "type": "address" }], "name": "updateConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_debtToken", "type": "address" }, { "internalType": "uint256", "name": "_newPid", "type": "uint256" }], "name": "updateDebtToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "vaultDebtShare", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "vaultDebtVal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "share", "type": "uint256" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "withdrawReserve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "address", "name": "worker", "type": "address" }, { "internalType": "uint256", "name": "principalAmount", "type": "uint256" }, { "internalType": "uint256", "name": "loan", "type": "uint256" }, { "internalType": "uint256", "name": "maxReturn", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" }], "name": "work", "outputs": [], "stateMutability": "payable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
const SCIENTIX_ABI = [{ "inputs": [{ "internalType": "contractIMintableERC20", "name": "_token", "type": "address" }, { "internalType": "contractIMintableERC20", "name": "_xtoken", "type": "address" }, { "internalType": "address", "name": "_governance", "type": "address" }, { "internalType": "address", "name": "_sentinel", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contractIVaultAdapter", "name": "adapter", "type": "address" }], "name": "ActiveVaultUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "limit", "type": "uint256" }], "name": "CollateralizationLimitUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "status", "type": "bool" }], "name": "EmergencyExitUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "FundsFlushed", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "withdrawnAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "decreasedValue", "type": "uint256" }], "name": "FundsHarvested", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "vaultId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "withdrawnAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "decreasedValue", "type": "uint256" }], "name": "FundsRecalled", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "governance", "type": "address" }], "name": "GovernanceUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "fee", "type": "uint256" }], "name": "HarvestFeeUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "pendingGovernance", "type": "address" }], "name": "PendingGovernanceUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "treasury", "type": "address" }], "name": "RewardsUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "sentinel", "type": "address" }], "name": "SentinelUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "TokensDeposited", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "requestedAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "withdrawnAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "decreasedValue", "type": "uint256" }], "name": "TokensLiquidated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "parentAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "childAmount", "type": "uint256" }], "name": "TokensRepaid", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "requestedAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "withdrawnAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "decreasedValue", "type": "uint256" }], "name": "TokensWithdrawn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "transmuter", "type": "address" }], "name": "TransmuterUpdated", "type": "event" }, { "inputs": [], "name": "MAXIMUM_COLLATERALIZATION_LIMIT", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MINIMUM_COLLATERALIZATION_LIMIT", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "PERCENT_RESOLUTION", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ZERO_ADDRESS", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_linkGasOracle", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "emergencyExit", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "flushActivator", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "governance", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "harvestFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "initialized", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pegMinimum", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pendingGovernance", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewards", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "sentinel", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "contractIMintableERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalDeposited", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "transmuter", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "xtoken", "outputs": [{ "internalType": "contractIMintableERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_pendingGovernance", "type": "address" }], "name": "setPendingGovernance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "acceptGovernance", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_sentinel", "type": "address" }], "name": "setSentinel", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_transmuter", "type": "address" }], "name": "setTransmuter", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_flushActivator", "type": "uint256" }], "name": "setFlushActivator", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_rewards", "type": "address" }], "name": "setRewards", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_harvestFee", "type": "uint256" }], "name": "setHarvestFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_limit", "type": "uint256" }], "name": "setCollateralizationLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "Oracle", "type": "address" }, { "internalType": "uint256", "name": "peg", "type": "uint256" }], "name": "setOracleAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_emergencyExit", "type": "bool" }], "name": "setEmergencyExit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "collateralizationLimit", "outputs": [{ "components": [{ "internalType": "uint256", "name": "x", "type": "uint256" }], "internalType": "structFixedPointMath.uq192x64", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "contractIVaultAdapter", "name": "_adapter", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contractIVaultAdapter", "name": "_adapter", "type": "address" }], "name": "migrate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_vaultId", "type": "uint256" }], "name": "harvest", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_vaultId", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "recall", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_vaultId", "type": "uint256" }], "name": "recallAll", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "flush", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "deposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_parentAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_childAmount", "type": "uint256" }], "name": "repay", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "liquidate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "vaultCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_vaultId", "type": "uint256" }], "name": "getVaultAdapter", "outputs": [{ "internalType": "contractIVaultAdapter", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_vaultId", "type": "uint256" }], "name": "getVaultTotalDeposited", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "getCdpTotalDeposited", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "getCdpTotalDebt", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "getCdpTotalCredit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_account", "type": "address" }], "name": "getCdpLastDeposit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }];
const VE_ABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address[]", "name": "keepers", "type": "address[]" }, { "indexed": false, "internalType": "bool[]", "name": "states", "type": "bool[]" }], "name": "KeepersSet", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "veAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "lockEnd", "type": "uint256" }], "name": "LockCreate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "veAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "lockEnd", "type": "uint256" }], "name": "LockExtend", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "veAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "lockEnd", "type": "uint256" }], "name": "LockIncreaseAmount", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "inputs": [], "name": "MAX_TIME", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "_busd", "outputs": [{ "internalType": "contractIERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_busdToSCIXPath", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "_collector", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_keepers", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "_pancakeRouterAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "_poolId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "_poolToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "_scix", "outputs": [{ "internalType": "contractIERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "_stakingPools", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "_totalLockedSCIX", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "o", "type": "address" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "contractIERC20", "name": "scix", "type": "address" }, { "internalType": "contractIERC20", "name": "busd", "type": "address" }, { "internalType": "address", "name": "collector", "type": "address" }, { "internalType": "address", "name": "stakingPools", "type": "address" }, { "internalType": "address", "name": "poolToken", "type": "address" }, { "internalType": "uint256", "name": "poolId", "type": "uint256" }, { "internalType": "address", "name": "pancakeRouterAddress", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "amountOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "endOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "maxEnd", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "end", "type": "uint256" }], "name": "createLock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "addAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "end", "type": "uint256" }], "name": "extendLock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "depositPoolToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "exitPool", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "flag", "type": "uint256" }], "name": "pause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "flag", "type": "uint256" }], "name": "unpause", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "keepers", "type": "address[]" }, { "internalType": "bool[]", "name": "states", "type": "bool[]" }], "name": "setKeepers", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claim", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "buyback", "type": "bool" }], "name": "collectReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "pendingReward", "outputs": [{ "internalType": "uint256", "name": "pending", "type": "uint256" }], "stateMutability": "view", "type": "function", "constant": true }];

async function getScixPoolInfo(App, pool, poolIndex, rewardRate, totalRewardWeight) {
  const [token, rewardWeight, totalDeposited, userStaked, userUnclaimed] =
    await Promise.all([
      pool.getPoolToken(poolIndex), pool.getPoolRewardWeight(poolIndex),
      pool.getPoolTotalDeposited(poolIndex), pool.getStakeTotalDeposited(App.YOUR_ADDRESS, poolIndex),
      pool.getStakeTotalUnclaimed(App.YOUR_ADDRESS, poolIndex)
    ]);
  const poolToken = await getBscToken(App, token, pool.address);
  const poolRewardRate = rewardRate * rewardWeight / totalRewardWeight;
  return {
    poolToken,
    rewardsPerWeek: poolRewardRate / 1e18 * 7 * 24 * 60 * 60 / 3,
    totalDeposited: totalDeposited / 1e18,
    userStaked: userStaked / 1e18,
    userUnclaimed: userUnclaimed / 1e18
  }
}

const scixContract_deposit = async function (scixAbi, scixAddress, poolIndex, stakeTokenAddr, App) {
  const signer = App.provider.getSigner()

  const STAKING_TOKEN = new ethers.Contract(stakeTokenAddr, ERC20_ABI, signer)
  const SCIX_CONTRACT = new ethers.Contract(scixAddress, scixAbi, signer)

  const currentTokens = await STAKING_TOKEN.balanceOf(App.YOUR_ADDRESS)
  const allowedTokens = await STAKING_TOKEN.allowance(App.YOUR_ADDRESS, scixAddress)

  let allow = Promise.resolve()

  if (allowedTokens / 1e18 < currentTokens / 1e18) {
    showLoading()
    allow = STAKING_TOKEN.approve(scixAddress, ethers.constants.MaxUint256)
      .then(function (t) {
        return App.provider.waitForTransaction(t.hash)
      })
      .catch(function () {
        hideLoading()
        alert('Try resetting your approval to 0 first')
      })
  }

  if (currentTokens / 1e18 > 0) {
    showLoading()
    allow
      .then(async function () {
        SCIX_CONTRACT.deposit(poolIndex, currentTokens, { gasLimit: 500000 })
          .then(function (t) {
            App.provider.waitForTransaction(t.hash).then(function () {
              hideLoading()
            })
          })
          .catch(function () {
            hideLoading()
            _print('Something went wrong.')
          })
      })
      .catch(function () {
        hideLoading()
        _print('Something went wrong.')
      })
  } else {
    alert('You have no tokens to stake!!')
  }
}

const scixContract_withdraw = async function (scixAbi, scixAddress, poolIndex, App) {
  const signer = App.provider.getSigner()
  const SCIX_CONTRACT = new ethers.Contract(scixAddress, scixAbi, signer)

  const currentStakedAmount = await SCIX_CONTRACT.getStakeTotalDeposited(App.YOUR_ADDRESS, poolIndex)

  if (currentStakedAmount / 1e18 > 0) {
    showLoading()
    const t = await SCIX_CONTRACT.withdraw(poolIndex, currentStakedAmount, { gasLimit: 500000 });
    return App.provider.waitForTransaction(t.hash);
  }
}

const scixContract_claim = async function (scixAbi, scixAddress, poolIndex, App) {
  const signer = App.provider.getSigner()

  const SCIX_CONTRACT = new ethers.Contract(scixAddress, scixAbi, signer)

  const earnedTokenAmount = await SCIX_CONTRACT.getStakeTotalUnclaimed(App.YOUR_ADDRESS, poolIndex) / 1e18

  if (earnedTokenAmount > 0) {
    showLoading()
    const t = await SCIX_CONTRACT.claim(poolIndex, { gasLimit: 500000 });
    return App.provider.waitForTransaction(t.hash);
  }
}

function printScixContractLinks(App, scixAbi, scixAddr, poolIndex, poolAddress,
  rewardTokenTicker, stakeTokenTicker, unstaked, userStaked, pendingRewardTokens, rewardTokenPrice) {
  let fixedDecimals = 2;
  const approveAndDeposit = async function () {
    return scixContract_deposit(scixAbi, scixAddr, poolIndex, poolAddress, App)
  }
  const withdraw = async function () {
    return scixContract_withdraw(scixAbi, scixAddr, poolIndex, App)
  }
  const claim = async function () {
    return scixContract_claim(scixAbi, scixAddr, poolIndex, App, pendingRewardsFunction)
  }
  const etherscanUrl = `<a href='https://bscscan.io/address/${poolAddress}' target='_blank'>Staking Contract</a>`;
  _print(etherscanUrl);
  _print_link(`Deposit ${unstaked.toFixed(fixedDecimals)} ${stakeTokenTicker}`, approveAndDeposit)
  _print_link(`Withdraw ${userStaked.toFixed(fixedDecimals)} ${stakeTokenTicker}`, withdraw)
  _print_link(`Claim ${pendingRewardTokens.toFixed(fixedDecimals)} ${rewardTokenTicker} ($${formatMoney(pendingRewardTokens * rewardTokenPrice)})`, claim)
  _print(`Staking or unstaking also claims rewards.`)
  _print(`\n`);
}

function printScixPool(App, scixAbi, scixAddr, prices, poolInfo, poolIndex, poolPrices,
  rewardTokenTicker, rewardTokenAddress) {
  const rewardPrice = getParameterCaseInsensitive(prices, rewardTokenAddress)?.usd;
  poolPrices.print_price();
  printAPR(rewardTokenTicker, rewardPrice, poolInfo.rewardsPerWeek, poolPrices.stakeTokenTicker,
    poolPrices.staked_tvl, poolInfo.userStaked, poolPrices.price, 2);
  if (poolInfo.userStaked > 0) poolPrices.print_contained_price(poolInfo.userStaked);
  printScixContractLinks(App, scixAbi, scixAddr, poolIndex, poolInfo.poolToken.address,
    rewardTokenTicker, poolPrices.stakeTokenTicker, poolInfo.poolToken.unstaked,
    poolInfo.userStaked, poolInfo.userUnclaimed, rewardPrice);
}


const lookUpTokenPricesCoingecko = async function (id_array) {
  const prices = {}
  for (const id_chunk of chunk(id_array, 50)) {
    let ids = id_chunk.join('%2C')
    let res = await $.ajax({
      url: 'https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=' + ids + '&vs_currencies=usd',
      type: 'GET',
    })
    for (const [key, v] of Object.entries(res)) {
      if (v.usd) prices[key] = v;
    }
  }
  return prices
}

const getIbAlpacaPrice = async (IB_ALPACA_ADDRESS, alpacaPrice, App) => {
  try {
    const ibAlpacaContract = new ethers.Contract(IB_ALPACA_ADDRESS, IB_ALPACA_ABI, App.provider);
    let [totalToken, totalSupply] = await Promise.all([
      ibAlpacaContract.totalToken(),
      ibAlpacaContract.totalSupply()
    ]);
    const price = alpacaPrice.usd * totalToken / totalSupply;
    return { usd: price };
  } catch (e) {
    console.log(e);
    return alpacaPrice;
  }
};


const totalDepositedBUSDInVault = async (App) => {
  const SCIENTIX_ADDRESS = "0xEbB15456C0833033f0310f61748CD597554460Da";
  const scientixContract = new ethers.Contract(SCIENTIX_ADDRESS, SCIENTIX_ABI, App.provider);
  let vaultId = await scientixContract.vaultCount();
  if (!vaultId) {
    return 0;
  }
  const deposited = await scientixContract.getVaultTotalDeposited(vaultId - 1);
  return deposited / 1e18;
};

const getVeSupply = async (App) => {
  const VotingEscrow = "0xf92aba2a79dc133278de2cddb38db775a4b5b024";
  const veContract = new ethers.Contract(VotingEscrow, VE_ABI, App.provider);
  const staked = await veContract.totalSupply();
  return staked / 1e18;
}


const getRewardPerBlockAndWeight = async (pool, App) => {
  let rewardPerBlock = 0;
  let [rewardRate, totalWeight, reducedRewardRatePerEpoch, startBlock, blocksPerEpoch, totalReducedEpochs] =
    await Promise.all([
      pool.rewardRate(),
      pool.totalRewardWeight(),
      pool.reducedRewardRatePerEpoch(),
      pool.startBlock(),
      pool.blocksPerEpoch(),
      pool.totalReducedEpochs(),
    ]);
  const block = await App.provider.getBlockNumber();
  const lastReductionBlock = startBlock + blocksPerEpoch * totalReducedEpochs;
  if (block >= lastReductionBlock) {
    rewardPerBlock = rewardRate - reducedRewardRatePerEpoch * totalReducedEpochs;
  } else {
    const epoch = (block - startBlock) / blocksPerEpoch;
    rewardPerBlock = rewardRate - reducedRewardRatePerEpoch * epoch;
  }
  return [rewardPerBlock, totalWeight]
};

async function main() {
  const App = await init_ethers();
  const tokens = {}

  _print(`Initialized ${App.YOUR_ADDRESS}\n`);
  _print("Reading smart contracts...\n");

  const rewardTokenTicker = "SCIX";
  const SCIX_POOL_ADDRESS = "0x68145F3319F819b8E01Dfa3c094fa8205E9EfB9a";
  const rewardTokenAddress = "0x2cfc48cdfea0678137854f010b5390c5144c0aa5";
  const scUSDAddress = "0x0E5C2b15666EEE4b66788E45CF4Da0392C070fa7";
  const VOTINGESCROW = "0xf92aba2a79dc133278de2cddb38db775a4b5b024";
  const ALPACA_ADDRESS = "0x8f0528ce5ef7b51152a59745befdd91d97091d2f";
  const IB_ALPACA_ADDRESS = "0xf1bE8ecC990cBcb90e166b71E368299f0116d421";
  const BUSD = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
  const SCIX_POOL = new ethers.Contract(SCIX_POOL_ADDRESS, SCIX_POOL_ABI, App.provider);
  const poolCount = await SCIX_POOL.poolCount();
  const [rewardRate, totalWeight] = await getRewardPerBlockAndWeight(SCIX_POOL, App);
  const poolInfos = await Promise.all([...Array(poolCount / 1).keys()].map(async (x) =>
    await getScixPoolInfo(App, SCIX_POOL, x, rewardRate, totalWeight)));
  var tokenAddresses = [ALPACA_ADDRESS, BUSD, rewardTokenAddress, scUSDAddress, VOTINGESCROW];
  await Promise.all(tokenAddresses.map(async (address) => {
    tokens[address] = await getBscToken(App, address, SCIX_POOL_ADDRESS);
  }));
  var prices = await lookUpTokenPricesCoingecko(tokenAddresses);

  //3: ibALPACA 
  const ibAlpacaPrice = await getIbAlpacaPrice(IB_ALPACA_ADDRESS, prices[ALPACA_ADDRESS], App);
  prices[IB_ALPACA_ADDRESS] = ibAlpacaPrice;

  //5: [SCIX]-[BUSD] Cake LP
  const [busdBalance, scixBalance] = await Promise.all([
    tokens[BUSD].contract.balanceOf(poolInfos[5].poolToken.address),
    tokens[rewardTokenAddress].contract.balanceOf(poolInfos[5].poolToken.address)]);
  prices[rewardTokenAddress] = { usd: (busdBalance / scixBalance * (prices[BUSD] ? prices[BUSD].usd : 1)) };

  //4: VOTINGESCROW 
  const _totalDepositedBUSD = await totalDepositedBUSDInVault(App);
  const _busdAPY = 10;
  const veBUSDRewardPerWeek = _totalDepositedBUSD * _busdAPY * 0.01 * 0.1 * (7 / 365) * (prices[BUSD] ? prices[BUSD].usd : 1) / prices[rewardTokenAddress].usd;
  poolInfos[4].rewardsPerWeek += veBUSDRewardPerWeek;
  prices[poolInfos[4].poolToken.address] = prices[rewardTokenAddress];
  poolInfos[4].poolToken.staked = await getVeSupply(App);

  //6: [scUSD]-[BUSD] Cake LP 
  const [busdBalance2, scUsdBalance] = await Promise.all([
    tokens[BUSD].contract.balanceOf(poolInfos[6].poolToken.address),
    tokens[scUSDAddress].contract.balanceOf(poolInfos[6].poolToken.address)]);

  prices[scUSDAddress] = { usd: busdBalance2 / scUsdBalance * prices[BUSD] ? prices[BUSD].usd : 1 };
  const poolPrices = poolInfos.map(poolInfo => getPoolPrices(tokens, prices, poolInfo.poolToken, "bsc"));
  poolPrices[4].print_price = () => {
    const pool = poolInfos[4].poolToken;
    const poolUrl = `https://bscscan.io/token/${pool.address}`;
    const name = `<a href='${poolUrl}' target='_blank'>${pool.symbol}</a>`;
    _print(`${name}`);
    _print(`Staked: ${pool.staked.toFixed(4)} ${pool.symbol}`);
  }
  _print("Finished reading smart contracts.\n");

  for (i = 3; i < poolCount; i++) {
    printScixPool(App, SCIX_POOL_ABI, SCIX_POOL_ADDRESS, prices,
      poolInfos[i], i, poolPrices[i], rewardTokenTicker, rewardTokenAddress);
  }

  hideLoading();
}