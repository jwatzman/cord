import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import { ConsoleRoutes } from 'external/src/entrypoints/console/routes.ts';
import { Colors } from 'common/const/Colors.ts';
import { Sizes } from 'common/const/Sizes.ts';

const useStyles = createUseStyles({
  loginButton: {
    color: Colors.GREY_X_DARK,
    border: `${Sizes.DEFAULT_BORDER_WIDTH}px solid ${Colors.GREY_X_DARK}`,
    borderRadius: Sizes.DEFAULT_BORDER_RADIUS,
  },
});

const LoginButton = ({ type }: { type?: 'signup' }) => {
  const classes = useStyles();

  return (
    <Link className={classes.loginButton} to={ConsoleRoutes.LOGIN}>
      {type === 'signup' ? 'Sign up' : 'Log In'}
    </Link>
  );
};

export default LoginButton;
