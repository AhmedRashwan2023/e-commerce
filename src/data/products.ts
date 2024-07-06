/* 
 private long id;
    private String name;
    private long category;
    private float weight;
    private int unites; // Assuming "unites" refers to units in stock or similar.
    private String image; // Assuming this is a URL or path to the image.
    private String descriptionProduct;
    private String codeProduct;
    private String sku;
    private boolean isActive;
    private boolean inStore; // Renamed from "inStore" to "inStock" for consistency.
    private float normalPrice;
    private float sellingPrice;
    private String description; // General product description.
    private String metaTitle; // Meta title.
    private String metaDescription; // Meta description.
    private String categoryName; // To store the name of the category.
*/

export const products = [
  {
    id: 1,
    name: "Product Name 1",
    category: 1,
    weight: 1.5,
    inStore: true,
    isActive: true,
    normalPrice: 100.0,
    sellingPrice: 100.0,
    description: "Product description 1",
    sku: "SKU12345",
    image: "/images/orders/product-img-1.jpg",
    categoryName: "Category Name 1",
    evaluation: 5,
    unites: 1,
    descriptionProduct: "A long Text Description of the product",
    codeProduct: "123xyz",
    metaTitle: "product meta title",
    metaDescription: "product meta description",
  },
  {
    id: 2,
    name: "Product Name 2",
    category: 3,
    weight: 1.5,
    inStore: true,
    isActive: true,
    normalPrice: 100.0,
    sellingPrice: 90.0,
    description: "Product description 1",
    sku: "SKU12345",
    image: "/images/orders/product-img-2.jpg",
    categoryName: "Category Name 1",
    evaluation: 4,
    unites: 1,
    descriptionProduct: "A long Text Description of the product",
    codeProduct: "123xyz",
    metaTitle: "product meta title",
    metaDescription: "product meta description",
  },
  {
    id: 3,
    name: "Product Name 3",
    category: 2,
    weight: 1.5,
    inStore: true,
    isActive: true,
    normalPrice: 90.0,
    sellingPrice: 90.0,
    description: "Product description 1",
    sku: "SKU12345",
    image: "/images/orders/product-img-3.jpg",
    categoryName: "Category Name 1",
    evaluation: 3,
    unites: 1,
    descriptionProduct: "A long Text Description of the product",
    codeProduct: "123xyz",
    metaTitle: "product meta title",
    metaDescription: "product meta description",
  },
  {
    id: 4,
    name: "Product Name 4",
    category: 6,
    weight: 1.5,
    inStore: true,
    isActive: true,
    normalPrice: 100.0,
    sellingPrice: 90.0,
    description: "Product description 1",
    sku: "SKU12345",
    image: "/images/orders/product-img-4.jpg",
    categoryName: "Category Name 1",
    evaluation: 2,
    unites: 1,
    descriptionProduct: "A long Text Description of the product",
    codeProduct: "123xyz",
    metaTitle: "product meta title",
    metaDescription: "product meta description",
  },
  {
    id: 5,
    name: "Product Name 5",
    category: 5,
    weight: 1.5,
    inStore: true,
    isActive: true,
    normalPrice: 100.0,
    sellingPrice: 90.0,
    description: "Product description 1",
    sku: "SKU12345",
    image: "/images/orders/product-img-5.jpg",
    categoryName: "Category Name 1",
    evaluation: 1,
    unites: 1,
    descriptionProduct: "A long Text Description of the product",
    codeProduct: "123xyz",
    metaTitle: "product meta title",
    metaDescription: "product meta description",
  },
];
