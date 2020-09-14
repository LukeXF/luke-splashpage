import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faLocationArrow as faLightLocationArrow,
} from '@fortawesome/pro-light-svg-icons';

import {
     faAlignJustify, faThLarge,
} from '@fortawesome/pro-solid-svg-icons';

library.add(faLightLocationArrow, faAlignJustify, faThLarge);

const modal = props => {
    return (
        <div className={`app`}>
            {props.children}
        </div>
    );
};

export default modal;
