import { series, Serie } from "./data";

const seriesTbody: HTMLElement = document.getElementById("series")!;
const averageElm: HTMLElement = document.getElementById("seasons-average")!;
const cardContainer: HTMLElement = document.getElementById("card-container")!;

function getAverageSeasons(seriesList: Serie[]): number {
  let totalSeasons: number = 0;
  seriesList.forEach((serie) => {
    totalSeasons += serie.seasons;
  });
  return totalSeasons / seriesList.length;
}

function renderSeriesInTable(seriesList: Serie[]): void {
  seriesList.forEach((serie) => {
    const trElement = document.createElement("tr");
    trElement.innerHTML = `
      <td>${serie.id}</td>
      <td class="text-primary">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;

    trElement.addEventListener("click", () => {
      showSerieDetail(serie);
    });

    seriesTbody.appendChild(trElement);
  });
}

function showSerieDetail(serie: Serie): void {
  cardContainer.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
      <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">
          ${serie.description}
        </p>
        <a href="${serie.link}" class="btn btn-primary" target="_blank">
          Go to website
        </a>
      </div>
    </div>
  `;
}

renderSeriesInTable(series);
averageElm.textContent = getAverageSeasons(series).toFixed(2);