import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

const SpriteSheetModalFormControl = () => {
  return (
    <Grid container spacing={2} sx={{ paddingTop: '10px' }}>
        <Grid item xs={6}>
            <TextField
            id="outlined-number1"
            label="Number of Frames"
            type="number"
            size="small"
            InputLabelProps={{
                shrink: true,
            }}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
            id="outlined-number"
            size="small"
            label="Frames per Row"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            />
        </Grid>
    </Grid>
  )
}

export default SpriteSheetModalFormControl