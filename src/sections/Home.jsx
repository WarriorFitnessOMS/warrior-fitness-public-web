/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import {gsap} from 'gsap'
import { heroBg, dumbleIcon, heroSlides } from "../assets/assets.js";

const Home = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0)
    const heroRef = useRef();
    const textRef1 = useRef();
    const textRef2 = useRef();
    const textRef3 = useRef();
    const textRef4 = useRef();
    const hasAnimated = useRef(false);

    // Initial animation on mount
    useEffect(() => {
        if (!hasAnimated.current) {
            hasAnimated.current = true;
            
            // Set initial state
            gsap.set(heroRef.current, { opacity: 0, scale: 1.2 });
            gsap.set([textRef1.current, textRef2.current, textRef3.current, textRef4.current], {
                opacity: 0,
                y: 30
            });

            // Animate in
            gsap.to(heroRef.current, { 
                opacity: 1, 
                scale: 1, 
                duration: 1.5, 
                ease: "power2.out" 
            });

            gsap.to([textRef1.current, textRef2.current, textRef3.current, textRef4.current], {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                delay: 0.5,
                ease: "power2.out",
            });
        }
    }, []);

    // Slide transition animation
    useEffect(() => {
        let timeoutId;
        let isFirstRun = true;
      
        const animateSlide = () => {
            // Skip first run since initial animation handles it
            if (isFirstRun) {
                isFirstRun = false;
                return;
            }

            // Fade out current slide
            gsap.to(heroRef.current, { 
                opacity: 0, 
                scale: 1.1, 
                duration: 1, 
                ease: "power2.inOut" 
            });
            
            gsap.to([textRef1.current, textRef2.current, textRef3.current, textRef4.current], {
                opacity: 0,
                y: -30,
                duration: 0.6,
                stagger: 0.08,
                ease: "power2.in",
            });
      
            // Change slide and fade in
            timeoutId = setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        
                gsap.fromTo(
                    heroRef.current,
                    { opacity: 0, scale: 1.2 },
                    { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
                );
        
                gsap.fromTo(
                    [textRef1.current, textRef2.current, textRef3.current, textRef4.current],
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.15,
                        delay: 0.3,
                        ease: "power2.out",
                    }
                );
            }, 1000); // Wait for fade-out to complete
        };
      
        // Start interval after initial animation completes (2 seconds initial + 4 seconds display)
        const interval = setInterval(animateSlide, 6000);
      
        return () => {
            clearInterval(interval);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <section id='home' className='min-h-screen relative flex flex-col items-center justify-center text-center overflow-hidden'>
            <img 
                ref={heroRef} 
                src={heroSlides[currentSlide].bg}
                alt='bg-image'
                className='absolute inset-0 w-full h-full object-cover'
            />

            <div className='relative z-10 flex flex-col items-center justify-center' >
                <p ref={textRef1} className='text-lg uppercase tracking-wider font-medium text-orange-600 mb-2'>
                    Rise up
                </p>
                
                <img 
                    src={dumbleIcon} 
                    alt="dumbbell" 
                    className="w-20 mb-4"
                    ref={textRef2}
                />

                <div ref={textRef3} className='text-5xl md:text-6xl font-bold flex flex-col sm:flex-row gap-4'>  
                    <h1 className='text-orange-600'>
                        {heroSlides[currentSlide].title1} 
                    </h1>

                    <h1 className=''>
                        {heroSlides[currentSlide].title2} 
                    </h1>
                </div>
                
                <h2 ref={textRef4} className='text-md md:text-2xl mt-4'>
                    {heroSlides[currentSlide].subtitle}
                </h2>
            </div>
        </section>
    )
}

export default Home