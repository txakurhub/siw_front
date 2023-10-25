const CurrentUser = ({ userData }) => {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center justify-center duration-300 py-4 hover:bg-blue-100">
          <h4 className="font-bold">Nombre de usuario</h4>
          <h4 className=""> {userData?.username}</h4>
        </div>
        <div className="flex flex-col items-center justify-center duration-300 py-4 hover:bg-blue-100">
          <h4 className="font-bold">Email </h4>
          <h4 className=""> {userData?.email}</h4>
        </div>
        <div className="flex flex-col items-center justify-center duration-300 py-4 hover:bg-blue-100">
          <h4 className="font-bold">Id </h4>
          <h4 className="">{userData?.newUser?.id || userData?.id}</h4>
        </div>
      </div>
    </div>
  );
};

export default CurrentUser;
