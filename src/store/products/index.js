import getters from "@/store/products/getters.js";
// import actions from "@/store/products/actions.js";
import mutations from "@/store/products/mutations.js";
export default {
  namespaced: true,
  state() {
    return {
      cart:[],
      Categories: [
        {
          id: "c1",
          itemName: "Car Games",
          detailsCar:[
            {
              id: "d1",
              image:
                "https://toyshomekw.com/storage/products/1667291637OIP%20(8).jpg",
              name: "Mercedes G63 AMG",
              Sale:"Sale 5.55",
              price: 120.0,
              oldPrice: 130.0,
            },
            {
              id: "d2",
              image:
                "https://toyshomekw.com/storage/products/1667291476R%20(4).jpg",
              name: "Pink miny car toy",
              Sale:"Sale 5.55",
              price: 82.0,
              oldPrice: 90.0,
            },
            {
              id: "d3",
              image:
                "https://toyshomekw.com/storage/products/1667290758OIP%20(6).jpg",
              name: "Car",
              Sale:"Sale 5.55",
              price: 55.0,
              oldPrice: 60.0,
            },
          ],
        },
        {
          id: "c2",
          itemName: "Intelligence Development Games",
          detailsCar: [
            {
              id: "d1",
              image:
                "https://toyshomekw.com/storage/products/1667999351298415307_1227968158141660_4009726830810619828_n.jpg",
              name: "test",
              Sale:"Sale 5.55",
              price: 250.0,
              oldPrice: 300,
            },
            {
              id: "d2",
              image:
                "https://toyshomekw.com/storage/products/1667291955kids-puzzle-500x500.jpg",
              name: "Kids Puzzle",
              Sale:"Sale 8.55",
              price: 24.0,
              oldPrice: 28.0,
            },
            {
              id: "d3",
              image:
                "https://toyshomekw.com/storage/products/1667291785OIP%20(9).jpg",
              name: "Rubik's",
              Sale:"Sale 5.55",
              price: 61.0,
              oldPrice: 63.0,
            },
            {
              id: "d4",
              image:
                "https://toyshomekw.com/storage/products/1667290647Web%20capture_1-11-2022_101444_www.bing.com.jpeg",
              name: "Leaning Tower",
              Sale:"Sale 5.55",
              price: 25.0,
              oldPrice: 30.0,
            },
          ],
        },
        {
          id: "c3",
          itemName: "Strategy Games",
          detailsCar: [
            {
              id: "d1",
              image:
                "https://toyshomekw.com/storage/products/1667291212OIP%20(7).jpg",
              name: "Flying Chess",
              Sale:"Sale 5.55",
              price: 100.0,
              oldPrice: 110.0,
            },
            {
              id: "d2",
              image:
                "https://toyshomekw.com/storage/products/1667290918Mini-Strategy-Game-01.jpg",
              name: "Mini Strategy",
              Sale:"Sale 5.55",
              price: 85.0,
              oldPrice: 90.0,
            },
          ],
        },
      ],
      MoreSaling:[
          {
            id: "d1",
            image:
              "https://toyshomekw.com/storage/products/1667291637OIP%20(8).jpg",
            name: "Mercedes G63 AMG",
            Sale:"Sale 5.55",
            price: 120.0,
            oldPrice: 130.0,
            quantity:10,
            qty:1
          },
          {
            id: "d2",
            image:
              "https://toyshomekw.com/storage/products/1667291476R%20(4).jpg",
            name: "Pink miny car toy",
            Sale:"Sale 5.55",
            price: 82.0,
            oldPrice: 90.0,
            quantity:5,
            qty:1
          },
          {
            id: "d3",
            image:
              "https://toyshomekw.com/storage/products/1667290758OIP%20(6).jpg",
            name: "Car",
            Sale:"Sale 5.55",
            price: 55.0,
            oldPrice: 60.0,
            quantity:4,
            qty:1
          },
          {
            id: "d4",
            image:
              "https://toyshomekw.com/storage/products/1667291212OIP%20(7).jpg",
            name: "Flying Chess",
            Sale:"Sale 5.55",
            price: 100.0,
            oldPrice: 110.0,
            quantity:6,
            qty:1
          },
          {
            id: "d5",
            image:
              "https://toyshomekw.com/storage/products/1667290918Mini-Strategy-Game-01.jpg",
            name: "Mini Strategy",
            Sale:"Sale 5.55",
            price: 85.0,
            oldPrice: 90.0,
            quantity:3,
            qty:1
          },
          {
            id: "d6",
            image:
              "https://toyshomekw.com/storage/products/1667999351298415307_1227968158141660_4009726830810619828_n.jpg",
            name: "test",
            Sale:"Sale 5.55",
            price: 250.0,
            oldPrice: 300,
            quantity:8,
            qty:1
          },
          {
            id: "d7",
            image:
              "https://toyshomekw.com/storage/products/1667291955kids-puzzle-500x500.jpg",
            name: "Kids Puzzle",
            Sale:"Sale 8.55",
            price: 24.0,
            oldPrice: 28.0,
            quantity:2,
            qty:1
          },
          {
            id: "d8",
            image:
              "https://toyshomekw.com/storage/products/1667291785OIP%20(9).jpg",
            name: "Rubik's",
            Sale:"Sale 5.55",
            price: 61.0,
            oldPrice: 63.0,
            quantity:5,
            qty:1
          },
          {
            id: "d9",
            image:
              "https://toyshomekw.com/storage/products/1667290647Web%20capture_1-11-2022_101444_www.bing.com.jpeg",
            name: "Leaning Tower",
            Sale:"Sale 5.55",
            price: 25.0,
            oldPrice: 30.0,
            quantity:5,
            qty:1
          },


      ],
      LastAndHegh:[
        {
          id: "d1",
          image:
            "https://toyshomekw.com/storage/products/1667291637OIP%20(8).jpg",
          name: "Mercedes G63 AMG",
          Sale:"Sale 5.55",
          price: 120.0,
          oldPrice: 130.0,
        },
        {
          id: "d2",
          image:
            "https://toyshomekw.com/storage/products/1667291476R%20(4).jpg",
          name: "Pink miny car toy",
          Sale:"Sale 5.55",
          price: 82.0,
          oldPrice: 90.0,
        },
      ],
      Brands: [
        {
          id: "b1",
          image:"https://toyshomekw.com/storage/brands/15005608110.jpg",
          detailsBrand:[
            {
              id: "d1",
              image:
                "https://toyshomekw.com/storage/products/1667291637OIP%20(8).jpg",
              name: "Mercedes G63 AMG",
              Sale:"Sale 5.55",
              price: 120.0,
              oldPrice: 130.0,
            },
            {
              id: "d2",
              image:
                "https://toyshomekw.com/storage/products/1667291476R%20(4).jpg",
              name: "Pink miny car toy",
              Sale:"Sale 5.55",
              price: 82.0,
              oldPrice: 90.0,
            },
            {
              id: "d3",
              image:
                "https://toyshomekw.com/storage/products/1667290758OIP%20(6).jpg",
              name: "Car",
              Sale:"Sale 5.55",
              price: 55.0,
              oldPrice: 60.0,
            },
          ],
        },
        {
          id: "b2",
          image:"https://toyshomekw.com/storage/brands/145054212948.jpg",
          detailsBrand: [
            {
              id: "d1",
              image:
                "https://toyshomekw.com/storage/products/1667999351298415307_1227968158141660_4009726830810619828_n.jpg",
              name: "test",
              Sale:"Sale 5.55",
              price: 250.0,
              oldPrice: 300,
            },
            {
              id: "d2",
              image:
                "https://toyshomekw.com/storage/products/1667291955kids-puzzle-500x500.jpg",
              name: "Kids Puzzle",
              Sale:"Sale 8.55",
              price: 24.0,
              oldPrice: 28.0,
            },
            {
              id: "d3",
              image:
                "https://toyshomekw.com/storage/products/1667291785OIP%20(9).jpg",
              name: "Rubik's",
              Sale:"Sale 5.55",
              price: 61.0,
              oldPrice: 63.0,
            },
            {
              id: "d4",
              image:
                "https://toyshomekw.com/storage/products/1667290647Web%20capture_1-11-2022_101444_www.bing.com.jpeg",
              name: "Leaning Tower",
              Sale:"Sale 5.55",
              price: 25.0,
              oldPrice: 30.0,
            },
          ],
        },
        {
          id: "b3",
          image:"https://toyshomekw.com/storage/brands/10003739064.jpg",
          detailsBrand: [
            {
              id: "d1",
              image:
                "https://toyshomekw.com/storage/products/1667291212OIP%20(7).jpg",
              name: "Flying Chess",
              Sale:"Sale 5.55",
              price: 100.0,
              oldPrice: 110.0,
            },
            {
              id: "d2",
              image:
                "https://toyshomekw.com/storage/products/1667290918Mini-Strategy-Game-01.jpg",
              name: "Mini Strategy",
              Sale:"Sale 5.55",
              price: 85.0,
              oldPrice: 90.0,
            },
          ],
        },
        {
          id: "b4",
          image:"https://toyshomekw.com/storage/brands/48492005103.jpg",
          detailsBrand: [
            {
              id: "d1",
              image:
                "https://toyshomekw.com/storage/products/1667291212OIP%20(7).jpg",
              name: "Flying Chess",
              Sale:"Sale 5.55",
              price: 100.0,
              oldPrice: 110.0,
            },
            {
              id: "d2",
              image:
                "https://toyshomekw.com/storage/products/1667290918Mini-Strategy-Game-01.jpg",
              name: "Mini Strategy",
              Sale:"Sale 5.55",
              price: 85.0,
              oldPrice: 90.0,
            },
          ],
        },
      ],
    }
  },
  getters ,
  mutations,
};
