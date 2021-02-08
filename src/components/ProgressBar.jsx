import React from 'react'
import DialogContent from '@material-ui/core/DialogContent'
import CircularProgress from '@material-ui/core/CircularProgress'
import Dialog from '@material-ui/core/Dialog'
import { useSelector } from 'react-redux'

function ProgressBar() {
  const operationInProgress = useSelector(
    ({ operationInProgress: { operationInProgress } }) => operationInProgress
  )
  return (
    <Dialog open={operationInProgress}>
      <DialogContent>
        <CircularProgress />
      </DialogContent>
    </Dialog>
  )
}

export default ProgressBar
