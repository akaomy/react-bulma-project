import React from 'react'

export default function AddPlayerForm () {
    return (
        <form>
        <input
            type="text"
            placeholder="Enter a player's name"
        />
        <input 
            type="submit"
            value="Add Player"
        />
        </form>
    );
}