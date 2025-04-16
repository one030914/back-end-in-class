import Img from "@/public/food03.jpg";
import Hero from "@/app/components/hero";

export default function Page({ params }) {
    return <Hero imgUrl={Img} context={"Most Reliability!"} />;
}
