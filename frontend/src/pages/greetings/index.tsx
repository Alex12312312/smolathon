//import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import smolensk from "../../assets/smolensk.png"
import smolensk2 from "../../assets/smolensk2.png"
import smolensk3 from "../../assets/smolensk3.png"
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";


export const Greetings = () => {
    const [selected, changeImage] = useState(0);
    const radioGroupRef = useRef(null);
    const textes = ["Открой новые горизонты, почувствуй  свой город !", "Сохрани культурное наследие!", "Начни свой путь с нами!"];
    const images = [smolensk, smolensk2, smolensk3];
    const navigator = useNavigate();
    const handleScreenClick = () =>{
        selected >= 2? changeImage(2): changeImage(selected + 1)
    }
    return <div className="w-lvw h-lvh flex" onClick={ () => {handleScreenClick()}}>
        <img className="w-full h-full object-cover" src={images[selected >= 2? 2: selected]} alt="Изображение не загружено"></img>
        <button className="absolute top-0 bg-transparent right-0 p-3 size-auto text-white text-4xl " onClick={() => { navigator("/main")}}>⮾</button>
        <div className="absolute flex flex-col bg-[#302B2BCF] text-white bottom-0 h-1/3 w-full rounded-lg pt-16 gap-[60px] justify-center content-center">
            <div className="w-4/5 text-center self-center text-xl flex flex-col">
            <div>{textes[selected]}</div> 
            {selected < 2? "" : <Button className="mt-3 px-7 w-fit bg-green-500 self-center" onClick={() => {navigator("/main")}}>Начать</Button>}
            </div>
            <RadioGroup ref={radioGroupRef} className="flex flex-row gap-[44px] self-center" value={selected.toString()}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem className="h-4 w-4 border-white after:bg-white after:block" value="0" id="page-one"/>
                </div>
                <div className="flex items-center space-x-2 ">
                    <RadioGroupItem className="h-4 w-4 border-white after:bg-white" value="1" id="page-two" />
                </div>
                <div className="flex items-center space-x-2 ">
                    <RadioGroupItem className="h-4 w-4 border-white after:bg-white" value="2" id="page-three" />
                </div>
            </RadioGroup>
        </div>
    </div>
}