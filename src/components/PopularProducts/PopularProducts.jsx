import { Link, useLoaderData } from "react-router-dom";
import { BiCoffee } from "react-icons/bi";
import PopularProductsCard from "../PopularProductsCard/PopularProductsCard";
import background from '/images/more/1.png'

const PopularProducts = () => {
    const coffees = useLoaderData();
    console.log(coffees);

    return (
        <div style={{backgroundImage: `url(${background})`}} className="bg-cover bg-no-repeat object-contain min-h-[1210px]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <p className="text-xl text-[#1B1A1A] mb-2">--- Sip & Savor ---</p>
                    <h2 className="font-rancho text-[55px] text-[#331A15] mb-4">Our Popular Products</h2>
                    <Link to='/addCoffee'><button className="btn rounded-md font-rancho text-2xl text-white w-auto h-auto min-h-max py-2 px-5 bg-[#E3B577] hover:bg-transparent border-2 border-transparent hover:border-[#331A15] hover:text-[#331A15]">Add Coffee <span className="text-2xl text-[#331A15]"><BiCoffee /></span></button></Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        coffees.map(coffee => <PopularProductsCard key={coffee._id} coffee={coffee}></PopularProductsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;