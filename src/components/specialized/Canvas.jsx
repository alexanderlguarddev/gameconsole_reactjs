import { styled } from '@mui/system'
import { useRef } from 'react'
import { useResizeDetector } from 'react-resize-detector';

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const CanvaContainer = styled(Container)({
    background: 'rgba(255, 255, 255, .05)',
    width: '80%',
    height: '80%',
    maxWidth: '1200px !important',
    maxHeight: '800px  !important',
})

const Canvas = () => {
    const canvasRef = useRef(null)
    const { width, height, ref: CanvasContainerRef } = useResizeDetector();

  return (
    <CanvaContainer ref={CanvasContainerRef} sx={{ border: 1, borderColor: 'secondary.main', borderRadius: 1 }}>
      <canvas ref={canvasRef} />
      <p>width: {width}</p>
      <p>height: {height}</p>
    </CanvaContainer>
  )
}

export default Canvas
