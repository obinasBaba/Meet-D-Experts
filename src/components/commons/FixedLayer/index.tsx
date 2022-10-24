import React from 'react';
import s from './fixed.module.scss';
import AppToolTip from '@/components/commons/FixedLayer/AppToolTip';
import Image from 'next/image';

import Logo from '@/public/logo.svg';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';

function NavBarBottom() {
  const links = [
    'Sessions',
    'Directory',
    'Submit a Question',
    'Meet D Team',
    'Archives',
  ];

  return (
    <nav className={s.nav_bottom}>
      {links.map((link) => (
        <Button key={link} variant='contained'>
          <Link href="/">
            <a>{link}</a>
          </Link>
        </Button>
      ))}
    </nav>
  );
}

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
