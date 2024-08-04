import image1 from"../../assets/download.jpeg"
import image2 from"../../assets/images (1).jpeg"
import image3 from"../../assets/download (1).jpeg"
import image4 from"../../assets/download (2).jpeg"
import image5 from"../../assets/download (3).jpeg"
import image6 from"../../assets/images (2).jpeg"
import { FaArrowRightLong } from "react-icons/fa6";
const datas =[
    {
        id:1,
        name:"Burrito Wrap",
        price:"4.49",
        img:image1
    },
    {
        id:2,
        name:"Italian Pizza ",
        price:"7.49",
        img:image2
    },
    {
        id:3,
        name:"Masala Pasta",
        price:"5.99",
        img:image3
    },
    {
        id:4,
        name:"Chicken Nuggets",
        price:"4.49",
        img:image4
    },
    {
        id:5,
        name:"Fresh Pan Pizza ",
        price:"6.49",
        img:image6
    },
    {
        id:6,
        name:"Dum Beriani",
        price:"8.49",
        img:image5
    },
]
const Menu = () => {
    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* header */}
            <div className="py-12 space-y-1">
                <p className="text-red-500 text-xl">OUR MENU</p>
                <h1 className="text-4xl md:text-6xl font-bold">Menu That Always <br /> Make You Fall In Love</h1>

            </div>
            {/* currusol */}
            <div className="carousel carousel-center rounded-box space-x-4 p-4">
            {
                datas.map((data) => <div key={data.id} className="carousel-item">
                    <div className="space-y-2">
                        <img src={data.img} alt="" className="w-[300px] h-[300px] rounded-xl"/>
                        <div className="space-y-2 px-4">
                        <div className="">
                        <h1 className="text-2xl font-bold">{data.name}</h1>
                        <h1 className="text-3xl font-bold"> <span className="text-xl text-yellow-400">$</span> {data.price}</h1>
                        </div>
                        <button className="btn bg-transparent border-none hover:text-red-500 hover:bg-transparent text-lg ">Order Now <FaArrowRightLong/> </button>
                        </div> 
                    </div>

              </div>)
            }        
            </div>
        </div>
    );
};

export default Menu;