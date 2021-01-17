import React from 'react';
import {Button, TextInput, Text} from 'grommet'
import DesignPartyForm from '../views/DesignPartyForm'

const Welcome = (props) => {
  const [showCodeInput, setShowCodeInput] = React.useState(false);
  const [value, setValue] = React.useState('');
  return(
    <>
      <Button label='Make a Party' onClick={() => props.navigation(<DesignPartyForm/>)}/>
      <Button label='Join a Party' onClick={() => setShowCodeInput(true)}/>
      {showCodeInput &&
      <>
        <TextInput 
          placeholder='enter room code'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button label='Go to Party' onClick={() => console.log(`entering room ${value}...`)}/>
      </>
      }
    </>
  )
}

export default Welcome