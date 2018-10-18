import React from 'react';

const Searchbox= ({searchfield, searchChange}) => {
  return(
    <div >
      <input className=' pa3 ba b--blue bg-lightest-blue'
        type='search'
        placeholder='search planets'
        onChange={searchChange} />
    </div>
  )
}

export default Searchbox;
