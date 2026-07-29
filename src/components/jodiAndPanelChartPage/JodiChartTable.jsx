import "../../styles/jodiAndPanelChartPage/JodiChartTable.css";
import jodiData from "../../data/JodiChartData.json";
import { shouldHighlight } from "../../Utils/chartTable";

const JodiChartRow = ({ row }) => (
  <tr>
    {row.map((num, idx) => {
      const highlight = shouldHighlight(num);
      return (
        <td
          key={idx}
          style={{
            color: highlight ? "red" : "black",
          }}
        >
          {num.toString().padStart(2, "0")}
        </td>
      );
    })}
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
