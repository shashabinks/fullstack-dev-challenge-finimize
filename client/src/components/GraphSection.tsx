import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import LineChart from './LineChart'
import TipsPanel from './TipsPanel'
import LabeledSliderInput from './LabeledSliderInput'
import InterestFrequencySelect from './InterestFrequency'

interface GraphSectionProps {
    chartData: { xAxis: string[]; yAxis: number[] }
    tips: string[]
    initialSavings: number
    setInitialSavings: (value: number) => void
    monthlyDeposit: number
    setMonthlyDeposit: (value: number) => void
    interestRate: number
    setInterestRate: (value: number) => void
    interestFrequency: string
    setInterestFrequency: (value: string) => void
    totalSavings: number
}

const GraphSection: React.FC<GraphSectionProps> = ({
    chartData,
    tips,
    initialSavings,
    setInitialSavings,
    monthlyDeposit,
    setMonthlyDeposit,
    interestRate,
    setInterestRate,
    interestFrequency,
    setInterestFrequency,
    totalSavings,
}) => {
    return (
        <Container pt={6} flexDirection="column" marginBottom={10}>
            <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} padding={2}>
                <Box flex="0.5" mr={5} mb={{ base: 4, md: 0 }} height="100%" gap={4}>
                    <LabeledSliderInput
                        label="Initial Savings"
                        value={initialSavings}
                        setValue={setInitialSavings}
                        min={0}
                        max={10000}
                        step={10}
                        unit="£"
                    />
                    <LabeledSliderInput
                        label="Monthly Deposit"
                        value={monthlyDeposit}
                        setValue={setMonthlyDeposit}
                        min={0}
                        max={1000}
                        step={10}
                        unit="£"
                    />
                    <LabeledSliderInput
                        label="Interest Rate"
                        value={interestRate}
                        setValue={setInterestRate}
                        min={0}
                        max={20}
                        step={0.1}
                        unit="%"
                    />
                    <InterestFrequencySelect
                        frequency={interestFrequency}
                        onChange={setInterestFrequency}
                    />
                </Box>
                <Box
                    flex="1.0"
                    mx={10}
                    height="100%"
                    mb={{ base: 4, md: 0 }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                    alignItems="center"
                    padding={3}
                >
                    <LineChart
                        title="Savings Over Time"
                        xAxisData={chartData.xAxis}
                        yAxisData={chartData.yAxis.map(String)}
                        xLabel="Years"
                        yLabel="Amount (£)"
                    />
                </Box>
                <Box flex="0.8" height="100%">
                    <Box>
                        <TipsPanel tips={tips} />
                    </Box>
                    <Box mt={4}>
                        <Box display="flex" flexDirection="row" mb={4}>
                            <Text fontSize="3xl" fontWeight="bold">
                                You will have saved...
                            </Text>
                        </Box>
                        <Box display="flex" flexDirection="row" mb={4}>
                            <Text fontSize="3xl" fontWeight="bold">
                                £{totalSavings.toLocaleString('en-GB')}
                            </Text>
                        </Box>
                        <Box display="flex" flexDirection="row" mb={4}>
                            <Text fontSize="xl">in 50 years time 📈.</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default GraphSection
