// import {Task} from './task'

export class UndoneTask  {
    private readonly _id: number;
    private readonly _title: string;

    public get id(): number {
        return this._id;
    }

    public get title(): string {
        return this._title;
    }

    private constructor(
        id: number,
        title:string,
    ){
        this._id = id;
        this._title = title;
    }
}