/**
 * Created by Administrator on 2016/10/18.
 */
let loggerValue={
    logs:['Hello','World'],
    log:(msg)=>{
        console.warn(' From values：'+msg);
    },
    hello:()=>{
        console.log('just  say hello!');
    }
}

export  {loggerValue};