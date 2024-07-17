import { IconType } from "react-icons";

export interface WishlistItemsProps {
  id: number;
  name: string;
  image: string;
  normalPrice: number;
  sellingPrice: number;
}

export interface ItemProps {
  id: number;
  name: string;
  category: number;
  weight: number;
  unites: number;
  inStore: boolean;
  isActive: boolean;
  normalPrice: number;
  sellingPrice: number;
  descriptionProduct: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  codeProduct: string;
  sku: string;
  image: string;
  categoryName: string;
  evaluation: number;
}

export interface CartItemProps {
  id: number;
  name: string;
  image: string;
  qty: number;
  normalPrice: number;
  sellingPrice: number;
  totalNormalPrice: number;
  totalSellingPrice: number;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  status: string;
  image: string | null;
  parentCategoryId: number | null;
  parentCategoryName: string | null;
  countProducts: number;
}

export interface Menu1CategoresProps extends MenuLocationProps {
  categories: Category[];
}

export interface NavBarProps {
  session: any;
  menuLocation?: string;
  closeDrawer?: () => void;
  categories?: Category[];
}

export interface MenuLocationProps {
  menuLocation?: string;
  closeDrawer?: () => void;
}

export interface SignInFormProps {
  specialURL?: string;
}

export interface ItemsGridProps {
  initialSearchParams: {
    catId: number;
    minPrice: number;
    maxPrice: number;
    evaluation: number;
    name: string;
    display: number;
    orderBy: string;
    page: number;
  };
}

export interface OrdersTableProps {
  orderId: number;
  clientName: string;
  email: string;
  phone: null;
  address: string;
  city: string;
  dateTime: string;
  paymentMethod: string;
  status: string;
  totalPrice: number;
  orderItems: OrderItems[];
}

export interface OrderItems {
  id: number;
  product: string;
  price: number;
  quantity: number;
}

export interface ProductsOrders {
  product: string;
  orderId: number;
  date: string;
  price: number;
  qty: number;
  status: string;
  address: string;
}

export interface AddressFormInputProps {
  value?: string | number;
  name: string;
  placeholder: string;
  required?: boolean;
}

export interface AddressFormCheckboxProps {
  value: boolean;
  text: string;
}

export interface AddressProps {
  id: number;
  firstName: string;
  lastName: string;
  firstAddress: string;
  secondAddress: string;
  city: string;
  phone: string;
  postNum: string;
  work: string;
  setAsDefault: boolean;
}

export interface CardProps {
  icon: IconType;
  text: string;
}

export interface Review {
  clientName: string;
  clientAvatar: string;
  reviewDate: string;
  reviewScore: number;
  reviewTitle: string;
  reviewImage: string;
  reviewDesc: string;
}
