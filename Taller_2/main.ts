// main.ts
import { series } from "./data"; 


const seriesTbody: HTMLElement = document.getElementById("series")!; 
const averageElm: HTMLElement = document.getElementById("seasons-average")!;


function getAverageSeasons(seriesList: any[]): number {
  let totalSeasons: number = 0;
  seriesList.forEach((serie) => {
    totalSeasons += serie.seasons;
  });
  return totalSeasons / seriesList.length;
}

function renderSeriesInTable(seriesList: any[]): void {
  seriesList.forEach((serie) => {

    const trElement = document.createElement("tr");

    trElement.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;


    seriesTbody.appendChild(trElement);
  });
}


renderSeriesInTable(series);
averageElm.innerText = getAverageSeasons(series).toFixed(2); 
