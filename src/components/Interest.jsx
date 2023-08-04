import React from "react";

const Interest = () => {
    const interests = [
        {
            logo: "code-slash-sharp",
            name: "Scientific Computing",
            desc: "Leveraging advanced mathematical models and computational techniques, scientific computing facilitates intricate simulations, data analysis, and problem-solving in various scientific domains. It accelerates research by providing tools to model complex phenomena, aiding in prediction, optimization, and visualization.",
            link: "https://en.wikipedia.org/wiki/Computational_science"
        },
        {
            logo: "barcode",
            name: "Machine Learning",
            desc: "A subset of artificial intelligence, machine learning empowers  systems to learn  from data, recognizing algirithm  patterns and making data-driven predictions or decisions making. It spans diverse applications, from image recognition to medical diagnoses, transforming industries by automating tasks and enabling intelligent insights.",
            link: "https://en.wikipedia.org/wiki/Machine_learning"
        },
        {
            logo: "logo-codepen",
            name: "Distributed Computing",
            desc: "Embracing parallel processing and networking, distributed computing harnesses the collective power of interconnected computers to tackle intricate tasks efficiently. It's crucial in handling big data, running high-performance applications, and ensuring reliability through redundancy, enhancing system scalability and fault tolerance.",
            link: "https://en.wikipedia.org/wiki/Distributed_computing"
        },
        {
            logo: "bar-chart",
            name: "Blockchain Technology",
            desc: "This revolutionary technology employs cryptographic techniques and decentralization to create secure, tamper-proof digital ledgers. Most famous for enabling cryptocurrencies like Bitcoin, blockchain extends beyond finance, offering transparent and immutable records for supply chains, voting systems, intellectual property, and more.",
            link: "https://en.wikipedia.org/wiki/Blockchain"
        },
    ];
    return (
        <section id="interests" className="py-10 px-10 bg-gray-800 relative">
            <div className="mt-8 text-gray-100 text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Interests</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Explore My Research Interest Area</p>
                <div className="flex items-center justify-center mt-12 gap-5 flex-wrap">
                    {interests?.map((interest, i) => (
                        <div
                            key={i}
                            className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[20rem] bg-gray-900 p-5 rounded-xl"
                        >
                            <div className="text-5xl  bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                                <ion-icon name={interest.logo}></ion-icon>
                            </div>
                            <h2 className="text-xl mt-3">{interest.name}</h2>
                            <p className="mt-3 text-sm">{interest.desc}</p>
                            <button className="bg-transparent text-sm hover:bg-blue-500 text-cyan-600 mt-4 font-semibold hover:text-white py-1 px-2 border border-cyan-600 hover:border-transparent rounded"><a href={interest.link}>Read More</a></button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interest;
