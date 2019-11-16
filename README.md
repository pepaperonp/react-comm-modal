## React & Material-UI CommonDialog

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `<CommonDialog ... />`
```typescript jsx
import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const CommonDialog: React.FunctionComponent<
    { msg: any, isOpen: any, doYes: any, doNo: any }
    > = ({msg, isOpen, doYes, doNo}) => {

  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
      <div>
        <Dialog
            open={open}
            keepMounted
            onClose={() => doNo()}
            aria-labelledby="common-dialog-title"
            aria-describedby="common-dialog-description"
        >
          <DialogContent>
            {msg}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => doNo()} color="primary">
              No
            </Button>
            <Button onClick={() => doYes()} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  )
}
export default CommonDialog
```
### How To Use.
```typescript jsx
        <CommonDialog
            msg={"Message"}
            isOpen={commDlg}
            doYes={execute}
            doNo={() => {setCommDlg(false)}}
        />
```

```typescript jsx
  const [commDlg, setCommDlg] = React.useState(false)

  const execute = () => {
    // ...
  }
```

###License
This project is 
<a href="https://github.com/facebook/react/blob/master/LICENSE">MIT licensed.</a>