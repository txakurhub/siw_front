import { useState } from "react";
import CurrentUser from "../components/CurrentUser";
import EditForm from "../components/EditForm";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [data, setData] = useState(true);
  const navigate = useNavigate();

  return (
    <section className="flex w-full h-[90vh] justify-center items-center">
      <div className="flex flex-col w-3/12 gap-4 items-center p-10 bg-blue-100 rounded-sm min-w-max">
        <button
          className="flex flex-row self-start gap-3 items-center text-black"
          onClick={() => navigate(-1)}
        >
          <AiOutlineArrowLeft size={20} />
          Volver
        </button>
        <div className="flex flex-row gap-5">
          <button
            className="bg-blue-300 hover:bg-white duration-300 rounded-lg px-3 py-2"
            onClick={() => setData(true)}
          >
            Datos del Usuario
          </button>
          <button
            className="bg-blue-300 hover:bg-white duration-300 rounded-lg px-3 py-2"
            onClick={() => setData(false)}
          >
            Editar Datos
          </button>
        </div>
        {data ? (
          <CurrentUser userData={userData} />
        ) : (
          <EditForm userData={userData} />
        )}
      </div>
    </section>
  );
};

export default Profile;
