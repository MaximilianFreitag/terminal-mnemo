// // List of commands that require API calls

import { getProjects } from '../api';
import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';
import { getZufallswort } from '../api';



export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};


export const zufallswort = async (args: string[]): Promise<string> => {
  const data = await getZufallswort();
  return data.word;
};




export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `GitHub README wird geöffnet...\n
  ${readme}`;
};



export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Befehl: weather [city]. Beispiel: weather dortmund';
  }
  const weather = await getWeather(city);
  return weather;
};
