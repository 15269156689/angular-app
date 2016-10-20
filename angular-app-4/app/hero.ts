/**
 * Created by Administrator on 2016/10/17.
 */
export class    Hero{
    /**
     * 英雄模型定义
     * @param id英雄ID
     * @param name 英雄姓名
     * @param power英雄能量
     * @param alterEgo可选，第二人格
     */
    constructor(public id:number,public name:string,public power:string,public alterEgo?:string){

    }
}