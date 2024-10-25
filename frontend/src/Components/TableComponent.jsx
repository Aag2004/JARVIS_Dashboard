// src/components/TableComponent.jsx
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const TableComponent = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchExcelData = async () => {
      try {
        const response = await fetch('/jarvis_sample.xlsx');
        const arrayBuffer = await response.arrayBuffer();

        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const formattedData = jsonData.slice(1).map((row, index) => ({
          SNo: index + 1,
          userId: row[0],
          time: row[1],
          ipAddress: row[2],
          alert: row[3],
        }));

        setTableData(formattedData);
      } catch (error) {
        console.error('Error fetching or processing Excel file:', error);
      }
    };

    fetchExcelData();
  }, []);

  return (
    <div>
      {tableData.length > 0 ? (
        <table border="1" style={{ width: '100%', marginTop: '20px' }}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>User ID</th>
              <th>Time</th>
              <th>IP Address</th>
              <th>Alert</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.SNo}>
                <td>{row.SNo}</td>
                <td>{row.userId}</td>
                <td>{row.time}</td>
                <td>{row.ipAddress}</td>
                <td>{row.alert}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default TableComponent;
