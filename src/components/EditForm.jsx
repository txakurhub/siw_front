import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import { UPDATE_USER_SUCCESS } from "../redux/types/authTypes";

const EditForm = ({ userData }) => {
  const oldEmail = userData?.email;
  const [currentUser, setCurrentUser] = useState({
    username: userData?.username,
    email: userData?.email,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        email: oldEmail,
        newUsername: currentUser.username,
        newEmail: currentUser.email,
      })
    ).then((res) => {
      if (res.type === UPDATE_USER_SUCCESS) {
        alert("Perfil actualizado exitosamente");
        navigate(-1);
      } else {
        alert("Hubo un error al actualizar los datos");
      }
    });
  };
  return (
    <div className="w-full h-full flex flex-col">
      <h2 className="p-3 font-bold">Editar Perfil</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-5">
        <div>
          <h4>Nombre de usuario</h4>
          <input
            className="rounded-sm w-full h-10 px-2"
            placeholder="Ingresa tu usuario"
            type="text"
            value={currentUser.username}
            onChange={(e) => handleChange(e)}
            name="username"
          />
        </div>
        <div>
          <h4>Nombre de usuario</h4>
          <input
            className="rounded-sm w-full h-10 px-2"
            placeholder="Ingresa tu email"
            type="text"
            value={currentUser.email}
            onChange={(e) => handleChange(e)}
            name="email"
          />
        </div>

        <button type="submit" className="bg-blue-300 p-2 rounded-lg duration-300 hover:bg-white ">Enviar</button>
      </form>
    </div>
  );
};

export default EditForm;
