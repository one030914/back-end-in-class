import Header from "@/app/components/header";

export default function Layout({children}){
    return(
        <div className="z-10 min-h-dvh">
            <Header />
            {children}
        </div>
    );
}