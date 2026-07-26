// LuckyNumberCard.jsx
import "../../styles/common/LuckyNumberCard.css";

const LuckyNumberCard = ({ ankValues = [], finalAnkValues = [] }) => {
  return (
    <div className="lucky-card">
      <div className="lucky-card__title">Today Satta Matka Lucky Number</div>
      <table className="lucky-card__table">
        <thead>
          <tr>
            <th><span className="highlight">Ank (शुभांक)</span></th>
            <th><span className="highlight">Final Ank</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ankValues.join("-")}</td>
            <td>{finalAnkValues.join(", ")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LuckyNumberCard;
