import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonatedItems } from "../utility/localStorage";

const Donation = () => {
    const donationItems = useLoaderData();
    const [itemsDonated, setItemsDonated] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const donatedIds = getStoredDonatedItems();

            if (Array.isArray(donationItems) && donationItems.length > 0) {
                const donatedItems = donationItems.filter(donatedItem => donatedIds.includes(donatedItem.id));
                setItemsDonated(donatedItems);
            } else {

                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        };

        loadData();
    }, [donationItems]);

    return (
        <div className="max-w-screen-xl mx-auto">
            <h2>Number of items donated: {itemsDonated.length}</h2>
            <ul>
                {itemsDonated.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Donation;