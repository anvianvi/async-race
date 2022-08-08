export const navButtons = `
<button class="menu-button id="to-garage">To Garage</button>
<button class="menu-button" id="to-winners">To Winners</button>
`;

export const racePageActionBar = `
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

export const racePageField = `
<div class="race-block">
<div class="car-header">
  <button class="menu-button">sellect</button>
  <button class="menu-button">remove</button>
  <div class="car-name">(car name)</div>
</div>
<div class="road-container">
  <button class="start-eng">A</button>
  <button class="stop-eng">B</button>
  <div class="car-container">
    <img src="./car.svg" alt="" class="car">
    <img src="./flag.svg" alt="" class="flag">
  </div>
</div>
</div>
`;

export const racePage = () => `
${racePageActionBar}
${racePageField}
`;

export const resultsPageContent = `
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
