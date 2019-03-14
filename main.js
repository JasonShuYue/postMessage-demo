var receiver = document.getElementById('receiverIframe').contentWindow;


root.addEventListener('click', function() {
    receiver.postMessage('from demo-1', 'http://localhost:8889/')
    // window.open('baidu.com')
})

window.addEventListener('message', function(e) {
    console.log('receive!!!!', e)
})