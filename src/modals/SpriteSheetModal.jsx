import { useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid'

import { styled } from '@mui/material/styles'

import useModal from '../hooks/useModal'

const ModalBox = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    maxWidth: '1500px',
    maxHeight: '1200px',
    background: '#272727',
    border: '1px solid #50F287',
    boxShadow: 24,
    padding: '16px',
    borderRadius: '5px'
})

const SpriteSheetModal = ({open, handleOpen}) => {

    const { spriteSheetState, closeModal } = useModal();

    return (
        <Modal keepMounted open={spriteSheetState} onClose={() => closeModal('Sprite_Sheet')}>
            <ModalBox>
                <Grid container pacing={2}>
                    <Grid item xs={8}>
                        TEST
                    </Grid>
                    <Grid item xs={4}>
                        TEST
                    </Grid>
                </Grid>
            </ModalBox>
        </Modal>
    )
}

export default SpriteSheetModal
