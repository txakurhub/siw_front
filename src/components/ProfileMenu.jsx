import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="duration-300 text-blue-500 hover:text-black "
      >
        <CgProfile size={25} />
      </button>

      {/* DATOS DEL USUARIO */}
      {isOpen && (
        <div className="absolute mt-2 py-2 w-52 -right-2 gap-5 bg-blue-300  ">
          <div className="flex flex-col w-full">
            <a
              href="/dash/profile"
              className="flex flex-col items-center justify-center duration-300 py-2 hover:bg-blue-100"
            >
              <p className="font-bold">Perfil</p>
            </a>
            <button
              onClick={handleLogout}
              className="flex flex-col items-center justify-center duration-300 py-2 hover:bg-blue-100"
            >
              <p className="font-bold">Cerrar sesión</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
