import { useState } from 'react';
import './style/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import shopItems from '../data/shopItems';
import topics from '../data/topics';
import ShopItem from '../components/ShopItem/ShopItem';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

const initShopItems = shopItems;

export const PContent = () => {
  const [shopList, setShopList] = useState(initShopItems);
  const [inputText, setInputText] = useState('');

  const filterByType = (buttonName: string) => {
    if (buttonName === 'All') {
      setShopList(initShopItems);
      return;
    }
    const tempList = initShopItems.filter((item) => item.type === buttonName.toLocaleUpperCase());
    setShopList(tempList);
  };

  const filterByInputTextOrNum = (searchTitleOrPrice: string) => {
    const value = searchTitleOrPrice.toLowerCase();
    if (!value) {
      setShopList(initShopItems);
      return;
    }
    if (+value) {
      const tempList = initShopItems.filter((item) => item.price === +value);
      setShopList(tempList);
      return;
    }
    const tempList = initShopItems.filter((item) => item.title.toLowerCase()
      .match(value));

    setShopList(tempList);
  };

  return (
    <>
      <div className="buttons">
        {topics.map((topic) => (
          <Button
            key={topic}
            cssButton={`${'button'}`}
            buttonName={`${topic}`}
            clickHandler={() => {
              setInputText('');
              return filterByType(topic);
            }}
          />
        ))}

      </div>

      <div className="inputSection">

        <span className="icon--search">
          <FontAwesomeIcon icon={faSearch} />
        </span>

        <Input
          inputText={inputText}
          onChange={(e) => {
            filterByInputTextOrNum(e.target.value);
            return setInputText(e.target.value);
          }}
        />
      </div>

      <div className="shopItems">
        {
          shopList.map(({
            id,
            title,
            type,
            price,
            imgSrc,
          }) => (

            <ShopItem
              key={id}
              displayedOn={false}
              cssName={{
                container: 'itemList',
                imgCss: 'itemListImg',
                footer: 'itemFooter',
              }}
              item={{
                title,
                price,
                imgSrc,
                type,
              }}
            />
          ))
        }
      </div>

    </>
  );
};

export default PContent;
