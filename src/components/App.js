import { useContext } from "react";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Footer from "./Footer";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import Table from "./Table";
import TableForm from "./TableForm";
import ReactToPrint from "react-to-print";
import { State } from "../context/stateContext";

function App() {
  const {
    name,
    setName,
    boatName,
    setBoatName,
    boatNumber,
    setBoatNumber,
    boatManufacturer,
    setBoatManufacturer,
    boatLength,
    setBoatLength,
    boatArrival,
    setBoatArrival,
    boatDeparture,
    setBoatDeparture,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    invoiceNumber,
    setInvoiceNumber,
    invoiceDate,
    setInvoiceDate,
    dueDate,
    setDueDate,
    notes,
    setNotes,
    componentRef,
  } = useContext(State);

  return (
    <>
      <main
        className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start"
        style={{
          maxWidth: "1920px",
          margin: "auto",
        }}
      >
        <section>
          <div className="bg-white p-5 rounded shadow">
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Customer Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter name"
                    maxLength={56}
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="boatName">Boat Name</label>
                  <input
                    type="text"
                    name="boatName"
                    id="boatName"
                    placeholder="Enter boat name"
                    autoComplete="off"
                    maxLength={96}
                    value={boatName}
                    onChange={(e) => setBoatName(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="boatNumber">Boat Number</label>
                  <input
                    type="number"
                    name="boatNumber"
                    id="boatNumber"
                    placeholder="Enter boat name"
                    maxLength={255}
                    autoComplete="off"
                    value={boatNumber}
                    onChange={(e) => setBoatNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="boatManufacturer">Boat Manufacturer</label>
                  <input
                    type="text"
                    name="boatManufacturer"
                    id="boatManufacturer"
                    placeholder="Enter boat manufacturer"
                    maxLength={96}
                    autoComplete="off"
                    value={boatManufacturer}
                    onChange={(e) => setBoatManufacturer(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="boatLength">Boat Length</label>
                  <input
                    type="number"
                    name="boatLength"
                    id="boatLength"
                    placeholder="Enter boat length"
                    maxLength={12}
                    autoComplete="off"
                    value={boatLength}
                    onChange={(e) => setBoatLength(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="boatArrivak">Boat Arrival</label>
                  <input
                    type="date"
                    name="boatArrival"
                    id="boatArrival"
                    placeholder="Enter arrival date"
                    maxLength={56}
                    autoComplete="off"
                    value={boatArrival}
                    onChange={(e) => setBoatArrival(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="boatDeparture">Boat Departure</label>
                  <input
                    type="date"
                    name="boatDeparture"
                    id="boatDeparture"
                    placeholder="Enter departure date"
                    maxLength={20}
                    autoComplete="off"
                    value={boatDeparture}
                    onChange={(e) => setBoatDeparture(e.target.value)}
                  />
                </div>
              </article>

              {/* Phone number is type text to allow hyphens/spaces */}
              <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="phoneNumber">Customer Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter phone number"
                    maxLength={56}
                    autoComplete="off"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email">
                    Customer Email Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    maxLength={96}
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="number"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              <article>
                <TableForm />
              </article>

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes"
                maxLength={500}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
          </div>
        </section>

        {/* Invoice Preview */}
        <div className="invoice__preview bg-white p-5 rounded-2xl border-4 border-blue-200">
          <ReactToPrint
            trigger={() => (
              <button className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
                Print / Download
              </button>
            )}
            content={() => componentRef.current}
          />
          <div ref={componentRef} className="p-5">
            <Header />

            <MainDetails />

            <ClientDetails />

            <Dates />

            <Table />

            <Notes />

            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
