task("erc20-transfer-from", "Calls balanceOf function")
  .addParam("diamond", "The Diamond contract address you want to call")
  .addParam("from", "The account to transfer from")
  .addParam("to", "The account to transfer to")
  .addParam("amount", "The amount to transfer")
  .setAction(async (taskArgs, hre) => {
    const accounts = await ethers.getSigners()
    const signer = accounts[0]

    const Facet = await ethers.getContractFactory("DiamondERC20Facet")
    const facet = new ethers.Contract(taskArgs.diamond,Facet.interface, signer)
    console.log('DiamondERC20 interface fetched:', facet.address)

    const tx = await facet.transferFrom(taskArgs.from, taskArgs.to, tarskArgs.amount)
    console.log("RESPONSE: ",tx)
  }
)

module.exports = {}
