import dayjs from 'dayjs';


export const Formular = () => {
  return (

    <form>
      <div className="form-fields">
        <label htmlFor="fromDate" className="field-label">
          Od:
        </label>
        <input id="fromDate" className="field-input" type="date" onChange={(e) => {
          const selectedDate = dayjs(e.target.value);
          console.log("Vybrané datum:", selectedDate.format("DD/MM/YYYY"))
        }} />

        <label htmlFor="toDate" className="field-label">
          Do:
        </label>
        <input id="toDate" className="field-input" type="date" onChange={(e) => {
          const selectedDate = dayjs(e.target.value);
          console.log("Vybrané datum:", selectedDate.format("DD/MM/YYYY"))
        }} />

        <label htmlFor="field3" className="field-label">
          Počet osob:
        </label>
        <input id="field3" className="field-input" type="number" />

        <label htmlFor="select" className="field-label">
          Stravování:
        </label>
        <select id="select" className="field-input">
          <option>Žádné</option>
          <option>Snídaně</option>
          <option>Polopenze</option>
          <option>Plná penze</option>
        </select>

        <label htmlFor="check1" className="field-label">
          Domácí mazlíček:
        </label>
        <input id="check1" className="field-input" type="checkbox" />
        <label htmlFor="check1" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input id="check1" className="field-input" type="checkbox" />
        <label htmlFor="check1" className="field-label">
          Bezbariérový přístup:
        </label>
        <input id="check1" className="field-input" type="checkbox" />

        <label htmlFor="field1" className="field-label">
          Email:
        </label>
        <input id="field1" className="field-input" type="email" />
        <label htmlFor="field1" className="field-label">
          Telefon:
        </label>
        <input id="field1" className="field-input" type="tel" />
      </div>
      <div><p>Celková cena za pobyt: suma Kč</p></div>
      <button className="wide">Odeslat poptávku</button>
    </form>

  );
};
