import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import canada from "../../assets/canada.jpeg";
import australia from "../../assets/australia.jpg";
import canada_badge from "../../assets/canada_badge.png";
import { useNavigate } from "react-router-dom";
import as_b from "../../assets/as_b.png";
import uk from "../../assets/uk.jpg";
import eu from "../../assets/eu.jpeg";
import eu_badge from "../../assets/eu_badge.png";
import uk_badge from "../../assets/uk_badge.png";

const Countries = () => {
    const navigate = useNavigate();

    const countries = [
        {
            name: 'Canada',
            image: canada,
            badge: canada_badge,
            link:"/immigration/canada"
        },
        {
            name: 'Australia',
            image: australia,
            badge: as_b,
            link:"/immigration/australia"
        },
        {
            name: 'UK',
            image: uk,
            badge: uk_badge,
            link:"/immigration/uk"
        },
        {
            name: 'Europe',
            image: eu,
            badge: eu_badge,
            link: "/immigration/europe"
        },
    ]

    const handleImageClick = (link:any) => {
        navigate(link);
    }

    return (
        <div>
            <div className='py-8 w-full md:bg-sky-950 flex flex-col items-center justify-center'>
                <h2 className=' md:text-white text-sky-950 md:text-3xl text-2xl font-medium'>
                    The countries we support
                </h2>
            </div>
            <div className='flex flex-wrap justify-center px-40 py-10'>
                {countries.map((country, index) => {
                    const controls = useAnimation();
                    const { ref, inView } = useInView({
                        threshold: 0.7
                    });
                    const direction = index % 2 === 0 ? -100 : 100;

                    if (inView) {
                        controls.start("visible");
                    }

                    return (
                        <motion.div
                            ref={ref}
                            animate={controls}
                            initial="hidden"
                            whileHover={{ scale: 1.1 }}
                            variants={{
                                visible: { y: 0 },
                                hidden: {  y: direction }
                            }}
                            transition={{ duration: 1 }}
                            key={index}
                            className='relative m-4'
                        >
                            <div className="relative w-[240px] h-[325px] rounded-2xl overflow-hidden">
                                <div onClick={() => handleImageClick(country.link)} className="flex items-end p-5 justify-center absolute bg-black w-full h-full bg-opacity-20 cursor-pointer" >
                                    <p className=" text-white text-xl font-medium">
                                        {country.name}
                                    </p>
                                </div>
                                <img 
                                    src={country.image} 
                                    alt={country.name} 
                                    className='cursor-pointer object-cover w-full h-full hover:scale-110 transition-all duration-500' 
                                    onClick={() => handleImageClick(country.link)}
                                />
                            </div>
                            <motion.img 
                                src={country.badge} 
                                alt={`${country.name} badge`} 
                                className='absolute h-24 top-0 left-0 ml-[-25px] mt-[-20px]'
                                animate={{ rotate: 0 }}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 1 }}
                            />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default Countries;