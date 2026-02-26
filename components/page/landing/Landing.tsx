"use client"

import { FC } from 'react'
import Hero from './sections/hero/Hero';
import WhatIDo from './sections/whatIDo/WhatIDo';
import Projects from './sections/projects/Projects';
import Services from './sections/services/Services';
import Pricing from './sections/pricing/Pricing';
import Testimonials from './sections/testimonials/Testimonials';
import GetInTouch from './sections/getInTouch/GetInTouch';
import Footer from '@/components/footer/Footer';


const Landing: FC = ({}) => {

    // const pageTransitionContext = usePageTransitionContext();

    // useGSAP((_, contextSafe) => {
    //     pageTransitionContext?.registerAnimationEvent("exitComplete",[
    //         () => {

    //             if(contextSafe){
    //                 const tween = contextSafe(() => {
    //                     return gsap.fromTo(".testing",{
    //                         opacity: 0
    //                     },{
    //                         opacity: 1
    //                     })
    //                 });
    //                 tween()
    //             }
    //         }
    //     ])
    // },{dependencies: [pageTransitionContext]});

    return (
        <main className="flex flex-col w-full">
            <div className="bg-brand-bg">
                <Hero />
            </div>
            <div className="bg-brand-bg-alt">
                <WhatIDo />
            </div>
            <div className="bg-brand-bg">
                <Projects />
            </div>
            <div className="bg-brand-bg-alt">
                <Services />
            </div>
            <div className="bg-brand-bg">
                <Pricing />
            </div>
            <div className="bg-brand-bg-alt">
                <Testimonials />
            </div>
            <div className="bg-brand-bg">
                <GetInTouch />
            </div>
            <Footer />
        </main>
    );
};

export default Landing;