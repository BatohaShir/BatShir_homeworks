import create from 'zustand';
import {  useQuery } from '@tanstack/react-query'

export const useMenu = create((set) => ({
    menu: [],
    Loading: false,
    getData: (setLoading) => {
        set((state) => ({...state, Loading: true}))
        fetch("https://api.jsonbin.io/v3/qs/66adf2fbacd3cb34a86f459c")
            .then((r) => r.json())
            .then((r) => {
                set(() => ({ menu: [...r.record], Loading: false }));
            });
    }
}));

export function useMenuReactQuery() {
    return useQuery ({
        queryKey: ["menu"],
        queryFn: () => {
          return fetch("https://api.jsonbin.io/v3/qs/66ae0089e41b4d34e41b0d5d")
          .then((r) => r.json())
          .then((r) => r.record);
        }
    })
}