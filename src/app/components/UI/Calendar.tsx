"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type CalendarSize = "xs" | "sm" | "md" | "lg" | "xl"

interface CalendarProps {
  containerClassName?: string;
  size?: CalendarSize
}

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const sizeConfig: Record<CalendarSize, { container: string, day: string, dayName: string, monthYear: string, navButton: string }> = {
  xs: {
    container: "w-full",
    day: "h-6 text-xs",
    dayName: "text-xs",
    monthYear: "text-sm",
    navButton: "text-sm",
  },
  sm: {
    container: "w-full",
    day: "h-8 text-sm",
    dayName: "text-xs",
    monthYear: "text-base",
    navButton: "text-base",
  },
  md: {
    container: "w-full",
    day: "h-10 text-base",
    dayName: "text-sm",
    monthYear: "text-lg",
    navButton: "text-lg",
  },
  lg: {
    container: "w-full",
    day: "h-12 text-lg",
    dayName: "text-base",
    monthYear: "text-xl",
    navButton: "text-xl",
  },
  xl: {
    container: "w-full",
    day: "h-14 text-xl",
    dayName: "text-lg",
    monthYear: "text-2xl",
    navButton: "text-2xl",
  },
}

export function Calendar({ containerClassName, size = "md" }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
  const daysInMonth = lastDayOfMonth.getDate()
  const startingDayIndex = (firstDayOfMonth.getDay() + 6) % 7

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))
  }

  const { container, day, dayName, monthYear, navButton } = sizeConfig[size]

  return (
    <div className={cn("bg-zinc-800 w-full text-white p-4 rounded-lg", container, containerClassName)}>
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className={cn("text-gray-400 hover:text-white", navButton)}>&lt;</button>
        <h2 className={cn("font-bold", monthYear)}>{MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
        <button onClick={handleNextMonth} className={cn("text-gray-400 hover:text-white", navButton)}>&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map(day => (
          <div key={day} className={cn("text-center font-medium text-gray-400", dayName)}>
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startingDayIndex }).map((_, index) => (
          <div key={`empty-${index}`} className={day} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const dayNumber = index + 1
          const isSelected = selectedDate?.getDate() === dayNumber &&
            selectedDate?.getMonth() === currentDate.getMonth() &&
            selectedDate?.getFullYear() === currentDate.getFullYear()
          return (
            <button
              key={dayNumber}
              onClick={() => handleDateClick(dayNumber)}
              className={cn(
                "w-full flex items-center justify-center rounded-full transition-colors",
                day,
                isSelected
                  ? "bg-white text-gray-800 font-bold"
                  : "hover:bg-gray-700"
              )}
            >
              {dayNumber}
            </button>
          )
        })}
      </div>
    </div>
  )
}
