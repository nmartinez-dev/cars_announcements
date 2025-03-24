'use client';

import { Loader } from 'lucide-react';
import { messages } from '@/constants/messages';

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen'>
      <Loader className='h-10 w-10 animate-spin text-primary mb-2' />
      {messages.loading}
    </div>
  );
};

export default Loading;
