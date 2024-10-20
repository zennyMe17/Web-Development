import './App.css';
import Item from './components/Item';
import Card from './components/Card';
import ItemDate from './components/ItemDate';


function App(){
  const response = [
    {
      itemName:"Nirma",
      itemDate:"20",
      itemMonth:"June",
      itemYear:"2020"
    },
    {
      itemName:"Surf-Excel",
      itemDate:"21",
      itemMonth:"June",
      itemYear:"2021"
    },
    {
      itemName:"Rin",
      itemDate:"22",
      itemMonth:"June",
      itemYear:"2022"
    }
  ];
  return(
    <div>
    <Card>
    <Item name={response[0].itemName}>Hi Hello</Item>
    <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

    <Item name={response[1].itemName}></Item>
    <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

    <Item name={response[2].itemName}></Item>
    <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

    <div>HI Hello</div>
    </Card>
    </div>
  );
}
export default App;