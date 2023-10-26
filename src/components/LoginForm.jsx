import { useEffect, useRef, useState } from "react";
import { login } from "../redux/actions/authActions";
import {
  LOGIN_USER_REJECTED,
  LOGIN_USER_SUCCESS,
} from "../redux/types/authTypes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";
import logo from "../assets/siwcargo.png";
import PrimaryButton from "./PrimaryButton";

const LoginForm = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleUserInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password)
      return setErrMsg("Debe completar los campos usuario y password");
    dispatch(login({ email, password })).then((action) => {
      const { type, payload } = action;
      if (type === LOGIN_USER_SUCCESS) {
        setEmail("");
        setPassword("");
        navigate("/dash");
      } else if (
        type === LOGIN_USER_REJECTED &&
        (payload === 400 || payload === 401)
      ) {
        setErrMsg("El usuario o password son incorrectos");
      } else {
        setErrMsg("Falló el inicio de sesión");
      }
      errRef.current.focus();
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
      className="flex flex-col w-3/12 gap-4 items-center p-10 bg-blue-100 rounded-lg min-w-max text-black"
      action=""
    >
      <button
        className="flex flex-row self-start gap-3 items-center text-black"
        onClick={() => navigate(-1)}
      >
        <AiOutlineArrowLeft size={20} />
        Volver
      </button>
      <img src={logo} alt="" className="w-40" />
      <p
        ref={errRef}
        className={errMsg ? "text-red-500" : "hidden"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <input
        id="email"
        ref={userRef}
        autoComplete="off"
        className="rounded-sm w-full h-10 px-2"
        placeholder="Ingresa tu email"
        type="text"
        value={email}
        onChange={handleUserInput}
        required
      />
      <input
        id="password"
        className="rounded-sm w-full h-10 px-2"
        placeholder="Ingresa tu contraseña"
        type="password"
        value={password}
        onChange={handlePwdInput}
        required
      />
      <button
        type="submit"
        className="rounded-sm w-full h-10 px-2 bg-oscuro hover:opacity-80 duration-300 text-white"
      >
        Iniciar sesión
      </button>

      <div className="flex items-center gap-5 flex-row w-full">
        <span className="rounded-sm border-[0.1px] border-black w-full" /> o
        <span className=" rounded-sm border-[1px] border-black w-full" />
      </div>

      <div className="w-full text-sm flex flex-col justify-center items-center mt-5  text-gray-800">
        <p className="pb-2">Todavía no tienes una cuenta?</p>

        <PrimaryButton text="Crear cuenta" to="/signup" primary={false} />
        <PrimaryButton text="Olvidé mi contraseña" to="/recovery" primary={false} />
      </div>
    </form>
  );
};

export default LoginForm;
