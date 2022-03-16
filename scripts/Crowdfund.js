const hre = require("hardhat");

async function main() {

  const CrowdFund = await hre.ethers.getContractFactory("CrowdFund");
  const crowdFund = await CrowdFund.deploy("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512");

  await crowdFund.deployed();

  console.log("Greeter deployed to:", crowdFund.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
