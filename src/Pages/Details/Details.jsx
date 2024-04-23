import { Link } from "react-router-dom";
import background from '../../../public/images/more/11.png'
import { FaArrowLeft } from "react-icons/fa";

const Details = () => {
    return (
        <div style={{backgroundImage: `url(${background})`}} className="pt-12 pb-28 bg-no-repeat bg-cover">
            <div className="max-w-7xl mx-auto">
                <Link to='/'><button className="font-rancho text-3xl text-[#374151] flex items-center gap-4 mb-12 hover:bg-[#D2B48C] rounded-lg py-4 px-2"><span className="text-2xl"><FaArrowLeft /></span><span>Back to home</span></button></Link>
                <div className="bg-[#F4F3F0] rounded-md py-16 px-28 flex gap-28 items-center">
                    <div className="">
                        <img className="h-[455px]" src="https://i.postimg.cc/wvr6xsf5/5.png" alt="" />
                    </div>
                    <div className="space-y-3">
                       <h3 className="text-4xl font-rancho text-[#331A15] mb-6">Niceties</h3>
                       <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Name: </span> <span className="text-[#5C5B5B]">Americano Coffee</span></p>
                       <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Chef: </span> <span className="text-[#5C5B5B]">Mr. Matin Paul</span></p>
                       <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Supplier: </span> <span className="text-[#5C5B5B]">Cappu Authorizer</span></p>
                       <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Taste: </span> <span className="text-[#5C5B5B]">Sweet and hot</span></p>
                       <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Category: </span> <span className="text-[#5C5B5B]">Americano</span></p>
                       <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Details: </span> <span className="text-[#5C5B5B]">Espresso with hot water</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;