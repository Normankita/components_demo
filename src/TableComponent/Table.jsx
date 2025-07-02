// import React from 'react'
import TableComponent from 'awesome-table-component';

const data = [
  { name: 'Norman', email: 'norman@example.com', role: 'Admin' },
  { name: 'Jane', email: 'jane@example.com', role: 'User' },
];

const headers = ['name', 'email', 'role'];

const Table = () => {
  return (
    <div className=''>
      <TableComponent title="User List" ItemData={data} headers={headers} />
    </div>
  )
}

export default Table