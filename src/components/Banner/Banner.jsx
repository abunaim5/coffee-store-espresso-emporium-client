import banner from '/images/more/3.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})` }} className='min-h-[800px] bg-cover bg-no-repeat bg-center object-contain flex items-center'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2'>
                <div></div>
                <div>
                    <h1 className='font-rancho text-5xl text-white mb-4'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='text-white'>It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='btn w-auto h-auto min-h-max mt-8 font-rancho text-2xl text-[#242222] hover:text-white py-2 px-5 rounded-none bg-[#E3B577] hover:bg-transparent border border-transparent hover:border-white'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;