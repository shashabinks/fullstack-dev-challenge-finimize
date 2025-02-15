import React from 'react'
import {
    Box,
    Text,
    Input,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from '@chakra-ui/react'

interface LabeledSliderInputProps {
    label: string
    value: number
    setValue: (value: number) => void
    min: number
    max: number
    step: number
    unit?: string
}

const LabeledSliderInput: React.FC<LabeledSliderInputProps> = ({
    label,
    value,
    setValue,
    min,
    max,
    step,
    unit = '',
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value)
        if (newValue <= max) {
            setValue(newValue)
        }
    }

    return (
        <Box mb={4}>
            <Text>
                {label} ({unit})
            </Text>
            <Input type="number" value={value} onChange={handleChange} mb={2} max={max} />
            <Slider
                aria-label={`${label.toLowerCase().replace(' ', '-')}-slider`}
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={(val) => setValue(val)}
            >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
        </Box>
    )
}

export default LabeledSliderInput
