In Node.js, there are several architectural patterns commonly used to structure applications. Here are some of the most prominent ones:

1. **Monolithic Architecture**:
   - In this pattern, the entire application is built as a single, self-contained unit.
   - All components, such as server logic, database access, and business logic, are tightly coupled within the same codebase.
   - It's straightforward to develop and deploy but may become difficult to maintain and scale as the application grows.

2. **Microservices Architecture**:
   - In this pattern, the application is composed of multiple independent services, each responsible for a specific functionality.
   - Each service runs as a separate process and communicates with other services through lightweight protocols like HTTP or messaging queues.
   - Microservices promote scalability, flexibility, and easier maintenance but can introduce complexity in managing the distributed system.

3. **Layered Architecture**:
   - This architecture divides the application into layers such as presentation, business logic, and data access.
   - Each layer communicates only with the layer directly below or above it, following a strict hierarchy.
   - It promotes separation of concerns and modularity, making it easier to understand and maintain the codebase.

4. **Serverless Architecture**:
   - In this pattern, the application logic is implemented as small, stateless functions that are executed in response to events triggered by external sources.
   - Developers focus on writing code without managing infrastructure, as the cloud provider handles scaling and resource allocation automatically.
   - Serverless architectures can be cost-effective and highly scalable, but may not be suitable for all types of applications due to limitations in execution time and resource constraints.

5. **Event-Driven Architecture**:
   - This architecture relies on events to trigger and communicate between different components of the system.
   - Components react to events asynchronously, allowing for loose coupling and scalability.
   - Event-driven architectures are well-suited for real-time applications, event sourcing, and reactive systems.

Each of these architectures has its own strengths and trade-offs, and the choice depends on factors such as the application's requirements, scalability needs, team expertise, and project goals.