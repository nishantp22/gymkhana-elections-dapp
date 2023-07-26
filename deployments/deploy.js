const { ethers } = require('hardhat');

async function main() {
  await ethers.getContractFactory('Election');
  const [deployer] = await ethers.getSigners();
  console.log('Deploying the Election contract with the account:', deployer.address);
  const candidateNames = ['PRATHAM SAHU', 'DEVANSH JAIN', 'RAHUL JHA','RIDIN DATTA'];

  const Election = await ethers.getContractFactory('Election');
  const election = await Election.deploy(candidateNames);
  await election.deployed();
  console.log('Election contract deployed to:', election.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
