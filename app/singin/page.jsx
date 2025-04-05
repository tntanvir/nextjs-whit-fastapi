

import Link from 'next/link';
import React from 'react';
import Loginpage from '../Components/Loginpage';

const singin = () => {
    return (
        <div className='min-h-screen flex gap-2 flex-col justify-center items-center'>
            <Loginpage />
            <div>
                <Link href='/singup'>
                    Have no accout ?
                    singup</Link>
            </div>

            <div>
                <Link href='/'>
                    back to Home</Link>
            </div>
        </div>
    );
};

export default singin;