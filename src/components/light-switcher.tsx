import LightIcon from "/light-icon.webp";

function LightSwitcher() {
  return (
    <>
      <button className="rounded-full p-2 w-12 h-12 dark:bg-black bg-white outline outline-2">
        <img src={LightIcon} alt={LightIcon} />
      </button>
    </>
  );
}

export default LightSwitcher;
