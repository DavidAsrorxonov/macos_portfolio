import { FONT_WEIGHTS } from '#constants'
import React, { useRef } from 'react'

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((c, i) => (
        <span key={i} className={className} style={{ fontVariationSettings: `whgt ${baseWeight}` }}>
            {c === ' ' ? '\u00A0' : c}
        </span>
    ))
}

const setupTextHover = (container, type) => {
    if (!container) return

    const letters = container.querySelectorAll("span")

    const { min, max, default: base } = FONT_WEIGHTS[type]
}

const Welcome = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    return (
        <section id='welcome'>
            <p ref={subtitleRef}>{renderText("Hey, I'm Dovudkhon! Welcome to my", 'text-3xl font-georama', 100)}</p>
            <h1 ref={titleRef} className='mt-7'>
                {renderText("portfolio", 'text-9xl italic font-georama')}
            </h1>

            <div className="small-screen">
                <p>This portfolio is designed for desktop/tablet screens only.</p>
            </div>
        </section>
    )
}

export default Welcome