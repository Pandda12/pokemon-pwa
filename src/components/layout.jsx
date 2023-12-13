import Navbar from "./navbar";

export default function Layout({children}){
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <div id="main" className="container mx-auto 2xl mt-14">
                {children}
            </div>
        </>
    );
}