export const navButtons = () => `
<button class="menu-button">To Garage</button>
<button class="menu-button">To Winners</button>
`;

export const racePageActionBar = () => `
<div class="forms-container">
<form action="" method="post">
  <input type="text" name="name" placeholder="carname" />
  <input type="color" name="collor" value="#ed32c8" />
  <input type="submit" value="create" class="menu-button" />
</form>
<form action="" method="post">
  <input type="text" name="name" placeholder="carname" />
  <input type="color" name="collor" value="#ed32c8" />
  <input type="submit" value="update" class="menu-button" />
</form>
<button class="menu-button">RACE</button>
<button class="menu-button">RESET</button>
<button class="menu-button">GENERATE CARS</button>
</div>
`;

export const racePageField = () => ``;

export const racePage = () => `
${racePageActionBar}
${racePageField}
`;

export const resultsPageContent = () => `
<h2>Winners (winers counter)</h2>
<h1>Page #(page counter)</h1>
<table>
  <thead class="table-headder">
    <th>Number</th>
    <th>Car</th>
    <th>Name</th>
    <th>Wins</th>
    <th>Best time (seconds)</th>
  </thead>
  <tbody>
  <tr>
    <td>test</td>
    <td>test</td>
    <td>test</td>
    <td>test</td>
    <td>test</td>
  </tr>
  <tr>
    <td>test</td>
    <td>test</td>
    <td>test</td>
    <td>test</td>
    <td>test</td>
  </tr>
  </tbody>
</table>
<button class="menu-button">Prev</button>
<button class="menu-button">Next</button>
`;
