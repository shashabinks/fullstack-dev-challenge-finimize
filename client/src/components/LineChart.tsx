import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'
import theme from '../theme'
import { Box } from '@chakra-ui/react'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

type Props = {
    xAxisData: string[]
    yAxisData: string[]
    title?: string
    xLabel?: string
    yLabel?: string
}

const LineChart = ({ xAxisData, yAxisData, title, xLabel, yLabel }: Props) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: !!title,
                text: title,
            },
        },
        scales: {
            y: {
                title: {
                    display: !!yLabel,
                    text: yLabel,
                },
                grid: {
                    display: false,
                },
            },
            x: {
                title: {
                    display: !!xLabel,
                    text: xLabel,
                },
                grid: {
                    display: false,
                },
            },
        },
    }

    return (
        <Box width="100%" height={430}>
            <Line
                data={{
                    labels: xAxisData,
                    datasets: [
                        {
                            backgroundColor: theme.colors.blue100,
                            borderColor: theme.colors.primary,
                            data: yAxisData,
                        },
                    ],
                }}
                options={options}
            />
        </Box>
    )
}

export default LineChart
