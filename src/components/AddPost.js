import { Add } from '@mui/icons-material'
import { Box,Fab } from '@mui/material'
import React from 'react'

const AddPost = () => {
    return (
        <Box>
            <Fab color="primary" aria-label="add">
                <Add />
            </Fab>
        </Box>
    )
}

export default AddPost