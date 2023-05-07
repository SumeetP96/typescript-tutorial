// Utility Types - for common type transformations

// Partial - Make all properties in T optional
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "asdf1",
  title: "Final project",
  grade: 0,
};

const assignGraded = updateAssignment(assign1, { grade: 80 });
console.log(assignGraded);

// Required - Make all properties in T required
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};
// recordAssignment(assignGraded);
recordAssignment({ ...assignGraded, verified: true });

// Readonly - Make all properties in T readonly
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};
// assignVerified.grade = 84;

// Record - Construct a type with a set of properties K of type T
const hexColorMap: Record<string, string> = {
  red: "ff0000",
  green: "00ff00",
  blue: "0000ff",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "D",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 90 },
  Kelly: { assign1: 90, assign2: 85 },
};

// Pick
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "asdf2",
  grade: 85,
};

// Omit
type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "asdf3",
  title: "Final",
};

// Exclude
type adjustedGrades = Exclude<LetterGrades, "U">;

// Extrace
type highGrades = Extract<LetterGrades, "A" | "B">;

// Nonnullable
type AllPossibleGrades = "Dave" | "John" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

// Return type

// type newAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>;
const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with the ReturnType of a Promise
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) {
        console.log(err.message);
      }
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((user) => console.log(user));
