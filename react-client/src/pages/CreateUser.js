import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../api/user';

const rolesList = ['Author', 'Editor', 'Subscriber', 'Administrator'];

export default function CreateUser() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    roles: [],
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const toggleRole = (role) => {
    setForm((prev) => ({
      ...prev,
      roles: prev.roles.includes(role)
        ? prev.roles.filter((r) => r !== role)
        : [...prev.roles, role],
    }));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await createUser(form);
      navigate('/users');
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        alert('Something went wrong!');
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-header bg-primary text-white py-3 rounded-top-4">
              <h4 className="mb-0">✨ Create New User</h4>
            </div>
            <div className="card-body px-5 py-4">
              <div className="mb-4">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Enter full name"
                />
                {errors.name && <div className="invalid-feedback">{errors.name[0]}</div>}
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Enter email"
                />
                {errors.email && <div className="invalid-feedback">{errors.email[0]}</div>}
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Select Roles</label>
                <div className="p-3 border rounded bg-light">
                  <div className="row">
                    {rolesList.map((role) => (
                      <div className="col-6 col-md-4 mb-2" key={role}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={role}
                            checked={form.roles.includes(role)}
                            onChange={() => toggleRole(role)}
                            id={`role-${role}`}
                          />
                          <label className="form-check-label" htmlFor={`role-${role}`}>
                            {role}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  {errors.roles && <div className="text-danger mt-2">{errors.roles[0]}</div>}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="btn btn-success btn-lg w-100 d-flex align-items-center justify-content-center gap-2"
              >
                <i className="bi bi-person-plus-fill"></i> Create User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
