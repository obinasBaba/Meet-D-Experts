import React, { useEffect, useRef, useState } from 'react';
import s from './sessionpage.module.scss';
import {
  Button,
  Chip,
  IconButton,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import TodayCard from '@/components/TodayCard';
import UpcomingCard from '@/components/UpcomingCard';
import { AnimatePresence, motion } from 'framer-motion';

import Js from '@/public/Sessions-js.png';
import Git from '@/public/Sessions-github.png';
import Ux from '@/public/Sessions-ux.png';
import 'swiper/css';
import clsx from 'clsx';

const tags = [
  { img: Git, label: '#Git Devs' },
  { img: Ux, label: '#UX Design' },
  { img: Js, label: '#Javascirpt' },
];

const searchVariants = {
  initial: {
    // opacity: 0,
    x: '-100%',
    scale: 0.4,
  },
  animate: {
    x: 0,
    scale: 1,
  },
  exit: {
    x: '-100%',
    scale: 0.5,
    transition: {
      delay: 0.1,
      duration: 0.5,
    },
  },
};

const SessionPage = () => {
  const [show, setShow] = useState(true);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('search: ', searchRef.current);
  }, []);

  return (
    <motion.div
      className={s.container}
      drag="x"
      // dragConstraints={{ left: 0, right: 500 }}
      dragSnapToOrigin
      // dragPropagation
    >
      <motion.div className={clsx([s.wrapper, 'track'])} layout>
        <AnimatePresence mode="popLayout">
          {show && (
            <motion.div
              className={s.search}
              ref={searchRef}
              variants={searchVariants}
              transition={{ duration: 0.5 }}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className={s.search_wrapper}>
                <Typography variant="h2" className={s.title}>
                  Sessions
                </Typography>

                <TextField
                  placeholder="search for event..."
                  type="text"
                  variant="filled"
                  className={s.search_field}
                  InputProps={{
                    startAdornment: (
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ margin: '0 1rem' }}
                      >
                        <path
                          d="M0.5 5.20196C0.5 2.60008 2.58538 0.5 5.14659 0.5C6.37721 0.5 7.55852 0.99407 8.43034 1.87528C9.30235 2.75667 9.79319 3.95321 9.79319 5.20196C9.79319 7.80385 7.7078 9.90393 5.14659 9.90393C2.58538 9.90393 0.5 7.80385 0.5 5.20196Z"
                          stroke="#fff"
                        />
                        <path
                          d="M11.7408 10.6299L10.208 9.39258C9.97609 9.16223 9.60433 9.16223 9.37242 9.39258C9.25216 9.5137 9.18457 9.67824 9.18457 9.84983C9.18457 10.0214 9.25216 10.186 9.37242 10.3071L10.6444 11.7649C10.9545 12.0784 11.4573 12.0784 11.7674 11.7649C12.0775 11.4515 12.0775 10.9433 11.7674 10.6299H11.7408Z"
                          fill="#fff"
                        />
                      </svg>
                    ),
                  }}
                />

                <Typography variant="h3" className={s.desc}>
                  Here are some tailored events we <br />
                  made, <span>just for you.</span>
                </Typography>

                <div className={s.social}>
                  {tags.map(({ label, img }) => (
                    <div key={label} className={s.social_item}>
                      <div className={s.social_logo}>
                        <Image src={img} alt="social logo" />
                      </div>

                      <Chip
                        variant="filled"
                        clickable
                        size="medium"
                        label={label}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            className={s.events}
            layout
            key="events"
            transition={{
              layout: {
                duration: 0.7,
                ease: 'easeInOut',
              },
            }}
          >
            {/*<SvgIcon >*/}
            <svg
              width="20"
              height="26"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={s.btn}
              onClick={() => setShow(!show)}
            >
              <path
                d="M8.5 15L1.5 8L8.5 1"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <TodayCard />

            <div className={s.upcoming}>
              <Typography variant="h4" gutterBottom>
                Upcoming Events
              </Typography>

              <div className={s.upcoming_list}>
                {Array.from(new Array(3)).map((i, idx) => (
                  <UpcomingCard key={idx} idx={idx} />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default SessionPage;
