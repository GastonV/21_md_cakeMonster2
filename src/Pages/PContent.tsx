import ShopItem from '../components/ShopItem/ShopItem';
import shopItems from '../data/shopItems';

export const PContent = () => (
  <div>
    {
      shopItems.map(({
        id,
        title, type, price, imgSrc,
      }, index) => (

        <ShopItem
          key={id}
          displayedOn={false}
          cssName={{ container: 'itemList', imgCss: 'itemListImg', footer: 'itemFooter' }}
          item={{
            title, price, imgSrc, type,
          }}
        />
      ))
    }
  </div>
);

export default PContent;
