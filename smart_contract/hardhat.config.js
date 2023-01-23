//https://eth-goerli.g.alchemy.com/v2/TL2DQ6MHcBZYDy6E-QH1g2nvFkd7TaFQ


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks:{
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/TL2DQ6MHcBZYDy6E-QH1g2nvFkd7TaFQ',
      accounts: [ '3a5a9f5716db54f9ce4c96e8b20adb9ce9b213762e11c46592df9d2dd63eea1c' ]
    }
  }
}
