import logo from '/images/more/logo1.png';
import background from '/images/more/15.jpg';

const Header = () => {
    return (
        <div style={{backgroundImage: `url(${background})`}} className="flex items-center justify-center py-6 bg-cover bg-center object-contain bg-no-repeat">
            <div className="flex items-center gap-4">
                <img className='w-[75px]' src={logo} alt="" />
                <h1 className="font-rancho text-6xl text-[#FFF]">Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Header;