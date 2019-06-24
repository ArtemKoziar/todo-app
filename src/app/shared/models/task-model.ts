export interface Task {
  name: string;
  expiration?: number;
  estimate?: string;
  estimated: boolean;
  status: boolean;
}
