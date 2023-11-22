
import { useLoaderData, useParams } from "react-router-dom";
import { saveDonatedItem } from "../utility/localStorage";


const DonationCardDetails = () => {

    const donationCardList = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id);

    const donationCard = donationCardList.find(donationCard => idInt === donationCard.id)

    const { title, description, text_button_bg, pictureRec, price } = donationCard;

    const priceStyle = {
        backgroundColor : text_button_bg,
    }

    const handlePriceBtn = () => {
        saveDonatedItem(idInt)
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="relative">
                <img className="w-full h-96 object-cover" src={pictureRec} alt="" />
                <button onClick={handlePriceBtn} className="absolute bottom-0 left-0 px-4 py-2 rounded-sm m-4 text-white text-xs" style={priceStyle}>Donate ${price}</button>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default DonationCardDetails;