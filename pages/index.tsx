import Button from "../components/Button";
import Htag from "../components/Htag";

export default function Home(): JSX.Element {
    return <div>
        <Htag tag='h1'>My top</Htag>
        <Button buttonView={'primary'} arrow={'right'}>Кнопка</Button>
        <Button buttonView={'ghost'} arrow={'down'}>Кнопка</Button>
    </div>;
}
