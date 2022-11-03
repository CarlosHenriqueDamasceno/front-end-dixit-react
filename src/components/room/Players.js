import './Players.css'
import { useSelector } from 'react-redux';
import { selectUsers } from '../../store/usersSlice';

function Players(){

    const players = useSelector(selectUsers);

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