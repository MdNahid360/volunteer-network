import React from 'react';

const Event = ({event}) => {
    return (
        // <div className="col-md-3">
        //     <img src={require(`../../images/${event.pic}`)} alt="poster"/>
        //     <h1>{event.name}</h1>

        // </div>
        <div className="col-md-3">
        <img style={{height: '300px'}} src={event.img} alt=""/>
        <h3>{event.name}</h3>
        
    </div>
    );
};

export default Event;