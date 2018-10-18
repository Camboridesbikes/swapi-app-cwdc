import React from 'react';

const Card = ({name, climate, diameter, population}) => {

  return(
    <article className='dib mw5 ma2 bg-white br3 pa3 pa4-ns mv3 ba grow b--black-10'>
      <div>
        <h1 className='tc f4'>{name}</h1>
        <hr className='mw3 bb bw1 b--black-10'/>
      </div>
      <dl className='lh-title pa4 mt0'>
        <dt className='f6 b'>Diameter</dt>
        <dd className='ml0'>{diameter}</dd>
        <dt className='f6 b'>Climate</dt>
        <dd className='ml0'>{climate}</dd>
        <dt className='f6 b'>Population</dt>
        <dd className='ml0'>{population}</dd>
      </dl>
    </article>
  );
}

export default Card
