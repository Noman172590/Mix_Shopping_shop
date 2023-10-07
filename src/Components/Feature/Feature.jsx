import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = (props) => {
    
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className="h-6 w-10 text-green-500" /><span className='pl-1 '>{props.product}</span>
        </div>
    );
};

export default Feature;