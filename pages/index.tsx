import Button from "../components/Button";
import Htag from "../components/Htag";
import Paragraph from "../components/Paragraph";
import Tag from "../components/Tag";

export default function Home(): JSX.Element {
    return <div>
        <Htag tag='h1'>My top</Htag>
        <Button buttonView={'primary'} arrow={'right'}>Кнопка</Button>
        <Button buttonView={'ghost'} arrow={'down'}>Кнопка</Button>
        <Paragraph size={"large"}>Большой</Paragraph>
        <Paragraph> Средний</Paragraph>
        <Paragraph size={"small"}>Маленький</Paragraph>
        <Tag size={"small"}>Ghost</Tag>
        <Tag size={"medium"} color={'red'}>Red</Tag>
        <Tag size={"small"} color={'green'}>Green</Tag>
        <Tag color={'primary'}>Primary</Tag>
    </div>;
}
