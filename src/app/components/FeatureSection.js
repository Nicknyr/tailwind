import "tailwindcss";
import Image from "next/image";
import Checkmark from '../../../public/checkmark.svg';
import Github from '../../../public/github.png';

const FeatureSection = () => {
    return (
        <div className="h-auto w-full bg-[#111828] text-white flex flex-col">
            <div className="h-auto w-full pt-10 px-5">
                <h3 className="
                    text-[#878be0] 
                    text-lg
                    font-bold"
                    >
                        Deploy faster
                    </h3>
                <h2 className="
                    text-5xl 
                    font-extrabold
                    mt-3
                    mb-6"
                    >A better workflow</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                <ul>
                    <li className="mt-3 mb-3">
                        <p>Push to deploy. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                    </li>
                    <li className="mt-3 mb-3">
                        <p>SSL certificates. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
                    </li>
                    <li className="mt-3 mb-3">
                        <p>Database backups. Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
                    </li> 
                </ul>
            </div>
            <div className="h-auto w-full">
                <Image src={Github} height="100%" width="100%" alt="Github Repo"/> 
            </div>
        </div>
    );
}

export default FeatureSection;