import type SubmenuDTO from "./SubmenuDTO";

export default interface MenuButtonDTO{
    title: string,
    path?: string,
    icon?: React.ReactNode,
    submenus?: SubmenuDTO[]
}