import { useEffect, useState } from "react";
import SingCard from "./SingCard";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])

    // console.log(cards)
    

    return (
        <div className="mt-28">
            <h1 className="text-center text-3xl font-bold">Books</h1>
            <div className="grid lg:grid-cols-3 gap-10 mt-8">
                {
                    cards?.map(card=><SingCard key={card.id} card={card}></SingCard>)
                }
            </div>
        </div>
    );
};

export default Cards;