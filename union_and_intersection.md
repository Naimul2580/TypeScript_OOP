# Combining Union and Intersection Types in TypeScript

---

### Introduction
Building flexible applications usually comes down to how well our code reflects real-world business logic. Sometimes data needs to fit into distinct categories while still carrying a few essential shared details. That's where combining union and intersection types comes in—giving you the precision to handle complex setups cleanly. Here we will explore how these operators work together through a practical implementation.

---

#### Union Types
A union type (`|`) works like a logical OR. It lets a value to be one of several possible types, which is perfect when a variable needs to handle different shapes or primitives flexibly without dropping type safety.

#### Intersection Types
An intersection type (`&`) acts like a logical AND. It merges multiple types into a single structure, which ensures that any object using it satisfies every property defined across all the combined types.

---

### Code Examples
```typescript
type Admin = { role: "admin"; permissions: string[] };
type Guest = { role: "guest" };
type AuthToken = { token: string; expiresAt: Date };

// Combining Union and Intersection:
type ActiveSession = (Admin | Guest) & AuthToken;

const currentAdmin: ActiveSession = {
  role: "admin",
  permissions: ["read", "write", "delete"],
  token: "secret_token_xyz123",
  expiresAt: new Date("2026-12-31")
};
```
---

#### Conclusion
Lastly, combining union and intersection types allows us to accurately model real-world business logic and constraints. We used union types when a value can vary between distinct alternatives and we leveraged intersection types when mandatory base properties must always accompany those variations. This ensures strict type safety and a highly predictable codebase.

