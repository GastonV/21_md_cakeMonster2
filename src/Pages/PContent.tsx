import { useEffect, useState } from 'react';
import './style/styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { clearTimeout } from 'timers';
import shopItems from '../data/shopItems';
import topics from '../data/topics';
import ShopItem from '../components/ShopItem/ShopItem';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

const initShopItems = shopItems;
const CSS_COLOR_NAMES = [
  'AliceBlue',
  'AntiqueWhite',
  'Aqua',
  'Aquamarine',
  'Azure',
  'Beige',
  'Bisque',
  'Black',
  'BlanchedAlmond',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'Chocolate',
  'Coral',
  'CornflowerBlue',
  'Cornsilk',
  'Crimson',
  'Cyan',
  'DarkBlue',
  'DarkCyan',
  'DarkGoldenRod',
  'DarkGray',
  'DarkGrey',
  'DarkGreen',
  'DarkKhaki',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkOrchid',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSlateBlue',
  'DarkSlateGray',
  'DarkSlateGrey',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DimGray',
  'DimGrey',
  'DodgerBlue',
  'FireBrick',
  'FloralWhite',
  'ForestGreen',
  'Fuchsia',
  'Gainsboro',
  'GhostWhite',
  'Gold',
  'GoldenRod',
  'Gray',
  'Grey',
  'Green',
  'GreenYellow',
  'HoneyDew',
  'HotPink',
  'IndianRed',
  'Indigo',
  'Ivory',
  'Khaki',
  'Lavender',
  'LavenderBlush',
  'LawnGreen',
  'LemonChiffon',
  'LightBlue',
  'LightCoral',
  'LightCyan',
  'LightGoldenRodYellow',
  'LightGray',
  'LightGrey',
  'LightGreen',
  'LightPink',
  'LightSalmon',
  'LightSeaGreen',
  'LightSkyBlue',
  'LightSlateGray',
  'LightSlateGrey',
  'LightSteelBlue',
  'LightYellow',
  'Lime',
  'LimeGreen',
  'Linen',
  'Magenta',
  'Maroon',
  'MediumAquaMarine',
  'MediumBlue',
  'MediumOrchid',
  'MediumPurple',
  'MediumSeaGreen',
  'MediumSlateBlue',
  'MediumSpringGreen',
  'MediumTurquoise',
  'MediumVioletRed',
  'MidnightBlue',
  'MintCream',
  'MistyRose',
  'Moccasin',
  'NavajoWhite',
  'Navy',
  'OldLace',
  'Olive',
  'OliveDrab',
  'Orange',
  'OrangeRed',
  'Orchid',
  'PaleGoldenRod',
  'PaleGreen',
  'PaleTurquoise',
  'PaleVioletRed',
  'PapayaWhip',
  'PeachPuff',
  'Peru',
  'Pink',
  'Plum',
  'PowderBlue',
  'Purple',
  'RebeccaPurple',
  'Red',
  'RosyBrown',
  'RoyalBlue',
  'SaddleBrown',
  'Salmon',
  'SandyBrown',
  'SeaGreen',
  'SeaShell',
  'Sienna',
  'Silver',
  'SkyBlue',
  'SlateBlue',
  'SlateGray',
  'SlateGrey',
  'Snow',
  'SpringGreen',
  'SteelBlue',
  'Tan',
  'Teal',
  'Thistle',
  'Tomato',
  'Turquoise',
  'Violet',
  'Wheat',
  'White',
  'WhiteSmoke',
  'Yellow',
  'YellowGreen',
];
export const PContent = () => {
  const [shopList, setShopList] = useState(initShopItems);
  const [inputText, setInputText] = useState('');
  const [useColor, setColor] = useState('red');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 8) {
      // eslint-disable-next-line no-bitwise
      setTimeout(() => setColor(CSS_COLOR_NAMES[~~(Math.random() * 147)]), 2000);
    }
  }, [useColor]);

  useEffect(() => {
    // eslint-disable-next-line no-bitwise
    if (counter === 10) setColor(CSS_COLOR_NAMES[~~(Math.random() * 147)]);
    const timeToClear = setTimeout(() => setCounter(counter + 1), 1000);
  }, [counter]);

  useEffect(() => {
    // eslint-disable-next-line no-alert
    window.addEventListener('load', () => (alert('component has loded!')));
    // eslint-disable-next-line no-bitwise
    setColor(CSS_COLOR_NAMES[~~(Math.random() * 147)]);
  }, [shopList]);

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
      <h1 style={{ color: useColor, fontSize: 40 }}>
        Priecīgus ziemassvētkus!
        {' '}
        {' '}
        {counter}
      </h1>
      <div className="buttons">
        {topics.map((topic) => (
          <Button
            key={topic}
            cssButton="button"
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
// Some useless comment
export default PContent;
