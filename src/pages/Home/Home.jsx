import CardSection from "../../components/CardSection/CardSection";
import CategorySection from "../../components/CategorySection/CategorySection";
import Offer from "../../components/Offer/Offer";
import Slider from "../../components/Slider/Slider";



const Home = () => {

  return (
    <div>
      <div className="w-4/5 mx-auto">
      <Slider></Slider>
      </div>
      
       <CardSection></CardSection>
       <div className="w-4/5 mx-auto mb-10">

       <h2 className="text-center mb-10 mt-10 uppercase text-cyan-500 text-[20px]"> Category Section </h2>
       <CategorySection>

       </CategorySection>

        


       </div>
       <div className="w-4/5 mx-auto mb-10">
        <div className="hero bg-base-200 rounded-lg">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Wait UpCamming .....</h1>
              <p className="py-6">Very soon in Apande quite a few choice jute and wooden craft products are coming in the market stay with us so that I can bring you quality quality products........</p>
              {/*<button className="btn btn-primary">Get Started</button>*/}
            </div>
          </div>
        </div>

       </div>

       <div className="w-4/5 mx-auto mb-10">

       {/*<h2 className="text-center mb-10 mt-10 uppercase text-cyan-500 text-[20px]">Discount Offer</h2>*/}
       {/*<Offer></Offer>*/}


        


       </div>



    </div>
  );
};

export default Home;