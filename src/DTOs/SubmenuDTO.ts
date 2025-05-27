import type MenuButtonDTO from "./MenuButtonDTO";

export default interface SubmenuDTO {
    title: string;
    path: string;
    items: MenuButtonDTO[];
}