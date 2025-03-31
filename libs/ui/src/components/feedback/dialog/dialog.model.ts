import { Type } from '@angular/core';

export type RmDialogParams = TextContentParams | ComponentContentParams;

export type TextContentParams = BaseParams & {
 content: string;
}

type BaseParams = {
 title: string;
 icon?: Type<unknown>
}

export type ComponentContentParams = BaseParams & {
 content: Type<unknown>;
}