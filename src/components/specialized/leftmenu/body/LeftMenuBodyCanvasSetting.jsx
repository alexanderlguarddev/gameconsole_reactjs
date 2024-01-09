import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import useCanvasSetting from '../../../../hooks/useCanvasSetting'

import { addZerosValues } from '../../../../tools'

const LeftMenuBodyCanvasSetting = () => {

  const { canvas } = useCanvasSetting()

  return (
    <Grid container spacing={2} >
      <Grid item xs={6}>
        <Typography variant='body1' component='p'>Width: {addZerosValues(canvas.width)} PX</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant='body1' component='p'>Height: {addZerosValues(canvas.height)} PX</Typography>
      </Grid>
    </Grid>
  )
}

export default LeftMenuBodyCanvasSetting