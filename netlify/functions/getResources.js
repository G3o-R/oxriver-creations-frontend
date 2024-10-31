exports.handler = async (event, context) => {
  const resources = {
    categories: [
      {
        id: 1,
        image:
          "https://www.shutterstock.com/shutterstock/photos/2522618959/display_1500/stock-photo-photo-restaurant-equipment-modern-industrial-kitchen-with-furniture-window-2522618959.jpg",
        name: "Kitchen Ware",
        products: [
          {
            id: 1,
            image:
              "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
          },
          {
            id: 2,
            image:
              "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
          },
          {
            id: 3,
            image:
              "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
          },
          {
            id: 4,
            image:
              "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
          },
          {
            id: 5,
            image: "https://m.media-amazon.com/images/I/7123vuDVEDL.jpg",
          },
          {
            id: 6,
            image:
              "https://www.lazeredge.com/cdn/shop/products/custom-wedding-coaster-ill-drink-to-that-custom-names-and-date-coaster-shop-lazeredge-561774_600x.jpg?v=1631900833",
          },
          {
            id: 7,
            image:
              "https://reddirthatco.com/wp-content/uploads/2023/04/best-sellers.jpg",
          },
          {
            id: 8,
            image:
              "https://www.megagear.com/cdn/shop/files/Adsiztasarim-37_800x.jpg?v=1708394067",
          },
          {
            id: 9,
            image: "https://m.media-amazon.com/images/I/7123vuDVEDL.jpg",
          },
          {
            id: 10,
            image:
              "https://www.lazeredge.com/cdn/shop/products/custom-wedding-coaster-ill-drink-to-that-custom-names-and-date-coaster-shop-lazeredge-561774_600x.jpg?v=1631900833",
          },
          {
            id: 11,
            image:
              "https://reddirthatco.com/wp-content/uploads/2023/04/best-sellers.jpg",
          },
          {
            id: 12,
            image:
              "https://www.megagear.com/cdn/shop/files/Adsiztasarim-37_800x.jpg?v=1708394067",
          },
          {
            id: 13,
            image: "https://m.media-amazon.com/images/I/7123vuDVEDL.jpg",
          },
        ],
      },
      {
        id: 2,
        image:
          "https://www.shutterstock.com/shutterstock/photos/2483144443/display_1500/stock-photo-row-of-colorful-d-printing-filament-pla-material-on-environmentally-friendly-and-recyclable-paper-2483144443.jpg",
        name: "3D Prints",
        products: [
          {
            id: 1,
            image:
              "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
          },
          {
            id: 2,
            image:
              "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
          },
          {
            id: 3,
            image:
              "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
          },
          {
            id: 4,
            image:
              "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
          },
          {
            id: 5,
            image: "https://m.media-amazon.com/images/I/7123vuDVEDL.jpg",
          },
          {
            id: 6,
            image:
              "https://www.lazeredge.com/cdn/shop/products/custom-wedding-coaster-ill-drink-to-that-custom-names-and-date-coaster-shop-lazeredge-561774_600x.jpg?v=1631900833",
          },
          {
            id: 7,
            image:
              "https://reddirthatco.com/wp-content/uploads/2023/04/best-sellers.jpg",
          },
          {
            id: 8,
            image:
              "https://www.megagear.com/cdn/shop/files/Adsiztasarim-37_800x.jpg?v=1708394067",
          },
          {
            id: 9,
            image: "https://m.media-amazon.com/images/I/7123vuDVEDL.jpg",
          },
        ],
      },
      {
        id: 3,
        image:
          "https://www.shutterstock.com/shutterstock/photos/2494702611/display_1500/stock-photo-young-berded-man-speaking-on-a-business-training-standing-in-office-during-a-conference-or-seminar-2494702611.jpg",
        name: "Business Needs",
        products: [
          {
            id: 1,
            image:
              "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
          },
          {
            id: 2,
            image:
              "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
          },
          {
            id: 3,
            image:
              "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
          },
          {
            id: 4,
            image:
              "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
          },
          {
            id: 5,
            image: "https://m.media-amazon.com/images/I/7123vuDVEDL.jpg",
          },
          {
            id: 6,
            image:
              "https://www.lazeredge.com/cdn/shop/products/custom-wedding-coaster-ill-drink-to-that-custom-names-and-date-coaster-shop-lazeredge-561774_600x.jpg?v=1631900833",
          },
          {
            id: 7,
            image:
              "https://reddirthatco.com/wp-content/uploads/2023/04/best-sellers.jpg",
          },
          {
            id: 8,
            image:
              "https://www.megagear.com/cdn/shop/files/Adsiztasarim-37_800x.jpg?v=1708394067",
          },
          {
            id: 9,
            image: "https://m.media-amazon.com/images/I/7123vuDVEDL.jpg",
          },
        ],
      },
      {
        id: 4,
        image:
          "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
        name: "Ur Mom",
        products: [
          {
            id: 1,
            image:
              "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
          },
          {
            id: 2,
            image:
              "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
          },
          {
            id: 3,
            image:
              "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
          },
          {
            id: 4,
            image:
              "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
          },
          {
            id: 5,
            image: "https://m.media-amazon.com/images/I/7123vuDVEDL.jpg",
          },
          {
            id: 6,
            image:
              "https://www.lazeredge.com/cdn/shop/products/custom-wedding-coaster-ill-drink-to-that-custom-names-and-date-coaster-shop-lazeredge-561774_600x.jpg?v=1631900833",
          },
          {
            id: 7,
            image:
              "https://reddirthatco.com/wp-content/uploads/2023/04/best-sellers.jpg",
          },
          {
            id: 8,
            image:
              "https://www.megagear.com/cdn/shop/files/Adsiztasarim-37_800x.jpg?v=1708394067",
          },
          {
            id: 9,
            image: "https://m.media-amazon.com/images/I/7123vuDVEDL.jpg",
          },
        ],
      },
    ],
    best_sellers: [
      {
        id: 17,
        image:
          "https://i5.walmartimages.com/seo/3D-Printed-Action-Figure-5-54-inch-Dummy-Full-Body-Mechanical-Movable-Toy-Multiple-Accessories-Hand-Painted-Figure-Desk-Decoration-Weapons-Bracket-Ar_a0fba0b6-a613-4682-a1f3-f7b399ba6898.8ffdf9f780352d53aabbe319052f477f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        description:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus gravida auctor placerat ornare tempus libero vivamus mauris faucibus. Lacinia et bibendum duis lobortis aliquam senectus volutpat sollicitudin. Pulvinar sociosqu pretium vivamus litora laoreet.",
        name: "3d Samurai",
      },
      {
        id: 18,
        image:
          "https://i.etsystatic.com/6412120/r/il/241219/4941993618/il_570xN.4941993618_ang5.jpg",
        description:
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus gravida auctor placerat ornare tempus libero vivamus mauris faucibus. Lacinia et bibendum duis lobortis aliquam senectus volutpat sollicitudin. Pulvinar sociosqu pretium vivamus litora laoreet.",
        name: "Damn This is Hot",
      },
    ],
    products_array: [
      {
        id: 1,
        image: "https://m.media-amazon.com/images/I/7123vuDVEDL.jpg",
      },
      {
        id: 2,
        image:
          "https://www.lazeredge.com/cdn/shop/products/custom-wedding-coaster-ill-drink-to-that-custom-names-and-date-coaster-shop-lazeredge-561774_600x.jpg?v=1631900833",
      },
      {
        id: 3,
        image:
          "https://reddirthatco.com/wp-content/uploads/2023/04/best-sellers.jpg",
      },
      {
        id: 4,
        image:
          "https://www.megagear.com/cdn/shop/files/Adsiztasarim-37_800x.jpg?v=1708394067",
      },
      {
        id: 5,
        image: "https://m.media-amazon.com/images/I/7123vuDVEDL.jpg",
      },
      {
        id: 6,
        image:
          "https://www.lazeredge.com/cdn/shop/products/custom-wedding-coaster-ill-drink-to-that-custom-names-and-date-coaster-shop-lazeredge-561774_600x.jpg?v=1631900833",
      },
      {
        id: 7,
        image:
          "https://reddirthatco.com/wp-content/uploads/2023/04/best-sellers.jpg",
      },
      {
        id: 8,
        image:
          "https://www.megagear.com/cdn/shop/files/Adsiztasarim-37_800x.jpg?v=1708394067",
      },
      {
        id: 9,
        image: "https://m.media-amazon.com/images/I/7123vuDVEDL.jpg",
      },
      {
        id: 10,
        image:
          "https://www.lazeredge.com/cdn/shop/products/custom-wedding-coaster-ill-drink-to-that-custom-names-and-date-coaster-shop-lazeredge-561774_600x.jpg?v=1631900833",
      },
      {
        id: 11,
        image:
          "https://reddirthatco.com/wp-content/uploads/2023/04/best-sellers.jpg",
      },
      {
        id: 12,
        image:
          "https://www.megagear.com/cdn/shop/files/Adsiztasarim-37_800x.jpg?v=1708394067",
      },
      {
        id: 13,
        image: "https://m.media-amazon.com/images/I/7123vuDVEDL.jpg",
      },
      {
        id: 14,
        image:
          "https://www.lazeredge.com/cdn/shop/products/custom-wedding-coaster-ill-drink-to-that-custom-names-and-date-coaster-shop-lazeredge-561774_600x.jpg?v=1631900833",
      },
      {
        id: 15,
        image:
          "https://reddirthatco.com/wp-content/uploads/2023/04/best-sellers.jpg",
      },
      {
        id: 16,
        image:
          "https://www.megagear.com/cdn/shop/files/Adsiztasarim-37_800x.jpg?v=1708394067",
      },
    ],
  };

  return {
    statusCode: 200,
    body: JSON.stringify(resources),
  };
};
