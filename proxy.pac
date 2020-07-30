function FindProxyForURL(url, host) {
var proxy="PROXY 1.2.3.9:9354";


if (isInNet(host, "204.185.144.0", "255.255.255.0") ||
shExpMatch(host, "*.manage.microsoft.com") ||
shExpMatch(host, "*.jamfcloud.com") ||
isInNet(dnsResolve("BSSD-Staff-DC01.bssd.net"), "10.13.50.1", "255.255.255.255")) {
return "DIRECT";
}

return proxy
}