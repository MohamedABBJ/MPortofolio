import ProfileDetails from "./profile-details";

function PageContent() {
  return (
    <div className="flex h-full border border-red-800 px-36">
      <div className="w-1/2 border border-blue-700">
        <ProfileDetails />
      </div>
      <div className="w-1/2 border">{/*  <ProfileDetails />*/}</div>
    </div>
  );
}

export default PageContent;
