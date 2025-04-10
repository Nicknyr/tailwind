import "tailwindcss";
import Image from "next/image";
import Checkmark from '../../../public/checkmark.svg';

const Card = () => {
    return (
        <div className="
            h-auto 
            w-110 border 
            border-gray-300
            rounded-3xl 
            p-8
            shadow-xl
            text-grey-50
            font-light
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
            <ul className="mt-7 mb-7">
                <li className="pb-2 flex">
                    <Image src={Checkmark} height="15" width="15"/> 
                    <p className="pl-3">25 products</p>
                </li>
                <li className="pb-2 flex">
                    <Image src={Checkmark} height="15" width="15"/> 
                    <p className="pl-3">Up to 10,000 subscribers</p>
                </li>
                <li className="pb-2 flex">
                    <Image src={Checkmark} height="15" width="15"/> 
                    <p className="pl-3">Advanced analytics</p>
                </li>
                <li className="pb-2 flex">
                    <Image src={Checkmark} height="15" width="15"/> 
                    <p className="pl-3">4-hour support response time</p>2
                </li>
            </ul>
            <button className="h-auto w-auto bg-white border-1 p-3 rounded-md w-full cursor-pointer font-medium text-blue-700 border-blue-400 hover:border-blue-700">Get started today</button>
        </div>    
    );
}

export default Card;