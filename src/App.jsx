import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
    const initialCardImage = "https://deckofcardsapi.com/static/img/back.png";
    const [deckId, setDeckId] = useState(); // State to store deck ID
    const [cardImage, setCardImage] = useState(initialCardImage); // State to store card image URL
    const [shuffling, setShuffling] = useState(false);

    // Asyncronous call for new deck
    useEffect(() => {
        const getDeck = async () => {
            try {
                let res = await axios.get(
                    "https://deckofcardsapi.com/api/deck/new/"
                );
                setDeckId(res.data.deck_id);
            } catch (e) {
                console.error(e);
            }
        };
        getDeck();
    }, []);

    // Function to draw a new card
    const drawCard = async () => {
        if (!deckId) return; // Ensure deck ID is available
        try {
            let res = await axios.get(
                `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
            );
            if (res.data.cards.length > 0) {
                setCardImage(res.data.cards[0].image); // Update state with the new card's image URL
                console.log(res.data);
            } else {
                alert("Error: no cards remaining!");
            }
        } catch (e) {
            console.error(e);
        }
    };

    // Function to reshuffle the cards
    const shuffleCards = async () => {
        if (!deckId) return; // Ensure deck ID is available
        setShuffling(true);
        // resets card image when shuffling begins
        setCardImage(initialCardImage);
        try {
            let res = await axios.get(
                `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`
            );
            if (res) setShuffling(false);
            console.log(res.data);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="App">
            {/* Display Cards */}
            <img src={cardImage} alt="card" />
            {/* Button to draw new card */}
            <button onClick={drawCard}>Draw</button>
            {/* 
            Button to shuffle deck
            Disabled while shuffling
             */}
            {shuffling ? (
                "Shuffling..."
            ) : (
                <button onClick={shuffleCards}>Shuffle</button>
            )}
        </div>
    );
}

export default App;
