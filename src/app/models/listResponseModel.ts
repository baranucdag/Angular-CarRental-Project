import { ResponseModel } from "./ResponseModel";

export interface ListResponsModel<T> extends ResponseModel{
    data:T[];
}