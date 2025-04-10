import "tailwindcss";


const Card = () => {
    return (
        <div className="
            h-auto 
            w-110 border-1 
            border-grey-100 
            rounded-3xl 
            p-12
            ">
             <h2 className="
                text-xl 
                text-blue-700
                tracking-tighter
                font-medium
                ">
                Hobby
            </h2>
            <p className="mt-5 mb-5">
                <span className="font-bold text-5xl">$29</span>
                <span className="p-1">/month</span>
            </p>
            <p>The perfect plan if you're just getting started with our product.</p>
            <ul className="mt-10 mb-10">
                <li className="pb-2">25 products</li>
                <li className="pb-2">Up to 10,000 subscribers</li>
                <li className="pb-2">Advanced analytics</li>
                <li className="pb-2">24-hour support response time</li>
            </ul>
            <button className="h-auto w-auto bg-white border-1 p-3 rounded-md w-full cursor-pointer font-medium text-blue-700 border-blue-400 hover:border-blue-700">Get started today</button>
        </div>    
    );
}

export default Card;