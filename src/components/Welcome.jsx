import React, { useRef } from 'react'

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((c, i) => (
        <span key={i} className={className} style={{ fontVariationSettings: `whgt ${baseWeight}` }}>
            {c === ' ' ? '\u00A0' : c}
        </span>
    ))
}

const Welcome = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    return (
        <section id='welcome'>
            <p ref={subtitleRef}>{renderText("Hey, I'm Dovudkhon! Welcome to my", 'text-3xl', 'font-georama', 100)}</p>
            <h1 ref={titleRef} className='mt-7'>portfolio</h1>

            <div className="small-screen">
                <p>This portfolio is designed for desktop/tablet screens only.</p>
            </div>
        </section>
    )
}

export default Welcome