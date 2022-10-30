import Players from './Players';
import PlayerMenu from './PlayerMenu';

function Room()
{
    return(
        <div className="position-relative container p-3">
            <div className='d-flex justify-content-between'>
                <Players/>
                <PlayerMenu/>
            </div>
        </div>
    );
}

export default Room;