class Footer {
  footer: HTMLElement;

  constructor() {
    this.footer = document.createElement('footer');
  }

  render() {
    this.footer.className = 'footer';
    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';
    const year = document.createElement('div');
    year.className = 'year';
    year.innerText = '2022';
    const githubLinks = document.createElement('div');
    githubLinks.className = 'github';
    githubLinks.innerText = 'GitHub:';
    const githubSogo = document.createElement('span');
    githubSogo.className = 'github';
    githubSogo.innerText = 'SogoHlopec';
    const githubLinkSogo = document.createElement('a');
    githubLinkSogo.className = 'social';
    githubLinkSogo.href = 'https://github.com/SogoHlopec';
    const and = document.createElement('span');
    and.className = 'github';
    and.innerText = ' and ';
    const githubGalina = document.createElement('span');
    githubGalina.className = 'github';
    githubGalina.innerText = 'Galigalinochka';
    const githubLinkGalina = document.createElement('a');
    githubLinkGalina.className = 'social';
    githubLinkGalina.href = 'https://github.com/galigalinochka';
    const rsLogo = document.createElement('div');
    rsLogo.className = 'rs-logo';
    const rsLink = document.createElement('a');
    rsLink.href = 'https://rs.school/js/';
    this.footer.prepend(footerContainer);
    footerContainer.prepend(year);
    footerContainer.append(githubLinks);
    footerContainer.append(rsLogo);
    githubLinks.append(githubLinkSogo);
    githubLinkSogo.append(githubSogo);
    githubLinks.append(and);
    githubLinks.append(githubLinkGalina);
    githubLinkGalina.prepend(githubGalina);
    rsLogo.prepend(rsLink);
  }
}

export default Footer;
