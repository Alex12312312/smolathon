import Letter from '../../assets/letter.svg'
export const Poster = () => {
    return <div className="w-full h-full flex flex-col">
        <div className="w-full flex flex-row justify-between">
            <div className="text-xl p-4"></div>
            <img src={Letter}></img>
            <div className='text'> Pick a date </div>
        </div>
    </div>
}