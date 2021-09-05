import classes from './css/veiw.module.css';
import Tbody from './Tbody';
import Thead from './Thead';

const Veiw = () => (
    <div className={classes.view}>
        <table>
            <Thead />
            <Tbody />
        </table>
    </div>
);

export default Veiw;
