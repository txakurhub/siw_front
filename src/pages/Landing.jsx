import logo from "../assets/siwcargo.png";
import PrimaryButton from "../components/PrimaryButton";
const Landing = () => {
  return (
    <section className="w-full h-[90vh] flex flex-col justify-center items-center">
      <img src={logo} alt="siwcargo" className="w-3/12" />
      <div className="mt-5 flex flex-col ">
        <PrimaryButton to="/login" text="Ingresá" />
        <div className="flex items-center gap-5 flex-row w-full">
          <span className="rounded-sm border-[0.1px] border-blue-300 w-full" /> o
          <span className=" rounded-sm border-[1px] border-blue-300 w-full" />
        </div>
        <PrimaryButton to="/signup" text="Registrate" primary={false} />
      </div>
    </section>
  );
};

export default Landing;
