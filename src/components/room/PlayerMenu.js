import { useState } from "react";
import './PlayerMenu.css';

function PlayerMenu(){

    const [player, setPlayer] = useState({
        id: 1,
        initials: 'CA'
    });


    return (
        <div className="dropdown">
            <button className="btn btn-light rounded-pill dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                {player.initials}
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Sair</a></li>
            </ul>
        </div>
    );
}

export default PlayerMenu;