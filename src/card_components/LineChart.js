import { Paper, Typography, Grid} from "@mui/material";
import {makeStyles,} from "@mui/styles"
import { AxisBottom, AxisLeft } from '@visx/axis';
import { curveBasisOpen} from '@visx/curve';
import { scaleLinear, scaleBand } from '@visx/scale';
import { Line } from '@visx/shape';
import {Group} from '@visx/group'

const useStyle = makeStyles({
    paper: {
        height:"6rem",
        width: "30rem"
    },
    graph: {
        height: "6rem",
        width: "3rem"
    }
})

const data = [
    { date: 'Feb 14', amount: 5000 },
    { date: 'Feb 15', amount: 6000 },
    { date: 'Feb 16', amount: 5500 },
    { date: 'Feb 17', amount: 8000 },
    { date: 'Feb 18', amount: 4000 },
    { date: 'Feb 19', amount: 12000 },
    { date: 'Feb 20', amount: 10000 },
];


const height = 235;
const width = 500;
const margin = { top: 0, bottom: 50, left: 0, right: 100 };

const xScale = scaleBand({
    range: [margin.left, width - margin.right],
    round: true,
    domain: data.map((d) => d.date),
    padding: 0.2,
});

const yScale = scaleLinear({
    range: [height - margin.bottom, margin.top],
    round: true,
    domain: [0, 20000],
    padding: 0.2,
    tickFormat: "10k",
});

const Chart = () => {

    const classes = useStyle()

    return (
        <Paper elevation={0} sx={{ borderRadius: 8, backgroundColor: "rgb(209, 226, 232)", padding:'0px'}} >
            <Grid container>
                <Grid item>
                    <Grid container sx={{ margin: '20px 0 0 40px'}}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold'}}>Revenue</Typography>
                        <Typography variant="subtitle1" sx={{ marginLeft: '160px'}}>Last 7 days VS prior work</Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container justifyContent="center">
                        <Grid item xs={10}>
                            <svg width={width} height={height}>
                                <Group>
                                    <Line
                                        from={{ x: xScale(data[0].date), y: yScale(data[0].amount) }}
                                        to={{ x: xScale(data[data.length - 1].date), y: yScale(data[data.length - 1].amount) }}
                                        stroke="#0077c2"
                                        strokeWidth={2}
                                        curve={curveBasisOpen}
                                    />

                                    {data.map((d) => (
                                        <circle
                                            cx={xScale(d.date)}
                                            cy={yScale(d.amount)}
                                            r={6}
                                            fill="#0077c2"
                                            stroke="#0077c2"
                                            strokeWidth={2}
                                            key={d.date}
                                        />
                                    ))}

                                    <AxisBottom
                                        top={height - margin.bottom}
                                        scale={xScale}
                                        stroke="#aaa"
                                        tickStroke="#aaa"
                                        tickLabelProps={() => ({
                                            fill: '#aaa',
                                            fontSize: 11,
                                            textAnchor: 'middle',
                                        })}
                                    />

                                    <AxisLeft
                                        scale={yScale}
                                        stroke="#aaa"
                                        tickStroke="#aaa"
                                        tickLabelProps={() => ({
                                            fill: '#aaa',
                                            fontSize: 11,
                                            textAnchor: 'end',
                                            dx: '-0.25em',
                                            dy: '0.25em',
                                        })}
                                    />
                                </Group>
                            </svg>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};


export default function LineChart () {

    const classes = useStyle()

    return (
            <Grid item>
                <Chart/>
            </Grid>
    )
}