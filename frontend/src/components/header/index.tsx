import { TonConnectButton } from "@tonconnect/ui-react"
import { Button } from "../ui/button"

export const Header = () => {
    return <div className="w-dvw flex justify-end">
        <Button width={'halfscreen'}>Текс текст текст</Button>
        <TonConnectButton></TonConnectButton>
    </div>
}