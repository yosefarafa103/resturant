export type Order = {
    title: string;
    date: Date;
    isCanceled: boolean;
    isCompleted: boolean;
    price: number;
    orderId: string
}
export const orderList: Order[] = [{
    date: new Date("2025 10 4"),
    price: 20,
    isCanceled: false,
    isCompleted: true,
    title: "Order 1",
    orderId: 'asdasdasdas'
},
{
    date: new Date("2022 3 1"),
    price: 1040,
    isCanceled: true,
    isCompleted: false,
    title: "Order 2",
    orderId: 'asdasdasd12125'

}];