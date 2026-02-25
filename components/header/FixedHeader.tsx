"use client"
import { FC, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Logo from './widget/Logo';
import LanguageToggle from './widget/LanguageToggle';
import HamburgerMenu from './widget/HamburgerMenu';
import NavMenu from './widget/NavMenu';
import SpacingLgContainer from '../utilities/containers/SpacingLgContainer';
import CustomLandingAnimation from '../utilities/animations/landing/CustomLandingAnimation';

const LOGO_TRANSITION = { duration: 0.6, ease: [0.33, 1, 0.68, 1] };

const FixedHeader: FC = () => {
  const [navMenuActive, setNavMenuActive] = useState(false);
  return (
    <header
      className="
        header-bar
        fixed
        top-0
        left-0
        right-0
        z-30
        flex
        items-center
        pointer-events-none
        bg-brand-bg/90
        backdrop-blur-md
        border-b
        border-brand-border/70
      "
    >
      <CustomLandingAnimation
        className="
          w-full
          relative
          py-[clamp(20px,calc(((100vw-1024px)/896*12)+20px),32px)]
          flex
          items-center
        "
        styleFrom={{
          opacity: 0,
          transform: "translateY(-20px)"
        }}
        styleTo={{
          opacity: 1,
          transform: "translateY(0px)"
        }}
        duration={0.6}
      >
        <div
          className="absolute inset-0 flex items-center pointer-events-none"
          aria-hidden
        >
          <motion.div
            className="flex items-center pointer-events-auto"
            initial={false}
            animate={{
              left: navMenuActive ? 'var(--header-padding-x)' : '50%',
              x: navMenuActive ? 0 : '-50%',
            }}
            transition={LOGO_TRANSITION}
            style={{ position: 'absolute', top: 0, bottom: 0 }}
          >
            <Link
              href="/"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg rounded-sm"
              aria-label="FADEZY home"
            >
              <Logo size={navMenuActive ? 'sm' : 'lg'} />
            </Link>
          </motion.div>
        </div>
        <SpacingLgContainer className="flex justify-end w-full">
          <div className="flex items-center gap-4 pointer-events-auto">
            <LanguageToggle />
            <HamburgerMenu active={navMenuActive} onClick={() => setNavMenuActive((old) => !old)} />
          </div>
          <NavMenu navMenuActive={navMenuActive} SetNavMenuActive={setNavMenuActive} />
        </SpacingLgContainer>
      </CustomLandingAnimation>
    </header>
  );
};

export default FixedHeader;