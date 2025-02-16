import React from 'react'
import { render, screen } from '@testing-library/react'
import GraphSection from './GraphSection'

describe('GraphSection', () => {
    const mockProps = {
        chartData: { xAxis: ['0', '1', '2'], yAxis: [1000, 2000, 3000] },
        tips: ['Tip 1', 'Tip 2'],
        initialSavings: 5000,
        setInitialSavings: jest.fn(),
        monthlyDeposit: 100,
        setMonthlyDeposit: jest.fn(),
        interestRate: 5,
        setInterestRate: jest.fn(),
        interestFrequency: 'monthly',
        setInterestFrequency: jest.fn(),
        totalSavings: 100000,
    }

    test('renders correctly', () => {
        render(<GraphSection {...mockProps} />)

        expect(screen.getByText(/You will have saved.../i)).toBeInTheDocument()
        expect(screen.getByText(/£100,000/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/Initial Savings/i)).toBeInTheDocument()
    })
})
