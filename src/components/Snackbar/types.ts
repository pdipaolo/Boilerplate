enum SnackbarType {
  default = 'default',

}
type PropsTypes = {
  isVisible: boolean;
  snackbarType?: SnackbarType | null;
};

export { type PropsTypes, SnackbarType };
