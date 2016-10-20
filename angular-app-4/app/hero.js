/**
 * Created by Administrator on 2016/10/17.
 */
var Hero = (function () {
    /**
     * 英雄模型定义
     * @param id英雄ID
     * @param name 英雄姓名
     * @param power英雄能量
     * @param alterEgo可选，第二人格
     */
    function Hero(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero;
})();
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map