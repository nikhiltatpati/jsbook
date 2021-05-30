import "./cell-list.css";
import { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  cells.unshift({
    content:
      "**Welcome To JavaScript Book** <br><br> 🎉Features of JavaScript Book 🎉 <br><br> ➡ Comes with a markdown editor where you can write description about your code snippet. <br><br> ➡ Realtime code execution. <br><br> ➡ You can also write react components (render the element to 'root' div). <br><br> ➡ You can resize cells according to your needs. <br><br> **Note:** <br><br> To display your output in our preview component use 'show()' function.",
    type: "text",
    id: "ufhry",
  });

  console.log(cells);
  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div className="cell-list">
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
