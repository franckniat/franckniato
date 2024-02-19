import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
export default function ProjectCard(props){
    const {title, img, desc, gitlink, preview, stack} = props
    return(
        <div className="w-full  h-full bg-gray-50 dark:bg-neutral-900 rounded-b-md md:rounded-md shadow-md">
            <div className="w-full h-full flex flex-col md:flex-row">
                <Image src={img} alt={title} width={1500} priority height={1500} className="w-full object-cover h-full rounded-t-md md:rounded-r-none md:rounded-l-md md:w-fit md:max-w-[500px]" />
                <div className="p-5">
                    <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
                    <p className="text-sm line-clamp-3 md:line-clamp-none md:text-base mt-3">{desc}</p>
                    <div className="my-5 flex flex-wrap items-center gap-3">
                        {stack &&  stack.map((item, index) => (
                            <span key={index} className="h-8 w-8 flex items-center"><Image height={200} width={200} src={item.image}  alt={item.title} title={item.title}/></span>
                        ))}
                    </div>
                    <div className="flex flex-row gap-3 items-center mt-3">
                        <a target="_blank" href={gitlink}>
                            <Button variant="default">Code</Button>
                        </a>
                        <a target="_blank" href={preview}>
                            <Button variant="red">Preview</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}