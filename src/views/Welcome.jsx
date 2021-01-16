import { render } from '@testing-library/react';
import React from 'react';
import {Button} from 'grommet'

const Welcome = () => {
  return(
      <>
        <Button label='Make a Party'/>
        <Button label='Join a Party'/>
      </>
  )
}

export default Welcome