import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../redux/actions/authActions";
import { AiOutlineArrowLeft } from "react-icons/ai";

const SignupForm = () => {
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        e.preventDefault();
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        signup(input).then((res) => {
          if (res?.email) {
            navigate("/");
          } else {
            alert("Hubo un error al crear el usuario");
          }
        });
      };
    
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-3/12 gap-4 items-center p-10 bg-gray-800 rounded-sm min-w-max"
      action=""
    >
      <button
        className="flex flex-row self-start gap-3 items-center text-white"
        onClick={() => navigate("/")}
      >
        <AiOutlineArrowLeft size={20} />
        Volver
      </button>
      <p className="text-white">Crea tu cuenta</p>
      <input
        className="rounded-sm w-full h-10 px-2"
        placeholder="Ingresa tu email"
        type="text"
        value={input.email}
        onChange={(e) => handleChange(e)}
        name="email"
      />
      <input
        className="rounded-sm w-full h-10 px-2"
        placeholder="Ingresa tu usuario"
        type="text"
        value={input.username}
        onChange={(e) => handleChange(e)}
        name="username"
      />
      <input
        className="rounded-sm w-full h-10 px-2"
        placeholder="Ingresa tu contraseña"
        type="password"
        value={input.password}
        onChange={(e) => handleChange(e)}
        name="password"
      />
      <input
        className="rounded-sm w-full h-10 px-2"
        placeholder="Confirma tu contraseña"
        type="password"
        value={input.confirmPassword}
        onChange={(e) => handleChange(e)}
        name="confirmPassword"
      />
      <button
        type="submit"
        className="rounded-sm w-full h-10 px-2 bg-oscuro hover:opacity-80 duration-300 text-white"
      >
        Registrarse
      </button>

      <div className="flex items-center gap-5 flex-row w-full text-white">
        <span className="rounded-sm border-[0.1px] w-full" /> o
        <span className=" rounded-sm border-[1px] w-full" />
      </div>

      <div className="w-full text-sm flex flex-col justify-center items-center mt-5  text-gray-200">
        <p className="pb-2"> Ya tienes una cuenta?</p>

        <button
          onClick={() => navigate("/login")}
          className="rounded-sm w-full h-10 border-white border-2 px-2 flex justify-center items-center hover:opacity-80 hover:bg-gray-700 duration-300"
        >
          Inicia sesión
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
