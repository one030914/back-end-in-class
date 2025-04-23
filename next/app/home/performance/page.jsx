import Img from "@/public/food02.jpg";
import Hero from "@/app/components/hero";

export default function Page({ params }) {
    return <Hero imgUrl={Img} context={"High Performance!"} />;
}
