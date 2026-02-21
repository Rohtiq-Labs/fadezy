'use client';
import { FC, ReactNode } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props{
    children: ReactNode
}
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ limitCallbacks: true });
// gsap.registerPlugin(SplitText);

const GsapPluginRegisterWrapper: FC<Props> = ({children}) => {
    return (
        <>{children}</>
    );
};

export default GsapPluginRegisterWrapper;