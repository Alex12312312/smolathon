//import { useState } from "react"
import smolensk from "../../assets/smolensk.png"
//import smolensk2 from "../../assets/smolensk2.png"
import { useNavigate } from "react-router-dom"
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group"


export const Greetings = () => {
    const navigator = useNavigate();
    return <div className="w-lvw h-lvh flex">
        <img className="w-full h-full object-cover" src={smolensk} alt="Изображение не загружено"></img>
        <button className="absolute top-0 bg-transparent right-0 p-3 size-auto text-white text-4xl " onClick={() => { navigator("/main") }}>⮾</button>
        <div className="absolute flex flex-col bg-[#302B2BCF] bottom-0 h-1/3 w-full rounded-lg pt-16 gap-[60px]">
            <div className="w-64 text-center">Test Text</div>
            <RadioGroup className="flex flex-row" defaultValue="page-one">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem className="h-4 w-4" value="page-one" id="page-one" />
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem className="h-4 w-4" value="page-two" id="page-two" />
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem className="h-4 w-4" value="page-three" id="page-three" />
                </div>
            </RadioGroup>
        </div>
    </div>
}