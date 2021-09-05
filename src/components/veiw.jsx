import classes from './css/veiw.module.css';
import Tbody from './Tbody';
import Thead from './Thead';

const Veiw = ({ todos, handelUpdate, handelDelete, handelVeiw }) => (
    <div className={classes.view}>
        <table>
            <Thead />
            <Tbody
                todos={todos}
                handelUpdate={handelUpdate}
                handelDelete={handelDelete}
                handelVeiw={handelVeiw}
            />
        </table>
    </div>
);

export default Veiw;
