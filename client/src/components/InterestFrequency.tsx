import React from 'react'
import { Box, Select, Text } from '@chakra-ui/react'

interface InterestFrequencySelectProps {
    frequency: string
    onChange: (value: string) => void
}

const InterestFrequencySelect: React.FC<InterestFrequencySelectProps> = ({
    frequency,
    onChange,
}) => {
    return (
        <Box>
            <Text mb={2}>Interest Frequency:</Text>
            <Select value={frequency} onChange={(e) => onChange(e.target.value)} mb={4}>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
            </Select>
        </Box>
    )
}

export default InterestFrequencySelect
