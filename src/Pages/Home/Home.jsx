import Banner from "../../components/Banner/Banner";
import FollowOnInstagram from "../../components/FollowOnInstagram/FollowOnInstagram";
import Quality from "../../components/Quality/Quality";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Quality></Quality>
            <div className="my-28">
                <FollowOnInstagram></FollowOnInstagram>
            </div>
        </div>
    );
};

export default Home;