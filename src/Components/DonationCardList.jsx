import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const DonationCardList = () => {

    const [cardList, setCardList] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCardList(data))
    }, [])

    return (
        <div className="grid grid-cols-4 gap-12">
            {
                cardList.map(card => <DonationCard
                    key={card.id}
                    card={card}
                ></DonationCard>)
            }
        </div>
    );
};

export default DonationCardList;