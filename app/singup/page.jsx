import Link from 'next/link';
import React from 'react';
import SingupPage from '../Components/SingupPage';


const singup = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <SingupPage />
            <Link href='/singin'>
                Have  accout ?
                singin</Link>
        </div>
    );
};

export default singup;