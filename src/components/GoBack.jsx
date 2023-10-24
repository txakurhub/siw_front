import { useNavigate } from "react-router";
const GoBack = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return <button onClick={goBack}>{"<-"}</button>;
};

export default GoBack;
