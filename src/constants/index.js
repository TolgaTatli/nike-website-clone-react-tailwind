import { facebook, instagram, shieldTick, support, truckFast, twitter, whatsapp } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Ana Sayfa" },
  { href: "#about-us", label: "Hakkımızda" },
  { href: "#services", label: "Hizmetlerimiz" },
  { href: "#contact-us", label: "İletişim" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: 'Ankara', label: 'Konum' },
  { value: 'Otomatik', label: 'Sulama Sistemleri' },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: whatsapp,
    label: "Ücretsiz Keşif",
    subtext: "Otomatik sulama sistemleri için ücretsiz keşif hizmeti sunuyoruz."
  },
  {
    imgURL: shieldTick,
    label: "Aynı Gün Teknik Servis",
    subtext: "Ankara içi aynı gün tamir, bakım ve teknik servis hizmeti sunuyoruz."
  },
  {
    imgURL: support,
    label: "Hizmet Garantisi",
    subtext: "Kurulum sonrası destekle her zaman yanınızdayız."
  },
];


export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
  }
];


export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
