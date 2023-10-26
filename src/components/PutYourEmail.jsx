import { useRef, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, recoveryUser } from "../redux/actions/authActions";
import {
  GET_USER_SUCCESS,
  RECOVERY_PASSWORD_SUCCESS,
} from "../redux/types/authTypes";

const PutYourEmail = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUserInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setNewPassword(e.target.value);

  const handleEmailCheck = async (e) => {
    e.preventDefault();
    dispatch(getUser({ email })).then((res) => {
      console.log(res);
      setPassword(res.payload.password);
      res.type === GET_USER_SUCCESS
        ? setValidEmail(true)
        : setErrMsg("Hubo un error al enviar el correo");
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return setErrMsg("Debe escribir un email registrado");
    dispatch(recoveryUser({ email, password, newPassword })).then((res) => {
      console.log(res);
      if (res.type === RECOVERY_PASSWORD_SUCCESS) {
        alert("Contraseña modificada con éxito");
        navigate("/dash");
      } else {
        alert("Hubo un error al modificar la contraseña");
        navigate("/");
      }
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
    >
      <button
        className="flex flex-row self-start gap-3 items-center text-black"
        onClick={() => navigate(-1)}
      >
        <AiOutlineArrowLeft size={20} />
        Volver
      </button>
      <p
        ref={errRef}
        className={errMsg ? "text-red-500" : "hidden"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      {!validEmail ? (
        <>
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
          <button
            className="bg-blue-300 hover:bg-blue-100 border-2 border-blue-100"
            onClick={handleEmailCheck}
          >
            Enviar
          </button>
        </>
      ) : (
        <>
          <input
            autoComplete="off"
            className="rounded-sm w-full h-10 px-2"
            placeholder="Ingresa tu nueva contraseña"
            type="password"
            value={newPassword}
            onChange={handlePwdInput}
            required
          />
          <button
            className="bg-blue-300 hover:bg-blue-100 border-2 border-blue-100"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </>
      )}
    </form>
  );
};

export default PutYourEmail;
