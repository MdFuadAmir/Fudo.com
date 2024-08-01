import image1 from"../../assets/service-1.jpg"
import image2 from"../../assets/service-2.jpg"
import image3 from"../../assets/service-3.jpg"
const datalist = [
    {
        id:1,
        name:"Easy To Order",
        discription:"You only need a few steps in ordering food",
        img: image1
    },
    {
        id:2,
        name:"Fastest Delivery",
        discription:"Delivery that is always ontime even faster",
        img: image2
    },
    {
        id:3,
        name:"Best Quality",
        discription:"Not only fast for us quality is also number one",
        img: image3
    },
]
const Services = () => {
    return (
        <div className="py-12 max-w-6xl mx-auto">
            {/* header section */}
            <div className="text-center space-y-2">
                <p className="text-red-600 font-medium font-mono">WHAT WE SERVE</p>
                <h1 className="text-6xl font-bold">Your Favourite Food <br /> Delivery Partner</h1>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    datalist.map((data) => <div key={data.id} className="p-6 items-center text-center flex flex-col space-y-3">
                        <img src={data.img} alt="" className="w-[200px]"/>
                        <h1 className="text-3xl font-bold">{data.name}</h1>
                        <p className="text-gray-400 px-12">{data.discription}</p>

                    </div>)
                }

            </div>
        </div>
    );
};

export default Services;
