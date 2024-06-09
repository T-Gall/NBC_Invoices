import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Footer() {
  const { name,
    boatName,
    boatNumber,
    boatManufacturer,
    boatLength,
    boatArrival,
    boatDeparture,
    phoneNumber,
    email,
    invoiceNumber,
    invoiceDate,
    dueDate,
    notes,
    } = useContext(State);

  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Name:</span> {name}
          </li>
          <li>
            <span className="font-bold">Phone #:</span> {phoneNumber}
          </li>
          <li>
            <span className="font-bold">Email:</span> {email}
          </li>
          <li>
            <span className="font-bold">Arrival:</span> {boatArrival}
          </li>
          <li>
            <span className="font-bold">Departure:</span> {boatDeparture}
          </li>
          <li>
            <span className="font-bold">Boat Name:</span> {boatName}
          </li>
          <li>
            <span className="font-bold">Boat Number:</span> {boatNumber}
          </li>
          <li>
            <span className="font-bold">Boat Manufacturer:</span> {boatManufacturer}
          </li>
          <li>
            <span className="font-bold">Boat Length:</span> {boatLength}
          </li>
        </ul>
      </footer>

    </>
  );
}
