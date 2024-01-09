import { styled } from '@mui/system'
import { useRef, useEffect } from 'react'
import { useResizeDetector } from 'react-resize-detector';

import Container from '@mui/material/Container'

import useCanvasSetting from '../../hooks/useCanvasSetting';

import { roundValue } from '../../tools';

const CanvaContainer = styled(Container)({
    background: 'rgba(255, 255, 255, .05)',
    width: '80%',
    height: '80%',
    maxWidth: '1200px !important',
    maxHeight: '800px  !important',
})

const Canvas = () => {
  const canvasRef = useRef(null)
  const { width: canvasWidth, height: canvasHeight, ref: CanvasContainerRef } = useResizeDetector()

  const { updateCanvasSize } = useCanvasSetting()

  useEffect(() => {
    updateCanvasSize(roundValue(canvasWidth, 2), roundValue(canvasHeight, 2))
  }, [canvasWidth, canvasHeight])

  return (
    <CanvaContainer ref={CanvasContainerRef} sx={{ border: 1, borderColor: 'secondary.main', borderRadius: 1 }}>
      <canvas ref={canvasRef} />
    </CanvaContainer>
  )
}

export default Canvas
