import AloeOne from "../images/data/aloe1.png"
import AloeTwo from "../images/data/aloe2.png"
import AloeThree from "../images/data/aloe3.png"
import FiddleOne from "../images/data/fiddle1.png"
import FiddleTwo from "../images/data/fiddle2.png"
import FiddleThree from "../images/data/fiddle3.png"
import PothosOne from "../images/data/pothos1.png"
import PothosTwo from "../images/data/pothos2.png"
import PothosThree from "../images/data/pothos3.png"
import type { Product } from "../types"

export const data: Array<Product> = [
  {
    discount: 50,
    title: "Aloe Vera",
    titleImg: AloeOne,
    img: [AloeOne, AloeTwo, AloeThree],
    price: 140,
    id: 1,
    description:
      "Aloe Vera is a succulent plant known for its thick, fleshy leaves filled with a gel-like substance that is widely used for its medicinal properties. Native to the Arabian Peninsula, this hardy plant thrives in warm, dry climates. Aloe Vera is popular for its soothing effects on the skin, particularly for sunburns, cuts, and burns. It is also commonly found in cosmetic products due to its hydrating and anti-inflammatory benefits. Aloe Vera is easy to grow and can be kept indoors in pots, requiring minimal water and bright sunlight.",
  },
  {
    discount: 30,
    title: "Fiddle Leaf Fig",
    titleImg: FiddleOne,
    img: [FiddleOne, FiddleTwo, FiddleThree],
    price: 90,
    id: 2,
    description:
      "The Fiddle Leaf Fig, with its large, glossy, violin-shaped leaves, is a popular ornamental plant. Native to West Africa, it is often grown as a houseplant or an indoor tree in temperate climates. The plant can grow tall, making it a striking addition to interior decor. It requires bright, indirect light and regular watering to keep its large leaves healthy and vibrant. Known for its dramatic appearance, the Fiddle Leaf Fig has become a staple in modern interior design. However, it can be quite sensitive to changes in its environment, particularly when it comes to temperature and humidity.",
  },
  {
    discount: 120,
    title: "Lavender",
    titleImg: PothosOne,
    img: [PothosOne, PothosTwo, PothosThree],
    price: 350,
    id: 3,
    description:
      "Lavender is a fragrant herb known for its beautiful purple flowers and soothing scent. Native to the Mediterranean, it thrives in well-drained soil and full sun. Lavender is prized not only for its ornamental beauty but also for its calming effects, making it a popular choice in aromatherapy and essential oils. The plant is often used in gardens, as it attracts pollinators like bees and butterflies. Lavender is also used in culinary dishes, teas, and homemade products such as sachets, candles, and soaps. It is relatively drought-tolerant and can be grown both indoors and outdoors.",
  },
]
