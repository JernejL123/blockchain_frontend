import React, { useState } from 'react';
import axios from 'axios';

const Peers = () => {
    const [peer, setPeer] = useState('');

    const addPeer = () => {
        axios.post('http://localhost:3000/addPeer', { peer })
            .then(() => alert('Peer added successfully!'))
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1>Add Peer</h1>
            <input
                type="text"
                placeholder="Enter peer WebSocket URL"
                value={peer}
                onChange={(e) => setPeer(e.target.value)}
            />
            <button onClick={addPeer}>Add Peer</button>
        </div>
    );
};

export default Peers;
