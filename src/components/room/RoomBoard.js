import { useSelector } from "react-redux";
import { selectUsers } from "../../store/usersSlice";
import Card from "./Card";

export default function RoomBoard()
{

    const players = useSelector(selectUsers);

    return(
        <div className="row mt-5">

            {
                Object.values(players).map(player => <Card player={player.name}/>)
            }
        </div>
    );
}