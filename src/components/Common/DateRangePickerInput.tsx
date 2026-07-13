'use client'

import { addDays, format } from 'date-fns'
import { Calendar } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { DateRangePicker, Range, RangeKeyDict } from 'react-date-range'
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
interface DateRangePickerInputProps {
    initialStart?: Date
    initialEnd?: Date
    onChange?: (from: string, to: string) => void
}

export function DateRangePickerInput({
    initialStart,
    initialEnd,
    onChange,
}: DateRangePickerInputProps) {
    const pickerRef = useRef<HTMLDivElement>(null)

    const [range, setRange] = useState<Range[]>([
        {
            startDate: initialStart ?? addDays(new Date(), -6),
            endDate: initialEnd ?? new Date(),
            key: 'selection',
        },
    ])

    const [from, setFrom] = useState(
        format(range[0].startDate ?? new Date(), 'MM-dd-yyyy')
    )
    const [to, setTo] = useState(
        format(range[0].endDate ?? new Date(), 'MM-dd-yyyy')
    )

    const [openPicker, setOpenPicker] = useState(false)

    const formattedRange = `${format(range[0].startDate ?? new Date(), 'MMM d, yyyy')} - ${format(
        range[0].endDate ?? new Date(),
        'MMM d, yyyy'
    )}`

    // Close picker when clicked outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
                setOpenPicker(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Handle range change
    const handleRangeChange = (item: RangeKeyDict) => {
        const start = item.selection.startDate
        const end = item.selection.endDate
        if (!start || !end) return

        setRange([item.selection])
        const formattedStart = format(start, 'MM-dd-yyyy')
        const formattedEnd = format(end, 'MM-dd-yyyy')

        setFrom(formattedStart)
        setTo(formattedEnd)

        onChange?.(formattedStart, formattedEnd)
    }
    useEffect(() => {
        onChange?.(from, to)
    }, [])
    return (
        <div className="relative">
            <button
                onClick={() => setOpenPicker((prev) => !prev)}
                className="flex items-center gap-2 border px-4 py-2 text-sm"
            >
                <Calendar className="w-4 h-4" />
                {formattedRange}
            </button>

            {openPicker && (
                <div ref={pickerRef} className="absolute right-0 mt-2 z-50">
                    <DateRangePicker
                        ranges={range}
                        months={1}
                        direction="horizontal"
                        onChange={handleRangeChange}
                        className="bg-white border shadow-lg"
                    />
                    <div className="flex justify-end p-2">
                        <button
                            onClick={() => setOpenPicker(false)}
                            className="text-sm text-blue-600"
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
