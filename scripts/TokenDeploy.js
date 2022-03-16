const hre = require("hardhat");
var addressOfToken;


async function main() {

  const NewToken = await hre.ethers.getContractFactory("NewToken");
  const newToken = await NewToken.deploy();

  await newToken.deployed();
  addressOfToken = newToken.address;

  console.log("Greeter deployed to:", newToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


  module.exports.addr = addressOfToken;