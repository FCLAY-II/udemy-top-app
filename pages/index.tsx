import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";

export default function Home(): JSX.Element {
    return <div>
        <Htag tag='h1'>My top</Htag>
        <Button appearance={'primary'}>Кнопка</Button>
        <Button appearance={'ghost'}>Кнопка</Button>
    </div>;
}
