function Err(type,message){
    this.type=type;//type of error
    this.message=message;//message
    return this;
}
function testConfig(config,initial){
    var res={};//create variable of returning
    for(var i in initial){//enum
        if(config[i]!==undefined){//if defined
            res[i]=config[i];//get it
        }else{//if not
            if(initial[i][1]===false){
                res[i]=initial[i][0];//get initial value
            }else{
                console.error("%cin function testConfig:required argument config.%c%s%c not found in config","color:red","color:orange",i,"color:red");
                //log error message
                res[i]=initial[i][0];//disturb
                throw(new Err("ReferenceError","required arg not found."));//throw error
            }
        }
    }
    return res;//return value
}
function gRaPh(){
    this.config=function(config){
        var val=testConfig(config,this.patterns["config"]);
        this.element=document.getElementById(val.element);
        //this.contextType=val.contextType
        this.height=val.height;
        this.width=val.width;
        return this;
    }
    this.updateConfig=function(){
        this.ctx=this.element.getContext("2d");
        //this.ctx=this.element.getContext(this.contextType);
        this.element.height=this.height;
        this.element.width=this.width;
        return this;
    }
    this.patterns={
        "config":{
            "element":["grapher",false],
            "height":[1000,false],
            "width":[700,false]
            //,"contextType":["2d",false]
        }
    }
    this.ev=function(str){
        eval(str);
        return this;
    }
    return this;
}
var grapher=new gRaPh();
