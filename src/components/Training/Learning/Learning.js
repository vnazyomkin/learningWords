import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box';

const learning = (props) => {

    return (
         <Box>
               <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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