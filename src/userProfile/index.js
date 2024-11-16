import { useEffect, useState } from "react";

export const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [updateUser, setUpdateUser] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const cachedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (cachedUser) {
      setUser(cachedUser);
      setUpdateUser(cachedUser);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const existingUser = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = existingUser.map((u) =>
      u.email === user.email ? updateUser : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("loggedInUser", JSON.stringify(updateUser));
    setUser(updateUser);
    setMessage("Profile Updated Successfully");
  };

  return (
    <div>
      <h1>User Profile</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={updateUser.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={updateUser.email}
            onChange={handleChange}
            required
            readOnly
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={updateUser.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
};
