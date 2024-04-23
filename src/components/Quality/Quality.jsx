import icon1 from '/images/icons/1.png'
import icon2 from '/images/icons/2.png'
import icon3 from '/images/icons/3.png'
import icon4 from '/images/icons/4.png'

const Quality = () => {
    return (
        <div className='bg-[#ECEAE3]'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14'>
                <div className="">
                    <img className='w-[70px] mb-4' src={icon1} alt="" />
                    <h4 className="font-rancho text-4xl text-[#331A15]">Awesome Aroma</h4>
                    <p className="text-[#1B1A1A] mt-2">You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className="">
                    <img className='w-[70px] mb-4' src={icon2} alt="" />
                    <h4 className="font-rancho text-4xl text-[#331A15]">High Quality</h4>
                    <p className="text-[#1B1A1A] mt-2">We served the coffee to you maintaining the best quality</p>
                </div>
                <div className="">
                    <img className='w-[70px] mb-4' src={icon3} alt="" />
                    <h4 className="font-rancho text-4xl text-[#331A15]">Pure Grades</h4>
                    <p className="text-[#1B1A1A] mt-2">The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className="">
                    <img className='w-[70px] mb-4' src={icon4} alt="" />
                    <h4 className="font-rancho text-4xl text-[#331A15]">Proper Roasting</h4>
                    <p className="text-[#1B1A1A] mt-2">Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Quality;