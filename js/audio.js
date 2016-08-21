var playerElement = jQuery("#player");
jQuery.ajax({
     url: "http://yourserver/channels.json",
     dataType: 'json',
     ifModified: true,
     success: function(data, status){
         for (var i = 0, len = data.station.channels.length; i < len; i++) {
          "station" : {
            "name" : "NRK",
            "fullname" : "Norsk Rikskringkasting AS",
            "website" : "http://www.nrk.no/",
            "defaultChannel" : "P1",
            "channels" : [
            {
              "name" : "P1",
              "channel" : "NRK P1",
              "website" : "http://www.nrk.no/p1/",
              "schedule" : "",
              "logo" : "http://yoursite/gfx/nrk_p1.png",
              "streams" : {
                "type" : "middle",
                "ogg" : "http://radio.hiof.no/nrk-p1-128.ogg",
                "mp3" : "http://radio.hiof.no/nrk-p1-128"
              }
            }
            ]
          }
        }
     }
 });

changeChannel:function(){
 
     // Удалить старый поток
     playerElement.jPlayer("clearFile");
 
     // Задать новый поток
     playerElement.jPlayer("setFile", "urlToNewMP3Stream", "urlToNewOGGStream");
 }

