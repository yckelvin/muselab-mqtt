input.onButtonPressed(Button.A, function () {
    MuseIoT.mqttPublish("mqtt/demo", "{\"name\":\"student\",\"Description\":\"CO2\"}")
    MuseOLED.writeStringNewLine("Co: " + convertToText(MuseIoT.mqttInbound()) + "ppm")
    basic.pause(5000)
})
input.onButtonPressed(Button.AB, function () {
    MuseOLED.clear()
})
input.onButtonPressed(Button.B, function () {
    MuseIoT.mqttPublish("mqtt/demo", "{\"name\":\"student\",\"Description\":\"Temp\"}")
    MuseOLED.writeStringNewLine("Temp: " + convertToText(MuseIoT.mqttInbound()) + " C")
})
MuseIoT.initializeWifi()
MuseIoT.setWifi("izowifi", "izo1234@")
basic.pause(10000)
MuseIoT.connectgeneralMQTT(
"47.243.88.174",
"1884",
"001",
"admin",
"public"
)
basic.pause(2000)
MuseIoT.mqttSubscribe("student/IAQ")
MuseOLED.writeStringNewLine("subscribe on student/IAQ")
