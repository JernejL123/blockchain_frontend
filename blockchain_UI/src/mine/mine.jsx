import React, { useState } from 'react';
import axios from 'axios';

const MineBlock = () => {
    let isMining = false; // Manual flag outside of state

    const startMining = async () => {
        isMining = true; // Set the flag to true
        console.log("STARTED MINING");

        while (isMining) {
            try {
                const data = `Auto-mined block PORT4000`;
                const response = await axios.post("http://localhost:4000/mine", { data });
                console.log("Mining request sent to backend...");
                console.log("Mined a new block:", response.data);
            } catch (error) {
                console.error("Error while mining block:", error);
            }
        }
    };

    const stopMining = () => {
        isMining = false; // Set the flag to false
        console.log("MINING STOPPED");
    };

    return (
        <div>
            <h1>Mine Blocks</h1>
            <button onClick={startMining}>
                Start Mining
            </button>
            <button onClick={stopMining}>
                Stop Mining
            </button>
        </div>
    );
};

export default MineBlock;
