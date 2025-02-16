import React from 'react'
import { Box, Container, Text, Wrap, GridItem } from '@chakra-ui/react'
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
        <Container pt={6} marginBottom={10}>
            <Wrap justify={['flex-start']}>
                <Box mr={10} mb={{ base: 4, md: 0 }} gap={4}>
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
                <Box flex="0.6" mr={5}>
                    <LineChart
                        title="Savings Over Time"
                        xAxisData={chartData.xAxis}
                        yAxisData={chartData.yAxis.map(String)}
                        xLabel="Years"
                        yLabel="Amount (£)"
                    />
                </Box>
                <Box flex="0.4" mr={5} mb={{ base: 4, md: 0 }} height="100%" gap={4}>
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
                        <Box
                            display="flex"
                            flexDirection="row"
                            mb={4}
                            flex="1"
                            justifyContent="flex-end"
                        >
                            <Text fontSize="xl">...in 50 years time 📈.</Text>
                        </Box>
                    </Box>
                </Box>
            </Wrap>
        </Container>
    )
}

export default GraphSection
