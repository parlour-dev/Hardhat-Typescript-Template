// yarn hardhat node
// yarn hardhat run scripts/readPrice.ts --network localhost
import { ethers } from "hardhat"
import { Greeter } from "../typechain"

async function greet(): Promise<void> {
  // We get the contract to deploy
  const greeter: Greeter = await ethers.getContract("Greeter")
  const greet: string = await greeter.greet()

  console.log(`${greet}`)
}

greet().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
