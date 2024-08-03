import LightSwitcher from "../components/light-switcher";

export default function Home() {
  return (
    <div className="h-lvh flex items-center justify-center flex-col gap-12">
      <p className="text-5xl font-bold">Mohamed Badwan</p>
      <div className="fixed right-5 bottom-5">
        <LightSwitcher />
      </div>
    </div>
  );
}
