import config from '../../../config.json';

const bio = async (args: string[]): Promise<string> => {
  if (config.ascii === 'mnemo') {
    return `                                                  
                                             Bio: Übersicht
        @@@@@@@@@@@@@@@@@@@@@@@@@@         -----------
        @                        @           ABOUT
        @                        @           ${config.name}
        @   ___                  @          ﰩ ${config.ps1_hostname}
        @     /                  @           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
        @    /                   @          爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
        @                        @          -----------
        @       _______/         @           CONTACT 
        @                        @           <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
        @@@@@@@@@@@@@@@@@@@@@@@@@@           <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
            @                @               <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
          @                   @             -----------
         @                     @@            MONEY
       @@                       @@           <u><a href="${config.money_urls.paypal}" target="_blank">${config.money_urls.paypal}</a></u>
      @___________________________@         

`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  bio
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓        > E R R O R              ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             MONEY
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="${config.money_urls.paypal}" target="_blank">${config.money_urls.paypal}</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

`;
  }
};

export default bio;
