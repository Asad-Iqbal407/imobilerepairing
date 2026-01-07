'use client';

import { useState, useEffect } from 'react';
import { useData } from '@/context/DataContext';

export default function ManageReviews() {
  const { reviews, deleteReview } = useData();
  const [loading, setLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this review?')) {
      await deleteReview(id);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${star <= rating ? 'text-amber-400 fill-current' : 'text-slate-200'}`}
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          </svg>
        ))}
      </div>
    );
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Manage Reviews</h1>
        <p className="text-slate-500 mt-1">Monitor and manage customer feedback for your services.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Total Reviews</p>
          <h3 className="text-3xl font-bold text-slate-900">{reviews.length}</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Average Rating</p>
          <h3 className="text-3xl font-bold text-slate-900">
            {reviews.length > 0 
              ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
              : '0.0'
            } / 5.0
          </h3>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Customer</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Rating</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Comment</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <tr key={review.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-bold text-xs">
                          {review.user.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-bold text-slate-900">{review.user}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {renderStars(review.rating)}
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-slate-500 text-sm line-clamp-2 max-w-md">{review.comment}</p>
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-sm">
                      {new Date(review.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDelete(review.id)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete Review"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-4xl">💬</span>
                      <h3 className="text-lg font-bold text-slate-900">No reviews found</h3>
                      <p className="text-slate-500">Customer feedback will appear here.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
