import { useState } from "react";

function Players(){

    const [players, setPlayers] = useState({
        '1': {
            initials: 'CA'
        },
        '2': {
            initials: 'BM'
        },
        '3': {
            initials: 'GS'
        },
        '4': {
            initials: 'DM'
        }
    });

    return(
        <div className="position-relative d-flex align-items-center justify-content-center">

            {
                Object.values(players).map((player) => {
                    return (
                        <div className="font-monospace bg-white rounded-circle player-name-circle ms-3">
                            {player.initials}
                        </div>
                    );
                })
            }

        </div>
    );
}

export default Players;