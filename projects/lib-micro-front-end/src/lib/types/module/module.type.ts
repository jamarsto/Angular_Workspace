import { MenuItem } from "../menu-item/menu-item.type";

export type Module = { title: string, name: string, prefix: string, items: MenuItem[], guards?: any[], roles?: string[] }
