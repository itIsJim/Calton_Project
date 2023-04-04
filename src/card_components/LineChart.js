import { Paper, Typography, Grid} from "@mui/material";
import MyGraph from './Graph'

const data = [
    {
        "id": "Last Week",
        "color": "hsl(12, 70%, 50%)",
        "data": [
            {
                "x": "Feb 14",
                "y": 18913
            },
            {
                "x": "Feb 15",
                "y": 14440
            },
            {
                "x": "Feb 16",
                "y": 17167
            },
            {
                "x": "Feb 17",
                "y": 15106
            },
            {
                "x": "Feb 18",
                "y": 11284
            },
            {
                "x": "Feb 19",
                "y": 13253
            },
            {
                "x": "Feb 20",
                "y": 10071
            },
        ]
    },
    {
        "id": "This Week",
        "color": "hsl(0, 70%, 50%)",
        "data": [
            {
                "x": "Feb 14",
                "y": 10047
            },
            {
                "x": "Feb 15",
                "y": 17228
            },
            {
                "x": "Feb 16",
                "y": 16671
            },
            {
                "x": "Feb 17",
                "y": 10728
            },
            {
                "x": "Feb 18",
                "y": 11087
            },
            {
                "x": "Feb 19",
                "y": 19639
            },
            {
                "x": "Feb 20",
                "y": 12538
            },
        ]
    },
]


const width = '40rem';
const height = '13rem';

const Chart = () => {

    return (
        <Paper elevation={0} sx={{ borderRadius: 8, backgroundColor: "rgb(209, 226, 232)", padding:'0px', width: '100%', height:'100%', aspectRatio:'1.88/1'}} >
            <Grid container>
                <Grid item>
                    <Grid container alignItems='self-end' sx={{padding: '1rem 0 0 1.5rem'}}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', marginRight:'13rem'}}>Revenue</Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight:'400', fontSize:15}}>Last 7 days VS prior work</Typography>
                    </Grid>
                </Grid>
                <Grid item width={width} height={height}>
                    <MyGraph data={data}/>
                </Grid>
            </Grid>
        </Paper>
    );
};


export default function LineChart () {
    return (
            <Grid container sx={{width:'100%', height:'100%'}}>
                <Chart/>
            </Grid>
    )
}