# Interfaces and Type Aliases

---

### 1. Type Aliases vs. Interfaces



#### Code Example
```typescript

interface Box {
  height: number;
}
interface Box {
  width: number;
}

const myBox: Box = { height: 10, width: 20 };


type ID = string | number; 
type Point = { x: number; y: number };

const userId: ID = "EMP-404";
const coordinate: Point = { x: 5, y: 10 };
