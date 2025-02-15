"use client"

import { useEffect, useState, useRef } from "react"

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const COUNTDOWN_DAYS = 8

    const getTargetDate = (): Date => {
      const storedDate = localStorage.getItem("targetDate")
      if (storedDate) {
        return new Date(storedDate)
      }
      // If no stored date, create a new one
      const newTargetDate = new Date(new Date().getTime() + COUNTDOWN_DAYS * 24 * 60 * 60 * 1000)
      localStorage.setItem("targetDate", newTargetDate.toISOString())
      return newTargetDate
    }

    const targetDate = getTargetDate()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate.getTime() - now

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
        }
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    updateCountdown() // Run immediately to update UI

    intervalRef.current = setInterval(updateCountdown, 1000) // Update every second

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const formatTime = (time: number) => String(time).padStart(2, "0")

  return (
    <div className="bg-blue-400 text-white pt-1 py-1 px-2 flex flex-col sm:flex-row justify-center items-center sm:gap-4 lg:gap-6 lg:pt-2 md:pt-2">
      <p className="text-base sm:text-lg font-semibold text-center sm:text-left">
        Limited Time Offer – Only AED 1,999 <span className="ml-2">🎉</span>
      </p>

      <div className="flex space-x-2 sm:space-x-4">
        {(["Days", "Hours", "Minutes", "Seconds"] as const).map((label) => (
          <div key={label} className="flex flex-col items-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center bg-white text-black font-bold text-xs sm:text-sm rounded">
              {formatTime(timeLeft[label.toLowerCase() as keyof typeof timeLeft])}
            </div>
            <p className="text-[8px] sm:text-[10px] mt-1">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

