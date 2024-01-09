import { Outlet } from 'react-router-dom'
import { styled } from '@mui/system';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from '../components/Header';
import SpriteSheetModal from '../modals/SpriteSheetModal';

const CustomBox = styled(Box)({
  width: '100vw',
  height: '100vh',
  margin: '0px !important',
  padding: '0px !important',
  display: 'flex',
  flexDirection: 'column'
});

const DashboardLayout = () => {
  return (
    <>
      <Container maxWidth="sm" variant="no-space">
        <CustomBox>
          <Header />
          <Outlet />
        </CustomBox>
      </Container>

      <SpriteSheetModal />
    </>
  )
}

export default DashboardLayout
