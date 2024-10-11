import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function Friend() {
    return (
        <div className='flex flex-row gap-4'>
            <Avatar className="h-[40px] w-[40px]">
                <AvatarImage
                    // src={'data:image/jpeg;charset=utf-8;base64,' + user?.avatarUrl}
                    // alt="User Avatar"
                />
                <AvatarFallback className="bg-[#7f7f7f] text-sm text-gray-800">CN</AvatarFallback>
            </Avatar>
            <div className='flex flex-col justify-evenly'>
                <div className='font-semibold text-base'>fff</div>
                <div className='font-normal text-sm'>@fff</div>
            </div>
        </div>
    )
}

export default Friend