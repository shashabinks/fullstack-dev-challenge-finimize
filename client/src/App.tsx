import { useState, useEffect } from 'react'
import { ChakraProvider, extendTheme, Spinner, Center, Box, Text } from '@chakra-ui/react'
import DefaultLayout from './components/layouts/Default'
import theme from './theme'
import GraphSection from './components/GraphSection'
import { fetchSavingsData } from './utils/api'
import CompoundFrequencySelect from './components/InterestFrequency'
import { tips } from './utils/tips'
const defaultTheme = extendTheme(theme)

function App() {
    const [initialSavings, setInitialSavings] = useState(1000)
    const [monthlyDeposit, setMonthlyDeposit] = useState(100)
    const [interestRate, setInterestRate] = useState(5)
    const [interestFrequency, setInterestFrequency] = useState('monthly')
    const [chartData, setChartData] = useState({ xAxis: [], yAxis: [] })
    const [loading, setLoading] = useState(true)
    const [totalSavings, setTotalSavings] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, totalSavings } = await fetchSavingsData(
                    initialSavings,
                    monthlyDeposit,
                    interestRate,
                    interestFrequency
                )

                const xAxis = data.map((item: any) => item.year.toString())
                const yAxis = data.map((item: any) => item.amount)

                setChartData({ xAxis, yAxis })
                setTotalSavings(totalSavings)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [initialSavings, monthlyDeposit, interestRate, interestFrequency])

    return (
        <ChakraProvider theme={defaultTheme}>
            <DefaultLayout>
                {loading ? (
                    <Center height="100vh">
                        <Spinner size="xl" />
                    </Center>
                ) : (
                    <Box mt={4}>
                        <Box mb={4}>
                            <Text as="h1" fontSize="2xl" fontWeight="bold" textAlign="center">
                                Simple Savings Calculator
                            </Text>
                        </Box>
                        <Box mb={4}>
                            <GraphSection
                                chartData={chartData}
                                tips={tips}
                                initialSavings={initialSavings}
                                setInitialSavings={setInitialSavings}
                                monthlyDeposit={monthlyDeposit}
                                setMonthlyDeposit={setMonthlyDeposit}
                                interestRate={interestRate}
                                setInterestRate={setInterestRate}
                                interestFrequency={interestFrequency}
                                setInterestFrequency={setInterestFrequency}
                                totalSavings={totalSavings}
                            />
                        </Box>
                    </Box>
                )}
            </DefaultLayout>
        </ChakraProvider>
    )
}

export default App
