import dayjs from 'dayjs';
import { useState } from 'react';

export const Formular = () => {
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [persons, setPersons] = useState(1);
  const [meal, setMeal] = useState('žádné');
  const [pet, setPet] = useState(false);
  const [extraBed, setExtraBed] = useState(false);
  const [barrierFree, setBarrierFree] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <form>
      <div className="form-fields">
        <label htmlFor="fromDate" className="field-label">
          Od:
        </label>
        <input
          id="fromDate"
          value={dateFrom}
          className="field-input"
          type="date"
          onChange={(e) => {
            setDateFrom(e.target.value);
          }}
        />

        <label htmlFor="toDate" className="field-label">
          Do:
        </label>
        <input
          id="toDate"
          value={dateTo}
          className="field-input"
          type="date"
          onChange={(e) => {
            setDateTo(e.target.value);
          }}
        />

        <label htmlFor="field3" className="field-label">
          Počet osob:
        </label>
        <input
          id="field3"
          value={persons}
          className="field-input"
          type="number"
          onChange={(e) => {
            setPersons(e.target.value);
          }}
        />

        <label htmlFor="select" className="field-label">
          Stravování:
        </label>
        <select
          id="select"
          value={meal}
          className="field-input"
          onChange={(e) => {
            setMeal(e.target.value);
          }}
        >
          <option value="Žádné">Žádné</option>
          <option value="Snídaně">Snídaně</option>
          <option value="Polopenze">Polopenze</option>
          <option value="Plná penze">Plná penze</option>
        </select>

        <label htmlFor="check1" className="field-label">
          Domácí mazlíček:
        </label>
        <input
          id="check1"
          checked={pet}
          className="field-input"
          type="checkbox"
          onChange={(e) => {
            setPet(e.target.value);
          }}
        />
        <label htmlFor="check1" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input
          id="check1"
          checked={extraBed}
          className="field-input"
          type="checkbox"
          onChange={(e) => {
            setExtraBed(e.target.value);
          }}
        />
        <label htmlFor="check1" className="field-label">
          Bezbariérový přístup:
        </label>
        <input
          id="check1"
          checked={barrierFree}
          className="field-input"
          type="checkbox"
          onChange={(e) => {
            setBarrierFree(e.target.value);
          }}
        />

        <label htmlFor="field1" className="field-label">
          Email:
        </label>
        <input
          id="field1"
          value={email}
          className="field-input"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="field1" className="field-label">
          Telefon:
        </label>
        <input
          id="field1"
          value={phone}
          className="field-input"
          type="tel"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
      <div>
        <p>Celková cena za pobyt: suma Kč</p>
      </div>
      <button type="submit" className="wide">
        Odeslat poptávku
      </button>
    </form>
  );
};
