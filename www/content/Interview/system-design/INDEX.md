# System Design — Complete Course Index

> Master System Design from fundamentals to interview-ready — HLD + LLD.

---

## 📘 Part 1: High-Level Design (HLD)

### Module A — Requirements & Fundamentals
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 01 | Functional & Non-Functional Requirements | What they are, how to gather, how to prioritize, examples | [Lesson 01](lessons/0001-functional-non-functional-requirements.html) |
| 02 | Serverless vs Serverful Architecture | FaaS, BaaS, when to use what, cold starts, pricing | [Lesson 02](lessons/0002-serverless-vs-serverful.html) |
| 03 | Horizontal vs Vertical Scaling | Scale-up vs scale-out, auto-scaling, elasticity, limits | [Lesson 03](lessons/0003-horizontal-vs-vertical-scaling.html) |
| 04 | Threads & Concurrency (HLD Perspective) | Thread pools, async I/O, event loops, C10K problem | [Lesson 04](lessons/0004-threads-concurrency-hld.html) |
| 05 | Pagination & Cursors | Offset vs cursor pagination, keyset, infinite scroll | [Lesson 05](lessons/0005-pagination-and-cursors.html) |
| 06 | How the Internet Works | DNS, TCP/IP stack, HTTP lifecycle, request journey | [Lesson 06](lessons/0006-how-the-internet-works.html) |

### Module B — Databases
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 07 | SQL vs NoSQL Databases | RDBMS vs document/key-value/graph/column, when to pick what | [Lesson 07](lessons/0007-sql-vs-nosql.html) |
| 08 | In-Memory Databases | Redis, Memcached, use cases, persistence, data structures | [Lesson 08](lessons/0008-in-memory-databases.html) |
| 09 | Data Replication & Schema Migration | Master-slave, multi-master, replication lag, schema evolution | [Lesson 09](lessons/0009-data-replication-schema-migration.html) |
| 10 | Data Partitioning | Horizontal/vertical partitioning, strategies, hot partitions | [Lesson 10](lessons/0010-data-partitioning.html) |
| 11 | Database Sharding | Sharding strategies, shard key, resharding, cross-shard queries | [Lesson 11](lessons/0011-database-sharding.html) |

### Module C — Consistency & Isolation
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 12 | Data Consistency & Its Levels | Strong/eventual/causal consistency, linearizability, quorum | [Lesson 12](lessons/0012-data-consistency-levels.html) |
| 13 | Isolation Levels | Read uncommitted → serializable, phenomena, MVCC | [Lesson 13](lessons/0013-isolation-levels.html) |
| 14 | CAP Theorem | Consistency-Availability-Partition tolerance, PACELC, real examples | [Lesson 14](lessons/0014-cap-theorem.html) |

### Module D — Caching
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 15 | Caching Fundamentals | What/why/where, Redis vs Memcached, cache layers, cache stampede | [Lesson 15](lessons/0015-caching-fundamentals.html) |
| 16 | Cache Write Policies | Write-back, write-through, write-around, consistency trade-offs | [Lesson 16](lessons/0016-cache-write-policies.html) |
| 17 | Cache Replacement Policies | LRU, LFU, Segmented LRU, ARC, FIFO, clock algorithm | [Lesson 17](lessons/0017-cache-replacement-policies.html) |
| 18 | Content Delivery Networks (CDNs) | Push vs pull CDN, edge caching, cache invalidation, providers | [Lesson 18](lessons/0018-cdn.html) |

### Module E — Networking
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 19 | TCP vs UDP | Reliability, flow control, use cases, QUIC | [Lesson 19](lessons/0019-tcp-vs-udp.html) |
| 20 | HTTP vs HTTPS | HTTP/1.1, HTTP/2, HTTP/3, TLS handshake, certificates | [Lesson 20](lessons/0020-http-vs-https.html) |
| 21 | WebSockets | Full-duplex, handshake, heartbeat, scaling, Socket.IO | [Lesson 21](lessons/0021-websockets.html) |
| 22 | WebRTC & Video Streaming | Peer-to-peer, signaling, STUN/TURN, HLS, DASH, adaptive bitrate | [Lesson 22](lessons/0022-webrtc-video-streaming.html) |

### Module F — Load Balancers & Traffic Management
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 23 | Load Balancing Algorithms | Round robin, weighted, least connections, IP hash, stateless vs stateful | [Lesson 23](lessons/0023-load-balancing-algorithms.html) |
| 24 | Consistent Hashing | Hash ring, virtual nodes, rebalancing, real-world uses | [Lesson 24](lessons/0024-consistent-hashing.html) |
| 25 | Proxy & Reverse Proxy | Forward proxy, reverse proxy, Nginx, API gateway | [Lesson 25](lessons/0025-proxy-reverse-proxy.html) |
| 26 | Rate Limiting | Token bucket, leaky bucket, sliding window, distributed rate limiting | [Lesson 26](lessons/0026-rate-limiting.html) |

### Module G — Message Queues & Async
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 27 | Asynchronous Processing | Kafka, RabbitMQ, SQS, event-driven, exactly-once, dead letter queues | [Lesson 27](lessons/0027-async-processing.html) |
| 28 | Publisher-Subscriber Model | Pub/Sub pattern, fan-out, topics, message ordering, at-least-once | [Lesson 28](lessons/0028-pub-sub-model.html) |

### Module H — Microservices Architecture
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 29 | Why Microservices (Monolith vs Microservices) | Benefits, drawbacks, when to use, Conway's law | [Lesson 29](lessons/0029-monolith-vs-microservices.html) |
| 30 | Single Point of Failure (SPOF) | Identifying, eliminating, redundancy, failover | [Lesson 30](lessons/0030-single-point-of-failure.html) |
| 31 | Cascading Failures & Resilience | Circuit breaker, bulkhead, retry, timeout, graceful degradation | [Lesson 31](lessons/0031-cascading-failures.html) |
| 32 | Containerization (Docker & Kubernetes) | Containers, images, orchestration, service mesh, K8s concepts | [Lesson 32](lessons/0032-containerization.html) |
| 33 | Migration to Microservices | Strangler fig, decomposition strategies, data migration | [Lesson 33](lessons/0033-migration-to-microservices.html) |

### Module I — Monitoring & Logging
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 34 | Logging & Monitoring Metrics | Structured logging, metrics (RED/USE), ELK, Prometheus, Grafana | [Lesson 34](lessons/0034-logging-monitoring.html) |
| 35 | Anomaly Detection | Statistical methods, ML-based, alerting, SLO/SLA/SLI | [Lesson 35](lessons/0035-anomaly-detection.html) |

### Module J — Security
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 36 | Authentication Tokens | JWT, session tokens, refresh tokens, token storage, revocation | [Lesson 36](lessons/0036-auth-tokens.html) |
| 37 | SSO & OAuth 2.0 | Single sign-on, OAuth flows, OpenID Connect, SAML | [Lesson 37](lessons/0037-sso-oauth.html) |
| 38 | Access Control & Rule Engines | ACL, RBAC, ABAC, policy engines, permission models | [Lesson 38](lessons/0038-access-control.html) |
| 39 | Encryption | Symmetric/asymmetric, hashing, TLS, at-rest, in-transit, key management | [Lesson 39](lessons/0039-encryption.html) |

### Module K — System Design Trade-offs
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 40 | Push vs Pull Architecture | Polling, long polling, SSE, push notifications, fan-out | [Lesson 40](lessons/0040-push-vs-pull.html) |
| 41 | Consistency vs Availability | Real-world trade-offs, tunable consistency, eventual convergence | [Lesson 41](lessons/0041-consistency-vs-availability.html) |
| 42 | SQL vs NoSQL — Deep Dive Trade-offs | Schema design, query patterns, scaling, migration | [Lesson 42](lessons/0042-sql-vs-nosql-tradeoffs.html) |
| 43 | Memory vs Latency | Caching trade-offs, memory-bound vs compute-bound, bloom filters | [Lesson 43](lessons/0043-memory-vs-latency.html) |
| 44 | Throughput vs Latency | Batching, pipelining, tail latency, P99, queuing theory | [Lesson 44](lessons/0044-throughput-vs-latency.html) |
| 45 | Accuracy vs Latency | Approximate algorithms, HyperLogLog, count-min sketch, sampling | [Lesson 45](lessons/0045-accuracy-vs-latency.html) |

### 🎯 Bonus HLD Lessons (Not in content.md but essential)
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 46 | API Gateway & Service Discovery | Gateway patterns, service registry, Consul, Envoy | [Lesson 46](lessons/0046-api-gateway-service-discovery.html) |
| 47 | Distributed Systems Fundamentals | Consensus (Raft/Paxos), clock synchronization, vector clocks | [Lesson 47](lessons/0047-distributed-systems-fundamentals.html) |
| 48 | Back-of-the-Envelope Estimation | Numbers every engineer should know, capacity planning | [Lesson 48](lessons/0048-estimation.html) |

---

## 📙 Part 2: Low-Level Design (LLD)

### Module L — OOP Foundations
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 49 | Encapsulation | Data hiding, getters/setters, information hiding principle | [Lesson 49](lessons/0049-encapsulation.html) |
| 50 | Inheritance | Types, diamond problem, composition vs inheritance | [Lesson 50](lessons/0050-inheritance.html) |
| 51 | Abstraction | Abstract classes, interfaces, abstraction layers | [Lesson 51](lessons/0051-abstraction.html) |
| 52 | Polymorphism | Compile-time vs runtime, method overloading/overriding, dispatch | [Lesson 52](lessons/0052-polymorphism.html) |
| 53 | SOLID Principles | SRP, OCP, LSP, ISP, DIP — with real code examples | [Lesson 53](lessons/0053-solid-principles.html) |

### Module M — Design Patterns
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 54 | Creational Patterns | Singleton, Factory, Abstract Factory, Builder, Prototype | [Lesson 54](lessons/0054-creational-patterns.html) |
| 55 | Structural Patterns | Proxy, Bridge, Adapter, Decorator, Facade, Composite, Flyweight | [Lesson 55](lessons/0055-structural-patterns.html) |
| 56 | Behavioral Patterns | Strategy, Command, Observer, State, Template Method, Iterator, Chain of Responsibility | [Lesson 56](lessons/0056-behavioral-patterns.html) |

### Module N — Concurrency & Thread Safety
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 57 | Thread-Safe Injection & Patterns | Dependency injection in multi-threaded environments, scoped instances | [Lesson 57](lessons/0057-thread-safe-injection.html) |
| 58 | Locking Mechanisms | Mutex, semaphore, read-write lock, spin lock, deadlock | [Lesson 58](lessons/0058-locking-mechanisms.html) |
| 59 | Producer-Consumer Pattern | Bounded buffer, blocking queue, back-pressure | [Lesson 59](lessons/0059-producer-consumer.html) |
| 60 | Race Conditions & Synchronization | Data races, atomic operations, volatile, memory barriers | [Lesson 60](lessons/0060-race-conditions.html) |

### Module O — UML & API Design
| # | Lesson | Topic | File |
|---|--------|-------|------|
| 61 | UML Diagrams | Class, sequence, activity, component, state diagrams for LLD | [Lesson 61](lessons/0061-uml-diagrams.html) |
| 62 | API Design Principles | RESTful design, naming, idempotency, pagination, error handling | [Lesson 62](lessons/0062-api-design.html) |
| 63 | Request/Response Object Modelling | DTOs, request validation, response shaping, HATEOAS | [Lesson 63](lessons/0063-req-res-modelling.html) |
| 64 | Versioning & Extensibility | URI/header/query versioning, backward compatibility, deprecation | [Lesson 64](lessons/0064-versioning-extensibility.html) |
| 65 | Clean Code: DRY, SRP & Beyond | DRY, KISS, YAGNI, SRP in practice, refactoring patterns | [Lesson 65](lessons/0065-clean-code-principles.html) |
| 66 | Avoiding God Classes | Decomposition, responsibility assignment, refactoring monoliths | [Lesson 66](lessons/0066-avoiding-god-classes.html) |

---

## 📊 Course Stats
- **Total Lessons:** 66 (48 HLD + 18 LLD)
- **Format:** HTML with dark mode, interactive quizzes, flow diagrams, architecture diagrams
- **Language:** Java for code examples
- **Target:** Interview preparation (FAANG/tier-1 companies) AND building real-world personal projects from zero

---

*Say "next" to advance to the next lesson. Each lesson covers everything you need to know about that topic — theory, diagrams, real-world examples, interview questions, and quizzes.*
