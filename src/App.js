import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormDialog from "./components/FormDialog";

const App = () => {
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="container">
            <Paper className="item">
                <Typography variant="h5" component="h3">
                    Reactか、それ以外か
                </Typography>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                    OPEN
                </Button>
                <FormDialog
                    isOpen={open}
                    doClose={() => handleClose()}
                />
            </Paper>
        </div>
    );
}

export default App;
