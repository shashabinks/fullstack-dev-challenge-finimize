import React from 'react'
import { Box, Text } from '@chakra-ui/react'

interface TipsPanelProps {
    tips: string[]
}

const TipsPanel: React.FC<TipsPanelProps> = ({ tips }) => {
    return (
        <Box p={4} borderWidth={1} borderRadius="md" boxShadow="sm" bg="gray.50">
            <Text fontWeight="bold" mb={2}>
                For Your Understanding 📚
            </Text>
            <Text>
                <strong>• Monthly Deposit:</strong> the amount you plan to add to your savings each
                month.
            </Text>
            <Text>
                <strong>• Interest Rate:</strong> the percentage of your savings that the bank pays
                you each year.
            </Text>
        </Box>
    )
}

export default TipsPanel
