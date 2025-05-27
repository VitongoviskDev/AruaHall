import type MenuButtonDTO from "./MenuButtonDTO";

export default interface SubmenuDTO {
    title: string;
    items: MenuButtonDTO[];
}