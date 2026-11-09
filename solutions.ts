const multiplyValue = (value: number, multiplier?: number) => {
  if (typeof multiplier === "undefined") {
    return value * 2;
  }
  return value * multiplier;
};

type Input = string | number | boolean;

const processInput = (value: Input): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value === false) {
      return `Inactive`;
    }
  }
  return `Active`;
};

const formatCoordinate = (coordinate: readonly [number, number, string]) => {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]) => {
  const array: T[] = [];

  for (const arr of arrays) {
    for (const item of arr) {
      array.push(item);
    }
  }
  return array;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (course: Course[], minStudents: number) => {
  return course.filter(
    (item) => item.isPublished === true && item.students >= minStudents,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const result: T[K][] = [];
  for (const item of items) {
    result.push(item[key]);
  }

  return result;
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string | undefined> => {
  try {
    if (age < 18) {
      throw new Error("Error: Access Denied: Must be 18 or older");
    }

    await new Promise((passed) => setTimeout(passed, 1000));
    return "Access Granted";
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    } else {
      console.error("Something went wrong");
    }
  }
};
