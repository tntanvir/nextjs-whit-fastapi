import React from 'react';

const About = () => {
    return (
        <div className="relative w-full h-[400px]">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://furry-cares.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-bg.2b629c2a.jpg&w=3840&q=75')`
                }}
            ></div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative flex justify-center items-center h-full">
                <h1 className="text-white text-3xl font-bold">About Us</h1>
            </div>
            <div className='container mx-auto'>
                <h1>Making biking easy</h1>
                <h1>Our Mission</h1>
                <p>Our mission is to build an inclusive and compassionate platform that serves as a hub for pet owners around the world. We are dedicated to providing reliable, expert advice on pet care, covering everything from nutrition and grooming to health and exercise, ensuring that all pets live their best lives. Alongside practical care tips, we aim to share heartwarming stories that highlight the unique bond between humans and their pets, fostering a deep appreciation for pet companionship. Through this platform, we seek to inspire a community where sharing, learning, and celebrating the love for pets becomes a daily joy, enabling pet owners to make informed decisions and enrich their relationships with their furry friends.

                    Our vision is to become the go-to global platform for pet care, where every pet owner feels empowered with the knowledge and resources they need to provide the highest quality of care for their pets. We aspire to cultivate a space where both novice and experienced pet owners can come together, share insights, and uplift one another through inspiring stories, expert tips, and a sense of belonging. By combining education, empathy, and community, we envision a world where pets everywhere are loved, cherished, and cared for in ways that enhance their well-being and strengthen the human-animal connection.</p>
            </div>
        </div>
    );
};

export default About;
