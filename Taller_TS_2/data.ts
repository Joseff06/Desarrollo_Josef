// data.ts

// Definición de la clase Serie
export class Serie {
    constructor(
      public id: number,
      public name: string,
      public channel: string,
      public seasons: number,
      public description: string,
      public link: string,
      public image: string
    ) {}
  }
  
  // Arreglo de datos de series
  export const series = [
    new Serie(
      1,
      "Breaking Bad",
      "AMC",
      5,
      "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White...",
      "https://www.amc.com/shows/breaking-bad",
      "https://i.imgur.com/GGje0vc.jpg"
    ),
    new Serie(
      2,
      "Orange Is the New Black",
      "Netflix",
      6,
      "The series begins revolving around Piper Chapman...",
      "https://www.netflix.com/co/title/70242311",
      "https://i.imgur.com/EvKe48G.jpg"
    ),
    new Serie(
      3,
      "Game of Thrones",
      "HBO",
      7,
      "American fantasy drama",
      "https://www.hbo.com/game-of-thrones",
      "https://i.imgur.com/TDCEV1S.jpg"
    ),
    new Serie(
      4,
      "The Big Bang Theory",
      "CBS",
      12,
      "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged...",
      "https://www.cbs.com/shows/big_bang_theory/about/",
      "https://i.imgur.com/uAEpVWk.jpg"
    ),
    new Serie(
      5,
      "Sherlock",
      "BBC",
      4,
      "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch)...",
      "https://www.bbc.co.uk/programmes/b018ttws",
      "https://i.imgur.com/02B7qhj.jpg"
    ),
    new Serie(
      6,
      "A Very English Scandal",
      "BBC",
      2,
      "A Very English Scandal is a fact-based three-part British television comedy-drama...",
      "https://www.bbc.co.uk/programmes/p065smy4",
      "https://i.imgur.com/D4y3DrQ.jpg"
    ),
  ];
  