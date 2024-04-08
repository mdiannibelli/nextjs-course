import Navbar from "@/components/navbar/Navbar";

export default function AboutLayout({children} : {children: React.ReactNode}) {
    return (
        <>
        <Navbar/>
        <section className="flex flex-col items-center p-24">
            <span>Hello World</span>
            {children}
        </section>
        </>
    )
}