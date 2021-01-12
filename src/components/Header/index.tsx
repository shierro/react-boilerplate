import useStyles from './styles';

const Header: React.FC = () => {
  const { root } = useStyles();
  return <div className={root}>Header</div>;
};

export default Header;
