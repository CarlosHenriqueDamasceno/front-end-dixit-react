import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/usersSlice";
import './PlayerMenu.css';

function PlayerMenu(){

    const currentPlayer = useSelector(selectCurrentUser)


    return (
        <div className="dropdown">
            <button className="btn btn-light rounded-pill dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                {currentPlayer.initials}
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Sair</a></li>
            </ul>
        </div>
    );
}

export default PlayerMenu;