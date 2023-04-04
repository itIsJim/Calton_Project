import { ResponsiveLine } from '@nivo/line'

const MyGraph = ({ data }) => {
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 30, right: 50, bottom: 15, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: '0',
                max: 'auto',
                stacked: true,
                reverse: false
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
            enablePoints={false}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
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
                            borderRadius:'1rem'
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