import React from 'react';

const card = ({name,email,id}) =>
{
    return(
        <div  className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>

            <img alt='robots' src={`https://robohash.org/${id}?size=190x190`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default card;