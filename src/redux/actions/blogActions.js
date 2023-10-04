import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

export const fetchBlogs = createAsyncThunk(
  'blogs/getAllBlogs',
  async () => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const data = await res.json();
    return data;
  }
);
export const createBlog = createAsyncThunk(
  'blogs/createNewBlog',
  async (data) => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    // api'nin oluşturdğu id'ye erişme
    const resData = await res.json();

    // todonun bilgilerinine api'nin
    // gönderdiği idyi ekleyip store'a eklemek
    // gerekir normalde ama api hep ayni id'yi verdiği için
    // kenidmiz oluştururuyoruz
    return { ...data, id: v4() };
  }
);
export const updateBlog = createAsyncThunk(
  'blogs/updateBlog',
  async (data) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${data.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(data),
      }
    );

    return data;
  }
);

export const deleteBlog = createAsyncThunk(
  'blogs/deleteBlog',
  async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });

    return id;
  }
);
