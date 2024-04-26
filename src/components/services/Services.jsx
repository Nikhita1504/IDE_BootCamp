import "./services.scss";
import { motion, useInView, } from "framer-motion";
import { useRef } from "react";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};
const Services = () => {

    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });
    // const history = useHistory(); // Initialize useHistory

    // const handleGoClick = () => {
    //     // Navigate to a new page when "Go" button is clicked
    //     history.push("/new-page"); // Replace "/new-page" with your desired URL
    // };
    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // whileInView= "animate"
            ref={ref}
            animate={isInView && "animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>Make log collection and analytics easier, faster,
                    <br /> and more effective at scale.
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Unique </motion.b>Features
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For </motion.b>You  .
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" ><h2>Flaw detection
                </h2>
                    <p>Detect vulnerabilities and threats to Operational Technology (OT) systems through continuous monitoring, threat intelligence analysis, and proactive security measures. Implement robust cybersecurity protocols to safeguard critical infrastructure and prevent potential breaches or disruptions.
                    </p>
                    <button >Go</button> {/* Add onClick event handler */}
                </motion.div>

                <motion.div className="box" ><h2>Collection</h2>
                    <p>Collect log information from network systems and generate structured reports for analysis. Utilize log aggregation tools to centralize data, parse logs for relevant information, and present findings in a comprehensive format for actionable insights and decision-making.</p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" ><h2>Storage </h2>
                    <p>Securely store logs in a centralized database system by encrypting and compressing data. Implement encryption algorithms to protect sensitive information and compression techniques to optimize storage space and enhance data security.
                    </p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" ><h2>Log Analysis Report</h2>
                    <p>Visualize logs using various chart types such as bar charts and line charts to facilitate efficient analysis. Presenting data in graphical form helps identify trends, anomalies, and patterns for better insight and decision-making.
                    </p>
                    <button>Go</button>
                </motion.div>


            </motion.div>

        </motion.div>

    );

};

export default Services;