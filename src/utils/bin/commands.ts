// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Willkommen zu meinem Terminal! Hier sind alle Befehle, die du aufrufen kannst:
\n${c}\n
[ctrl+l]/clear: Terminal räumen.\n
Gebe 'bio' ein für die Übersicht über meine Bio.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Github Repo wird geöffnet...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hey, ich bin ${config.name}. 
Willkommen zu meinem Terminal!
Mehr über mich:
'bio' - kurze Übersicht.
'resume' - mein Lebenslauf.
'readme' - mein github readme.`;
};




export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Lebenslauf wird geöffnet...';
  
};

// Money
export const money = async (args: string[]): Promise<string> => {
  return ` 
Wenn ich dir oder du mir Geld schuldest, dann kannst du diesen Link klicken:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.money_urls.paypal}" target="_blank">paypal</a></u>

`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Github wird geöffnet...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Linkedin wird geöffnet...';
};

// Search
export const google = async (args: string[]): Promise<string> => {

    //if the input is empty display a message
    if (args.length === 0) {
        return 'Befehl: google [Suchbegriff]. Beispiel: google favicon';
    }
    else {
    window.open(`https://google.com/search?q=${args.join(' ')}`);
    return `Suche Google nach ${args.join(' ')}...`;
    }
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return 'Befehl: duckduckgo [Suchbegriff]. Beispiel: duckduckgo gitignore';
}
  else {
    window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
    return `Suche duckduckgo nach ${args.join(' ')}...`;
  }
};

//export const bing = async (args: string[]): Promise<string> => {
//  window.open(`https://bing.com/search?q=${args.join(' ')}`);
//  return `Wer benutzt heutzutage noch Bing? Das sind die Ergebnisse für ${args.join(' ')}?`;
//};

export const reddit = async (args: string[]): Promise<string> => {
  
  if (args.length === 0) {
    return 'Befehl: reddit [Suchbegriff]. Beispiel: reddit programming';
}
  else {
    window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
    return `Suche reddit nach ${args.join(' ')}...`;
  }
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `ein
paar
erfundene
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Leider kann man noch nicht die directories ändern`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};



export const sudo = async (args?: string[]): Promise<string> => {
  //window.open('https://www.youtube.com/watch?v=176WobDw3YA', '_blank'); 
  return `Zugriff verweigert: Nur Max Mnemo hat Zugriff auf admin Rechte `;
};



// Banner
export const banner = (args?: string[]): string => {
  return `
  ██████   ██████                                            
  ░░██████ ██████                                             
   ░███ █████ ███  ████████     ██████  █████████████    ██████ 
   ░███  ███  ███  ░███  ███   ███  ███ ░███ ░███  ███  ███  ███
   ░███      ░███  ░███  ███  ░███████  ░███ ░███  ███ ░███  ███
   ░███      ░███  ░███  ███  ░███░░░   ░███ ░███  ███ ░███  ███
   █████     █████ ████ █████ ░░██████  █████░███ █████░░██████ 
  ░░░░░     ░░░░░░ ░░░ ░░░░░   ░░░░░░  ░░░░░ ░░░ ░░░░░  ░░░░░░  
                                                              
                                                              
                                                              

Gebe 'help' ein, um die Liste der verfügbaren Befehle anzuzeigen.
Gebe 'bio' ein um die Übersicht über meine Bio aufzurufen.
Gebe 'repo' oder klicke <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">hier</a></u> für mein github repository.
`;
};
