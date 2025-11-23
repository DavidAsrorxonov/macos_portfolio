import { FONT_WEIGHTS } from '#constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const renderText = (text, className, type) => {
    const baseWeight = FONT_WEIGHTS[type].default || 400
    return [...text].map((c, i) => (
        <span key={i} className={className} style={{ fontVariationSettings: `'wght' ${baseWeight}` }}>
            {c === ' ' ? '\u00A0' : c}
        </span>
    ))
}

const setupTextHover = (container, type) => {
    if (!container) return () => { }

    const letters = container.querySelectorAll("span")

    const { min, max, default: base } = FONT_WEIGHTS[type]

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration, ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`
        })
    }

    const handleMouseMove = (e) => {
        const containerRect = container.getBoundingClientRect()
        const mouseX = e.clientX - containerRect.left;

        letters.forEach((letter) => {
            const { left, width } = letter.getBoundingClientRect()
            const letterCenter = left + width / 2 - containerRect.left
            const distance = Math.abs(mouseX - letterCenter)
            const intensity = Math.exp(-(distance ** 2) / 20000)

            animateLetter(letter, min + (max - min) * intensity)
        })
    }

    const handleMouseLeave = () => {
        letters.forEach((letter) => {
            animateLetter(letter, base, 0.5)
        })
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
    }
}

const Welcome = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    useGSAP(() => {
        const titleCleanUp = setupTextHover(titleRef.current, "title")
        const subtitleCleanUp = setupTextHover(subtitleRef.current, "subtitle")

        return () => {
            titleCleanUp();
            subtitleCleanUp();
        }
    }, [])

    return (
        <section id='welcome'>
            <p ref={subtitleRef}>{renderText("Hey, I'm Dovudkhon! Welcome to my", 'text-3xl font-georama', 'subtitle')}</p>
            <h1 ref={titleRef} className='mt-7'>
                {renderText("portfolio", 'text-9xl italic font-georama', 'title')}
            </h1>

            <div className="small-screen">
                <p>This portfolio is designed for desktop/tablet screens only.</p>
            </div>
        </section>
    )
}

export default Welcome