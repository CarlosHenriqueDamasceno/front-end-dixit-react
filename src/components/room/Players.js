import './Players.css'
import { useState } from "react";

function Players(){

    const [players, setPlayers] = useState({
        '1': {
            id: '1',
            initials: 'CA'
        },
        '2': {
            id: '2',
            initials: 'BM'
        },
        '3': {
            id:'3',
            initials: 'GS'
        },
        '4': {
            id: '4',
            initials: 'DM'
        },
        '5': {
            id: '5',
            initials: 'MQ'
        },
        '6': {
            id: '6',
            initials: 'MS'
        }
    });

    return(
        <div className="d-flex align-items-center justify-content-center">
            {
                Object.values(players).map((player) => {
                    return (
                        <div key={player.id} className="font-monospace bg-white rounded-circle player-name-circle ms-3">
                            {player.initials}
                        </div>
                    );
                })
            }

        </div>
    );
}

export default Players;