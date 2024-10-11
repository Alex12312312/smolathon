import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button.tsx'
import { useNavigate, useParams } from 'react-router-dom'
import { useUserGetById } from '@/hooks/user.hooks'
import { Accordion, AccordionItem } from '@/components/ui/accordion'

function ProfileUser() {
    const navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    if (!id) {
        navigate('/')
        return null
    }

    const { user, error, isLoading } = useUserGetById(id)

    if (isLoading) {
        return (
            <div className="flex h-[90vh] items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
        )
    }

    if (error) {
        return <div>Error occurred: {error.message}</div>
    }

    return (
        <div className="flex h-[90vh] w-full select-none overflow-x-hidden overflow-y-scroll">
            <div className="w-full flex-col justify-between overflow-y-scroll pb-5">
                <div className="relative h-[110px] w-full overflow-hidden">
                    <img
                        src={'data:image/jpeg;charset=utf-8;base64,' + user?.result?.avatarUrl}
                        className="absolute h-full w-full scale-150 object-cover blur-lg"
                    />
                    <div className="absolute h-full w-full bg-black opacity-30"></div>
                </div>

                <div className="relative mt-8 flex flex-col items-center">
                    <div className="absolute top-[-75px]">
                        <Avatar className="h-[110px] w-[110px] border-4 border-white">
                            <AvatarImage
                                src={
                                    'data:image/jpeg;charset=utf-8;base64,' +
                                    user?.result?.avatarUrl
                                }
                                alt="User Avatar"
                            />
                            <AvatarFallback className="bg-[#7f7f7f] text-xl text-gray-800">
                                CN
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="mt-[55px] select-none p-2 text-xl font-semibold">
                        {user?.result?.firstName}
                    </div>
                </div>
                <Accordion
                    type="single"
                    collapsible={false}
                    className="divide-y divide-gray-200 overflow-y-scroll"
                >
                    <AccordionItem value="item-1" className="py-2">
                        Работы пользователя
                    </AccordionItem>
                    <AccordionItem value="item-2" className="py-2">
                        Коллекции пользователя
                    </AccordionItem>
                </Accordion>
                <Button className="my-4 bg-[#14AE5C] text-base font-bold text-white hover:scale-[1.01] active:scale-[0.99]">
                    Поделиться аккаунтом
                </Button>
            </div>
        </div>
    )
}

export default ProfileUser
