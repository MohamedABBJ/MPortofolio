import Navbar from "../components/navbar";
import PageContent from "../components/page-content";

export default function Home() {
  return (
    <>
      <div className="flex h-lvh flex-col border">
        <Navbar />
        <PageContent />
      </div>
    </>
  );
}
/* 
      <div className="h-lvh flex items-center justify-center flex-col gap-12">
        <p className="text-5xl font-bold">Mohamed Badwan</p>
        <div className="fixed right-5 bottom-5">
          <LightSwitcher />
        </div>
      </div> */
