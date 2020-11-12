function reset() {
  document.querySelector('.zoom-in').click();
  document.body.style = 'min-width: 100px';
  document.querySelector('header').style = 'height: 0; overflow: hidden';
  document.querySelector('main').style = 'height: 100vh';
  document.querySelector('.screen-viewer').style = 'height: 100vh; background: #a0a0a0';
  const barStyle = document.createElement('style');
  barStyle.innerText = `
        .inspector {
    left: -240px;
        }
        .inspector.active {
    left: 0;
        }
      `;
  document.querySelector('head').appendChild(barStyle)
};
reset();