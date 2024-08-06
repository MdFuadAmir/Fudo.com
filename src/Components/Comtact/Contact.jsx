import imagr from"../../assets/download.png"

const Contact = () => {
    return (
            <div className="bg-red-100">
        <div className="max-w-6xl mx-auto px-4 py-12">

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                <div>
                    <p className="text-red-500 font-medium text-xl mb-4">DOWNLOAD APP</p>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Get Started With Fudo Today!</h1>
                    <p className="text-gray-500">Discover food wherever and whenever you want and get your food delivered on time, everytime.</p>
                    <button className="btn bg-red-500 hover:bg-red-400 text-white px-8 rounded-full mt-8">Get The App</button>
                </div>
                <div>
                <img src={imagr} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;
