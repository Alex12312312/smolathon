//import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import smolensk from "../../assets/smolensk.png"
//import smolensk2 from "../../assets/smolensk2.png"
import { useNavigate } from "react-router-dom"


export const Greetings = () => {
    const navigator = useNavigate();
    return <div className="w-lvw h-lvh flex">
        <img className="w-full h-full object-cover" src={smolensk} alt="Изображение не загружено"></img>
        <button className="absolute top-0 bg-transparent right-0 p-3 size-auto text-white text-4xl " onClick={() => { navigator("/main") }}>⮾</button>
        <div className="absolute flex flex-col bg-[#302B2BCF] text-white bottom-0 h-1/3 w-full rounded-lg pt-16 gap-[60px] justify-center content-center">
            <div className="w-4/5 text-center self-center text-2xl">Открой новые горизонты, почувствуй  свой город !</div>
            <RadioGroup className="flex flex-row gap-[44px] self-center" defaultValue="page-one">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem className="h-4 w-4 border-white after:bg-white" value="page-one" id="page-one" />
                </div>
                <div className="flex items-center space-x-2 ">
                    <RadioGroupItem className="h-4 w-4 border-white after:bg-white" value="page-two" id="page-two" />
                </div>
                <div className="flex items-center space-x-2 ">
                    <RadioGroupItem className="h-4 w-4 border-white after:bg-white" value="page-three" id="page-three" />
                </div>
            </RadioGroup>
        </div>
    </div>
}