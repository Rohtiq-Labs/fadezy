import { CSSProperties, FC, ReactNode, Ref, RefObject, useImperativeHandle, useMemo, useRef } from 'react'
import HeadingEighthXl from '../headings/HeadingEighthXl';
import ParagraphFourthXl from '../paragraphs/ParagraphFourthXl';
import { cn } from '@/lib/tailwind/cn';
import Line from '../decorations/Line';
import TextRevealScrollAnimation from '../animations/scroll/TextRevealScrollAnimation';
import CustomScrollAnimation from '../animations/scroll/CustomScrollAnimation';

interface Props{
    title?: string,
    description?: string | ReactNode,

    className?: string,
    titleClassName?: string,
    lineClassName?: string,
    style?: CSSProperties,
    ref?: Ref<HTMLElement> | undefined,
    
    customTriggerRef?:  RefObject<HTMLElement | null>,
    scrollTriggerVars?: ScrollTrigger.Vars | undefined
}

const baseScrollTriggerVars = { start: () => "top center" as const, end: () => "top center" as const };

const ArticleContainer: FC<Props> = ({className,description,ref,style,title,titleClassName,lineClassName,customTriggerRef,scrollTriggerVars}) => {
    const triggerRef = useRef<HTMLElement>(null);
    useImperativeHandle<(HTMLElement | null), (HTMLElement | null)>(ref, () => triggerRef.current, []);

    const titleTriggerVars = useMemo(() => ({
        ...baseScrollTriggerVars,
        ...scrollTriggerVars
    }), [scrollTriggerVars]);

    const lineTriggerVars = useMemo(() => ({
        ...baseScrollTriggerVars,
        toggleActions: "play none none reverse" as const,
        ...scrollTriggerVars
    }), [scrollTriggerVars]);

    const descTriggerVars = useMemo(() => ({
        ...baseScrollTriggerVars,
        toggleActions: "play none none reverse" as const,
        ...scrollTriggerVars
    }), [scrollTriggerVars]);

    return (
        <article 
            className={cn('flex flex-col gap-[clamp(24px,calc(((100vw-1024px)/896*32)+24px),56px)] max-w-[clamp(520px,calc(((100vw-1024px)/896*255)+520px),775px)]',className)} 
            ref={triggerRef} 
            style={style} 
        >
            <HeadingEighthXl className={cn('relative w-fit', titleClassName)}>
                <TextRevealScrollAnimation
                    splitText={title} 
                    splitTextMode='characters' 
                    splitTextClassName='relative inline-block'
                    duration={0.75}
                    stagger={0.025}
                    className="w-fit whitespace-nowrap lg:whitespace-normal"

                    trigger={customTriggerRef ?? triggerRef}
                    scrollTriggerVars={titleTriggerVars}
                >
                    {title}
                </TextRevealScrollAnimation>
                <CustomScrollAnimation
                    styleFrom={{
                        transformOrigin: "center left",
                        transform: "scaleX(0)"
                    }}
                    styleTo={{
                        transform: "scaleX(1)"
                    }}
                    duration={1}

                    trigger={triggerRef}
                    scrollTriggerVars={lineTriggerVars}

                    className='absolute bottom-0 left-0 right-0'
                >
                    <Line className={cn('w-full', lineClassName)} />
                </CustomScrollAnimation>
                
            </HeadingEighthXl>
            <ParagraphFourthXl>
                
                <TextRevealScrollAnimation
                    splitText={typeof description === "string" ? description : undefined}
                    splitTextMode='words' 
              
                    duration={0.75}
                    stagger={0.025}
               
                    trigger={customTriggerRef ?? triggerRef}
                    scrollTriggerVars={descTriggerVars}
                >
                    {description}
                </TextRevealScrollAnimation>
            </ParagraphFourthXl>
        </article>
    );
};

export default ArticleContainer;