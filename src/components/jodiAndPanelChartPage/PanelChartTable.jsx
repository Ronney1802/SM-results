import React from "react";
import "../../styles/jodiAndPanelChartPage/PanelChartTable.css";

const PanelChartTable = ({ data }) => {
  const parseResult = (result) => {
    const [open, jodi, close] = result.split("-");
    return {
      open: open.split(""), // array of digits
      jodi, // keep as full string (e.g. "61")
      close: close.split(""), // array of digits
    };
  };

  return (
    <table className="panel-chart-table">
      <tbody>
        {data.map((week, weekIndex) => (
          <tr key={weekIndex}>
            {/* Week date range */}
            <th>
              {week.startDate}
              <br />
              To
              <br />
              {week.endDate}
            </th>

            {/* Render each day’s result */}
            {week.results.map((res, dayIndex) => {
              const { open, jodi, close } = parseResult(res);
              return (
                <React.Fragment key={dayIndex}>
                  {/* Open panel */}
                  <th>
                    {open.map((digit, i) => (
                      <div key={i}>{digit}</div>
                    ))}
                  </th>

                  {/* Jodi (single two-digit number) */}
                  <td>{jodi}</td>

                  {/* Close panel */}
                  <th>
                    {close.map((digit, i) => (
                      <div key={i}>{digit}</div>
                    ))}
                  </th>
                </React.Fragment>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PanelChartTable;
