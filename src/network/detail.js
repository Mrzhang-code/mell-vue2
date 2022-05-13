import { request } from "./index";

export function getGoodsDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() {
	return request({
		url: '/recommend'
	})
}

export class Goods {
    constructor( itemInfo, columns, service ) {
        this.desc = itemInfo.desc;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.discountBgColor = itemInfo.discountBgColor;
        this.title = itemInfo.title;
        this.realPrice = itemInfo.lowNowPrice;
        this.columns = columns;
        this.service = service;
    }
}