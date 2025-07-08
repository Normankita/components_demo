// import React from 'react'
import TableComponent from 'awesome-table-component';

const data = [
  { name: 'Norman', email: 'norman@example.com', role: 'Admin' },
  { name: 'Zahra', email: 'zahra@example.com', role: 'User' },
];

const headers = ['name', 'email', 'role'];

const Table = () => {
  return (
    <section className=''>
      <TableComponent title="User List" ItemData={data} headers={headers} />
    </section>
  )
}

export default Table