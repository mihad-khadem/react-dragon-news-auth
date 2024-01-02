import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12" to="/">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet.....</Link>
                <Link className="mr-12" to="/">Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine.....</Link>
                <Link className="mr-12" to="/">U.S. concerned about India's participation in Russia military exercises.....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;