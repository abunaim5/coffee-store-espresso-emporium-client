import { Link, useLoaderData } from "react-router-dom";
import { BiCoffee } from "react-icons/bi";
import PopularProductsCard from "../PopularProductsCard/PopularProductsCard";
import background from '/images/more/1.png'
import { useState } from "react";
import Swal from "sweetalert2";

const PopularProducts = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);

    const handleViewDetails = id => {
        fetch(`http://localhost:5000/coffees/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingCoffees = coffees.filter(coffee => coffee._id !== id);
                            setCoffees(remainingCoffees);
                        }
                        console.log(data);
                    })
            }
        });
    }

    return (
        <div style={{ backgroundImage: `url(${background})` }} className="bg-cover bg-no-repeat object-contain min-h-[1210px]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <p className="text-xl text-[#1B1A1A] mb-2">--- Sip & Savor ---</p>
                    <h2 className="font-rancho text-[55px] text-[#331A15] mb-4">Our Popular Products</h2>
                    <Link to='/addCoffee'><button className="btn rounded-md font-rancho text-2xl text-white w-auto h-auto min-h-max py-2 px-5 bg-[#E3B577] hover:bg-transparent border-2 border-transparent hover:border-[#331A15] hover:text-[#331A15]">Add Coffee <span className="text-2xl text-[#331A15]"><BiCoffee /></span></button></Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        coffees.map(coffee => <PopularProductsCard
                            key={coffee._id}
                            coffee={coffee}
                            handleViewDetails={handleViewDetails}
                            handleDelete={handleDelete}
                        ></PopularProductsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;