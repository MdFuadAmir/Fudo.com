import image from"../../assets/header.png"
import bike from"../../assets/delivery-bike.png"

const Whyfudo = () => {
    return (
        <div className="bg-gradient-to-b from-red-200 to-white py-12">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto px-4">
                <div className="w-full md:w-1/2">
                    <div className="flex justify-center items-center gap-4 bg-red-300 px-6 py-1 rounded-full w-fit mb-6">
                        <p className="text-xl text-red-500">More than Faster</p>
                        <img src={bike} alt="" className="w-[30px] h-[30px]"/>
                    </div>
                    <div className=" space-y-6">
                        <h1 className="text-5xl md:text-7xl font-bold">Be The Fastest In Delivering Your <span className="text-red-600">Food</span></h1>
                        <p>Our job is to filling your tummy with delicious food and with fast and free delivery.</p>
                        <div>
                            <button className="btn px-6 text-white bg-red-500 hover:bg-red-400 rounded-full">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={image} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Whyfudo;