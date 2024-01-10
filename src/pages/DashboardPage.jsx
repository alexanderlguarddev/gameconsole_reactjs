import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import Header from "../components/Header"
import LeftMenu from "../components/specialized/LeftMenu"
import Canvas from "../components/specialized/Canvas"

import { styled } from '@mui/material/styles'

import useModal from '../hooks/useModal'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const DashboardPage = () => {

  const { openModal } = useModal()

  const fileBrowseHandler = (e) => {
    let file = e.target.files[0]

    var fr = new FileReader()

    fr.onload = function () {
      localStorage.setItem("imgData", fr.result)
      openModal('Sprite_Sheet')
    }

    fr.readAsDataURL(file)
  }

  return (
    <>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item xs={9} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Stack spacing={2} direction="row" sx={{ width: '80%', maxWidth: '1200px !important', justifyContent: 'right', paddingBottom: '16px' }}>
            <Button component="label" variant="contained" size="large" startIcon={<CloudUploadIcon />}>Add Element <VisuallyHiddenInput onChange={fileBrowseHandler} required type="file" accept="image/png, image/gif, image/jpeg"  /></Button>
          </Stack>

          <Canvas />
        </Grid>

        <Grid item xs={3} className={'left-menu-grid-setting'}>
          <LeftMenu />
        </Grid>
      </Grid>
    </>
  )
}

export default DashboardPage
