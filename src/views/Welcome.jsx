import React from 'react';
import {Button} from 'grommet'
import DesignPartyForm from '../views/DesignPartyForm'

const Welcome = (props) => {
    return(
      <>
        <Button label='Make a Party' onClick={() => props.navigation(<DesignPartyForm/>)}/>
        <Button label='Join a Party' onClick={() => console.log('old')}/>
      </>
    )
}

export default Welcome