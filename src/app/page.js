'use client';

import { useDispatch } from 'react-redux';
import Blogs from './blogs/page';
import { fetchBlogs } from '../redux/actions/blogActions';
import { useEffect } from 'react';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <main className="min-h-screen">
      <Blogs />
    </main>
  );
}
