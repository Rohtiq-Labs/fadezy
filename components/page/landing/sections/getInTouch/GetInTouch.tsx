import SectionContainer from '@/components/utilities/containers/SectionContainer';
import { FC } from 'react';
import Article from './widget/Article';
import HandImage from './widget/HandImage';
import InquiryForm from './widget/InquiryForm';

const GetInTouch: FC = () => {
  return (
    <SectionContainer id="get-in-touch" className="relative flex flex-col pb-12">
      <Article />
      <div className="w-full flex justify-center">
        <InquiryForm />
      </div>
      <HandImage />
    </SectionContainer>
  );
};

export default GetInTouch;