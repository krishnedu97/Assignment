import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { getUsers } from '../api/user';

export default function UserList() {
  const [userRows, setUserRows] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [pending, setPending] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getUsers()
      .then((res) => {
        // Flatten users with role
        const allUsers = Object.entries(res.data).flatMap(([role, userList]) =>
          userList.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            role,
          }))
        );
        setUserRows(allUsers);
        setFilteredUsers(allUsers);
      })
      .catch((err) => console.error(err))
      .finally(() => setPending(false));
  }, []);

  useEffect(() => {
    const lower = searchTerm.toLowerCase();
    const filtered = userRows.filter(
      (user) =>
        user.name.toLowerCase().includes(lower) ||
        user.email.toLowerCase().includes(lower) ||
        user.role.toLowerCase().includes(lower)
    );
    setFilteredUsers(filtered);
  }, [searchTerm, userRows]);

  const columns = [
    {
      name: 'Full Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Role',
      selector: (row) => row.role,
      sortable: true,
      cell: (row) => <span className="badge bg-primary">{row.role}</span>,
    },
  ];

  return (
    <div className="container mt-5">
      <div className="card shadow-sm border-0">
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
          <h4 className="mb-0">👥 Users Table</h4>
        </div>
        <div className="card-body">
          {/* Search input */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search by name, email or role"
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <DataTable
            columns={columns}
            data={filteredUsers}
            progressPending={pending}
            pagination
            highlightOnHover
            responsive
            striped
            persistTableHead
            noDataComponent={<span className="text-muted">No users found.</span>}
            customStyles={{
              headCells: {
                style: {
                  fontWeight: 'bold',
                  fontSize: '14px',
                },
              },
              rows: {
                style: {
                  fontSize: '14px',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
