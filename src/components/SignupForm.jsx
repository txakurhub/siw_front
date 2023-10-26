import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../redux/actions/authActions";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import PrimaryButton from "./PrimaryButton";
import logo from "../assets/siwcargo.png";
const SignupForm = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    // confirmPassword: "",
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
    dispatch(signup(input)).then((res) => {
      if (res?.payload?.email) {
        navigate("/dash");
      } else {
        alert("Hubo un error al crear el usuario");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-3/12 gap-4 items-center p-10 bg-blue-100 rounded-sm min-w-max"
      action=""
    >
      <button
        className="flex flex-row self-start gap-3 items-center"
        onClick={() => navigate("/")}
      >
        <AiOutlineArrowLeft size={20} />
        Volver
      </button>
      <img src={logo} alt="" className="w-40" />
      <p className="">Crea tu cuenta</p>
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
      {/* <input
        className="rounded-sm w-full h-10 px-2"
        placeholder="Confirma tu contraseña"
        type="password"
        value={input.confirmPassword}
        onChange={(e) => handleChange(e)}
        name="confirmPassword"
      /> */}
      <button
        type="submit"
        className="rounded-lg w-full h-10 px-2 bg-oscuro hover:opacity-80 duration-300 text-white"
      >
        Registrarse
      </button>

      <div className="flex items-center gap-5 flex-row w-full">
        <span className="rounded-sm border-[0.1px] border-black w-full" /> o
        <span className=" rounded-sm border-[1px] border-black w-full" />
      </div>

      <div className="w-full text-sm flex flex-col justify-center items-center mt-5 ">
        <p className="pb-2"> Ya tienes una cuenta?</p>

        <PrimaryButton text="Inicia sesión" to="/login" primary={false} />
      </div>
    </form>
  );
};

export default SignupForm;
