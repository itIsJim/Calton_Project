import { Paper, Typography, Grid, Box} from "@mui/material";
import {makeStyles,} from "@mui/styles"

const useStyle = makeStyles({
    numIconPaper: {
        padding:"1.3rem 1.5rem 2rem 2.5rem",
    }
})

export default function NumDifferenceCard({title, num, difference}) {

    const classes = useStyle();

    return (
        <Grid item xs={1}>
            <Paper className={classes.numIconPaper} elevation={0} sx={{ borderRadius: 8, backgroundColor: "rgb(209, 226, 232)", }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{title}</Typography>
                <Grid container flexDirection="row">
                    <Typography variant="h4" sx={{width:'3rem', fontWeight: 'bold', fontSize:'40px' }}>{num}</Typography>
                    <Box
                        sx={{
                            height:'2rem',
                            width:'5rem',
                            margin: '10px 0 0 2rem',
                            color:`${title === 'New clients'?'#00ad14 !important':'#b80f00 !important'}`,
                            backgroundColor: `${title === 'New clients'?'#bad7cb !important':'#d8bfcc !important'}`,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius:2
                        }}
                    >{'+'+difference+'%'}</Box>
                </Grid>
            </Paper>
        </Grid>
    )
}


