import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './blockchain.css'

const Blockchain = () => {
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/blocks')
            .then(response => setBlocks(response.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Blockchain</h1>
            <ul>
                {blocks.map((block, index) => (
                    <li className='block' key={index}>
                        <p>Index: {block.index}</p>
                        <p>PreviousHesh: {block.previousHash}</p>
                        <p>Hash: {block.hash}</p>
                        <p>Data: {block.data}</p>
                        <p>Timestamp: {new Date(block.timestamp).toString()}</p>
                        <p>Nonce: {block.nonce}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blockchain;
