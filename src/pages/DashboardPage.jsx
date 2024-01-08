import Header from "../components/Header"

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';

import LeftMenu from "../components/specialized/LeftMenu";
import Canvas from "../components/specialized/Canvas";

const DashboardPage = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ height: '100%' }}>
        <Grid item xs={9} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
