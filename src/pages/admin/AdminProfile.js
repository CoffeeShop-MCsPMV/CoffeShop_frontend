import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../context/apiContext";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function AdminProfile() {
  const { getData, updateData } = useContext(ApiContext);
  const [usersList, setUsersList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedProfilTipus, setSelectedProfilTipus] = useState("");

  useEffect(() => {
    getData("/api/users", setUsersList);
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);
    const filtered = usersList.filter(
      (u) => u.name && u.name.toLowerCase().includes(value.toLowerCase())
    );
    setMatchedUsers(filtered);
  };

  const selectUser = (user) => {
    setSelectedUser(user);
    setSearchValue(user.name);
    setMatchedUsers([]);
    setSelectedProfilTipus(user.profile_type);
  };

  const handleProfilChange = (userId, newType) => {
    updateData(`/api/users/${userId}`, { profile_type: newType });

    const updatedList = usersList.map((user) =>
      user.id === userId ? { ...user, profile_type: newType } : user
    );
    setUsersList(updatedList);

    if (selectedUser && selectedUser.id === userId) {
      setSelectedUser({ ...selectedUser, profile_type: newType });
    }
  };

  return (
    <>
      <FloatingLabel controlId="floatingInput" label="Search" className="mb-3">
        <Form.Control
          type="search"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
        {searchValue && matchedUsers.length > 0 && (
          <ListGroup className="position-absolute z-3 w-100">
            {matchedUsers.map((user) => (
              <ListGroup.Item
                key={user.id}
                action
                onClick={() => selectUser(user)}
              >
                {user.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </FloatingLabel>

      {selectedUser ? (
        <div>
          <h5 style={{ color: "white" }}>{selectedUser.name}</h5>
          <Form.Select
            value={selectedProfilTipus}
            onChange={(e) => setSelectedProfilTipus(e.target.value)}
          >
            <option value="A">Admin</option>
            <option value="U">User</option>
          </Form.Select>
          <Button
            variant="primary"
            className="mt-2"
            onClick={() =>
              handleProfilChange(selectedUser.id, selectedProfilTipus)
            }
          >
            Save
          </Button>
        </div>
      ) : (
        searchValue && <p>Not found</p>
      )}
    </>
  );
}

export default AdminProfile;
