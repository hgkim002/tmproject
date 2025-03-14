import '../styles/itemlist.css';
import Item from './Item';
import { useContext } from 'react';
import {DataContext} from '../App';
import {Routes, Route} from 'react-router-dom';

//map을 이용해서, 상품의 목록을 출력
export default function Itemlist() {
    const {prodList} = useContext(DataContext);

    return(
        <div className="itemContainer">
            <div className='itemlist'>           
                {prodList.map((it)=><Item key={it.id} {...it}  />)}                 
            </div>
        </div>
    )
}