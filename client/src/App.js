import "./App.css";
import React, { useState } from "react";
import { data } from "./data.js";

console.log(data);

function App() {
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
 console.log(startIndex);
const currentData = data.slice(
  startIndex,
  startIndex + itemsPerPage
);

//  console.log(startIndex);

  console.log(search);
  return (
    <main className="page-shell">
      <section className="team-panel" aria-labelledby="team-heading">
        <h1 id="team-heading">Team members</h1>
        <div className="team-toolbar">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="team-filter"
            type="search"
            aria-label="Filter team members"
            placeholder="Search team members..."
          />
        </div>
        <div className="table-scroll">
          <table className="team-table">
            {/* Table Header */}
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {currentData
                .filter((items) => {

                  const searchValue = search.toLowerCase().replace(/\s/g, "");
                  const mobile = items.mobile.replace(/\s/g, "");
                  const name = items.first_name.toLowerCase();


                  return name.includes(searchValue) ||
      mobile.includes(searchValue)
                })
                .map((items) => (
                  <tr key={items.id}>
                    <td>{items.id}</td>
                    <td className="member-name">
                      {items.first_name + " " + items.last_name}
                    </td>
                    <td>{items.email}</td>
                    <td>{items.mobile}</td>
                    <td>
                      <span className="status status-active">
                        {items.gender}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default App;
