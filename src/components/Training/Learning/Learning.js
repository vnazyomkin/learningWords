import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box';

const learning = (props) => {

    return (
         <Box>
                <p>Слово</p>
                <TextField id="outlined-basic" label="En" variant="outlined" />
             <Button 
                variant="contained" 
                color="primary">Знаю</Button>
             <Button 
                variant="contained"
                color="secondary">ХЗ</Button>
         </Box>
    );
}

export default learning;