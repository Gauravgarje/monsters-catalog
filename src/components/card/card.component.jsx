import { Component } from "react";
import './card.styles.css';

class Card extends Component {
    render() {
        const {id, name, description} = this.props.monster;
        return (
            <div className='card-container' key={id}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${name}?set=set1&size=170x185`} />
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        )
    }
}

export default Card;