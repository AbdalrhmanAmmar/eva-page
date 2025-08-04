// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { Star, Heart, ChevronLeft, ChevronRight, ShoppingCart, Package, Check, Shield, Truck, ShoppingBag } from "lucide-react";
// import { notFound } from 'next/navigation';
// import Breadcrumb from "@/components/ProductId/Breadcrumb";
// import AddToCartButton from "@/components/store/AddToCartButton";
// import ProductTabs from "@/components/ProductId/ProductTabs";
// import RatingComponent from "@/components/store/RatingComponent";
// import ProductGallery from "@/components/ProductId/ProductGallery";

// interface Product {
//   id: string;
//   _id?: string;
//   name: string;
//   description: string;
//   shortDescription?: string;
//   priceAfterDiscount: number;
//   priceBeforeDiscount?: number;
//   category: string;
//   tag?: string;
//   averageRating?: number;
//   numberOfReviews?: number;
//   showReviews?: boolean;
//   images: any[];
//   quantity: number;
//   maxQuantity?: number;
//   discount?: number;
//   showDiscount?: boolean;
//   specifications?: any[];
//   showQuantity?: boolean;
//   showTag?: boolean;
//   showShortDescription?: boolean;
// }

// export default function ProductPage({ params }: { params: { id: string } }) {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [wishlist, setWishlist] = useState<string[]>([]);
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`http://localhost:4000/api/products/${params.id}`);
//         if (!res.ok) {
//           if (res.status === 404) return notFound();
//           throw new Error('Failed to fetch product');
//         }

//         const data = await res.json();
//         if (!data.success || !data.product) {
//           return notFound();
//         }

//         const productData = {
//           ...data.product,
//           id: data.product._id ? data.product._id.toString() : data.product.id,
//           specifications: data.product.specifications || [],
//           reviews: data.product.reviews || [],
//           description: data.product.description || 'لا يوجد وصف تفصيلي',
//           shortDescription: data.product.shortDescription || 'لا يوجد وصف مختصر',
//           discount: data.product.discount || 0,
//           rating: data.product.rating || 0,
//           tag: data.product.tag || '',
//           priceBeforeDiscount: data.product.priceBeforeDiscount || data.product.priceAfterDiscount,
//           maxQuantity: data.product.maxQuantity || 100,
//           showQuantity: data.product.showQuantity !== undefined ? data.product.showQuantity : true,
//           showDiscount: data.product.showDiscount !== undefined ? data.product.showDiscount : true,
//           showTag: data.product.showTag !== undefined ? data.product.showTag : true,
//           averageRating: data.product.averageRating || 0,
//           numberOfReviews: data.product.numberOfReviews || 0,
//           showShortDescription: data.product.showShortDescription !== undefined ? data.product.showShortDescription : true,
//           showReviews: data.product.showReviews !== undefined ? data.product.showReviews : true,
//         };

//         setProduct(productData);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : 'حدث خطأ غير متوقع');
//         console.error('Error fetching product:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [params.id]);

//   const toggleWishlist = (productId: string) => {
//     setWishlist(prev => 
//       prev.includes(productId) 
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const increaseQuantity = () => {
//     if (product && quantity < (product.maxQuantity || 10)) {
//       setQuantity(prev => prev + 1);
//     }
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(prev => prev - 1);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="animate-pulse space-y-8">
//             <div className="h-6 bg-gray-800 rounded w-1/4"></div>
//             <div className="flex flex-col lg:flex-row gap-8">
//               <div className="lg:w-1/2 h-96 bg-gray-800 rounded-lg"></div>
//               <div className="lg:w-1/2 space-y-6">
//                 <div className="h-10 bg-gray-800 rounded w-3/4"></div>
//                 <div className="h-6 bg-gray-800 rounded w-1/2"></div>
//                 <div className="h-4 bg-gray-800 rounded w-full"></div>
//                 <div className="h-4 bg-gray-800 rounded w-2/3"></div>
//                 <div className="h-12 bg-gray-800 rounded w-full"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error || !product) {
//     return notFound();
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8 my-6" >
//       <div className="max-w-7xl mx-auto">
//         {/* Breadcrumb with yellow arrow */}
//         <Breadcrumb 
//           items={[
//             { name: "الرئيسية", href: "/" },
//             { name: "المتجر", href: "/product" },
//             { name: product.category, href: `/store?category=${product.category}` },
//             { name: product.name, href: `#` },
//           ]}
//           className="text-sm mb-6 text-yellow-400"
//         />

//         <div className="mt-6 lg:mt-8">
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Product Gallery - Left Side */}
//             <div className="lg:w-2/5">
//               <ProductGallery 
//                 images={product.images} 
//                 name={product.name}
//                 className="rounded-lg border border-gray-700 shadow-lg"
//               />
//             </div>

//             {/* Product Info - Middle */}
//             <div className="lg:w-2/5">
//               <div className="space-y-4">
//                 <h1 className="text-2xl font-bold text-white">{product.name}</h1>
//                 <p className="text-2xl">  {product.description}</p>
                
//                 {/* Rating and sold by info */}
//                 <div className="flex items-center gap-4">
//                   {product.showReviews && (
//                     <RatingComponent 
//                       rating={product.averageRating || 0} 
//                       reviews={product.numberOfReviews || 0} 
//                       size="md"
//                       className="text-yellow-400"
//                     />
//                   )}
//                   <span className="text-blue-400 text-sm hover:underline cursor-pointer">
//                     {product.numberOfReviews || 0} تقييمات
//                   </span>
//                 </div>
                
//            <div className="py-3 border-b border-gray-700/30">
//   <div className="flex flex-col gap-2">
//     <div className="flex items-center gap-2 text-3xl">
//       <ShoppingBag className="h-4 w-4 text-green-400" />
//       <span className="text-gray-300">
//         يباع من <span className="font-semibold text-green-300">إيفا</span>
//       </span>
//     </div>
//     <div className="flex items-center gap-2  text-3xl">
//       <Truck className="h-4 w-4 text-blue-400" />
//       <span className="text-gray-300">
//         يشحن من <span className="font-semibold text-blue-300">إيفا</span>
//       </span>
//     </div>
//   </div>
// </div>

//                 {/* Price Section */}
//                 <div className="space-y-2 border-b border-gray-700 pb-4">
//                   {product.showDiscount && product.priceBeforeDiscount && product.priceBeforeDiscount > product.priceAfterDiscount && (
//                     <div className="flex items-center gap-2">
//                       <span className="text-lg text-gray-400 line-through">
//                         {product.priceBeforeDiscount.toLocaleString()} ر.س
//                       </span>
//                       {product.discount && product.discount > 0 && (
//                         <span className="bg-red-900 text-red-200 px-2 py-1 rounded-md text-xs font-medium">
//                           وفر {product.discount}%
//                         </span>
//                       )}
//                     </div>
//                   )}
                  
//                   <div className="flex items-baseline gap-2">
//                     <span className="text-3xl font-bold text-white">
//                       {product.priceAfterDiscount.toLocaleString()} ر.س
//                     </span>
//                     <span className="text-sm text-green-400">شامل الضريبة</span>
//                   </div>
                  
//                   <div className="text-sm text-gray-400 flex items-center gap-1">
//                     <Truck className="w-4 h-4 text-gray-400" />
//                     <span>توصيل مجاني للطلبات فوق 200 ر.س</span>
//                   </div>
//                 </div>

//                 {/* Quantity Selector */}
//                 {product.showQuantity && (
//                   <div className="border-b border-gray-700 pb-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-sm font-medium text-gray-300">الكمية:</span>
//                       <span className={`text-xs ${
//                         product.quantity <= 5 ? 'text-red-400' : 'text-green-400'
//                       }`}>
//                         {product.quantity <= 5 ? 'كمية محدودة!' : 'متوفر في المخزن'}
//                       </span>
//                     </div>
                    
//                     <div className="flex items-center gap-2">
//                       <button 
//                         onClick={decreaseQuantity}
//                         disabled={quantity <= 1}
//                         className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-md disabled:opacity-50 hover:bg-gray-800 transition-colors"
//                       >
//                         -
//                       </button>
//                       <span className="w-12 text-center border border-gray-600 rounded-md py-1 bg-gray-800">
//                         {quantity}
//                       </span>
//                       <button 
//                         onClick={increaseQuantity}
//                         disabled={product.quantity <= quantity}
//                         className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-md disabled:opacity-50 hover:bg-gray-800 transition-colors"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {/* Add to Cart Section */}
//                 <div className="space-y-3 border-b border-gray-700 pb-4">
//                   <AddToCartButton 
//                     productId={product.id}
//                     productName={product.name}
//                     price={product.priceAfterDiscount}
//                     image={product.images[0]}
//                     quantity={quantity}
//                     disabled={product.quantity <= 0}
//                     className={`w-full py-3 text-lg rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
//                       product.quantity <= 0 
//                         ? 'bg-gray-800 cursor-not-allowed text-gray-500' 
//                         : 'bg-yellow-500 hover:bg-yellow-400 text-gray-900'
//                     }`}
//                   >
//                     <ShoppingCart className="w-5 h-5" />
//                     {product.quantity <= 0 ? 'نفذ من المخزون' : 'أضف إلى السلة'}
//                   </AddToCartButton>
                  
//                   <button
//                     onClick={() => toggleWishlist(product.id)}
//                     className={`w-full py-2 px-4 rounded-lg border transition-colors flex items-center justify-center gap-2 ${
//                       wishlist.includes(product.id)
//                         ? 'bg-gray-800 text-red-400 border-red-400'
//                         : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
//                     }`}
//                   >
//                     <Heart 
//                       className={`w-5 h-5 ${
//                         wishlist.includes(product.id) ? 'fill-current' : ''
//                       }`} 
//                     />
//                     {wishlist.includes(product.id) ? 'تم الإضافة إلى المفضلة' : 'إضافة إلى قائمة المفضلة'}
//                   </button>
//                 </div>

//                 {/* Delivery Info */}
//                 <div className="space-y-3 border-b border-gray-700 pb-4">
//                   <div className="flex items-start gap-3">
//                     <div className="text-green-400 mt-1">
//                       <Check className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-white">توصيل سريع</p>
//                       <p className="text-sm text-gray-400">استلام خلال 2-5 أيام عمل</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start gap-3">
//                     <div className="text-blue-400 mt-1">
//                       <Shield className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-white">ضمان إيفا</p>
//                       <p className="text-sm text-gray-400">استبدال أو استرجاع خلال 14 يوم</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Delivery & Payment Info - Right Side */}
//             <div className="lg:w-1/5 border border-gray-700 rounded-lg p-4 h-fit bg-gray-800">
//               <h3 className="font-medium text-white mb-3">توصيل إلى الرياض</h3>
              
//               <div className="space-y-3">
//                 <div className="flex items-start gap-2">
//                   <Truck className="w-5 h-5 text-gray-400 mt-0.5" />
//                   <div>
//                     <p className="text-sm text-white">توصيل <span className="font-medium">مجاني</span></p>
//                     <p className="text-xs text-gray-400">استلام يوم الأحد، 10 يوليو - الخميس، 14 يوليو</p>
//                   </div>
//                 </div>
                
//                 <div className="text-sm text-gray-400">
//                   <p>أو استلام أسرع غدًا مقابل 15 ر.س</p>
//                 </div>
                
//                 <div className="pt-2">
//                   <p className="text-sm text-gray-400">توصيل إلى جميع أنحاء المملكة</p>
//                 </div>
//               </div>
              
//               <div className="mt-6 pt-4 border-t border-gray-700">
//                 <h3 className="font-medium text-white mb-2">طرق الدفع</h3>
//                 <div className="grid grid-cols-3 gap-2">
//                   <div className="border border-gray-600 rounded p-1 flex items-center justify-center bg-gray-700">
//                     <span className="text-xs text-gray-300">بطاقة ائتمان</span>
//                   </div>
//                   <div className="border border-gray-600 rounded p-1 flex items-center justify-center bg-gray-700">
//                     <span className="text-xs text-gray-300">الدفع عند الاستلام</span>
//                   </div>
//                   <div className="border border-gray-600 rounded p-1 flex items-center justify-center bg-gray-700">
//                     <span className="text-xs text-gray-300">تحويل بنكي</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product Tabs */}
//           <div className="mt-8">
//             {/* <ProductTabs 
//               description={product.description}
//               specifications={product.specifications || []}
//               productId={product.id}
//               averageRating={product.showReviews ? product.averageRating : undefined}
//               numberOfReviews={product.showReviews ? product.numberOfReviews : undefined}
//               showReviews={product.showReviews}
//               className="bg-gray-800 border border-gray-700 rounded-lg text-gray-300"
//             /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { Metadata } from "next";

export const metadata: Metadata = {
//   title: "EVA - إدارة الأملاك",
//   description: "خدمات إدارة شاملة للممتلكات العقارية مع التركيز على الكفاءة والجودة",
};

export default function page() {
  return <></>;
}