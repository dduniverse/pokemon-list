'use client';

import { errorToastStyle } from '@/types/constants';
import { QueryCache, QueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const csrClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,         // 기본 staleTime
      retry: 0,                         // 기본 재시도 횟수
      refetchOnWindowFocus: false,      // 포커스 시 재요청 비활성화
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      const toastId = 'query-error'; // 고유 ID 설정

      if (error instanceof Error) {
        // 네트워크 오류
        if (error.message.includes('Network Error')) {
          toast.error('네트워크 연결을 확인해주세요.', {
            id: toastId, // 동일한 ID를 가진 토스트는 한 번만 표시됨
            style: errorToastStyle, // 에러 스타일 적용
            iconTheme: {
              primary: '#fff',
              secondary: '#ff4d4f',
            },
          });
        } else {
          // 기타 에러 메시지
          toast.error(error.message, {
            id: toastId,
            style: errorToastStyle,
            iconTheme: {
              primary: '#fff',
              secondary: '#ff4d4f',
            },
          });
        }
      } else {
        toast.error('알 수 없는 에러가 발생했습니다.', {
          id: toastId,
        });
      }
    },
  }),
});