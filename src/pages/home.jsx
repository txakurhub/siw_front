import logo from "../assets/siwcargo.png";
import ProfileMenu from "../components/ProfileMenu";
import TicketList from "../components/TicketList";

const Home = () => {
  return (
    <section className="w-full h-[90vh] flex flex-col items-center items-center">
      <div className="flex flex-row w-full items-center justify-between">
        {/* LOGO Y LISTADO DE FACTURAS */}
        <img src={logo} alt="logo" className="w-20" />
        <ProfileMenu />
      </div>
      <TicketList />
    </section>
  );
};

export default Home;
