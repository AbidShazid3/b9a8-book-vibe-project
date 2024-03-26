import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="flex flex-col justify-center text-center mt-5">
            <div className="border-2 p-4 rounded-lg">
                <h2 className="text-2xl mb-2">No research without action, no action without research</h2>
                <Link to="/" className="text-[#23BE0A] text-xl font-medium">Back to Home</Link>
            </div>
            <div className="mt-5">
                <h1 className="text-2xl font-bold">Our Mission</h1>
                <p className="mt-2">To inspire, support, and empower aspiring researchers. To make research accessible to all, regardless of age, gender, race, and financial background.</p>
            </div>
            <div className="mt-5 p-2">
                <h1 className="text-2xl font-bold">About Research To Empower (ReTE)</h1>
                <p className="mt-2">With prevalent misinformation, the rise of social media, and artificial intelligence writing for us, we live in an era where learning research techniques and processes is needed more than ever to differentiate between true and false statements. Research also leads to new knowledge, creativity, and innovation. Most importantly, it empowers young people to pursue their interests, solve crucial problems, and master a set of essential, irreplaceable skills like critical reasoning, in-depth thinking, and communication.</p>
                <p className="mt-5">Unsurprisingly, there is a huge demand for students to learn how to research. However, there is a lack of support, courses, and information with engaging and illuminating content that appropriately introduces research to young students.</p>
                <p className="mt-5 font-semibold">How can we help those with the potential to come up with amazing, possibly world-changing, ideas if they don’t know where, when, or how to start? How do we make sure they get the resources they need?</p>
                <p className="mt-5 font-semibold">We are a global educational initiative that offers research support, courses, a guidebook, and information for aspiring researchers at the elementary to middle school level as a supplement to the K-12 curriculum. </p>
            </div>
        </div>
    );
};

export default About;