import React from 'react';
import s from './fixed.module.scss';
import AppToolTip from '@/components/commons/FixedLayer/AppToolTip';
import Image from 'next/image';

import Logo from '@/public/logo.svg';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { NavBarBottom } from '@/components/commons/FixedLayer/NavBarBottom';

const FixedLayer = () => {
  const links = ['About', 'FAQs', 'Contact Us'];

  return (
    <div className={s.container}>
      <nav className={s.nav_top}>
        <div className={s.logo}>
          <Image src={Logo} alt="app logo" />
        </div>

        <Typography noWrap className={s.meet} variant="subtitle2">
          MEET D EXPERTS
        </Typography>

        <div className={s.links}>
          {links.map((link) => (
            <Link href="/" key={link}>
              <a>{link}</a>
            </Link>
          ))}
        </div>
      </nav>

      <NavBarBottom />

      <AppToolTip />
    </div>
  );
};

export default FixedLayer;
