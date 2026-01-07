"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

// Types
export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: 
    | 'New Phones' 
    | 'Refurbished Phones' 
    | '2nd Hand Phones' 
    | 'Tablets' 
    | 'Cables' 
    | 'Chargers' 
    | 'Powerbanks' 
    | 'Earbuds' 
    | 'Adapters' 
    | 'Speakers' 
    | 'Cases' 
    | 'Other';
  price: number;
  image: string;
  description: string;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

interface DataContextType {
  services: Service[];
  products: Product[];
  reviews: Review[];
  addService: (service: Service) => void;
  updateService: (service: Service) => void;
  deleteService: (id: string) => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  addReview: (review: Omit<Review, 'id' | 'date'>) => Promise<boolean>;
  deleteReview: (id: string) => Promise<boolean>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [services, setServices] = useState<Service[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, productsRes, reviewsRes] = await Promise.all([
          fetch('/api/services'),
          fetch('/api/products'),
          fetch('/api/reviews')
        ]);

        if (servicesRes.ok) {
          const servicesData = await servicesRes.json();
          setServices(servicesData.map((s: any) => ({ ...s, id: s._id })));
        }

        if (productsRes.ok) {
          const productsData = await productsRes.json();
          setProducts(productsData.map((p: any) => ({ ...p, id: p._id })));
        } else {
          console.error('DataContext: Failed to fetch products');
        }

        if (reviewsRes.ok) {
          const reviewsData = await reviewsRes.json();
          setReviews(reviewsData.map((r: any) => ({ ...r, id: r._id })));
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const addService = async (service: Service) => {
    try {
      // Remove id if it's a placeholder (e.g. timestamp from frontend)
      // or just send the rest. API will generate _id.
      const { id, ...serviceData } = service;
      const res = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serviceData),
      });
      if (res.ok) {
        const newService = await res.json();
        setServices(prev => [...prev, { ...newService, id: newService._id }]);
      }
    } catch (error) {
      console.error('Failed to add service:', error);
    }
  };

  const updateService = async (updatedService: Service) => {
    try {
      const { id, ...serviceData } = updatedService;
      const res = await fetch(`/api/services/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serviceData),
      });
      if (res.ok) {
        const savedService = await res.json();
        setServices(prev => prev.map(s => s.id === id ? { ...savedService, id: savedService._id } : s));
      }
    } catch (error) {
      console.error('Failed to update service:', error);
    }
  };

  const deleteService = async (id: string) => {
    try {
      const res = await fetch(`/api/services/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setServices(prev => prev.filter(s => s.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete service:', error);
    }
  };

  const addProduct = async (product: Product) => {
    try {
      const { id, ...productData } = product;
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
      if (res.ok) {
        const newProduct = await res.json();
        setProducts(prev => [...prev, { ...newProduct, id: newProduct._id }]);
      }
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };

  const updateProduct = async (updatedProduct: Product) => {
    try {
      const { id, ...productData } = updatedProduct;
      const res = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
      if (res.ok) {
        const savedProduct = await res.json();
        setProducts(prev => prev.map(p => p.id === id ? { ...savedProduct, id: savedProduct._id } : p));
      }
    } catch (error) {
      console.error('Failed to update product:', error);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setProducts(prev => prev.filter(p => p.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete product:', error);
    }
  };

  const addReview = async (review: Omit<Review, 'id' | 'date'>) => {
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
      });
      if (res.ok) {
        const newReview = await res.json();
        setReviews(prev => [{ ...newReview, id: newReview._id }, ...prev]);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to add review:', error);
      return false;
    }
  };

  const deleteReview = async (id: string) => {
    try {
      const res = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setReviews(prev => prev.filter(r => r.id !== id));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to delete review:', error);
      return false;
    }
  };

  return (
    <DataContext.Provider value={{
      services,
      products,
      reviews,
      addService,
      updateService,
      deleteService,
      addProduct,
      updateProduct,
      deleteProduct,
      addReview,
      deleteReview
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
