import React, { useState } from "react";
import axios from "axios";

const MappingTool = () => {


  const initialTableData = [
    ["CO1", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["CO2", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["CO3", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["CO4", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["CO5", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["CO6", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ];

  const [tableData, setTableData] = useState(initialTableData);


  const updateTable = (rowIndex, colIndex, value) => {
    const newTableData = [...tableData];
    newTableData[rowIndex][colIndex] = value;
    setTableData(newTableData);
  };

  

  const handleSave = () =>{
    axios.post('http://localhost:3001/tabledata', { tableData}).then(()=>{
      console.log("data passed");
    }).catch(()=>{
      console.log("not passed");
    })
  }

  return (
    <div className="container mx-auto p-4 bg-white h-screen">
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Course Outcome</th>
            {[...Array(9)].map((_, index) => (
              <th key={index} className="border p-2">{`PO-${index + 1}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border p-2">
                  {colIndex === 0 ? (
                    cell
                  ) : (
                    <select
                      className="w-full bg-transparent"
                      onChange={(e) =>
                        updateTable(rowIndex, colIndex, e.target.value)
                      }
                      value={cell}
                    >
                      {[...Array(10)].map((_, index) => (
                        <option
                          key={index}
                          value={index}
                          className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                        >
                          {index}
                        </option>
                      ))}
                    </select>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSave} className="border-2 text-black py-3 px-8 rounded-lg font-semibold shadow-md hover:shadow-2xl hover:shadow-purple-300 transition duration-300">Save</button>
    </div>
  );
};

export default MappingTool;
