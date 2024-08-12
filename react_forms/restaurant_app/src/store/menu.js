import create from 'zustand';
import {  useQuery } from '@tanstack/react-query'

export const useMenu = create((set) => ({
    menu: [],
    Loading: false,
    getData: (setLoading) => {
        set((state) => ({...state, Loading: true}))
        fetch("https://api.jsonbin.io/v3/qs/66af6502e41b4d34e41b7fe8")
            .then((r) => r.json())
            .then((r) => {
                set(() => ({ menu: [...r.record], Loading: false }));
            });
    }
}));

export function useMenuReactQuery() {
    const query = useQuery({
        queryKey: ["menu"],
        queryFn: () => {
          return fetch("https://api.jsonbin.io/v3/qs/66ba07d1e41b4d34e41f4651")
          .then((r) => r.json())
          .then((r) => r.record);
        }
    });
    return query;
}