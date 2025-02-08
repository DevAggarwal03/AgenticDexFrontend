

export interface Token {
    name: string;
    symbol: string;
    logoURI: string;
    address: string;
    decimals: number;
    balance?: string;
  }

export const tokens = [
    {
      "chainId": 8453,
      "address": "0x768BE13e1680b5ebE0024C42c896E3dB59ec0149",
      "name": "Ski Mask Dog",
      "symbol": "SKI",
      "decimals": 9,
      "logoURI": "https://res.cloudinary.com/dg5ddxvko/image/upload/v1738818958/skiMaskDog_hqmlil.jpg"
    },
    {
      "chainId": 8453,
      "address": "0x4200000000000000000000000000000000000006",
      "name": "Wrapped Ether",
      "symbol": "WETH",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/data/WETH/logo.png"
    },
    {
        "chainId": 8453,
        "address": "0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2",
        "name": "Tether USD",
        "symbol": "USDT",
        "decimals": 6,
        "logoURI": "https://ethereum-optimism.github.io/data/USDT/logo.png"
    },
    {
      "chainId": 8453,
      "address": "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
      "name": "USD Base Coin",
      "symbol": "USDbC",
      "decimals": 6,
      "logoURI": "https://ethereum-optimism.github.io/data/USDC/logo.png"
    },
    {
      "chainId": 8453,
      "address": "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
      "name": "Coinbase Wrapped Staked ETH",
      "symbol": "cbETH",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/data/cbETH/logo.svg"
    },
    {
      "chainId": 8453,
      "address": "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
      "name": "Dai Stablecoin",
      "symbol": "DAI",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/data/DAI/logo.svg"
    },
    {
      "chainId": 8453,
      "address": "0x9e1028F5F1D5eDE59748FFceE5532509976840E0",
      "name": "Compound",
      "symbol": "COMP",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/data/COMP/logo.svg"
    },
    {
      "chainId": 8453,
      "address": "0x3bB4445D30AC020a84c1b5A8A2C6248ebC9779D0",
      "name": "0x Protocol Token",
      "symbol": "ZRX",
      "decimals": 18,
      "logoURI": "https://ethereum-optimism.github.io/data/ZRX/logo.png"
    },
    {
      "chainId": 8453,
      "address": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
      "name": "USD Coin",
      "symbol": "USDC",
      "decimals": 6,
      "logoURI": "https://ethereum-optimism.github.io/data/USDC/logo.png"
    },
    {
      "chainId": 8453,
      "address": "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85",
      "name": "Seamlesss",
      "symbol": "SEAM",
      "decimals": 18,
      "logoURI": "https://basescan.org/token/images/seamless_32.png"
    },
    {
      "chainId": 8453,
      "address": "0x940181a94A35A4569E4529A3CDfB74e38FD98631",
      "name": "Aerodrome Finance",
      "symbol": "AERO",
      "decimals": 18,
      "logoURI": "https://basescan.org/token/images/aerodrome_32.png"
    },
    {
      "chainId": 8453,
      "address": "0x6985884C4392D348587B19cb9eAAf157F13271cd",
      "name": "LayerZero",
      "symbol": "ZRO",
      "decimals": 18,
      "logoURI": "https://assets.coingecko.com/coins/images/28206/standard/ftxG9_TJ_400x400.jpeg?1696527208"
    },
    {
      "chainId": 8453,
      "address": "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
      "name": "EURC",
      "symbol": "EURC",
      "decimals": 6,
      "logoURI": "https://assets.coingecko.com/coins/images/26045/standard/euro.png"
    },
    {
      "chainId": 8453,
      "name": "Coinbase Wrapped BTC",
      "address": "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
      "symbol": "cbBTC",
      "decimals": 8,
      "logoURI": "https://assets.coingecko.com/coins/images/40143/standard/cbbtc.webp"
    },
    {
      "chainId": 8453,
      "address": "0xA88594D404727625A9437C3f886C7643872296AE",
      "name": "Moonwell",
      "symbol": "WELL",
      "decimals": 18,
      "logoURI": "https://assets.coingecko.com/coins/images/26133/large/WELL.png?1696525221"
    },
    {
      "chainId": 8453,
      "address": "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
      "name": "Degen",
      "symbol": "DEGEN",
      "decimals": 18,
      "logoURI": "https://assets.coingecko.com/coins/images/34515/large/android-chrome-512x512.png?1706198225"
    },
    {
      "chainId": 8453,
      "address": "0x50dA645f148798F68EF2d7dB7C1CB22A6819bb2C",
      "name": "SPX6900",
      "symbol": "SPX",
      "decimals": 8,
      "logoURI": "https://coin-images.coingecko.com/coins/images/31401/large/sticker_(1).jpg?1702371083"
    },
    {
      "chainId": 8453,
      "address": "0xaB36452DbAC151bE02b16Ca17d8919826072f64a",
      "name": "Reserve Rights",
      "symbol": "RSR",
      "decimals": 18,
      "logoURI": "https://coin-images.coingecko.com/coins/images/8365/large/RSR_Blue_Circle_1000.png?1721777856"
    },
    {
      "chainId": 8453,
      "address": "0xAC1Bd2486aAf3B5C0fc3Fd868558b082a531B2B4",
      "name": "Toshi",
      "symbol": "TOSHI",
      "decimals": 18,
      "logoURI": "https://coin-images.coingecko.com/coins/images/31126/large/Toshi_Logo_-_Circular.png?1721677476"
    },
    {
      "chainId": 8453,
      "address": "0xacfE6019Ed1A7Dc6f7B508C02d1b04ec88cC21bf",
      "name": "Venice Token",
      "symbol": "VVV",
      "decimals": 18,
      "logoURI": "https://assets.coingecko.com/coins/images/54023/standard/Venice_Token_(1).png?1738017546"
    },
    {
      "chainId": 8453,
      "address": "0x2a06A17CBC6d0032Cac2c6696DA90f29D39a1a29",
      "name": "HarryPotterObamaSonic10Inu",
      "symbol": "BITCOIN",
      "decimals": 8,
      "logoURI": "https://coin-images.coingecko.com/coins/images/30323/large/hpos10i_logo_casino_night-dexview.png?1696529224"
    }
  ];