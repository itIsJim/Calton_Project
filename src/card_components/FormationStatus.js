import {Paper, Typography, Grid, Button, LinearProgress} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
    typography: {
        h6: {
            fontSize:25,
            fontWeight: 600
        },
        caption: {
            fontSize: 14,
            fontWeight: 100
        },
        subtitle1: {
            fontSize:14,
            fontWeight: 600
        }
    }
})

const usesStyle= makeStyles({
    lineProgress: {
        margin:'10px',
        padding:'5px',
        width: '90%',
        backgroundColor: '#404040 !important',
        borderRadius: theme.spacing(1),
        '& .MuiLinearProgress-bar': {
            backgroundColor: '#E0EDF1',
            borderRadius: theme.spacing(1),
        }
    },
    button: {
        backgroundColor: '#E0EDF1 !important',
        color: "black !important",
        '&:hover': {
           backgroundColor:'#D1E2E8 !important'
        },
    },
})


export default function FormationStatus ({progress}) {

    const classes = usesStyle();

    return (
        <ThemeProvider theme={theme}>
            <Paper elevation={0} sx={{height:'14rem', width:'100%', borderRadius: 8, backgroundColor: 'black', padding:'1.5rem', color:'white'}}>
                <Grid container flexDirection="column" >
                    <Grid item>
                        <Typography variant="h6">Formation Status</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">In progress</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container flexDirection="column" alignItems="center">
                            <LinearProgress className={classes.lineProgress} variant='determinate' value={progress}/>
                            <Grid item sx={{textAlign:'center', margin: '1.2rem 0'}}>
                                <Typography variant="subtitle1">Estimated processing</Typography>
                                <Typography variant="caption">{progress >= 70 ? "4-5 business days": ">7 business days"}</Typography>
                            </Grid>
                            <Grid item sx={{width:'100%'}}>
                                <Button className={classes.button} variant="contained" sx={{ borderRadius:2, width:'100%'}}><Typography variant="subtitle1">View Status</Typography></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </ThemeProvider>
    )
}