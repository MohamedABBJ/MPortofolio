import ProfileImage from "/profile-image.webp";

function ProfileDetails() {
  return (
    <div>
      <img width={180} src={ProfileImage} alt="" />
      <h1>I'm Mohamed Badwan</h1>
      <h2>FullStack Developer</h2>
    </div>
  );
}

export default ProfileDetails;
