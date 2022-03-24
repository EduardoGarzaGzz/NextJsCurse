import { FC } from 'react';

export const DarkLayout: FC = ( { children } ) => {
    return (
        <div style={ {
            background  : 'rgba(0,0,0,0.3)',
            borderRadius: '5px',
            padding     : '10px'
        } }>
            { children }
        </div>
    );
};
