import { render } from '@testing-library/react';
import React from 'react';
import Header from './../components/Header'

const Welcome = () => {
  return(
      <>
        <button>Make a Party</button>
        <button>Join a Party</button>
      </>
  )
}

export default Welcome