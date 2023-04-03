import {Typography, Grid, Avatar} from "@mui/material";
import { createTheme, ThemeProvider} from "@mui/material/styles";
import {makeStyles} from "@mui/styles";



const theme = createTheme({
    typography: {
        subtitle1: {
            fontSize:12,
            fontWeight: 120
        }
    }
})

export default function RecentEmail({icon, name, title, time}) {
    return (
        <ThemeProvider theme={theme}>
            <Grid container sx={{marginBottom:'25px'}}>
                <Avatar alt="email-avatar" src={process.env.PUBLIC_URL + '/' + icon}/>
                <Grid item xs={3} sx={{marginLeft: '50px'}}>
                    <Typography  variant="subtitle1">{name}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="subtitle1">{title}</Typography>
                </Grid>
                <Grid item xs={3} sx={{marginLeft: '50px'}}>
                    <Typography variant="subtitle1">{time}</Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}