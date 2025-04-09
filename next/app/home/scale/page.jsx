import Img from "@/public/food04.jpg"
import Hero from "@/app/components/hero";

export default function Page({params}){
    return(
        <Hero imgUrl={Img} context={"Huge Scale!"} />
    );
}