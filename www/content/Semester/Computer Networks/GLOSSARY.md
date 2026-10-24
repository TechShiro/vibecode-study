# Glossary — Computer Networks, Unit I

Terms in the order they are needed, with the phrasing that scores in an exam. Where a definition
is worth stating verbatim it is marked **(verbatim)**.

## Data communication

- **Data communication** *(verbatim)* — the exchange of data between two devices via some form of
  transmission medium such as a wire cable.
- **Message** — the information (data) to be communicated.
- **Sender / Receiver** — the devices that send and receive the message.
- **Transmission medium** — the physical path along which the message travels.
- **Protocol** *(verbatim)* — a set of rules that govern data communication; it defines what is
  communicated, how, and when. Its three elements are **syntax**, **semantics** and **timing**.
- **Delivery** — data must reach the correct destination and only that one.
- **Accuracy** — data must arrive unaltered, or be corrected.
- **Timeliness** — data must arrive in time; for audio/video this means **real-time transmission**.
- **Jitter** — the variation in packet arrival time. Uneven spacing, even with nothing lost.

## Network fundamentals

- **Network** *(verbatim)* — a set of devices (nodes) connected by communication links.
- **Node** — any device on a network capable of sending and/or receiving data.
- **Link** — a communications pathway that transfers data from one device to another.
- **Performance / Reliability / Security** — the three network criteria.
- **Bandwidth** — capacity, in hertz (range of frequencies) or bits per second.
- **Throughput** — the rate actually achieved at a point. Always ≤ bandwidth.
- **Latency (delay)** — total time for a whole message to arrive = propagation + transmission +
  queuing + processing.
- **Propagation time** — distance ÷ propagation speed.
- **Transmission time** — message size ÷ bandwidth.
- **Bandwidth-delay product** — bandwidth × delay; the number of bits that fill the link.
- **De facto standard** — adopted by usage, never formally approved (original TCP/IP).
- **De jure standard** — legislated by a recognised body (IEEE 802 series).
- **RFC** — Request for Comments; how Internet standards are published by the IETF.

## Data flow and connections

- **Simplex** — unidirectional; one device transmits, the other only receives.
- **Half-duplex** — both directions, but not at the same time.
- **Full-duplex (duplex)** — both directions simultaneously, via two separate paths or by dividing
  one channel's capacity.
- **Point-to-point** — a dedicated link between exactly two devices; full capacity reserved.
- **Multipoint (multidrop)** — more than two devices share one link; capacity shared spatially
  (simultaneous use) or temporally (taking turns).
- **Serial / parallel transmission** — one bit at a time on one wire vs n bits on n wires.
- **Unicast / Broadcast / Multicast / Anycast** — one-to-one, one-to-all, one-to-a-joined-group,
  one-to-nearest.

## Network types

- **PAN / LAN / MAN / WAN** — personal (~10 m), local (building/campus), metropolitan (city),
  wide (country/world).
- **CAN** — campus area network; several LANs of one campus interconnected.
- **Point-to-point WAN** — two devices joined by a single transmission medium, e.g. a leased line.
- **Switched WAN** — more than two endpoints, built from switches joining point-to-point WANs.
- **internet** (small i) — any two or more networks connected together.
- **Internet** (capital I) — the one global public internetwork.
- **Intranet** — a private network using Internet technology, inside one organisation.
- **Extranet** — an intranet partly extended to authorised outsiders.
- **Client–server** — a dedicated server provides, clients request; centralised and controlled.
- **Peer-to-peer** — every node is both client and server; distributed and scalable.

## Topology

- **Topology** *(verbatim)* — the geometric representation of the relationship of all the links and
  linking devices (nodes) to one another.
- **Physical topology** — how devices and cables are actually arranged.
- **Logical topology** — how data actually flows, which can differ from the physical layout.
- **Mesh** — a dedicated point-to-point link between every pair. n(n−1)/2 duplex links, n−1 ports.
- **Star** — every device linked only to a central hub or switch. n links, 1 port per device.
- **Bus** — one **backbone** cable, with **drop lines** and **taps**; **terminators** at both ends
  absorb the signal to prevent reflection. The only multipoint topology.
- **Ring** — each device linked to its two neighbours; unidirectional; each device is a **repeater**.
  A **dual ring** adds a reverse ring for fault tolerance.
- **Tree (hierarchical)** — stars connected to a central backbone or root hub.
- **Hybrid** — a combination of two or more topologies.

## Reference models

- **OSI** *(verbatim)* — Open Systems Interconnection; a reference model introduced by ISO in 1984.
  It is a model, **not a protocol**.
- **Open system** — a set of protocols allowing any two systems to communicate regardless of their
  underlying architecture.
- **PDU (Protocol Data Unit)** — the unit at each layer: **segment** (4), **packet** (3),
  **frame** (2), **bit** (1).
- **Encapsulation** — each layer adds a header (and, at the data link layer, a trailer) as data
  moves down the sender's stack. **Decapsulation** is the reverse at the receiver.
- **Peer-to-peer process** — layer *n* on one machine communicates logically with layer *n* on
  the other.
- **Interface** — the boundary between two adjacent layers, defining what services the lower layer
  provides to the upper.
- **Network support layers** — physical, data link, network (1–3).
- **User support layers** — session, presentation, application (5–7). Layer 4 links the two groups.
- **Hop-to-hop / source-to-destination / process-to-process** — the deliveries provided by the data
  link, network and transport layers respectively.
- **TCP/IP protocol suite** — the four-layer (or five-layer) suite the Internet runs on: network
  access, internet, transport, application.
- **Physical (MAC) address** — 48 bits, data link layer, within one network.
- **Logical (IP) address** — 32 bits in IPv4, network layer, across the internetwork.
- **Port address** — 16 bits, transport layer, identifies a process.
- **Specific address** — an e-mail address or URL, application layer.
- **ARP / RARP** — resolves IP → MAC / MAC → IP.
