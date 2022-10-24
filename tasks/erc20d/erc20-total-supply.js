task("erc20-total-supply", "Calls totalSupply function")
  .addParam("diamond", "The Diamond contract address you want to call")
  .setAction(async (taskArgs, hre) => {
    const accounts = await ethers.getSigners()
    const signer = accounts[0]

    const Facet = await ethers.getContractFactory("DiamondERC20Facet")
    const facet = new ethers.Contract(taskArgs.diamond,Facet.interface, signer)
    console.log('DiamondERC20 interface fetched:', facet.address)

    const tx = await facet.totalSupply()
    console.log("RESPONSE: ",tx)
  }
)

module.exports = {}
