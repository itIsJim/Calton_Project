import { Paper, Typography, Grid, Chip} from "@mui/material";
import {makeStyles,} from "@mui/styles"

const useStyle = makeStyles({
    numIconPaper: {
        padding:"20px 15px 20px 30px",
        width: "12rem",
        height:"6rem"
    }
})

export default function NumDifferenceCard({title, num, difference}) {

    const classes = useStyle();

    return (
        <Grid item xs={1}>
            <Paper className={classes.numIconPaper} elevation={0} sx={{ borderRadius: 8, backgroundColor: "rgb(209, 226, 232)", }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{title}</Typography>
                <Grid container flexDirection="row">
                    <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize:'40px' }}>{num}</Typography>
                    {/*<Chip sx={{ left:'20px' }} color={difference>0? 'success':'error'} label={difference>0?'+' + difference+'%':difference+'%'}/>*/}
                </Grid>
            </Paper>
        </Grid>
    )
}


