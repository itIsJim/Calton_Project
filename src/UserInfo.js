import {Grid, IconButton, Typography, Avatar} from "@mui/material";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import * as React from "react";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

export default function UserInfo({userName}) {
    return (

            <Grid container sx={{marginBottom: '2rem'}}>
                <Grid item>
                    <Typography  sx={{ fontWeight: 'bold' }} variant="h4">{'Good Morning, ' + userName + '!'}</Typography>
                </Grid>
                <Grid item sx={{marginLeft:'34rem'}}>
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
                    </Grid>
                </Grid>
                <Grid item sx={{marginLeft: '10px'}}>
                    <Avatar alt="user-profile" src={process.env.PUBLIC_URL + '/calton_logo.jpg'} />
                </Grid>
                <Grid item>
                    <IconButton>
                        <KeyboardArrowDownOutlinedIcon/>
                    </IconButton>
                </Grid>
            </Grid>
    )
}