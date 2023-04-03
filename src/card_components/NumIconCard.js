import { Paper, Typography, Grid} from "@mui/material";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {makeStyles,} from "@mui/styles"

const useStyle = makeStyles({
    numIconPaper: {
        padding:"20px",
        height: "9rem",
        width: "9rem"
    },

});


export default function NumIconCard({num,text,icon}) {
    const classes = useStyle();

    return (
        <Grid item xs={3} >
            <Paper className={classes.numIconPaper} elevation={0} square={false} sx={{ borderRadius: 8, backgroundColor: "rgb(209, 226, 232)", }}>
                <Grid container>
                    <Grid item xs={8}>
                        {icon}
                    </Grid>
                    <Grid item xs={4}>
                        <MoreVertOutlinedIcon/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{num}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">{text}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )}
