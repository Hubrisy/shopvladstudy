import FlowerOne from "../images/data/flower1.png"
import FlowerTwo from "../images/data/flower2.png"
import FlowerThree from "../images/data/flower3.png"
import type { Product } from "../types"

export const data: Array<Product> = [
  {
    title: "Aloe Vera",
    img: FlowerOne,
    price: 140,
    id: "Aloe Vera",
    description:
      "Aloe Vera is a succulent plant known for its thick, fleshy leaves filled with a gel-like substance that is widely used for its medicinal properties. Native to the Arabian Peninsula, this hardy plant thrives in warm, dry climates. Aloe Vera is popular for its soothing effects on the skin, particularly for sunburns, cuts, and burns. It is also commonly found in cosmetic products due to its hydrating and anti-inflammatory benefits. Aloe Vera is easy to grow and can be kept indoors in pots, requiring minimal water and bright sunlight.",
  },
  {
    title: "Fiddle Leaf Fig",
    img: FlowerTwo,
    price: 90,
    id: "Fiddle Leaf Fig",
    description:
      "The Fiddle Leaf Fig, with its large, glossy, violin-shaped leaves, is a popular ornamental plant. Native to West Africa, it is often grown as a houseplant or an indoor tree in temperate climates. The plant can grow tall, making it a striking addition to interior decor. It requires bright, indirect light and regular watering to keep its large leaves healthy and vibrant. Known for its dramatic appearance, the Fiddle Leaf Fig has become a staple in modern interior design. However, it can be quite sensitive to changes in its environment, particularly when it comes to temperature and humidity.",
  },
  {
    title: "Lavender",
    img: FlowerThree,
    price: 350,
    id: "Lavender",
    description:
      "Lavender is a fragrant herb known for its beautiful purple flowers and soothing scent. Native to the Mediterranean, it thrives in well-drained soil and full sun. Lavender is prized not only for its ornamental beauty but also for its calming effects, making it a popular choice in aromatherapy and essential oils. The plant is often used in gardens, as it attracts pollinators like bees and butterflies. Lavender is also used in culinary dishes, teas, and homemade products such as sachets, candles, and soaps. It is relatively drought-tolerant and can be grown both indoors and outdoors.",
  },
]
