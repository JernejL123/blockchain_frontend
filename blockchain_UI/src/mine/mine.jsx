import React, { useState } from 'react';
import axios from 'axios';

const MineBlock = () => {
    const [data, setData] = useState('');
    const [newBlock, setNewBlock] = useState(null);

    const mineBlock = () => {
        axios.post('http://localhost:3000/mine', { data })
            .then(response => setNewBlock(response.data))
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1>Mine a Block</h1>
            <input
                type="text"
                placeholder="Enter data for the block"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
            <button onClick={mineBlock}>Mine Block</button>
            {newBlock && (
                <div>
                    <h3>New Block Created:</h3>
                    <p>Index: {newBlock.index}</p>
                    <p>Hash: {newBlock.hash}</p>
                    <p>Data: {newBlock.data}</p>
                </div>
            )}
        </div>
    );
};

export default MineBlock;
