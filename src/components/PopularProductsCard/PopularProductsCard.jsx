import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoPencilSharp } from "react-icons/io5";

const PopularProductsCard = () => {
    return (
        <div className="flex justify-between items-center bg-[#F5F4F1] glass px-12 py-8 gap-6 rounded-lg">
            <div>
                <img src="https://i.postimg.cc/7Z1Y1hhD/4.png" alt="" />
            </div>
            <div className="space-y-3">
                <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Name: </span> <span className="text-[#5C5B5B]">Americano Coffee</span></p>
                <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Chef: </span> <span className="text-[#5C5B5B]">Mr. Matin Paul</span></p>
                <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Price: </span> <span className="text-[#5C5B5B]">$3.00</span></p>
            </div>
            <div className="flex flex-col gap-4">
                <button className="btn w-auto max-w-max h-auto min-h-max text-xl text-white p-2 rounded-md bg-[#D2B48C]"><FaEye /></button>
                <button className="btn w-auto max-w-max h-auto min-h-max text-xl text-white p-2 rounded-md bg-[#3C393B]"><IoPencilSharp /></button>
                <button className="btn w-auto max-w-max h-auto min-h-max text-xl text-white p-2 rounded-md bg-[#EA4744]"><MdDelete /></button>
            </div>
        </div>
    );
};

export default PopularProductsCard;