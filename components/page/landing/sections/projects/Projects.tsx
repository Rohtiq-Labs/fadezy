import SectionContainer from '@/components/utilities/containers/SectionContainer';
import { FC } from 'react'
import Article from './widget/Article';
import Showcase from './widget/Showcase';



const Projects: FC = () => {
    return (
        <SectionContainer className='flex flex-col gap-[clamp(48px,calc(((100vw-1024px)/896*48)+48px),96px)] !mt-[var(--section-spacing)] pb-[clamp(64px,10vw,120px)]'>
            <Article />
            <Showcase />
        </SectionContainer>
    );
};

export default Projects;