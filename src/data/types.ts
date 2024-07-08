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
  status: boolean;
  image: string | null;
  parentCategoryId: number;
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

export interface CategoryProps {
  id: number;
  fr: string;
  ar: string;
  img: string;
}

export interface SignInFormProps {
  specialURL?: string;
}

export interface ItemsGridProps {
  initialSearchParams: {
    catId: number;
    mixPrice: number;
    maxPrice: number;
    evaluation: number;
    name: string;
    display: number;
    orderBy: string;
    page: number;
  };
}

export interface OrdersTableProps {
  orders: {
    id: number;
    name: string;
    date: string;
    qty: number;
    status: string;
    price: number;
    img: string;
  }[];
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
  address1: string;
  address2: string;
  city: string;
  phone: string;
  postCode: string;
  businessName: string;
  setAsDefault: boolean;
}

export interface CardProps {
  icon: IconType;
  text: string;
}
