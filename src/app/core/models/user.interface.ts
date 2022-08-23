export interface User {
  code: number;
  data: [
    {
      userId: string;
      firstName: string;
      lastName: string;
      email: string;
    },
  ];
  error: number;
}
