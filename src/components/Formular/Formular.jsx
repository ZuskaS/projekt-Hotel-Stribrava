export const Formular = () => {
  return (
    <div>
      <form>
        <div className="form-fields">
          <label htmlFor="field1" className="field-label">
            Od:
          </label>
          <input id="field1" className="field-input" type="text" />

          <label htmlFor="field2" className="field-label">
            Do:
          </label>
          <input id="field2" className="field-input" type="text" />

          <label htmlFor="field3" className="field-label">
            Počet osob:
          </label>
          <input id="field3" className="field-input" type="text" />

          <label htmlFor="select" className="field-label">
            Stravování:
          </label>
          <select id="select" className="field-input">
            <option>žádné</option>
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
          <input id="field1" className="field-input" type="text" />
          <label htmlFor="field1" className="field-label">
            Telefon:
          </label>
          <input id="field1" className="field-input" type="text" />
        </div>
        <div><p>Celková cena za pobyt: suma Kč</p></div>
        <button className="wide">Odeslat poptávku</button>
      </form>
    </div>
  );
};
