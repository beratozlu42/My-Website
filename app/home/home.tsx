import Header from "./sections/header/header";
import Main from "./sections/main/main";

const home = () => {
    return (
        <div className="max-w-[600px] mx-auto">
            <div className="my-30 p-5 md:p-0">
                <Header />
                <Main />
            </div>
        </div>
    );
};

export default home;