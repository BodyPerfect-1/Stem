"use client"

import { cn } from "@/lib/utils"
import { DotPattern } from "./magicui/dot-pattern"
import { HoverBorderGradient } from "./ui/hover-border-gradient"
import { BriefcaseMedical } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface SquareData {
  id: number
  src: string
}

const shuffle = (array: SquareData[]): SquareData[] => {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

const squareData: SquareData[] = [
  {
    id: 1,
    src: "https://bodyperfect.ae/wp-content/uploads/2022/11/stem-cells-01-300x250.jpg",
  },
  {
    id: 2,
    src: "https://bodyperfect.ae/wp-content/uploads/2022/11/HYDRA-FACIAL-01-300x250.jpg",
  },
  {
    id: 3,
    src: "https://bodyperfect.ae/wp-content/uploads/2021/12/lipo-370x248.jpg",
  },
  {
    id: 4,
    src: "https://bodyperfect.ae/wp-content/uploads/2022/11/DNA-2-01-300x250.jpg",
  },
  {
    id: 5,
    src: "https://bodyperfect.ae/wp-content/uploads/2022/11/GUT-1-01-300x250.jpg",
  },
  {
    id: 6,
    src: "https://bodyperfect.ae/wp-content/uploads/2021/11/abb-1170x658.jpg",
  },
  {
    id: 7,
    src: "https://bodyperfect.ae/wp-content/uploads/2021/11/aroma2-1170x658.jpg",
  },
  {
    id: 8,
    src: "https://bodyperfect.ae/wp-content/uploads/2021/12/shirodara-370x248.jpg",
  },
  {
    id: 9,
    src: "https://bodyperfect.ae/wp-content/uploads/2021/11/anti_age-370x248.jpg",
  },
  {
    id: 10,
    src: "https://bodyperfect.ae/wp-content/uploads/2021/10/hydra-370x248.jpg",
  },
  {
    id: 11,
    src: "https://bodyperfect.ae/wp-content/uploads/2021/12/kizi-370x248.jpg",
  },
  {
    id: 12,
    src: "https://bodyperfect.ae/wp-content/uploads/2021/12/velashap-370x248.jpg",
  },
  {
    id: 13,
    src: "https://bodyperfect.ae/wp-content/uploads/2021/11/ems-1-370x248.jpg",
  },
  {
    id: 14,
    src: "https://bodyperfect.ae/wp-content/uploads/2021/12/brazi-370x248.jpg",
  },
  {
    id: 15,
    src: "https://bodyperfect.ae/wp-content/uploads/2021/10/4-370x248.jpg",
  },
  {
    id: 16,
    src: "https://bodyperfect.ae/wp-content/uploads/2021/10/3-370x248.jpg",
  },
]

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ))
}

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [squares, setSquares] = useState(generateSquares())

  useEffect(() => {
    shuffleSquares()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const shuffleSquares = () => {
    setSquares(generateSquares())

    timeoutRef.current = setTimeout(shuffleSquares, 2000)
  }

  return <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">{squares}</div>
}

export default function About() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <DotPattern
        className={cn("absolute inset-0 [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]")}
      />
      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                      <BriefcaseMedical color="#6db5d5" />
                      <span>About</span>
                    </HoverBorderGradient>
                  </h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-indigo-700 text-2xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Comprehensive Health & Wellness Solutions
                    </h2>
                    <p className="text-gray-700 text-base font-bold leading-relaxed lg:text-start text-center">
                    At BodyPerfect, we provide health, wellness, and regenerative therapies. Our goal is to enhance vitality and longevity with advanced, tailored solutions.
                    </p>
                  </div>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-indigo-700 text-1xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Stem Cell Therapy: Revitalize & Heal
                    </h2>
                    <p className="text-gray-700 text-base font-medium leading-relaxed lg:text-start text-center">
                    At BodyPerfect, our stem cell therapy promotes natural healing, tissue regeneration, and anti-aging, helping you achieve optimal health and vitality.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                      of Trusted Healthcare & Wellness Excellence.
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Happy Clients</h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        Mirrors our Focus on Client Satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                <a href="https://bodyperfect.ae/our-services/">Read More </a>
                </span>
                <svg
                  className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                    stroke="#4F46E5"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div className="w-full max-w-[564px] h-[450px] rounded-3xl overflow-hidden">
                <ShuffleGrid />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

