import React from 'react';
import s from './fixed.module.scss';
import AppToolTip from '@/components/commons/FixedLayer/AppToolTip';

const FixedLayer = () => {
  return (
    <div className={s.container}>
      <nav>
        <div></div>
        <div></div>
        <div></div>
      </nav>

      <AppToolTip />
    </div>
  );
};

export default FixedLayer;
