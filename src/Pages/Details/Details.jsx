import { Link, useLoaderData } from "react-router-dom";
import background from '/images/more/11.png'
import { FaArrowLeft } from "react-icons/fa";

const Details = () => {
    const coffee = useLoaderData();
    const { name, chef, supplier, taste, category, details, origin, photo } = coffee;

    return (
        <div style={{ backgroundImage: `url(${background})` }} className="pt-12 pb-28 bg-no-repeat bg-cover">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-max">
                    <Link to='/'><button className="font-rancho text-3xl text-[#374151] flex items-center gap-4 mb-12 hover:bg-[#D2B48C] rounded-lg py-4 px-2"><span className="text-2xl"><FaArrowLeft /></span><span>Back to home</span></button></Link>
                </div>
                <div className="bg-[#F4F3F0] rounded-md py-16 px-28 flex gap-28 items-center">
                    <div className="">
                        <img className="" src={photo} alt="" />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-4xl font-rancho text-[#331A15] mb-6">Niceties</h3>
                        <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Name: </span> <span className="text-[#5C5B5B]">{name}</span></p>
                        <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Chef: </span> <span className="text-[#5C5B5B]">{chef}</span></p>
                        <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Supplier: </span> <span className="text-[#5C5B5B]">{supplier}</span></p>
                        <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Origin: </span> <span className="text-[#5C5B5B]">{origin}</span></p>
                        <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Taste: </span> <span className="text-[#5C5B5B]">{taste}</span></p>
                        <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Category: </span> <span className="text-[#5C5B5B]">{category}</span></p>
                        <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Details: </span> <span className="text-[#5C5B5B]">{details}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;