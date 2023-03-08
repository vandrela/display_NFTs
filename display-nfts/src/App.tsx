import React, { useEffect, useState } from 'react';
import { apes } from './data/data';
import NFT from './components/NFT';
import './App.css';

interface NFTData {
    id: number;
    img: string;
    description: string;
    owner: string;
}

function App() {
    const [nftData, setNFTData] = useState<NFTData[]>([]);
    const [selectedNFT, setSelectedNFT] = useState<NFTData | null>(null); // new state for selected NFT

    useEffect(() => {
        const fetchData = async () => {
            const apesData = await new Promise<NFTData[]>(resolve => {
                setTimeout(() => {
                    // @ts-ignore
                    return resolve(apes);
                }, 1000); // Simulate a delay of 1 second to simulate an async call
            });
            setNFTData(apesData);
        };
        fetchData();
    }, []);

    const handleNFTClick = (nft: NFTData) => {
        setSelectedNFT(nft); // set selected NFT to display modal
        console.log(nft, 'hey')
    };

    const closeModal = () => {
        setSelectedNFT(null); // close modal by resetting selected NFT to null
    };

    const purchaseNFT = () => {
        window.location.href = 'https://opensea.io'; // navigate to OpenSea
    };

    return (
        <div className="App">
            <div className="grid">
                {nftData.map(item => (
                    <div className="card" key={item.id} onClick={() => handleNFTClick(item)}>
                        <NFT
                            imageSrc={item.img}
                            title={`NFT #${item.id}`}
                            description={item.description}
                            owner={item.owner}
                        />
                    </div>
                ))}
            </div>
            {selectedNFT && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                          &times;
                        </span>
                        <img src={selectedNFT.img} alt={`NFT #${selectedNFT.id}`} style={{width: 'inherit'}}/>
                        <h2>{`NFT #${selectedNFT.id}`}</h2>
                        <p>{selectedNFT.description}</p>
                        <p>{`Owner's address: ${selectedNFT.owner}`}</p>
                        <button className="purchase-btn" onClick={purchaseNFT}>
                            Purchase on OpenSea
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;