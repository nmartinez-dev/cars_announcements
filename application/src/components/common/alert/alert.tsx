'use client';

import { toast } from 'sonner';
import { messages } from '@/constants/messages';

const alert = (message: string) =>
  toast.custom(() => (
    <div className='flex items-center bg-red-500 text-white p-5 rounded-lg shadow-lg'>
      {message}
    </div>
  ));

export const alertDefault = () => alert(messages.error.default);
export const alertList = () => alert(messages.error.list);
