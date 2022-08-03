import { navButtons, resultsPageContent } from "./html-components";


export const render = async () => {
  const html = `
  ${navButtons}
  <div class="results-page">${resultsPageContent}</div>
`;

  const root = document.createElement("div");
  root.innerHTML = html;
  document.body.appendChild(root);
};

render();
