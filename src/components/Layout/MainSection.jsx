import Container from '../container';
import Control from '../Control';
import classes from '../css/mainSection.module.css';
import Veiw from '../veiw';

const MainSection = () => (
    <main id={classes.mainSection}>
        <Container>
            <Control />
            <Veiw />
        </Container>
    </main>
);

export default MainSection;
