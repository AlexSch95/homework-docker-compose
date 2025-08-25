## Aha-Effekt  
Naja, im Endeffekt, dass wir mit Docker-Compose komplexe Strukturen und Abhängigkeiten einfach 1 mal zusammenbauen können, und diese immerwieder ohne viel Aufwand starten können

## Service-Kommunikation  
Der Name des Service der in der YAML File festegelegt wird, ist in der Docker-Compose umgebung auch gleichzeitig der Hostname, darum funktioniert die kommunikation zwischen unserer js datei und der datenbank, weil die datenbank dort mit dem Hostname "redis" angesprochen wird

## Datenverlust  
Der Zählerstand ist bei erneutem starten wieder auf 0 da die Datenbank eine in memory DB ist und weil wir keinerlei konfiguration von volumes etc vorgenommen haben
