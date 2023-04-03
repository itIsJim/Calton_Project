import {Container, Grid, IconButton, Typography} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";



const theme = createTheme({
    typography: {
        subtitle1: {
            fontSize:14,
            fontWeight: 600
        },
        caption: {
            fontSize: 12,
            fontWeight: 100
        },
    }
})

export default function ToDoList({icon, title, time}) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <IconButton aria-label="to-do-list-icon-type" size="large" sx={{ borderRadius:'16px', backgroundColor:'black', color:'white',
                                '&:hover': {
                                backgroundColor:'#D1E2E8 !important',
                                    color:'black'
                            } }}>
                                {icon}
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Grid container direction='column' sx={{marginLeft: '10px'}}>
                                <Grid item>
                                    <Typography variant="subtitle1">{title}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="caption">{time}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    )
}