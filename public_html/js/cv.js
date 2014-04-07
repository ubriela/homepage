var req;
var isIE;

var centerCol;
var cvTable;

function initCV() {
    cvTable = document.createElement("table");
    cvTable.setAttribute("style", "display: none");
    centerCol = document.getElementById("centerCol");
    centerCol.appendChild(cvTable);
}

function doCV() {
    var url = "cv.php";
    req = initRequestCV();
    req.open("GET", url, true);
    req.onreadystatechange = callbackcv;
    req.send(null);
}

function initRequestCV() {
    if (window.XMLHttpRequest) {
        if (navigator.userAgent.indexOf('MSIE') != -1) {
            isIE = true;
        }
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        isIE = true;
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function callbackcv() {
    clearTableCV();

    if (req.readyState == 4) {
        if (req.status == 200) {
            parseMessagesCV(req.responseXML);
        }
    }
}

function clearTableCV() {
    if (cvTable.getElementsByTagName("tr").length > 0) {
        cvTable.style.display = 'none';
        for (loop = cvTable.childNodes.length -1; loop >= 0 ; loop--) {
            cvTable.removeChild(cvTable.childNodes[loop]);
        }
    }
}


function parseMessagesCV(responseXML) {

    // no matches returned
    if (responseXML == null) {
        return false;
    } else {

        var content = responseXML.getElementsByTagName("content")[0];

        if (content.childNodes.length > 0) {
            cvTable.setAttribute("bordercolor", "black");
            cvTable.setAttribute("border", "1");

            row = document.createElement("tr");
            cell = document.createElement("td");
            cell.textContent = content;
            row.appendChild(cell);
            cvTable.appendChild(row);
        }
    }
}