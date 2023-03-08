import "./NFT.css";

function NFT(props: any) {
    return (
        <div className="nft">
            <img src={props.imageSrc} alt="NFT" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>Token ID: {props.tokenId}</p>
            <p>Owner: {props.owner}</p>
            <div className="nft-overlay">
                <p>Show details</p>
            </div>
        </div>
    );
}

export default NFT;