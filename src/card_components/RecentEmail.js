import {Typography, Grid, Avatar} from "@mui/material";
import { createTheme, ThemeProvider} from "@mui/material/styles";


const theme = createTheme({
    typography: {
        subtitle1: {
            fontSize:14,
            fontWeight: 400,
            color:'grey'
        }
    }
})

export default function RecentEmail({icon, name, title, time}) {
    return (
        <ThemeProvider theme={theme}>
            <Grid container sx={{marginBottom:'1.2rem', alignItems:'center'}}>
                <Avatar alt="email-avatar" src={process.env.PUBLIC_URL + '/' + icon}/>
                <Grid item xs={3} sx={{marginLeft: '2.2rem'}}>
                    <Typography  variant="subtitle1">{name}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="subtitle1">{title}</Typography>
                </Grid>
                <Grid item xs={3} sx={{marginLeft: '3rem', textAlign: 'right'}}>
                    <Typography variant="subtitle1">{time}</Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}