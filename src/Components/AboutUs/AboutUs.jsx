import client from"../../assets/client.png"
import user from"../../assets/user.jpg"

const AboutUs = () => {
    return (
        <div className="max-w-6xl mx-auto py-12 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                <div>
                    <img src={client} alt="" />
                </div>
                <div>
                    <p className="text-red-500 font-medium text-xl mb-4">WHAT THEY SAY</p>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">What Our Customer Say About Us</h1>
                    <p className="text-gray-500 text-lg">`Fudo is simply outstanding! The variety and deliciousness of their meals are unparalleled, offering something for every palate. What sets Fudo apart is their exceptional service. The delivery is impressively fast, ensuring your food arrives hot and fresh.`</p>
                    <div className="flex gap-4 items-center mt-8">
                        <div>
                            <img src={user} alt="" className="w-16 h-16 rounded-full"/>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Theresa Jordan</h1>
                            <p className="text-gray-500">Food Enthusiast</p>
                        </div>
                    </div>
                    <div className="rating gap-1 mt-6">
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400"/>
  <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
  <p className="px-4">4.8</p>
</div>
                </div>
            </div>
            
        </div>
    );
};

export default AboutUs;