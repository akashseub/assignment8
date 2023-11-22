import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonatedItems } from "../utility/localStorage";


const Donation = () => {

    const donationItems = useLoaderData();

    const [itemsDonated, setItemsDonated] = useState([])

    useEffect(() => {
        const donatedIds = getStoredDonatedItems();
        // console.log(donatedIds)
        if (donationItems.length > 0) {
            const donatedItems = donationItems.filter(donatedItem => donatedIds.includes(donatedItem.id))
            console.log(donatedItems);
            setItemsDonated(donatedItems)
        }
    }, [])

    return (
        <div className="max-w-screen-xl mx-auto">
            <h2>Number of items donated: {itemsDonated.length}</h2>
            <ul>
                {
                    itemsDonated.map(item => <li key={item.id}>{item.title}</li>)
                }
            </ul>
        </div>
    );
};

export default Donation;