import Img from "@/public/food01.jpg"
import Hero from "@/app/components/hero";

export default function Page({params}){
    return(
        <Hero imgUrl={Img} context={"Do My Best!"} />
    );
}