import { useTonAddress, useTonWallet } from "@tonconnect/ui-react"

export const WalletInfo = () => {
    const address = useTonAddress();
    const wallet = useTonWallet();
    return(
        wallet && (
            <div className="flex flex-col">
                <span>{address}</span>
                <span>{wallet.device.appName}</span>
            </div>
        )
    )
}