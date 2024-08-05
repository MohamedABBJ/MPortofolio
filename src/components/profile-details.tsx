import ProfileImage from "/profile-image.webp";

function ProfileDetails() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <img className="rounded-3xl" width={180} src={ProfileImage} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">I'm Mohamed Badwan</h1>
        <h2 className="text-2xl">FullStack Developer</h2>
      </div>
    </div>
  );
}

export default ProfileDetails;
