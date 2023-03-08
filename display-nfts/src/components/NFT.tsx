import "./NFT.css";

interface NFTProps {
    imageSrc: string;
    title: string;
    description: string;
    owner: string;
}

function NFT({ imageSrc, title, description, owner }: NFTProps) {
    return (
        <div className="nft">
            <div className="nft-image">
                <img src={imageSrc} alt="NFT" />
            </div>
            <div className="nft-details">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>Owner: {owner}</p>
            </div>
        </div>
    );
}

export default NFT;