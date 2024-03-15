import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

import { styled } from '@mui/system'

const CustomeInput = styled(TextField)({

})

const InputForm = ({id, label, register}) => {
  return (
    <CustomeInput
      fullWidth
      id={id}
      label={label}
      {...register(id)}
    />
  )
}

export default InputForm