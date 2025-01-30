enum ErrorType {
  default = 'default',

}
type PropsTypes = {
  hasError: boolean;
  errorType?: ErrorType | string;
};

export { type PropsTypes, ErrorType };
