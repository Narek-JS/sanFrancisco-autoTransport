import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "..";

export type BannreIndexType = '0' | '1' | '2' | '3';

interface IState {
    isBanner: boolean,
    bannerIndex: BannreIndexType;
};

const initialState: IState = {
    isBanner: false,
    bannerIndex: '0'
};

export const bannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        toogleIsBanner: (state, actions: PayloadAction<boolean>) => {
            state.isBanner = actions.payload;
        },
        changeBannerIndex: (state, actions: PayloadAction<BannreIndexType>) => {
            state.bannerIndex = actions.payload;
        }
    },
})

export const { actions: { toogleIsBanner, changeBannerIndex } } = bannerSlice;

export const selectBannerStatus = (state: RootState) => state.banner.isBanner;
export const selectBannerIndex = (state: RootState) => state.banner.bannerIndex;