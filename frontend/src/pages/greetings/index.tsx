import cross from '@/assets/cross.svg'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import smolensk from '../../assets/smolensk.png'
import smolensk2 from '../../assets/smolensk2.png'
import smolensk3 from '../../assets/smolensk3.png'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

export const Greetings = () => {
    const [selected, changeImage] = useState(0)
    const radioGroupRef = useRef(null)
    const textes = [
        'Открой новые горизонты, почувствуй  свой город !',
        'Сохрани культурное наследие!',
        'Начни свой путь с нами!',
    ]
    const images = [smolensk, smolensk2, smolensk3]
    const navigator = useNavigate()
    const handleScreenClick = () => {
        selected >= 2 ? changeImage(2) : changeImage(selected + 1)
    }
    return (
        <div
            className="flex h-lvh w-lvw"
            onClick={() => {
                handleScreenClick()
            }}
        >
            <img
                className="h-full w-full object-cover"
                src={images[selected >= 2 ? 2 : selected]}
                alt="Изображение не загружено"
            ></img>
            <button
                className="absolute right-0 top-0 size-auto bg-transparent p-3 text-4xl text-white"
                onClick={() => {
                    navigator('/main')
                }}
            >
                <img src={cross}/>
            </button>
            <div className="absolute bottom-0 flex h-1/3 w-full flex-col content-center justify-center gap-[60px] rounded-lg bg-[#302B2BCF] pt-16 text-white">
                <div className="flex w-4/5 flex-col self-center text-center text-xl">
                    <div>{textes[selected]}</div>
                    {selected < 2 ? (
                        ''
                    ) : (
                        <Button
                            className="mt-3 w-fit self-center bg-green-500 px-7"
                            onClick={() => {
                                navigator('/main')
                            }}
                        >
                            Начать
                        </Button>
                    )}
                </div>
                <RadioGroup
                    ref={radioGroupRef}
                    className="flex flex-row gap-[44px] self-center"
                    value={selected.toString()}
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            className="h-4 w-4 border-white after:block after:bg-white"
                            value="0"
                            id="page-one"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            className="h-4 w-4 border-white after:bg-white"
                            value="1"
                            id="page-two"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            className="h-4 w-4 border-white after:bg-white"
                            value="2"
                            id="page-three"
                        />
                    </div>
                </RadioGroup>
            </div>
        </div>
    )
}
