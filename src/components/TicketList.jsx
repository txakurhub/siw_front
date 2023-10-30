import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../redux/actions/ticketActions";

const TicketList = () => {
  const dispatch = useDispatch();
  const ticket = useSelector((state) => state.ticket);
  const [orderBy, setOrderBy] = useState(null);
  const [ascending, setAscending] = useState(true);
  const [loading, setLoading] = useState(true);

  const toggleOrderBy = (column) => {
    if (orderBy === column) {
      setAscending(!ascending);
    } else {
      setOrderBy(column);
      setAscending(true);
    }
  };

  useEffect(() => {
    dispatch(getTickets()).then(() => setLoading(false));
  }, [dispatch]);

  let clienteA, clienteB, fechaA, fechaB;

  const sortedTickets =
    Array.isArray(ticket.tickets) && ticket.tickets.length > 0
      ? [...ticket.tickets].sort((a, b) => {
          const order = ascending ? 1 : -1;
          switch (orderBy) {
            case "idFactura":
              return (a.idFactura - b.idFactura) * order;
            case "cliente":
              clienteA = a.cliente.toString();
              clienteB = b.cliente.toString();
              return clienteA.localeCompare(clienteB) * order;
            case "total":
              return (a.total - b.total) * order;
            case "fecha":
              fechaA = a.fecha.toString();
              fechaB = b.fecha.toString();
              return fechaA.localeCompare(fechaB) * order;
            default:
              return 0;
          }
        })
      : [];

  return (
    <div className="w-full flex flex-col mt-5">
      <table>
        <thead>
          <tr>
            <th onClick={() => toggleOrderBy("idFactura")}>
              ID Factura {orderBy === "idFactura" && (ascending ? "▲" : "▼")}
            </th>
            <th onClick={() => toggleOrderBy("cliente")}>
              Cliente {orderBy === "cliente" && (ascending ? "▲" : "▼")}
            </th>
            <th onClick={() => toggleOrderBy("total")}>
              Total {orderBy === "total" && (ascending ? "▲" : "▼")}
            </th>
            <th onClick={() => toggleOrderBy("fecha")}>
              Fecha {orderBy === "fecha" && (ascending ? "▲" : "▼")}
            </th>
          </tr>
        </thead>
        {loading ? (
          <div className="w-full h-full flex flex-col gap-5 items-center justify-center p-10 m-10">
            <p>Cargando tabla...</p>
            <span className="loader"></span>
          </div>
        ) : (
          <tbody className="">
            {sortedTickets.map((ticket) => (
              <tr key={ticket.idFactura} className="bg-blue-100">
                <td className="border-2 border-white">{ticket.idFactura}</td>
                <td className="border-2 border-white">{ticket.cliente}</td>
                <td className="border-2 border-white">{ticket.total}</td>
                <td className="border-2 border-white">{ticket.fecha}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default TicketList;
