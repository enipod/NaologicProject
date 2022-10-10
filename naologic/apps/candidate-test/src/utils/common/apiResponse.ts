export class ApiResponse<T = unknown> {
  ok: boolean;
  code?: string;
  message?: string;
  stack?: string;

  result?: T;

  constructor(
    ok: boolean,
    result?: T,
    code?: string,
    message?: string,
    stack?: string
  ) {
    this.ok = ok;
    this.code = code;
    this.message = message;
    this.stack = stack;
    this.result = result;
  }
}
