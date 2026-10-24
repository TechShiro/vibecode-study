# Cyber Security & Ethical Hacking — Zero to Deep Mastery

A comprehensive, zero-level to deep technical curriculum covering cybersecurity axioms, network forensics, cryptography, public key infrastructure, web penetration testing (OWASP Top 10), binary exploitation, reverse engineering, red teaming (Metasploit & Active Directory), and defensive SOC operations.

---

## Course Curriculum Overview

| Module | Focus Area | Lessons |
| :--- | :--- | :--- |
| **Module A** | Foundations, Threat Modeling & OSINT Reconnaissance | Lessons 01 – 02 |
| **Module B** | Network Security, Packet Sniffing & Defenses | Lessons 03 – 04 |
| **Module C** | Cryptography, Ciphers & Public Key Infrastructure (PKI) | Lessons 05 – 07 |
| **Module D** | Web Application Security (OWASP Top 10) & Burp Suite | Lessons 08 – 11 |
| **Module E** | Binary Exploitation & Reverse Engineering | Lessons 12 – 13 |
| **Module F** | Red Teaming, Metasploit & Active Directory Attacks | Lessons 14 – 16 |
| **Module G** | Defensive Security, SOC Operations & Incident Response | Lesson 17 |

---

## Complete Lesson Index

### Module A · Foundations & Reconnaissance
1. [0001 · Cyber Security Foundations, CIA Triad & Threat Modeling](lessons/0001-cyber-security-foundations-cia-triad-defense-in-depth.html)
   - CIA Triad, Non-repudiation, AAA Model, Defense-in-Depth, STRIDE threat framework, Zero Trust architecture.
2. [0002 · Reconnaissance, OSINT & Network Scanning with Nmap](lessons/0002-reconnaissance-osint-and-port-scanning.html)
   - Passive OSINT (WHOIS, Shodan, DNS, Google Dorks), Active scanning (Nmap SYN scan `-sS`, `-sV`, NSE vulnerability scripts).

### Module B · Network Security & Forensics
3. [0003 · Network Protocols, Packet Sniffing & Wireshark](lessons/0003-network-protocols-sniffing-and-wireshark.html)
   - Promiscuous mode, ARP Poisoning (MITM), Deep packet inspection, Wireshark display filters, Tcpdump forensics. *(Includes NetworkChuck Video)*
4. [0004 · Firewalls, IDS/IPS & Encrypted VPN Tunneling](lessons/0004-firewalls-ids-ips-and-vpn-tunneling.html)
   - Stateless vs Stateful (SPI) vs Next-Gen firewalls, Writing Snort/Suricata rules, IPsec vs OpenVPN vs WireGuard.

### Module C · Cryptography & PKI
5. [0005 · Symmetric Cryptography, Block Ciphers & Hash Cracking](lessons/0005-symmetric-cryptography-and-hashing.html)
   - Kerckhoffs's principle, AES modes (ECB Tux leak, CBC, GCM AEAD), Hash properties, Slow KDFs (bcrypt/Argon2id), Hashcat cracking.
6. [0006 · Asymmetric Cryptography: RSA & Diffie-Hellman](lessons/0006-asymmetric-cryptography-rsa-and-diffie-hellman.html)
   - Key distribution dilemma, Diffie-Hellman discrete log math, RSA prime factorization algorithm, Elliptic Curves (ECC). *(Includes Computerphile Videos)*
7. [0007 · PKI, Digital Signatures & The TLS 1.3 Handshake](lessons/0007-pki-digital-signatures-and-tls-handshake.html)
   - Digital signatures (ECDSA/Ed25519), X.509 Certificate Authorities, Chain of Trust, 1-RTT encrypted TLS 1.3 handshake.

### Module D · Web Security (OWASP Top 10)
8. [0008 · SQL Injection (SQLi) & Command Injection](lessons/0008-web-security-injection-attacks-and-sql-injection.html)
   - In-band (UNION/Error), Blind (Boolean/Time), Automated exploitation with `sqlmap`, Parameterized queries (Prepared Statements). *(Includes Computerphile Video)*
9. [0009 · Cross-Site Scripting (XSS), CSRF & CORS Misconfigurations](lessons/0009-cross-site-scripting-xss-csrf-and-cors.html)
   - Same-Origin Policy (SOP), Stored/Reflected/DOM XSS, Session theft, CSRF anti-tokens, `SameSite=Strict`, `HttpOnly`, CSP headers.
10. [0010 · Authentication, Session Management & OAuth 2.0 Security](lessons/0010-authentication-session-hijacking-and-oauth2.html)
    - Broken Object Level Authorization (BOLA/IDOR), JWT vulnerabilities (`none` alg, weak secrets), OAuth 2.0 PKCE flow, FIDO2/WebAuthn.
11. [0011 · Web Penetration Testing with Burp Suite](lessons/0011-web-penetration-testing-with-burp-suite.html)
    - Intercepting Proxy, Repeater request tweaking, Intruder fuzzing, Malicious file uploads, Webshells, Cloud Metadata SSRF.

### Module E · Binary Exploitation & Reverse Engineering
12. [0012 · Memory Corruption, Stack Frames & Buffer Overflows](lessons/0012-memory-corruption-and-buffer-overflows.html)
    - Process memory layout, Stack frame anatomy, EIP/RIP hijacking, Shellcode injection, NX/DEP, ASLR, Stack Canaries, ROP. *(Includes Computerphile & LiveOverflow Videos)*
13. [0013 · Reverse Engineering, Assembly & Malware Analysis](lessons/0013-reverse-engineering-and-malware-analysis.html)
    - x86-64 assembly registers and instructions, Ghidra decompilation, GDB with GEF debugging, Static vs Dynamic sandbox analysis.

### Module F · Red Teaming & Enterprise Exploitation
14. [0014 · Exploitation Frameworks, Metasploit & Living off the Land](lessons/0014-exploitation-frameworks-and-metasploit.html)
    - MSF modules (Exploits, Payloads, Auxiliaries), Reverse vs Bind shells, Meterpreter in-memory execution, LOLBAS system binaries.
15. [0015 · Privilege Escalation: Linux & Windows](lessons/0015-privilege-escalation-linux-and-windows.html)
    - Linux SUID/GTFOBins, sudo misconfigurations, Windows unquoted service paths, Token Impersonation (PrintSpoofer), LinPEAS/WinPEAS.
16. [0016 · Active Directory Attacks, Kerberos & Domain Dominance](lessons/0016-active-directory-attacks-and-kerberos.html)
    - AD architecture, Kerberos TGT/TGS, Kerberoasting SPNs, AS-REP Roasting, Pass-the-Hash, Golden Ticket forge, BloodHound attack graphs.

### Module G · Defensive Security & SOC
17. [0017 · SOC Operations, SIEM & Incident Response](lessons/0017-soc-operations-siem-and-incident-response.html)
    - Blue Team SOC workflow, NIST SP 800-61 Incident Response playbook, Splunk SPL queries, Sigma rules, YARA malware detection.
