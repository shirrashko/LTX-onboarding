// Fetch the JSON file and populate the table
fetch('users.json')
  .then(response => response.json())
  .then(data => {
    const users = data.users; // Get the array of users from the JSON file
    const tableBody = document.getElementById('user-table-body');

    // Iterate over the user data and create rows dynamically
    users.forEach(user => {
      const row = document.createElement('tr'); // Create a new table row

      // Create the HTML for the row
      row.innerHTML = `
        <td>${user.firstName} ${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.address.city}</td>
        <td>${user.address.state}</td>
        <td>${user.address.country}</td>
      `;

      // Append the row to the table body
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Error fetching or parsing the JSON file:', error);
  });