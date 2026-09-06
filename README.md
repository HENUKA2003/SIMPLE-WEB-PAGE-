# SIMPLE-WEB-PAGE-
this page use HTML,CSS,JS

https://henuka2003.github.io/SIMPLE-WEB-PAGE



MDAxIFdJTkRPUzEwIDE5Mi4xNjguMTU2LjIgOTI3NWRhN2ViNzk4NDYyYjI3NTE3NzIwODUxZTRlYWE4N2Y2NjU4NTBjODY0NzM0ZmViYmIwZTBiMjk0ZTNmNw==
Get-Content "C:\Program Files (x86)\ossec-agent\ossec.conf" | Select-String -Pattern "address|port|protocol"

Test-NetConnection YOUR_UBUNTU_IP -Port 1514

Restart-Service WazuhSvc



Get-Content "C:\Program Files (x86)\ossec-agent\ossec.log" -Tail 30

PS C:\Windows\system32> Get-Content "C:\Program Files (x86)\ossec-agent\ossec.log" -Tail 3
2026/09/06 13:48:48 wazuh-agent: INFO: Trying to connect to server ([198.168.156.128]:1514/tcp).
2026/09/06 13:49:09 wazuh-agent: ERROR: (1216): Unable to connect to '[198.168.156.128]:1514/tcp': 'No connection could be made because the target machine actively refused it.'.
2026/09/06 13:49:09 wazuh-agent: INFO: Requesting a key from server: 198.168.156.128













Test-NetConnection 198.168.156.128 -Port 1514




 failed because the connected party did not properly respond after a period of time, or established connection failed because connected host has failed to respond.'.
PS C:\Windows\system32> Test-NetConnection 198.168.156.128 -Port 1514
WARNING: TCP connect to (198.168.156.128 : 1514) failed
WARNING: Ping to 198.168.156.128 failed with status: TimedOut


ComputerName           : 198.168.156.128
RemoteAddress          : 198.168.156.128
RemotePort             : 1514
InterfaceAlias         : Ethernet0
SourceAddress          : 192.168.156.134
PingSucceeded          : False
PingReplyDetails (RTT) : 0 ms
TcpTestSucceeded       : False



PS C:\Windows\system32>




PS C:\Windows\system32> Test-NetConnetion192.168.159.128 -Port1514
Test-NetConnetion192.168.159.128 : The term 'Test-NetConnetion192.168.159.128' is not recognized as the name of a
cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify
that the path is correct and try again.
At line:1 char:1
+ Test-NetConnetion192.168.159.128 -Port1514
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (Test-NetConnetion192.168.159.128:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException






  Test-NetConnection 192.168.159.128 -Port 1514
  
