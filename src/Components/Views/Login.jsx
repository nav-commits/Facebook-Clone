import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Login() {
    return (
        <Grid container spacing={1} columns={16} style={{ marginTop: 360 }} direction={'row'} justifyContent={'center'}>
            <Grid item xs={5} >
                <Grid item>
                    <Typography variant='h4' align='left' color={'#1877F2'} fontWeight={'bold'}>
                        facebook
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6' align='left'>
                        Connect with friends and the world around you on Facebook
                    </Typography>
                </Grid>
            </Grid>
            {/* login form will go here */}
            <Grid item xs={5} >
                <Grid item>
                    <Typography variant='h4' align='left' color={'#1877F2'} fontWeight={'bold'}>
                        facebook
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6' align='left'>
                        Connect with friends and the world around you on Facebook
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Login;
