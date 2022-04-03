import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, ornament }) => {
    return (
        <div>
            <h3>Myselef</h3>
            <p><small>House:{house}</small></p>
            <Special></Special>
        </div>
    );
};

export default Myself;