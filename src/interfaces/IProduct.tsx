export type IProduct = {
  id: string;
  user_id: string;
  brand_id: string;
  devbrands: { name: string };
  title: string;
  description: string;
  product_image_url: string;
};
