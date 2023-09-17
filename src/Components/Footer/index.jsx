import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function CustomCopyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            <Link color="inherit" href="https://example.com/">
                Example Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function CustomFooter() {
    return (
        <div>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Our Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    We've got something special in store for you down here!
                </Typography>
                <CustomCopyright />
            </Box>
        </div>
    );
}

export default CustomFooter;
