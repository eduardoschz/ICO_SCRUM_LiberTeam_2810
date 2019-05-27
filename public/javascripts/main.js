// Floating Actiion Buttom
const elemsBtns = document.querySelectorAll(".fixed-action-btn");
const floatingBtn = M.FloatingActionButton.init(elemsBtns, {
    direction: "left",
    hoverEnabled: false
});

// Navbar
const elemsDropdown = document.querySelectorAll(".dropdown-trigger");
const instancesDropdown = M.Dropdown.init(elemsDropdown, {
    coverTrigger: false
});

var firebaseConfig = {
   apiKey: "AIzaSyDIMFT1vMCI3tl-A90J2uV1hkEsjQK3LEo",
   authDomain: "si-micros-control.firebaseapp.com",
   databaseURL: "https://si-micros-control.firebaseio.com",
   projectId: "si-micros-control",
   storageBucket: "si-micros-control.appspot.com",
   messagingSenderId: "791163044131",
   appId: "1:791163044131:web:fb4301fd3d1a7eb2"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
function actualiza(){
  var humedad = document.getElementById('miTexto').value;
  var db = firebase.database().ref('/');
  if(humedad<=0 || humedad >100){
    alert("No valido");
    document.getElementById('miTexto').value = 0;
  }else{
    db.update({'minHum': parseInt(humedad)});
    alert("Humedad Minima actualizada a " + humedad);
  }

}

/**
 * import Adafruit_BBIO.ADC as ADC
import Adafruit_BBIO.GPIO as GPIO
import time
from firebase import firebase
from datetime import datetime
import json
import httplib, urllib


firebase = firebase.FirebaseApplication('https://si-micros-control.firebaseio.com/', None)
humedad_minima = firebase.get('/minHum', None)
# print result

sensor_pin = "P1_25"

ADC.setup()
GPIO.setup("P1_10",GPIO.OUT)
id = firebase.get('/id', None)

def registrar(humedad, accion, id ):
    now = datetime.now()
    t = now.strftime("%m-%d-%Y %H:%M:%S")
    ids = str(id) + ""
    print ids

    nuevo =    {'id'+ids:
                        {'datetime': t ,
                        'value': humedad,
                        'action': accion}
                    }

    res = firebase.patch('/regHum', nuevo)

   # print res


print('Porcentaje de Humedad\t\tVolts')



while True:
    humedad_minima = firebase.get('/minHum', None)
    reading = ADC.read(sensor_pin)
    volts = reading * 3.3000
    humidity = ((3.3-volts)/3.3)*100
    k='L6QXG39HIUMNMP2D'
    params = urllib.urlencode({'field1': humidity, 'field2': humedad_minima, 'key': k})
    headers = {"Content-type": "application/x-www-form-urlencoded","Accept":"text/plain"}
    conn = httplib.HTTPConnection("api.thingspeak.com:80")
    conn.request("POST", "/update", params, headers)

    print('%f\t%f' % (humidity, volts))
    id = id +1
    if humidity < humedad_minima:
        registrar(humidity, '1',id)
        GPIO.output('P1_10', GPIO.HIGH)
    else:
        registrar(humidity, '0',id)
        GPIO.output('P1_10', GPIO.LOW)
    time.sleep(15)



 */
