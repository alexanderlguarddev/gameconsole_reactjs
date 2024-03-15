import { SpriteSheetSchema } from "../../schemas"

import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';

import InputForm from "./fields/InputForm"

import useClientForm from "../../hooks/useClientForm"

import { useEffect } from "react"

const SpriteSheetForm = () => {

  const { register, onSubmit, data } = useClientForm(SpriteSheetSchema, { numberofframes: "1", framesperrow: "1" })

  useEffect(() => {
    if (data) alert(data);
  }, [data])

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2} sx={{ paddingTop: '10px' }}>
        <Grid item xs={6}>
          <InputForm id="numberofframes" label="Number of Frames" register={register} />
        </Grid>
        <Grid item xs={6}>
          <InputForm id="framesperrow" label="Frames per Row" register={register} />
        </Grid>

        <Grid item xs={6}>
          <Button type="submit" variant="outlined" size="large" sx={{ padding: "10px 40px", fontWeight: 700 }}>Login</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default SpriteSheetForm
