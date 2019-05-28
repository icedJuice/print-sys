function Print(dom, callback) {

    var iframe = document.createElement('iframe');
    var iframeAttr = {height:"0", width:"0", border:"0", wmode:"Opaque", id: "iframe"};
    for (let attr in iframeAttr) {
        iframeAttr.setAttribute(attr, iframeAttr[attr]);
    }
    
}
export default Print;