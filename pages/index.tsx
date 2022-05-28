import Button from "../components/Button";
import Htag from "../components/Htag";

export default function Home(): JSX.Element {
    return <div>
        <Htag tag='h1'>My top</Htag>
        <Button buttonView={'primary'}>Кнопка</Button>
        <Button buttonView={'ghost'}>Кнопка</Button>
    </div>;
}
