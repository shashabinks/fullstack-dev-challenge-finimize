export const fetchSavingsData = async (
    initialSavings: number,
    monthlyDeposit: number,
    interestRate: number,
    compoundFrequency: string
) => {
    try {
        const response = await fetch(
            `http://localhost:3001/api/savings?initialAmount=${initialSavings}&monthlyDeposit=${monthlyDeposit}&interestRate=${interestRate}&compoundingFrequency=${compoundFrequency}`
        )
        const { data, totalSavings } = await response.json()
        return { data, totalSavings }
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}
