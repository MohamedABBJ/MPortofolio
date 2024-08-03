import Button from "./buttons";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-24 py-6 outline">
      <div className="flex gap-10">
        <p>Name</p>
        <p>Work Experience</p>
        <p>Education</p>
      </div>
      <div>
        <Button value="See my work" />
      </div>
    </div>
  );
}

export default Navbar;
