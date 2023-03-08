import React, { useEffect, useState } from 'react';
import {apes} from './data/data';
import NFT from "./components/NFT";
import "./App.css";

interface NFTData {
    id: number;
    img: string;
}

function App() {
    const [nftData, setNFTData] = useState<NFTData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const apesData = await new Promise<NFTData[]>(resolve => {
                setTimeout(() => {
                    resolve(apes);
                }, 1000); // Simulate a delay of 1 second to simulate an async call
            });
            setNFTData(apesData);
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            {nftData.map(item => (
                <NFT
                    key={item.id}
                    imageSrc={item.img}
                    title={`NFT #${item.id}`}
                    description="An NFT featuring a digital ape."
                    tokenId={item.id}
                    owner="John Doe"
                />
            ))}
        </div>
    );
}

export default App;
