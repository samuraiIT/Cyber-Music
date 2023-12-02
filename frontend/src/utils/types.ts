//общие типы
export type ValuesOf<T> = T[keyof T];

export type User = {
  username: string;
  password: string;
};

export type LoginData = {
  id: number | null;
  username: string;
};
