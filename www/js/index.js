'use strict'

var BookIt = BookIt || {};

var app = {

  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function(){ this.receivedEvent('deviceready') },

  receivedEvent: id => inicialice()
};

if($.browser && $.browser.webkit){
  app.initialize();
}else{
  BookIt.state = 'download'
  inicialice();
}


function inicialice(){
  jQuery(document).ready( $ => {
    console.log('ready!!')

    // Ejemplo de código NFC que recive un mensaje en texto plano
    nfc.addNdefListener (
      function (nfcEvent) {
        var tag = nfcEvent.tag,
            ndefMessage = tag.ndefMessage;

        alert(JSON.stringify(ndefMessage));

        alert(nfc.bytesToString(ndefMessage[0].payload).substring(3));
      },
      function () { 
        alert("Waiting for NDEF tag");
      },
      function (error) { 
        alert("Error adding NDEF listener " + JSON.stringify(error));
      }
    );

  });
}

