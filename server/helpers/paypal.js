const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AW4OaRK6PkgTNd7AdrLCxIE9wUAyPnGrPhahVYQqIN2qw-3dO0xkBWg4cb00-vryNfYu4bEfFHsC0L8_",
  client_secret:
    "EKH_hhGJ-dlgsJ_kk4nc81Odg5c0agMoFQLQgHVRZJda6ViPlaIYmIglg2T23EC6nWHzQRyt-8bn9HxR",
});

module.exports = paypal;
