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
    const githubLinkSogo = document.createElement('a');
    githubLinkSogo.className = 'social';
    githubLinkSogo.innerText = 'SogoHlopec';
    githubLinkSogo.href = 'https://github.com/SogoHlopec';
    const and = document.createElement('span');
    and.className = 'github';
    and.innerText = ' and ';
    const githubLinkGalina = document.createElement('a');
    githubLinkGalina.className = 'social';
    githubLinkGalina.innerText = 'Galigalinochka';
    githubLinkGalina.href = 'https://github.com/galigalinochka';
    const rsLink = document.createElement('a');
    rsLink.className = 'rs-logo';
    rsLink.href = 'https://rs.school/js/';
    this.footer.prepend(footerContainer);
    footerContainer.prepend(year);
    footerContainer.append(githubLinks);
    footerContainer.append(rsLink);
    githubLinks.append(githubLinkSogo);
    githubLinks.append(and);
    githubLinks.append(githubLinkGalina);
  }
}

export default Footer;
