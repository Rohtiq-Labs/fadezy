import { FC } from 'react'
import BackgroundVideo from './widget/BackgroundVideo';
import Headline from './widget/Headline';
import ShareButtonsContainer from './widget/ShareButtonsContainer';


const Hero: FC = () => {
    return (
        <section
            className="
                w-full
                min-h-[max(calc(var(--dvh)*100),640px)]
                h-[calc(var(--dvh)*100)]
                relative
                portrait:min-h-[70vh]
                portrait:h-[70vh]
                portrait:overflow-visible
            "
        >
            <BackgroundVideo />
            <div className="absolute inset-0 z-[1] flex flex-col text-white overflow-visible portrait:justify-center [&_.bg-secondary]:bg-white">
                <Headline />
                <ShareButtonsContainer />
            </div>
        </section>
    );
};

export default Hero;