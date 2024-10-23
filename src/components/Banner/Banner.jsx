

const Banner = () => {
    return (
        <div className="bg-cover bg-no-repeat rounded-3xl w-[200px] md:w-full h-full md:h-[35.4rem] mb-10 lg:mb-20 flex flex-col justify-center items-center" style={{backgroundImage: 'url(https://i.ibb.co.com/3kYtv41/banner.png)'}}>

            <h1 className="text-[30px] md:text-[52px] font-bold text-white w-full md:w-[900px] text-center mb-6">Discover an exceptional cooking class tailored for you!</h1>
            <p className="text-white w-full md:w-[935px] text-center mb-8 ">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="space-x-7">
                <button className="btn rounded-full bg-[#0BE58A] text-black text-xl font-semibold border-none">Explore Now</button>
                <button className="btn rounded-full bg-transparent text-white text-xl font-semibold">Our Feedback</button>
            </div>
            
        </div>
    );
};

export default Banner;