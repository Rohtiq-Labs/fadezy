import UnderlineButton from '@/components/utilities/buttons/UnderlineButton';
import ArticleContainer from '@/components/utilities/containers/ArticleContainer';
import { landingContents } from '@/contents/landingContents';
import { useCurrentLanguages } from '@/contents/languageSupportHooks';
import Link from 'next/link';
import { FC } from 'react';

const WHATSAPP_URL = "https://wa.me/923239675581";
const INSTAGRAM_URL = "https://www.instagram.com/fadezy.rl/";

const Article: FC = () => {
    const lang = useCurrentLanguages();
    const contacts = landingContents[lang]["get-in-touch"].contacts;
    return (
        <div className='flex flex-col gap-20 '>
            <ArticleContainer 
                scrollTriggerVars={{
                    start: () => "bottom bottom ",
                    end: () => "bottom bottom ",
                }}
                title={landingContents[lang]['get-in-touch'].heading}
                description={(
                    <span className='flex flex-col '>
                        {contacts.map(({ contact, type }, i) => {
                            const isWhatsapp = type === "whatsapp" || type === "واتساب";
                            const isInstagram = type === "instagram" || type === "انستغرام";
                            const href = isWhatsapp ? WHATSAPP_URL : isInstagram ? INSTAGRAM_URL : undefined;
                            return (
                                <span key={`${contact}-${i}`} className='text-nowrap'>
                                    <span className='opacity-70'>{`${type}:`} </span>
                                    {href ? (
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-acumin-semi-cond text-brand-text hover:opacity-90 underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                                        >
                                            {contact}
                                        </a>
                                    ) : (
                                        <span className='font-acumin-semi-cond'>{contact}</span>
                                    )}
                                </span>
                            );
                        })}
                    </span>
                )}
            />
            <div className='w-fit'>
                <Link href={landingContents[lang]['lets-talk-button'].link}>
                    <UnderlineButton>
                        {landingContents[lang]['lets-talk-button'].name}
                    </UnderlineButton>
                </Link>
            </div>
        </div>

    );
};

export default Article;