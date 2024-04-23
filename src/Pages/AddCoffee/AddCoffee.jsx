import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddCoffee = () => {
    return (
        <div className="mt-12 mb-28">
            <div className="max-w-7xl mx-auto">
                <Link to='/'><button className="font-rancho text-3xl text-[#374151] flex items-center gap-4 mb-12"><span className="text-2xl"><FaArrowLeft /></span><span>Back to home</span></button></Link>
                <div className="bg-[#F4F3F0] rounded-md py-16 px-28">
                    <div className="text-center mb-8">
                        <h2 className="text-[45px] font-rancho text-[#374151] mb-4">Add New Coffee</h2>
                        <p className="text-lg text-[#1B1A1AB3] max-w-[890px] mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <div>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-xl font-semibold text-[#1B1A1ACC] mb-4">Name</p>
                                    <input className="w-full p-3 outline-none rounded-md" type="text" name="name" id="" placeholder="Enter coffee name" />
                                </div>
                                <div>
                                    <p className="text-xl font-semibold text-[#1B1A1ACC] mb-4">Chef</p>
                                    <input className="w-full p-3 outline-none rounded-md" type="text" name="name" id="" placeholder="Enter coffee chef" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-xl font-semibold text-[#1B1A1ACC] mb-4">Supplier</p>
                                    <input className="w-full p-3 outline-none rounded-md" type="text" name="name" id="" placeholder="Enter coffee supplier" />
                                </div>
                                <div>
                                    <p className="text-xl font-semibold text-[#1B1A1ACC] mb-4">Taste</p>
                                    <input className="w-full p-3 outline-none rounded-md" type="text" name="name" id="" placeholder="Enter coffee taste" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-xl font-semibold text-[#1B1A1ACC] mb-4">Category</p>
                                    <input className="w-full p-3 outline-none rounded-md" type="text" name="name" id="" placeholder="Enter coffee category" />
                                </div>
                                <div>
                                    <p className="text-xl font-semibold text-[#1B1A1ACC] mb-4">Details</p>
                                    <input className="w-full p-3 outline-none rounded-md" type="text" name="name" id="" placeholder="Enter coffee details" />
                                </div>
                            </div>
                            <div className="">
                                <div>
                                    <p className="text-xl font-semibold text-[#1B1A1ACC] mb-4">Photo</p>
                                    <input className="w-full p-3 outline-none rounded-md" type="text" name="name" id="" placeholder="Enter photo URL" />
                                </div>
                            </div>
                            <div className="">
                                <div>
                                    <input className="w-full p-3 outline-none rounded-md btn h-auto min-h-max bg-[#D2B48C] border-2 border-[#331A15] text-2xl font-rancho text-[#331A15]" type="submit" id="" value="Add Coffee" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;