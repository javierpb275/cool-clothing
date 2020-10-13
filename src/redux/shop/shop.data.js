//This is the list of all our products, divided by collections (or sections) and each colection has its own objects (product)


const SHOP_DATA = {
    gloves: {
      id: 1,
      title: 'gloves',
      routeName: 'gloves',
      items: [
        {
          id: 1,
          name: 'DC Ski/Snowboard Gloves',
          imageUrl: 'https://absolute-snow.cdn.rlab.net/Larger/8ef7a9a8-df6e-43c8-8a9f-d86e2930ed16edyhn03034_industryglovep_cjz0_frt1.jpg',
          price: 25
        },
        {
          id: 2,
          name: 'D-IMPACT 13 D-DRY® GLOVE',
          imageUrl: 'https://dainese-cdn.thron.com/delivery/public/image/dainese/72af43bb-4c34-4edf-b74d-1d549f838f2e/ramfdh/std/615x615/d-impact-13-d.jpg',
          price: 18
        },
        {
          id: 3,
          name: 'Touch Screen Ski & Snow Gloves',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91uT2Ac0ELL._AC_SX425_.jpg',
          price: 35
        },
        {
          id: 4,
          name: 'ROCKBROS Waterproof Ski 30 Gloves',
          imageUrl: 'https://ae01.alicdn.com/kf/H8a86d4a0ee4b4564a23f737640534dc7C/ROCKBROS-Waterproof-Ski-30-Gloves-Winter-Windproof-Snowmobile-Snowboard-Gloves-Snow-Men-Women-Snowboarding-girls-Skiing.jpg_q50.jpg',
          price: 25
        }
      ]
    },
    pants: {
      id: 2,
      title: 'pants',
      routeName: 'pants',
      items: [
        {
          id: 10,
          name: 'Dope Iconic Snow Pants Black',
          imageUrl: 'https://ridestore.imgix.net/catalog/product/E/5/E5993_1.jpg',
          price: 220
        },
        {
          id: 11,
          name: 'High Quality Snowboard Pants',
          imageUrl: 'https://ae01.alicdn.com/kf/HTB1DtOqX6LuK1Rjy0Fhq6xpdFXav/Newest-High-Quality-Snowboard-Pants-for-Men-Waterproof-Skiing-and-Snowboarding-Snow-Pant-Breathable-Ski-Pants.jpg',
          price: 280
        },
        {
          id: 12,
          name: 'Adidas Snowboarding',
          imageUrl: 'https://ridestore.imgix.net/catalog/product/E/4/E4279_1.jpg',
          price: 110
        },
        {
          id: 13,
          name: 'Partner Snowboard Pants',
          imageUrl: 'https://www.thesnowboardshop.co.uk/images/partner-snowboard-pants-p3615-6160_image.jpg',
          price: 160
        }
      ]
    },
    jackets: {
      id: 3,
      title: 'jackets',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Burton Snowboards US',
          imageUrl: 'https://www.burton.com/static/product/W21/13067105001_5.png',
          price: 125
        },
        {
          id: 19,
          name: 'Psycho Tech Anorak Ski Jacket',
          imageUrl: 'https://www.oneill.com/dw/image/v2/AAOU_PRD/on/demandware.static/-/Sites-master-catalog/default/dw34723c28/images_19/9P0/9P0006_9010_MODEL_1.JPG?sw=642&sh=987',
          price: 90
        },
        {
          id: 20,
          name: ' Dope Rambler Jacket Black',
          imageUrl: 'https://ridestore.imgix.net/catalog/product/E/6/E6487_1.jpg',
          price: 90
        },
        {
          id: 21,
          name: 'Burton Snowboards CA',
          imageUrl: 'https://www.burton.com/static/product/W20/10001106300_5.png',
          price: 165
        }
      ]
    },
    boots: {
      id: 4,
      title: 'boots',
      routeName: 'boots',
      items: [
        {
          id: 23,
          name: ' Boots Strong ATOP',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61aB9JNYf8L._AC_SY355_.jpg',
          price: 25
        },
        {
          id: 24,
          name: 'Salomon Boots',
          imageUrl: 'https://i.ebayimg.com/images/g/i40AAOSwOZBdRZN6/s-l300.jpg',
          price: 20
        },
        {
          id: 25,
          name: 'Samba Boots',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71Yiu8J-JzL._AC_SY355_.jpg',
          price: 80
        },
        {
          id: 26,
          name: 'DC Mutiny',
          imageUrl: 'https://www.expocafeperu.com/w/2019/12/dc-mutiny-2019-review-dc-womens-snowboard-boots-dc-judge-boa-snowboard-boots-dc-snowboard-boots-review.jpg',
          price: 80
        }
      ]
    },
    snowboards: {
      id: 5,
      title: 'snowboards',
      routeName: 'snowboards',
      items: [
        {
          id: 30,
          name: 'Jones Snowboard',
          imageUrl: 'https://www.zerogchamonix.com/20640/jones-snowboards-frontier-mens-snowboards-sj200121-3-36081.jpg',
          price: 325
        },
        {
          id: 31,
          name: 'Afterblack Snowboard',
          imageUrl: 'https://images.evo.com/imgp/700/161755/647094/clone.jpg',
          price: 20
        },
        {
          id: 32,
          name: 'Burton Snowboard',
          imageUrl: 'https://www.greatoutdoorshop.com/wp-content/uploads/2019/10/2020-burton-snowboards-womens-hideaway-snowboard.jpg-1000.jpg',
          price: 25
        },
        {
          id: 33,
          name: 'Public Snowboard',
          imageUrl: 'https://images.evo.com/imgp/zoom/163175/671003/public-snowboards-general-snowboard-2020-.jpg',
          price: 25
        }
      ]
    }
  };

  export default SHOP_DATA;