import { Link } from "react-router-dom";


const DonationCard = ({ card }) => {

    const { id, pictureRec, category, title, category_bg, card_bg, text_button_bg } = card;

    const cardStyle = {
        backgroundColor: card_bg,
        color: text_button_bg,
    }

    const categoryStyle = {
        backgroundColor: category_bg,
    }

    return (
        <div className="rounded-lg" style={cardStyle}>
            <Link to={`/cardDetails/${id}`}>
                <img className="w-full" src={pictureRec} alt="" />
                <div className="p-4">
                    <h2 className="inline px-2 rounded-md font-semibold" style={categoryStyle}>{category}</h2>
                    <p className="font-bold text-lg">{title}</p>
                </div>
            </Link>
        </div>
    );
};

export default DonationCard;