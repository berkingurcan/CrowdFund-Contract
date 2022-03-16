//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NewToken is ERC20 {
    constructor() ERC20("RECORD", "RECORD") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}