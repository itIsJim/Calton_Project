import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {makeStyles} from "@mui/styles";
import {Avatar} from "@mui/material";

const drawerWidth = 90;


const useStyle = makeStyles({
    icon: {
        color:"white"
    },
    settingIcon: {
        margin:"7rem 0 0 0",
        color:"white"
    },
    listItemButton: {
        alignItems:"center"
    },
    drawerDiv: {
        alignItems:"center"
    }

})

 export default function NavDrawer(props) {
    const classes = useStyle()

     const NAVBAR_ICON = [<HomeOutlinedIcon/>, <EqualizerOutlinedIcon/>, <AccountBalanceOutlinedIcon/>, <MailOutlineRoundedIcon/>, <SubscriptionsOutlinedIcon/>, <GroupsOutlinedIcon/>, <DescriptionOutlinedIcon/>, <PaidOutlinedIcon/>]

    const drawer = (
        <div className={classes.drawerDiv}>
            <List>
                <ListItem>
                    <ListItemIcon>
                       <Avatar sx={{margin:'20px 0 0 10px'}} alt='dappr-logo' src={process.env.PUBLIC_URL + '/dappr_logo.png'}/>
                    </ListItemIcon>
                </ListItem>
                {NAVBAR_ICON.map((icon, index) => (
                    <ListItem key={index} sx={{
                        '&:hover': {
                            borderLeft: '5px solid #ffffff',
                        }
                    }}>
                        <ListItemButton className={classes.listItemButton} sx={{width:'100%'}}>
                            <ListItemIcon sx={{color:"white"}}>
                                {icon}
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem>
                    <ListItemButton className={classes.listItemButton} >
                        <ListItemIcon>
                            <SettingsOutlinedIcon
                                sx={{
                                    '&:hover': {
                                        fontSize: '1.7rem'
                                    }
                                }} className={classes.settingIcon}/>
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );


    return (
        <Box sx={{ display: 'flex'}}>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { margin: "0 0 0 1.5rem", boxSizing: 'border-box', width: drawerWidth, height: 'calc(100% - 40px)', top:20, bottom :20, borderRadius:5, backgroundColor: "black" },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

