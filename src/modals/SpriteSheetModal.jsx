import { useRef, useEffect } from 'react'
import { useResizeDetector } from 'react-resize-detector'

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Grid from '@mui/material/Grid'
import SpriteSheetModalFormControl from './forms/SpriteSheetModalFormControl'

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
    paddingBottom: '0px',
    borderRadius: '5px'
})

const SpriteSheetModal = () => {

    const { spriteSheetState, closeModal } = useModal();

    const canvasRef = useRef(null)
    const { width: gridItemWidth, height: gridItemHeight, ref: gridItemContainerRef } = useResizeDetector()

    const draw = ctx => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#C7C6C4'
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        let image = new Image();
        var dataImage = localStorage.getItem('imgData');
        image.src = dataImage;

        let img_width = image.width
        let img_height = image.height

        var hRatio = ctx.canvas.width / img_width
        var vRatio = ctx.canvas.height / img_height
        var ratio  = Math.min(hRatio, vRatio);
    
        var centerShift_x = ( ctx.canvas.width - img_width*ratio ) / 2;
        var centerShift_y = ( ctx.canvas.height - img_height*ratio ) / 2;  

        ctx.drawImage(image, 0,0, img_width, img_height, centerShift_x,centerShift_y,img_width*ratio, img_height*ratio)

        ctx.strokeRect(centerShift_x,centerShift_y,img_width*ratio, img_height*ratio)
    }

    useEffect(() => {
        if (canvasRef.current == null || canvasRef.current == undefined || !spriteSheetState) return;

        canvasRef.current.width = Math.floor(gridItemWidth)
        canvasRef.current.height = Math.floor(gridItemHeight)

    }, [spriteSheetState, gridItemWidth])

    useEffect(() => {
        if (canvasRef.current == null || canvasRef.current == undefined || !spriteSheetState) return

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        let animationFrameId;

        const render = () => {
            draw(context)
            animationFrameId = window.requestAnimationFrame(render)
        }

        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw, canvasRef, spriteSheetState])

    return (
        <Modal keepMounted open={spriteSheetState} onClose={() => closeModal('Sprite_Sheet')}>
            <ModalBox>
                <Grid container spacing={2} sx={{ height: '100%' }}>
                    <Grid item xs={8} ref={gridItemContainerRef} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                        <canvas ref={canvasRef} />
                    </Grid>
                    <Grid item xs={4}>
                        <SpriteSheetModalFormControl />
                    </Grid>
                </Grid>
            </ModalBox>
        </Modal>
    )
}

export default SpriteSheetModal
