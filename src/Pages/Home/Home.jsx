import FollowOnInstagram from "../../components/FollowOnInstagram/FollowOnInstagram";
import Quality from "../../components/Quality/Quality";

const Home = () => {
    return (
        <div>
            <Quality></Quality>
            <div className="mt-28">
                <FollowOnInstagram></FollowOnInstagram>
            </div>
        </div>
    );
};

export default Home;