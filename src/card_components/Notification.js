import {Grid, Paper, Typography} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';

const theme = createTheme({
    typography: {
        h6: {
            fontSize:16,
            fontWeight: 600,
            color:'white',
        },
        subtitle1: {
            fontSize: 14,
            fontWeight: 400,
            color:'grey',
        },
        caption: {
            fontSize: 12,
            fontWeight: 200,
            color:'grey',
        },
    }
})

export default function Notification({title, time, details}) {
    return (
        <ThemeProvider theme={theme}>
            <Paper elevation={0} sx={{ borderRadius: 8, backgroundColor: 'black', padding:'20px', width:"100%"}}>
                <Grid container flexDirection='row'>
                    <Grid item>
                        <Grid container flexDirection="column">
                            <Grid item sx={{marginLeft:'2rem'}}>
                                <Typography variant="h6">{title}</Typography>
                            </Grid>
                            <Grid item>
                                <Grid container flexDirection="row" spacing={1}>
                                    <Grid item>
                                        <FiberManualRecordRoundedIcon sx={{color:'#48FF39'}}/>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">{time}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{marginLeft:'2rem'}}>
                                <Typography variant="caption">{details}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </ThemeProvider>
    )
}