exports.handler = async (event, context) => {
  const page_components = {
    products: {
      categories: [
        {
          image:
            "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
          category_name: "Kitchen Ware",
          products: [
            {
              image:
                "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
            },
            {
              image:
                "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
            },
            {
              image:
                "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
            },
            {
              image:
                "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
            },
          ],
        },
        {
          image:
            "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
          category_name: "Fidget Toys",
          products: [
            {
              image:
                "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
            },
            {
              image:
                "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
            },
            {
              image:
                "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
            },
            {
              image:
                "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
            },
          ],
        },
        {
          image:
            "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
          category_name: "Custom",
          products: [
            {
              image:
                "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
            },
            {
              image:
                "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
            },
            {
              image:
                "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
            },
            {
              image:
                "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
            },
          ],
        },
        {
          image:
            "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
          category_name: "Ur Mom",
          products: [
            {
              image:
                "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
            },
            {
              image:
                "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
            },
            {
              image:
                "https://facfox.com/wp-content/uploads/2020/10/3d-printed-pumpkin-spider-transf-gigapixel-scale-2_00x.jpg",
            },
            {
              image:
                "https://www.weddingfavorites.com/mm5/graphics/00000001/EB3242CTW_large1a.jpg",
            },
          ],
        },
      ],
      best_sellers: [
        {
          image:
            "https://i5.walmartimages.com/seo/3D-Printed-Action-Figure-5-54-inch-Dummy-Full-Body-Mechanical-Movable-Toy-Multiple-Accessories-Hand-Painted-Figure-Desk-Decoration-Weapons-Bracket-Ar_a0fba0b6-a613-4682-a1f3-f7b399ba6898.8ffdf9f780352d53aabbe319052f477f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
          description:
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus gravida auctor placerat ornare tempus libero vivamus mauris faucibus. Lacinia et bibendum duis lobortis aliquam senectus volutpat sollicitudin. Pulvinar sociosqu pretium vivamus litora laoreet.",
        },
        {
          image:
            "https://i.etsystatic.com/6412120/r/il/241219/4941993618/il_570xN.4941993618_ang5.jpg",
          description:
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus gravida auctor placerat ornare tempus libero vivamus mauris faucibus. Lacinia et bibendum duis lobortis aliquam senectus volutpat sollicitudin. Pulvinar sociosqu pretium vivamus litora laoreet.",
        },
      ],
    },
  };

  return {
    statusCode: 200,
    body: JSON.stringify(page_components),
  };
};
