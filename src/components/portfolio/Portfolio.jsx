import "./portfolio.scss";
import {motion,useScroll,useSpring, useTransform} from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id :1,
        title:"E-Wallet with Sectional Allocation",
        img: "https://media.istockphoto.com/id/628560830/vector/expenses-checklist-receipts-wallet-calculator.jpg?s=612x612&w=0&k=20&c=qqRcNFA8M3gCv3B46RfvfvgcEczGtCMH_gJRzOZeBH0=",

    },
    {
        id :2,
        title:"SIP-Gullak",
        img: "https://media.licdn.com/dms/image/C4E12AQEfSjNhhIBefg/article-cover_image-shrink_720_1280/0/1615016545896?e=2147483647&v=beta&t=xD6Ycgz_snDQfLNNG8vcVQbsiVzpX8-o4nb4QgC2hqc",

    },
    {
        id :3,
        title:"Expense Tracking and Analysis",
        img: "https://qph.cf2.quoracdn.net/main-qimg-9c0871be5053c8c31cc5283083556b7d-lq",

    },
    {
        id :4,
        title:"Goal tracker",
        img: "https://img.freepik.com/free-vector/business-background-design_1300-99.jpg",

    },
];

const Single = ({item}) =>{

    const ref = useRef();

    const{scrollYProgress} = useScroll({
        target:ref,
        // offset:["start start","end start"]
    });

    const y = useTransform(scrollYProgress ,[0,1],[-300,300]);
    return(
      <section ref = {ref}>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer">
                  <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>

                </motion.div>
            </div>
        </div>
    </section>
    );
};
const Portfolio = () => {

    const ref = useRef();
    const{scrollYProgress} = useScroll({target:ref,offset:["end end" , "start start"]
    }); 

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    });
   
    return (
        <div className="portfolio" ref={ref} >
            <div className="progress">
                <h1>Our Services</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id}/>
            ))}

        </div>
    );
    
};

export default Portfolio;