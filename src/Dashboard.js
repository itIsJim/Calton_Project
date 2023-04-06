import NumIconCard from "./card_components/NumIconCard";
import NumDifferenceCard from "./card_components/NumDifferenceCard";
import RecentEmail from "./card_components/RecentEmail";
import {Grid, IconButton, Paper, Typography} from "@mui/material";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import {makeStyles} from "@mui/styles";
import LineChart from "./card_components/LineChart";
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import FormationStatus from "./card_components/FormationStatus";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ToDoList from "./card_components/ToDoList";
import Notification from "./card_components/Notification";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import * as React from "react";

const NUM_ICON_VALUES = [
    {
        icon:<AccountBalanceWalletOutlinedIcon fontSize="large"/>,
        num: '143624',
        text: "Your bank balance"
    },
    {
        icon: <PieChartOutlineOutlinedIcon fontSize="large"/>,
        num:12,
        text: "Uncategorized transaction"
    },
    {
        icon: <WorkHistoryOutlinedIcon fontSize="large"/>,
        num:7,
        text: "Employees working today"
    },
    {
        icon: <PaymentOutlinedIcon fontSize="large"/>,
        num:'3287.49',
        text: "This week's card spending"
    },
]
const NUM_DIFFERENCE = [
    {
        title:"New clients",
        num: 54,
        diff: 18.7
    },
    {
        title:"Invoices overdue",
        num: 6,
        diff: 2.7
    },
]
const EMAIL_VALUES = [
    {
        icon:'profile1.png',
        name: "Hannah Morgan",
        title: "Meeting scheduled",
        time: "1:24 PM"
    },
    {
        icon: 'profile2.png',
        name: "Megan Clark",
        title: "Updating on marking campaign",
        time: "12:32 PM"
    },
    {
        icon: 'profile3.png',
        name: "Brandon Williams",
        title: "Design 2.0 is about to launch",
        time: "Yesterday at 8:57 PM"
    },
    {
        icon: 'profile4.png',
        name: "Reid Smith",
        title: "My friend Julie loves Dappr!",
        time: "Yesterday at 8:49 PM"
    },
]
const TO_DO_LIST = [
    {
        icon:<ReceiptOutlinedIcon/>,
        title: "Run Payroll",
        time: "Mar 4 at 6:00 pm"
    },
    {
        icon:<AccessTimeOutlinedIcon/>,
        title: "Review time off request",
        time: "Mar 7 at 6:00pm"
    },
    {
        icon:<AssignmentOutlinedIcon/>,
        title: "Sign board resolution",
        time: "Mar 12 at 6:00pm"
    },
    {
        icon:<AssignmentTurnedInOutlinedIcon/>,
        title: "Finish onboarding Tony",
        time: "Mar 12 at 6:00pm"
    },
]
const LATEST_NOTIFICATION_OBJ = {
    title:"Board meeting",
    time:"Feb 22 at 6:00 PM",
    details: "you have been invited to attend a meeting at the Board Directors"
}
const USER_NAME = 'Calton' // Note: original design specify James

const useStyle = makeStyles({
    dashboard: {
        padding:"3rem 0rem 3rem 4rem",
        backgroundColor: "rgb(224,237,241)",
        height: "100%",
        width:'auto 100%',
        display:"flex"
    },
    base: {
        height:"100%",
    },
    firstRow: {
        margin: "0 0 1rem 0"
    },
    secondRow: {
        margin: "0 0 1.5rem 0"
    },
})

export default function Dashboard() {

    const classes = useStyle()

    return (
    <Paper className={classes.base}>
        <div className={classes.dashboard}>
            {/*navbar*/}
            <Navbar/>
                {/*user view content*/}
                    <Grid container flexDirection="row">
                        {/*userInfo*/}
                        <Grid item>
                            <UserInfo userName={USER_NAME}/>
                        </Grid>
                        <Grid item>
                            <Grid container>
                                <Grid item flexDirection='row' sx={{marginLeft: '50vw'}}>
                                    <IconButton>
                                        <KeyboardArrowLeftIcon/>
                                    </IconButton>
                                    <IconButton>
                                        <KeyboardArrowRightIcon/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/*userView*/}
                        <Grid item>
                            <Grid container spacing={5}>
                                {/* user left view */}
                                <Grid item xs={8}>
                                    <Grid container flexDirection="row">
                                        {/*first row - Information number*/}
                                        <Grid container spacing={2} className={classes.firstRow}>
                                            {
                                                NUM_ICON_VALUES.map((item, index)=>{
                                                    return (
                                                        <Grid item key={index+ 'numIcon'} xs={3}>
                                                            <NumIconCard num={item.num} text={item.text} icon={item.icon}/>
                                                        </Grid>
                                                    )
                                                })
                                            }
                                        </Grid>
                                        {/* second row - Chart and growth cards */}
                                        <Grid container className={classes.secondRow} flexDirection='row' spacing={2}>
                                            <Grid item xs={4}>
                                                <Grid container direction="column" spacing={2}>
                                                    {
                                                        NUM_DIFFERENCE.map((item,index)=> {
                                                            return (
                                                                <Grid item key={index+'numDiff'} xs={1}>
                                                                    <NumDifferenceCard  title={item.title} num={item.num} difference={item.diff}/>
                                                                </Grid>
                                                                )

                                                        })
                                                    }
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <LineChart/>
                                            </Grid>
                                        </Grid>
                                        {/* third row - Recent emails */}
                                        <Grid container flexDirection='column'>
                                            <Paper elevation={0} sx={{ borderRadius: 8, backgroundColor: "rgb(209, 226, 232)", padding:'1.2rem 0 0 2.4rem'}}>
                                                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom:'1rem' }}>Recent emails</Typography>
                                                {
                                                    EMAIL_VALUES.map((item, index) => {
                                                        return (
                                                            <Grid item key={index+'recentMail'}>
                                                                <RecentEmail icon={item.icon} name={item.name} title={item.title} time={item.time}/>
                                                            </Grid>
                                                            )
                                                    })
                                                }
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* user right view */}
                                <Grid item xs={4}>
                                    <Grid container spacing={6} flexDirection="row">
                                        {/*formation status*/}
                                        <Grid item sx={{width:'100%'}}>
                                            <Grid container sx={{width:'85%'}}>
                                                <FormationStatus progress={70}/>
                                            </Grid>
                                        </Grid>
                                        {/*to-do list*/}
                                        <Grid item>
                                            <Grid container>
                                                <Typography variant="h6" sx={{marginBottom:"8%", fontWeight:'bold'}}>Your to-Do list</Typography>
                                                <Grid container flexDirection="column">
                                                    {
                                                        TO_DO_LIST.map((item, index)=> {
                                                            return (
                                                                <Grid key={index+'todo'}>
                                                                    <ToDoList icon={item.icon} title={item.title} time={item.time}/>
                                                                </Grid>
                                                                )
                                                        })
                                                    }
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        {/*event notification*/}
                                        <Grid item sx={{width:'100%'}}>
                                            <Grid container sx={{width:'85%'}}>
                                                <Notification title={LATEST_NOTIFICATION_OBJ.title} time={LATEST_NOTIFICATION_OBJ.time} details={LATEST_NOTIFICATION_OBJ.details}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                </Grid>
        </div>
    </Paper>
    )}