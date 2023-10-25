import { useState } from "react";
import { CgProfile } from "react-icons/cg";
const ProfileMenu = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <CgProfile size={25} color="blue" />
      </button>

      {/* DATOS DEL USUARIO */}
      {isOpen && (
        <div className="absolute mt-2 py-2 w-52 -right-2 gap-5 bg-blue-300  ">
          <div className="flex flex-col w-full">
            <div className="flex flex-col items-center justify-center duration-300 py-4 hover:bg-blue-100">
              <h4 className="self-start pl-5">Nombre de usuario</h4>
              <h4 className="font-bold self-end pr-5"> {userData?.username}</h4>
            </div>
            <div className="flex flex-col items-center justify-center duration-300 py-4 hover:bg-blue-100">
              <h4 className="self-start pl-5">Email </h4>
              <h4 className="font-bold self-end pr-5"> {userData?.email}</h4>
            </div>
            <div className="flex flex-col items-center justify-center duration-300 py-4 hover:bg-blue-100">
              <h4 className="self-start pl-5">Id </h4>
              <h4 className="font-bold self-end pr-5"> {userData?.newUser.id}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
