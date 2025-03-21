import { Type } from '@angular/core';
import { Test } from '@nestjs/testing';
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