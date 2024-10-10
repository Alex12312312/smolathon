import { useState } from "react"

const GreetingsTexts = {
    'first': 'Собирай и коллекционируй',
    'second': 'Покупай и продавай',
    'third': 'У меня украли дизайнера',
}

const GreetingsImage = {
    'first': 'https://extraguide.ru/images/t/ad245ef0739dde025f3df44ab4f098218ddcdbb9.jpg',
    'second': 'https://media.kupo.la/thumbor/unsafe/preset/orig/images/2020/9/28/1601286526-6025672.jpg',
    'third': 'https://i.pinimg.com/736x/1f/84/15/1f84150a1bc0057df83347cfc05c272f.jpg',
}
export const Greetings = () => {
    const [selected, selectPage] = useState('first');
    return <div className="w-lvw h-lvh bg-gradient-to-br from-green-600 to-green-950">

    </div>
}