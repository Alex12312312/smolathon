import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Greetings } from './pages/greetings/'
import { MainPage } from './pages/mainPage/'
import Layout from './pages/layout'
import ProfileMe from './pages/profile-me'
import { TelegramProvider } from './lib/telegram/telegramProvider'
import { Feed } from './pages/feed'
import { SendFile } from './pages/sendFile'
import { Asset } from './pages/asset'
import { Collection } from './pages/collection'
import { Poster } from './pages/poster'

function App() {
    return (
        <TelegramProvider>
            <TonConnectUIProvider
                manifestUrl="https://s3.timeweb.cloud/c682ec52-c9a44753-1274-459e-a8c2-4a6a310b5f93/public/manifest.json"
                uiPreferences={{ theme: THEME.DARK, borderRadius: 's' }}
                walletsListConfiguration={{
                    includeWallets: [
                        {
                            appName: 'tonwallet',
                            name: 'TON Wallet',
                            imageUrl: 'https://wallet.ton.org/assets/ui/qr-logo.png',
                            aboutUrl:
                                'https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd',
                            universalLink: 'https://wallet.ton.org/ton-connect',
                            jsBridgeKey: 'tonwallet',
                            bridgeUrl: 'https://bridge.tonapi.io/bridge',
                            platforms: ['chrome', 'android'],
                        },
                        {
                            appName: 'nicegramWallet',
                            name: 'Nicegram Wallet',
                            imageUrl: 'https://static.nicegram.app/icon.png',
                            aboutUrl: 'https://nicegram.app',
                            universalLink: 'https://nicegram.app/tc',
                            deepLink: 'nicegram-tc://',
                            jsBridgeKey: 'nicegramWallet',
                            bridgeUrl: 'https://bridge.tonapi.io/bridge',
                            platforms: ['ios', 'android'],
                        },
                        {
                            appName: 'fintopio-tg',
                            name: 'Fintopio Telegram',
                            imageUrl: 'https://fintopio.com/tonconnect-icon.png',
                            aboutUrl: 'https://fintopio.com',
                            universalLink: 'https://t.me/fintopio?attach=wallet',
                            bridgeUrl: 'https://wallet-bridge.fintopio.com/bridge',
                            platforms: ['ios', 'android', 'macos', 'windows', 'linux'],
                        },
                        {
                            appName: 'tokenpocket',
                            name: 'TokenPocket',
                            imageUrl: 'https://hk.tpstatic.net/logo/tokenpocket.png',
                            aboutUrl: 'https://tokenpocket.pro',
                            jsBridgeKey: 'tokenpocket',
                            platforms: ['ios', 'android'],
                        },
                        {
                            appName: 'dewallet',
                            name: 'DeWallet',
                            imageUrl:
                                'https://raw.githubusercontent.com/delab-team/manifests-images/main/WalletAvatar.png',
                            aboutUrl: 'https://delabwallet.com',
                            universalLink: 'https://t.me/dewallet?attach=wallet',
                            bridgeUrl: 'https://bridge.dewallet.pro/bridge',
                            platforms: ['ios', 'android', 'macos', 'windows', 'linux'],
                        },
                        {
                            appName: 'BitgetWeb3',
                            name: 'BitgetWeb3',
                            imageUrl: 'https://img.bitgetimg.com/image/third/1723701408284.png',
                            aboutUrl: 'https://www.bitget.com',
                            universalLink: 'https://t.me/BitgetOfficialBot?attach=wallet',
                            bridgeUrl: 'https://ton-connect-bridge.bgwapi.io/bridge',
                            platforms: ['ios', 'android', 'windows', 'macos', 'linux'],
                        },
                        {
                            appName: 'cdcTonWallet',
                            name: 'Crypto.com DeFi Wallet',
                            imageUrl: 'https://apro-ncw-api-file.crypto.com/wallet/logo',
                            aboutUrl: 'https://crypto.com/defi-wallet',
                            universalLink: 'https://wallet.crypto.com/deeplink/ton-connect',
                            deepLink: 'dfw://',
                            jsBridgeKey: 'cdcTonWallet',
                            bridgeUrl: 'https://wallet.crypto.com/sse/tonbridge',
                            platforms: ['ios', 'android', 'chrome'],
                        },
                        {
                            appName: 'tobi',
                            name: 'Tobi',
                            imageUrl: 'https://app.tobiwallet.app/icons/logo.png',
                            aboutUrl: 'https://tobi.fun',
                            universalLink: 'https://t.me/TobiWalletBot?attach=wallet',
                            bridgeUrl: 'https://bridge.tonapi.io/bridge',
                            platforms: ['ios', 'android', 'macos', 'windows', 'linux'],
                        },
                        {
                            appName: 'trustwalletTon',
                            name: 'Trust',
                            imageUrl: 'https://assets-cdn.trustwallet.com/dapps/trust.logo.png',
                            aboutUrl: 'https://trustwallet.com/about-us',
                            bridgeUrl: 'https://tonconnect.trustwallet.com/',
                            jsBridgeKey: 'trustwalletTon',
                            platforms: ['chrome', 'ios', 'android'],
                        },
                    ],
                }}
                actionsConfiguration={{
                    twaReturnUrl: 'https://t.me/DemoDappWithTonConnectBot/demo',
                }}
            >
                <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Greetings></Greetings>} />
                            <Route path="/main" element={<MainPage></MainPage>} />
                            <Route path="/me" element={<ProfileMe></ProfileMe>} />
                            <Route path="/collections" element={<Collection />} />
                            <Route path="/poster" element={<Poster></Poster>}/>
                            <Route path="/feed" element={<Feed></Feed>} />
                            <Route path="/sendFile" element={<SendFile />} />
                            <Route path="/asset/:id" element={<Asset />} />
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </TonConnectUIProvider>
        </TelegramProvider>
    )
}

export default App
