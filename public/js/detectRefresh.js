/* THIS CRAP DOES NOTHING IM JUST TO LAZY TO DELETE IT! */
function checkRefresh() {
    var today = new Date();
    var now = today.getUTCSeconds();
    var cookie = document.cookie;
    var cookieArray = cookie.split("; ");
    for(var loop=0; loop < cookieArray.length; loop++) {
        var nameValue = cookieArray[loop].split('=');
        if( nameValue[0].toString() == 'SHTS' ) {
            var cookieTime = parseInt( nameValue[1] );
        }
        else if( nameValue[0].toString() == 'SHTSP' ) {
            var cookieName = nameValue[1];
        }
    }
    if( cookieName &&
            cookieTime &&
            cookieName == escape(location.href) &&
            Math.abs(now - cookieTime) < 5 ) {
                console.log("Refresh Detected!")
            }
}
function prepareForRefresh() {
    if( refresh_prepare > 0 ) {
        // Turn refresh detection on so that if this
        // page gets quickly loaded, we know it's a refresh
        var today = new Date();
        var now = today.getUTCSeconds();
        document.cookie = 'SHTS=' + now + ';';
        document.cookie = 'SHTSP=' + escape(location.href) + ';';
    }
    else {
        // Refresh detection has been disabled
        document.cookie = 'SHTS=;';
        document.cookie = 'SHTSP=;';
    }
}