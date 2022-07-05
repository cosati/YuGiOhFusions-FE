import { Card } from "./cards";

export interface Fusion {
    firstCard: Card,
    secondCard: Card,
    monster: Card,
    nextFusions: Fusion[];
}