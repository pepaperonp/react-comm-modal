import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CommonDialog from "./CommonDialog";
import Slide from '@material-ui/core/Slide';

const FormDialog:React.FunctionComponent<
    { isOpen: any, doClose: any }> = ({ isOpen, doClose }) => {

  const [open, setOpen] = React.useState(false)
  const [commDlg, setCommDlg] = React.useState(false)

  useEffect(() => {
    setOpen(isOpen)
  },[isOpen])

  const handleDo = () => {
    setCommDlg(true)
  }

  const handleCancel = () => {
    setOpen(false)
    doClose()
  }

  const execute = () => {
    setCommDlg(false)
    handleCancel()
    console.log('execute')
  }

  return (
      <div>
        <Dialog
            open={open}
            onClose={handleCancel}
            TransitionComponent={Transition}
            keepMounted
            aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            Material-UI
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel} color="primary">
              キャンセル
            </Button>
            <Button onClick={handleDo} color="primary">
              登録
            </Button>
          </DialogActions>
        </Dialog>
        <CommonDialog
            msg={"登録しますか？"}
            isOpen={commDlg}
            doYes={execute}
            doNo={() => {setCommDlg(false)}}
        />
      </div>
  )
}
export default FormDialog

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
