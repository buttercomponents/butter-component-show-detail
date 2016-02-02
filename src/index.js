import React, { Component } from 'react';

//import i18n from './language';

import CloseButton from './CloseButton';
import ShowInfo from 'butter-component-show-info';
import ShowHeader from 'butter-component-show-header';

import style from './styl/theme.styl';

let ShowDetail = (props) => (
    <div style={{backgroundColor: 'black'}}>
        <div className={style['container']}>
            <CloseButton />
            <ShowHeader {...props}/>
            <ShowInfo {...props}/>
        </div>
    </div>
)

export default ShowDetail;
