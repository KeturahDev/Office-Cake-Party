import React from 'react';
import {Form, FormField, Button, Box, TextInput} from 'grommet'

const DesignPartyForm = () => {
  const [value, setValue] = React.useState({});

  return(
    <Form
      value={value}
      onChange={nextValue => setValue(nextValue)}
      onReset={() => setValue({})}
      onSubmit={({ value }) => {console.log('value is...', value)}}
    >
      <FormField name="message" htmlFor="text-input-id" label="Message">
        <TextInput id="text-input-id" name="message" />
      </FormField>
      <FormField name="theme" htmlFor="text-input-id" label="Theme">
        <TextInput id="text-input-id" name="theme" />
      </FormField>
      <FormField name="cake" htmlFor="text-input-id" label="Cake">
        <TextInput id="text-input-id" name="cake" />
      </FormField>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
      </Box>
    </Form>
  )
}

export default DesignPartyForm