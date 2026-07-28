import "../../styles/jodiAndPanelChartPage/JodiChartTable.css";
import jodiData from "../../data/JodiChartData.json";

const JodiChartRow = ({ row }) => (
  <tr>
    {row.map((num, idx) => (
      <td key={idx}>{num.toString().padStart(2, "0")}</td>
    ))}
  </tr>
);

const JodiChartTable = () => (
  <table className="jodi-chart-table">
    <tbody>
      {jodiData.map((row, index) => (
        <JodiChartRow key={index} row={row} />
      ))}
    </tbody>
  </table>
);

export default JodiChartTable;
