import card from '../../imgs/card.svg';
export default function Card(props)
{
    return(
        <div className='col-md-4 text-center mt-3'>
            <div className='row'>
                <spam className="text-white">{props.player}</spam>
            </div>
            <div className='row d-flex justify-content-center'>
                <img src={card} style={{maxWidth:'200px'}}/>
            </div>
        </div>
    );
}