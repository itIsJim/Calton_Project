import { ResponsiveLine } from '@nivo/line'

const MyGraph = ({ data }) => {

    return (
        <ResponsiveLine
            onMouseMove={()=>console.log('x')}
            data={data}
            margin={{ top: 30, right: 70, bottom: 25, left: 60 }}
            xScale={{ type: 'point', clamp: true }}
            yScale={{
                type: 'linear',
                min: '0',
                max: 'auto',
                stacked: true,
                reverse: false,
                clamp: true
            }}
            yFormat=" >-.2f"
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendOffset: -40,
                legendPosition: 'middle',
            }}
            enableGridX={false}
            colors={['#000000', '#63a2b8']}
            lineWidth={3}
            enablePoints={true}
            pointSymbol = {(props) => {
                return <g>
                    <circle
                        r={props.size + 1}
                        cx={props.x}
                        cy={props.y}
                        fill="#ffffff"
                        stroke={props.borderColor}
                        strokeWidth={props.borderWidth}
                    />
                    <circle
                        r={(props.size +1) / 3}
                        cx={props.x}
                        cy={props.y}
                        fill="#000000"
                    />
                </g>
            }}
            pointLabelYOffset={-12}
            enableSlices="x"
            crosshairType="x"
            useMesh={true}
            legends={[]}
            theme={{
                grid: {
                    line: {
                        stroke: '#b3b3b3',
                        strokeWidth: 1
                    }
                }
            }}
            sliceTooltip={({ slice }) => {
                return (
                    <div
                        style={{
                            background: 'black',
                            padding: '9px 12px',
                            border: '1px solid #000000',
                            borderRadius:'1rem',
                        }}
                    >
                        {slice.points.map(point => (
                            <div
                                key={point.id}
                                style={{
                                    color: 'white',
                                    padding: '3px 0',
                                    fontSize:"10px",
                                }}
                            >
                             <span style={{
                                 color: `${point.serieColor !== '#000000'?point.serieColor: '#b8b8b8'}`
                             }}>●</span> {point.serieId}<strong> ${point.data.yFormatted}</strong>
                            </div>
                        ))}
                    </div>
                )
            }}
        />
    )
}

export default MyGraph