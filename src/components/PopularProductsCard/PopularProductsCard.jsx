import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoPencilSharp } from "react-icons/io5";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const PopularProductsCard = ({ coffee, handleViewDetails, handleDelete }) => {
    const { _id, name, chef, price, photo } = coffee;

    return (
        <div className="flex justify-between items-center bg-[#F5F4F1] glass px-12 py-8 gap-6 rounded-lg">
            <div>
                <img src={photo} alt="" />
            </div>
            <div className="space-y-3">
                <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Name: </span> <span className="text-[#5C5B5B]">{name}</span></p>
                <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Chef: </span> <span className="text-[#5C5B5B]">{chef}</span></p>
                <p className="text-xl"><span className="font-semibold text-[#1B1A1A]">Price: </span> <span className="text-[#5C5B5B]">${price}</span></p>
            </div>
            <div className="flex flex-col gap-4">
                <Link to={`/details/${_id}`}><button onClick={() => handleViewDetails(_id)} className="btn w-auto max-w-max h-auto min-h-max text-xl text-white p-2 rounded-md bg-[#D2B48C]"><FaEye /></button></Link>
                <button className="btn w-auto max-w-max h-auto min-h-max text-xl text-white p-2 rounded-md bg-[#3C393B]"><IoPencilSharp /></button>
                <button onClick={() => handleDelete(_id)} className="btn w-auto max-w-max h-auto min-h-max text-xl text-white p-2 rounded-md bg-[#EA4744]"><MdDelete /></button>
            </div>
        </div>
    );
};

PopularProductsCard.propTypes = {
    coffee: PropTypes.object.isRequired,
    handleViewDetails: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default PopularProductsCard;