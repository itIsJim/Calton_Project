import {Grid, IconButton, Typography, Avatar} from "@mui/material";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import * as React from "react";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from "react";

export default function UserInfo({userName}) {

    const [isCollapse, setIsCollapse] = useState(false);

    const handleExpand = () => {
        setIsCollapse(!isCollapse);
    }

    return (

            <Grid container sx={{marginBottom: '.5rem'}}>
                <Grid item>
                    <Typography  sx={{ fontWeight: 'bold' }} variant="h4">{'Good Morning, ' + userName + '!'}</Typography>
                </Grid>
                <Grid item sx={{marginLeft:'40vmax'}}>
                    <Grid container direction="row">
                        <Grid item>
                            <IconButton>
                                <CalendarMonthOutlinedIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <ChatOutlinedIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <NotificationsNoneOutlinedIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item sx={{marginLeft: '.5rem'}}>
                            <Avatar alt="user-profile" src={process.env.PUBLIC_URL + '/calton_logo.jpg'} />
                        </Grid>
                        <Grid item>
                            <IconButton onClick={handleExpand}>
                                {isCollapse?<ExpandLessIcon/>:<ExpandMoreIcon/>}
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    )
}