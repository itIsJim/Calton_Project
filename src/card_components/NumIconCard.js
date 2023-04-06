import {Paper, Typography, Grid, IconButton} from "@mui/material";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {makeStyles} from "@mui/styles"
import {createTheme, ThemeProvider} from "@mui/material/styles";

const useStyle = makeStyles({
    numIconPaper: {
        padding:"24px",
        aspectRatio :'1/1'
    },
    icon: {
        fontSize: '50px'
    },
    moreIcon: {
        color:'black !important',
        transition: 'color 0.3s ease , background-color 0.4s ease !important',
        '&:hover': {
            color: 'white !important',
            backgroundColor:'black !important',
        },
    }
});

const theme = createTheme({
    typography: {
        h6: {
            fontSize:25,
            fontWeight: 600
        },
        caption: {
            fontSize: 15,
            fontWeight: 400,
        },
    }
})

export default function NumIconCard({num,text,icon}) {
    const classes = useStyle();

    return (
        <ThemeProvider theme={theme}>
                <Paper  xs={12} sm={4} className={classes.numIconPaper} elevation={0} square={false} sx={{ borderRadius: 8, backgroundColor: "rgb(209, 226, 232)", }}>
                    <Grid container sx={{padding: '5px' }}>
                        <Grid item xs={8}>
                            {icon}
                        </Grid>
                        <Grid item xs={4}>
                            <IconButton aria-label="more-info" className={classes.moreIcon}>
                                <MoreVertOutlinedIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} >
                        <Grid item>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop:'5px' }}>{typeof num === 'string'? '$'+num:num}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" >{text}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
        </ThemeProvider>
    )}
