
// 获取需要截取的dom  并设置样式
function getNewBody() {
    const rightWrap = document.body.querySelector('.right-content-wrap');
    const newRightWrap = rightWrap.cloneNode(true);
    newRightWrap.setAttribute('style', 'margin: 0 auto;top: 0;width: 836px;z - index: 100;background: #fff;');
    newRightWrap.removeChild(newRightWrap.querySelector('.fix-box-wrap'));
    newRightWrap.querySelector('.right-content-message').setAttribute('style', 'padding: 50px 60px;');
    newRightWrap.querySelector('.right-content-space').setAttribute('style', 'height: 10px; background: #f8f8f8;');
    const allPre = newRightWrap.querySelectorAll('pre') || [];
    allPre.forEach(item => item.setAttribute('style', 'word-break: break-all;white - space: pre - line;'));
    const newBody = document.createElement('body');
    newBody.setAttribute('style', 'font-size: 12px; height: 100%; width: 100%; background-color: rgb(237, 237, 237);');
    newBody.appendChild(newRightWrap);
    return newBody;
};

// 打印前设置打印内容和标题
window.onbeforeprint = () => {
    document.body = newBody;
    document.title = document.querySelector('.main-title').innerText;
};

// 打印后刷新页面
window.onafterprint = () => {
    location.reload();
};

window.newBody = getNewBody();

// 打印
window.print();
