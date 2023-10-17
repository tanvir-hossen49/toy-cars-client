import SectionTitle from "../../components/SectionTitle";
import img1 from '../../assets/about-us-1.webp'
import img2 from '../../assets/online-store.webp'
import img3 from '../../assets/delevary.webp'
import img4 from '../../assets/support.webp'

const AboutUs = () => {
    return (
        <div className="my-container">
            <SectionTitle title='About Us'/>
            <h2 className="text-center text-xl font-medium md:text-2xl">We make your children happier <br/> with the best toys</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                <div className="text-center space-y-6 py-6 border rounded-xl bg-white">
                   <div>
                    <img src={img1} alt="" className="mx-auto"/>
                   </div>
                   <div>
                    <h4 className="text-2xl font-semibold mb-2">Big Selection</h4>
                    <p className="text-lg">The widest toy range</p>  
                   </div>
                </div>

                <div className="text-center space-y-6 py-6 border rounded-xl bg-white">
                   <div>
                    <img src={img2} alt="" className="mx-auto"/>
                   </div>
                   <div>
                    <h4 className="text-2xl font-semibold mb-2">Big Selection</h4>
                    <p className="text-lg">The widest toy range</p>  
                   </div>
                </div>

                <div className="text-center space-y-6 py-6 border rounded-xl bg-white">
                   <div>
                    <img src={img3} alt="" className="mx-auto"/>
                   </div>
                   <div>
                    <h4 className="text-2xl font-semibold mb-2">Big Selection</h4>
                    <p className="text-lg">The widest toy range</p>  
                   </div>
                </div>

                <div className="text-center space-y-6 py-6 border rounded-xl bg-white">
                   <div>
                    <img src={img4} alt="" className="mx-auto"/>
                   </div>
                   <div>
                    <h4 className="text-2xl font-semibold mb-2">Big Selection</h4>
                    <p className="text-lg">The widest toy range</p>  
                   </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;